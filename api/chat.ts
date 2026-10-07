import type { VercelRequest, VercelResponse } from '@vercel/node'
import { askCareerAssistant } from '../server/ai.js'
import { chatRateLimit } from '../server/rateLimit.js'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed.',
    })
  }

  try {
    const { message, history = [] } = req.body ?? {}

    if (typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({
        error: 'A message is required.',
      })
    }

    if (message.length > 1500) {
      return res.status(400).json({
        error:
          'Message is too long. Please keep your question under 1,500 characters.',
      })
    }

    // Identify the visitor by IP address
    const forwardedFor = req.headers['x-forwarded-for']

    const ip =
      typeof forwardedFor === 'string'
        ? forwardedFor.split(',')[0].trim()
        : req.socket.remoteAddress || 'unknown'

    // Check rate limit before calling OpenAI
const { success, remaining, reset } = await chatRateLimit.limit(ip)

    res.setHeader('X-RateLimit-Remaining', remaining.toString())
    res.setHeader('X-RateLimit-Reset', reset.toString())

    if (!success) {
      return res.status(429).json({
        error:
          'Too many questions in a short time. Please wait a moment and try again.',
      })
    }

    const answer = await askCareerAssistant(message, history)

    return res.status(200).json({
      answer,
    })
  } catch (error) {
    console.error('AI request failed:', error)

    return res.status(500).json({
      error: 'Unable to get an AI response.',
    })
  }
}