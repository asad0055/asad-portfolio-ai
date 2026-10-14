<script setup lang="ts">
import { ref } from 'vue'
import { portfolio } from '../../data/portfolio'
import AICareerAssistant from '../ai/AICareerAssistant.vue'
import { useI18n } from 'vue-i18n'

const heroTech = [
  { short: 'V', label: 'Vue.js', color: 'text-emerald-600' },
  { short: 'R', label: 'React', color: 'text-cyan-500' },
  { short: 'API', label: 'REST API', color: 'text-blue-600' },
  { short: 'GH', label: 'GitHub', color: 'text-slate-800' },
  { short: 'AI', label: 'AI', color: 'text-violet-600' },
]

const { t, locale } = useI18n({ useScope: 'global' })
const desktopAIRef = ref<{ focusInput: () => void } | null>(null)
const mobileAIRef = ref<{ focusInput: () => void } | null>(null)

const handleAskAI = () => {
  if (window.innerWidth < 1024) {
    document
      .getElementById('ai-assistant')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

    setTimeout(() => {
      mobileAIRef.value?.focusInput()
    }, 700)

    return
  }

  desktopAIRef.value?.focusInput()
}
</script>
<template>
    <section
            id="top"
            class="relative min-h-[800px] overflow-hidden
                bg-cover bg-center bg-no-repeat
                md:pt-[120px] pt-[140px] pb-10 lg:pb-0"
            style="background-image: url('/hero-background.png')"
        >
        <div
            class="site-container site-content relative grid md:min-h-[800px]
                    grid-cols-1 lg:grid-cols-[52%_13%_35%]"
            >
            <!-- MOBILE AVATAR -->
            <div class="flex justify-center lg:hidden">
                <img
                src="/avatar.png"
                alt="Asad Ur Rehman avatar"
                class="h-[260px] w-auto object-contain sm:h-[320px]"
                />
            </div>
            <!-- LEFT: PROFILE -->
            <div class="relative z-20 flex items-center">
                <div class="max-w-[650px] mx-auto lg:mx-0">

                <p class="md:mb-5 text-xl text-center lg:text-left text-slate-500">
                    {{ t('hero.greeting') }}
                </p>

                <h1
                    class="text-4xl font-bold text-center lg:text-left tracking-tight text-[#0c1830]
                        lg:text-6xl xl:text-7xl"
                >
                    {{ portfolio.profile.name }}
                </h1>

                <div class="mt-1 flex flex-wrap items-center justify-center gap-2 md:mt-4 lg:justify-start">
                    <span class="text-center text-2xl font-bold text-[#0c1830] lg:text-left lg:text-3xl">
                    {{ t('hero.title') }}
                    </span>
                </div>

                <p class="md:mt-10 mt-4 max-w-[590px] text-center lg:text-left text-lg leading-8 text-slate-600">
                    {{ t('hero.summary') }}
                </p>

                <!-- Location -->
                <div class="mt-7 flex items-center justify-center gap-2 text-slate-500 lg:justify-start">
                    <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="h-5 w-5"
                    >
                    <path
                        d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
                    />
                    <circle cx="12" cy="10" r="3" />
                    </svg>

                    {{ portfolio.profile.location }}
                </div>

                <!-- Buttons -->
                <div class="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4">

                    <!-- LinkedIn -->
                    <a
                    href="https://www.linkedin.com/in/asad-rehman-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex md:h-14 h-10 w-full items-center justify-center gap-2.5
                            rounded-xl border border-[#071a33] bg-[#071a33]
                            px-4 font-semibold text-white
                            shadow-[0_6px_18px_rgba(7,26,51,0.18)]
                            transition-all duration-200
                            hover:-translate-y-0.5 hover:bg-[#0d294d]"
                    >
                    <svg
                        class="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.1 20.45H3.54V9H7.1v11.45z"/>
                    </svg>

                    LinkedIn
                    </a>

                    <!-- Contact -->
                    <a
                    href="#contact"
                    class="inline-flex md:h-14 h-10 w-full items-center justify-center gap-2.5
                            rounded-xl border border-[#071a33] bg-white
                            px-4 font-semibold text-[#071a33]
                            shadow-[0_6px_18px_rgba(7,26,51,0.12)]
                            transition-all duration-200
                            hover:-translate-y-0.5 hover:bg-slate-50"
                    >
                    <svg
                        class="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        aria-hidden="true"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 17.25V6.75Z"
                        />
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m3.75 6 7.05 5.29a2 2 0 0 0 2.4 0L20.25 6"
                        />
                    </svg>

                    {{ t('hero.contact') }}
                    </a>

                    <!-- Ask My AI -->
                    <button
                    type="button"
                    @click="handleAskAI"
                    aria-label="Ask AI button"
                    class="col-span-2 lg:col-span-1 inline-flex md:h-14 h-10 w-full items-center
                            justify-center gap-2.5 rounded-xl
                            border border-blue-500 bg-blue-50
                            px-6 font-semibold text-blue-700
                            shadow-[0_6px_20px_rgba(59,130,246,0.16)]
                            transition-all duration-200
                            hover:-translate-y-0.5 hover:bg-blue-100
                            lg:w-auto"
                    >
                    <span class="text-lg">✦</span>
                    {{ t('hero.askAI') }}
                    </button>

                </div>

                <!-- Download CV -->
                <div class="mt-5 flex justify-center lg:justify-start">
                <a
                    :href="locale === 'no'
                    ? '/AsadurRehman_CV_NO.pdf'
                    : '/AsadurRehman_CV_EN.pdf'"
                    :download="locale === 'no'
                    ? 'AsadurRehman_CV_NO.pdf'
                    : 'AsadurRehman_CV_EN.pdf'"
                    class="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                        >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <path d="m7 10 5 5 5-5" />
                        <path d="M12 15V3" />
                    </svg>
                    {{ t('hero.downloadCV') }}
                </a>
                </div>

                <!-- Tech -->
                <div class="mt-14 hidden lg:flex flex-wrap gap-4 text-sm text-slate-600 md:gap-8">
                    <div
                    v-for="tech in heroTech"
                    :key="tech.label"
                    class="text-center"
                    >
                    <div
                        class="text-2xl font-bold"
                        :class="tech.color"
                    >
                        {{ tech.short }}
                    </div>

                    <span class="[text-shadow:0_1px_8px_rgba(255,255,255,0.5)]">
                        {{ tech.label }}
                    </span>
                    </div>
                </div>

                </div>
            </div>


            <!-- CENTER: AVATAR -->
            <div class="relative z-10 hidden lg:block">

                <img
                src="/avatar.png"
                alt="Asad Ur Rehman avatar"
                class="absolute bottom-0 left-1/2
                        max-h-[685px] w-auto max-w-none
                        -translate-x-1/2 object-contain"
                />

            </div>


            <!-- RIGHT: AI -->
            <div
                id="ai-assistant-desktop"
                class="relative z-20 hidden items-center pl-6 lg:flex"
            >
                <div class="w-full">
                <AICareerAssistant ref="desktopAIRef" />
                </div>
            </div>

            </div>
        </section>
        <!-- Mobile: AI -->
      <section
        id="ai-assistant"
        class="border-t border-blue-100 bg-slate-50 py-16 lg:hidden"
      >
        <div class="site-container site-content">

          <div class="mb-8 text-center">
            <p class="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              {{ t('hero.aiLabel') }}
            </p>

            <h2 class="text-3xl font-bold text-slate-900">
              {{ t('hero.aiHeading') }}
            </h2>

            <p class="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
              {{ t('hero.aiDescription') }}
            </p>
          </div>

          <AICareerAssistant ref="mobileAIRef" />

        </div>
      </section>
</template>