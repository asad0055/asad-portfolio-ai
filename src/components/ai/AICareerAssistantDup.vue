<script setup lang="ts">
import { nextTick, ref } from 'vue'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

const suggestedQuestions = [
  "Summarize Asad's experience",
  'What are his strongest frontend skills?',
  'Tell me about the Fish Farm project',
  'What is Asad working on at Fyr Technology?',
]

const userInput = ref('')
const isLoading = ref(false);
const messagesContainer = ref<HTMLElement | null>(null);
const inputRef = ref<HTMLInputElement | null>(null);

const messages = ref<ChatMessage[]>([
  {
    role: 'assistant',
    content:
      "Hi! I'm Asad's AI Career Assistant. You can ask me about his professional experience, skills, projects, education or certifications.",
  },
])

const selectQuestion = async (question: string) => {
  if (isLoading.value) return

  userInput.value = question
  await sendMessage()
}

const scrollToBottom = async () => {
  await nextTick()

  if (messagesContainer.value) {
    messagesContainer.value.scrollTo({
      top: messagesContainer.value.scrollHeight,
      behavior: 'smooth',
    })
  }
}

const sendMessage = async () => {
  const question = userInput.value.trim()

  if (!question || isLoading.value) return

  // Capture recent conversation before adding the new question.
  const history = messages.value
    .slice(1) // exclude the initial welcome message
    .slice(-6)
    .map((message) => ({
      role: message.role,
      content: message.content,
    }))

  messages.value.push({
    role: 'user',
    content: question,
  })

  userInput.value = ''
  isLoading.value = true

  await scrollToBottom()

  try {
    const response = await fetch('http://localhost:3001/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: question,
        history,
      }),
    })

    if (!response.ok) {
    const errorData = await response.json().catch(() => null)

    throw new Error(
        errorData?.error || 'The AI assistant could not process your request.'
    )
    }

    const data = await response.json()

    messages.value.push({
      role: 'assistant',
      content: data.answer,
    })
    await scrollToBottom()
    } catch (error) {
    console.error('Chat request failed:', error)

    let errorMessage =
        'Something went wrong while contacting the AI assistant. Please try again.'

    if (error instanceof TypeError) {
        errorMessage =
        'The AI assistant is currently unavailable. Please try again shortly.'
    }

    messages.value.push({
        role: 'assistant',
        content: errorMessage,
    })

    await scrollToBottom()
    } finally {
    isLoading.value = false

    await nextTick()
    inputRef.value?.focus()
    }
}
</script>

<template>
  <section
    id="ai-assistant"
    class="bg-slate-900 px-6 py-24 text-white"
  >
    <div class="mx-auto max-w-6xl">
      <div class="grid grid-cols-1 gap-12 md:grid-cols-2">

        <!-- Introduction -->
        <div>
          <p
            class="text-sm font-semibold uppercase tracking-widest text-slate-400"
          >
            AI Career Assistant
          </p>

          <h2 class="mt-3 text-3xl font-bold md:text-4xl">
            Ask about my experience
          </h2>

          <p class="mt-5 max-w-xl leading-7 text-slate-300">
            Ask my AI Career Assistant about my professional experience,
            technical skills, projects, education and career background.
          </p>

          <p class="mt-4 max-w-xl text-sm leading-6 text-slate-400">
            The assistant answers using information from my professional
            knowledge base and is designed not to invent information that
            isn't available.
          </p>

          <!-- Suggested questions -->
          <div class="mt-8">
            <p class="mb-3 text-sm font-medium text-slate-300">
              Try asking:
            </p>

            <div class="flex flex-wrap gap-2">
              <button
                v-for="question in suggestedQuestions"
                :key="question"
                @click="selectQuestion(question)"
                :disabled="isLoading"
                class="rounded-full border border-slate-700 px-4 py-2 text-left text-sm disabled:cursor-not-allowed disabled:opacity-50 text-slate-300 transition hover:border-slate-500 hover:bg-slate-800"
              >
                {{ question }}
              </button>
            </div>
          </div>
        </div>

        <!-- Chat window -->
        <div
          class="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-xl"
        >
          <!-- Header -->
          <div class="border-b border-slate-700 px-5 py-4">
            <div class="flex items-center gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-slate-900"
              >
                AI
              </div>

              <div>
                <p class="font-semibold">
                  Asad's AI Career Assistant
                </p>

                <p class="text-xs text-slate-400">
                  Professional portfolio assistant
                </p>
              </div>
            </div>
          </div>

          <!-- Messages -->
          <div
            ref="messagesContainer" 
            class="max-h-96 space-y-4 overflow-y-auto p-5">
            <div
              v-for="(message, index) in messages"
              :key="index"
              class="animate-[fadeIn_0.2s_ease-out]"
              :class="[
                'flex',
                message.role === 'user'
                  ? 'justify-end'
                  : 'justify-start',
              ]"
            >
              <div
                :class="[
                  'max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6',
                  message.role === 'user'
                    ? 'bg-white text-slate-900'
                    : 'bg-slate-700 text-slate-100',
                ]"
              >
                {{ message.content }}
              </div>
            </div>
            <div
              v-if="isLoading"
              class="flex justify-start"
            >
              <div
                class="rounded-2xl bg-slate-800 px-4 py-3"
                aria-label="AI assistant is thinking"
              >
                <div class="flex items-center gap-1">
                  <span
                    class="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                    style="animation-delay: 0ms"
                  ></span>
                  <span
                    class="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                    style="animation-delay: 150ms"
                  ></span>
                  <span
                    class="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                    style="animation-delay: 300ms"
                  ></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Input -->
          <form
            @submit.prevent="sendMessage"
            class="border-t border-slate-700 p-4"
          >
            <div class="flex gap-3">
              <input
                ref="inputRef"
                v-model="userInput"
                :disabled="isLoading"
                type="text"
                placeholder="Ask something about Asad..."
                class="min-w-0 flex-1 rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-slate-400"
              />

              <button
                type="submit"
                :disabled="isLoading || !userInput.trim()"
                class="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </section>
</template>