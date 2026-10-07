<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { marked } from 'marked'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

const userInput = ref('')
const isLoading = ref(false);
const messagesContainer = ref<HTMLElement | null>(null);
const inputRef = ref<HTMLInputElement | null>(null);
  const isHighlighted = ref(false);

const messages = ref<ChatMessage[]>([
  {
    role: 'assistant',
    content:
      "Hi! I'm Asad's AI Career Assistant. You can ask me about his professional experience, skills, projects, education or certifications.",
  },
])

const scrollToBottom = async () => {
  await nextTick()

  if (messagesContainer.value) {
    messagesContainer.value.scrollTo({
      top: messagesContainer.value.scrollHeight,
      behavior: 'smooth',
    })
  }
}

const focusInput = async () => {
  await nextTick()

  inputRef.value?.focus()
  isHighlighted.value = true

  setTimeout(() => {
    isHighlighted.value = false
  }, 1400)
}

defineExpose({
  focusInput,
})

const suggestedQuestions = [
  {
    label: 'What experience does Asad have with Vue.js?',
    icon: 'code',
  },
  {
    label: "Tell me about Asad's recent projects.",
    icon: 'folder',
  },
  {
    label: "What are Asad's key technical skills?",
    icon: 'user',
  },
]

const selectQuestion = async (question: string) => {
  userInput.value = question
  await nextTick()
  inputRef.value?.focus()
}

const renderMarkdown = (content: string) => {
  return marked.parse(content)
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
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: question,
          history,
        }),
      })

      const data = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(
          data?.error || 'The AI assistant could not process your request.',
        )
      }

      messages.value.push({
        role: 'assistant',
        content: data.answer,
      })

      await scrollToBottom()
    } catch (error) {
      console.error('Chat request failed:', error)

      let errorMessage =
        'Something went wrong while contacting the AI assistant. Please try again.'

      // Network error — server unavailable, connection failed, etc.
      if (error instanceof TypeError) {
        errorMessage =
          'The AI assistant is currently unavailable. Please try again shortly.'
      }
      // Error returned by our backend
      else if (error instanceof Error) {
        errorMessage = error.message
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
  <div
    class="flex h-[650px] w-full flex-col overflow-hidden rounded-[28px]
           border border-blue-400/30 bg-[#071a33]/95
           shadow-[0_20px_70px_rgba(0,119,255,0.28),0_0_30px_rgba(37,150,255,0.12)]
           backdrop-blur-xl"
  >
    <!-- Header -->
    <div
      class="flex items-center justify-between border-b border-white/10
             md:px-6 px-3 md:py-5 py-2"
    >
      <div class="flex items-center gap-4">
        <div
          class="flex h-16 w-16 shrink-0 items-center justify-center
                overflow-hidden rounded-full border-2 border-blue-400
                bg-[#608bc6] p-1
                shadow-[0_0_20px_rgba(56,189,248,0.55)]"
        >
          <img
            src="/avatar.png"
            alt="Asad Ur Rehman avatar"
            class="h-full w-full rounded-full object-cover object-top"
          />
        </div>

        <div>
          <h2 class="text-base font-bold text-white">
            Asad's AI Career Assistant
          </h2>

          <p class="mt-0.5 text-sm text-slate-400">
            AI-powered portfolio assistant
          </p>
        </div>
      </div>

      <div class="md:flex hidden items-center gap-2 text-sm text-slate-300">
        <span
          class="h-2.5 w-2.5 rounded-full bg-emerald-400
                 shadow-[0_0_10px_rgba(52,211,153,0.7)]"
        ></span>
        Online
      </div>
    </div>

    <!-- Chat content -->
    <div
      ref="messagesContainer"
      class="chat-scrollbar flex-1 overflow-y-auto md:px-6 px-3 md:py-5 py-2"
    >
      <!-- Initial state -->
      <template v-if="messages.length === 1">
        <div
          class="max-w-[92%] rounded-2xl border border-blue-400/30
                 bg-[#102b50]/80 px-5 py-4 text-sm leading-6 text-slate-100"
        >
          {{ messages[0].content }}
        </div>

        <div class="mt-6">
          <p class="mb-3 font-semibold text-white">
            Try asking:
          </p>

          <div class="space-y-2.5">
            <button
              v-for="question in suggestedQuestions"
              :key="question.label"
              type="button"
              aria-label="Suggested Questions"
              class="group flex w-full items-center gap-3 rounded-2xl
                     border border-blue-400/35 bg-[#0a203d]/70
                     px-4 py-3 text-left transition duration-200
                     hover:border-blue-400/70 hover:bg-[#102b50]"
              @click="selectQuestion(question.label)"
            >
              <!-- Icon -->
              <span
                class="flex h-9 w-9 shrink-0 items-center justify-center
                       rounded-xl bg-blue-500/10 text-blue-300"
              >
                <svg
                  v-if="question.icon === 'code'"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  class="h-5 w-5"
                >
                  <path d="m8 9-3 3 3 3" />
                  <path d="m16 9 3 3-3 3" />
                  <path d="m14 5-4 14" />
                </svg>

                <svg
                  v-else-if="question.icon === 'folder'"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  class="h-5 w-5"
                >
                  <path
                    d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
                  />
                </svg>

                <svg
                  v-else-if="question.icon === 'user'"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  class="h-5 w-5"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21a8 8 0 0 1 16 0" />
                </svg>

                <svg
                  v-else
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  class="h-5 w-5"
                >
                  <path d="m3 10 9-5 9 5-9 5Z" />
                  <path d="M7 12.5V17c3 2 7 2 10 0v-4.5" />
                </svg>
              </span>

              <span class="flex-1 text-sm text-slate-100">
                {{ question.label }}
              </span>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="h-5 w-5 text-blue-400 transition-transform
                       group-hover:translate-x-1"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </template>

      <!-- Conversation -->
      <template v-else>
        <div class="space-y-4">
          <div
            v-for="(message, index) in messages"
            :key="index"
            class="flex"
            :class="
              message.role === 'user'
                ? 'justify-end'
                : 'justify-start'
            "
          >
            <div
              class="max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6"
              :class="
                message.role === 'user'
                  ? 'rounded-br-md bg-blue-500 text-white'
                  : 'rounded-bl-md border border-blue-400/25 bg-[#102b50] text-slate-100'
              "
            >
              <div
                v-if="message.role === 'assistant'"
                class="ai-markdown"
                v-html="renderMarkdown(message.content)"
              ></div>

              <span v-else>
                {{ message.content }}
              </span>
            </div>
          </div>

          <!-- Thinking -->
          <div v-if="isLoading" class="flex justify-start">
            <div
              class="flex items-center gap-1.5 rounded-2xl rounded-bl-md
                     border border-blue-400/25 bg-[#102b50] px-5 py-4"
            >
              <span
                class="h-2 w-2 animate-bounce rounded-full bg-blue-300"
              ></span>
              <span
                class="h-2 w-2 animate-bounce rounded-full bg-blue-300
                       [animation-delay:120ms]"
              ></span>
              <span
                class="h-2 w-2 animate-bounce rounded-full bg-blue-300
                       [animation-delay:240ms]"
              ></span>
            </div>
          </div>
        </div>
      </template>
    </div>

    <!-- Input -->
    <div class="border-t border-white/10 md:px-5 px-2 md:py-4 py-2">
      <form
        class="flex items-center gap-3"
        @submit.prevent="sendMessage"
      >
        <input
          ref="inputRef"
          v-model="userInput"
          type="text"
          maxlength="1500"
          :disabled="isLoading"
          placeholder="Ask a question about Asad..."
          aria-label="Ask Asad's AI Career Assistant a question"
          class="min-w-0 flex-1 rounded-2xl border
                bg-[#081a32] px-5 py-4 text-sm text-white
                outline-none transition-all duration-300
                placeholder:text-slate-500
                disabled:cursor-not-allowed disabled:opacity-60"
          :class="
            isHighlighted
              ? 'border-blue-300 shadow-[0_0_0_3px_rgba(96,139,198,0.20),0_0_28px_rgba(59,130,246,0.55)]'
              : 'border-blue-400/40 focus:border-blue-400 focus:shadow-[0_0_18px_rgba(59,130,246,0.15)]'
          "
        />

        <button
          type="submit"
          :disabled="isLoading || !userInput.trim()"
          aria-label="Send message"
          class="flex h-13 w-13 shrink-0 items-center justify-center
                 rounded-2xl bg-blue-500 text-white
                 shadow-[0_0_22px_rgba(59,130,246,0.45)]
                 transition duration-200 hover:bg-blue-400
                 hover:shadow-[0_0_28px_rgba(59,130,246,0.65)]
                 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            class="h-5 w-5"
          >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </svg>
        </button>
      </form>

      <div class="mt-3 flex items-start gap-2 px-1 text-xs text-slate-500">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          class="mt-0.5 h-4 w-4 shrink-0 text-blue-400"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 11v5" />
          <path d="M12 8h.01" />
        </svg>

        <span>
          Answers are based on Asad's documented professional profile.
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Firefox */
.chat-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #315b8f transparent;
}

/* Chrome, Edge, Safari */
.chat-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.chat-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.chat-scrollbar::-webkit-scrollbar-thumb {
  background: #315b8f;
  border-radius: 999px;
}

.chat-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #608bc6;
}
</style>