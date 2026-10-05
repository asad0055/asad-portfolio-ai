<script setup lang="ts">
import { nextTick, ref } from 'vue'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

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
  <div
    class="w-full overflow-hidden rounded-3xl border border-slate-500/40
           bg-[#17263d]/95 shadow-2xl backdrop-blur-sm"
  >
    <!-- Header -->
    <div
      class="flex items-center justify-between border-b border-slate-600/40
             px-6 py-5"
    >
      <div class="flex items-center gap-3">

        <!-- AI circle -->
        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center
                 rounded-full bg-white font-bold text-[#0c1a31]"
        >
          AI
        </div>

        <div>
          <h3 class="font-semibold text-white">
            Asad's AI Career Assistant
          </h3>

          <p class="mt-0.5 text-xs text-slate-400">
            Professional portfolio assistant
          </p>
        </div>
      </div>

      <!-- Online -->
      <div class="hidden items-center gap-2 text-xs text-slate-300 sm:flex">
        <span class="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
        Online
      </div>
    </div>


    <!-- Messages -->
    <div
      ref="messagesContainer"
      class="h-[420px] space-y-4 overflow-y-auto px-6 py-5"
    >
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="flex animate-[fadeIn_0.2s_ease-out]"
        :class="
          message.role === 'user'
            ? 'justify-end'
            : 'justify-start'
        "
      >
        <div
          class="max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6"
          :class="
            message.role === 'user'
              ? 'bg-white text-slate-900'
              : 'bg-[#31445f] text-slate-100'
          "
        >
          {{ message.content }}
        </div>
      </div>


      <!-- Thinking -->
      <div
        v-if="isLoading"
        class="flex justify-start"
      >
        <div
          class="rounded-2xl bg-[#31445f] px-4 py-4"
          aria-label="AI assistant is thinking"
        >
          <div class="flex items-center gap-1.5">
            <span
              class="h-2 w-2 animate-bounce rounded-full bg-slate-300"
              style="animation-delay: 0ms"
            ></span>

            <span
              class="h-2 w-2 animate-bounce rounded-full bg-slate-300"
              style="animation-delay: 150ms"
            ></span>

            <span
              class="h-2 w-2 animate-bounce rounded-full bg-slate-300"
              style="animation-delay: 300ms"
            ></span>
          </div>
        </div>
      </div>
    </div>


    <!-- Input -->
    <form
      class="border-t border-slate-600/40 p-5"
      @submit.prevent="sendMessage"
    >
      <div class="flex items-center gap-3">

        <input
          ref="inputRef"
          v-model="userInput"
          type="text"
          :disabled="isLoading"
          placeholder="Ask something about Asad..."
          autocomplete="off"
          class="h-14 min-w-0 flex-1 rounded-xl border border-slate-500/70
                 bg-[#0c1830]/70 px-4 text-sm text-white outline-none
                 transition placeholder:text-slate-500
                 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20
                 disabled:cursor-not-allowed disabled:opacity-60"
        />

        <button
          type="submit"
          :disabled="isLoading || !userInput.trim()"
          class="flex h-14 w-14 shrink-0 items-center justify-center
                 rounded-xl bg-slate-100 text-[#0c1a31] transition
                 hover:bg-white
                 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Send message"
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
</template>