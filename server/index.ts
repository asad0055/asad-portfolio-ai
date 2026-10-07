import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const { askCareerAssistant } = await import('./ai.js')

const app = express()

app.use(cors())
app.use(express.json({ limit: '20kb' }))

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [] } = req.body ?? {}

    // Message must be a non-empty string
    if (typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({
        error: 'A message is required.',
      })
    }

    // Protect the AI endpoint from oversized prompts
    if (message.length > 1500) {
      return res.status(400).json({
        error:
          'Message is too long. Please keep your question under 1,500 characters.',
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
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`AI server running on http://localhost:${PORT}`)
})