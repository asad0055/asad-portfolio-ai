<script setup lang="ts">
import { portfolio } from '../../data/portfolio'
import AICareerAssistant from '../ai/AICareerAssistant.vue'
import ContactSection from '../ai/ContactSection.vue'
import FooterSection from '../layout/FooterSection.vue'
import Navbar from './Navbar.vue'
import { nextTick, ref } from 'vue'

const skillGroups = [
  { title: 'Frontend', skills: portfolio.skills.frontend },
  { title: 'State Management', skills: portfolio.skills.stateManagement },
  { title: 'Backend & APIs', skills: portfolio.skills.backend },
  { title: 'CMS & Platforms', skills: portfolio.skills.platforms },
  { title: 'Database', skills: portfolio.skills.database },
  { title: 'Development & DevOps', skills: portfolio.skills.devOps },
  { title: 'Collaboration', skills: portfolio.skills.collaboration },
]

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
  <div class="bg-white text-slate-900">
        <Navbar />
      <!-- HERO -->
      <section
        id="top"
        class="relative min-h-[800px] overflow-hidden
              bg-cover bg-center bg-no-repeat
              pt-[120px]"
        style="background-image: url('/hero-background.png')"
      >
       <div
          class="site-container site-content relative grid min-h-[800px]
                grid-cols-1 lg:grid-cols-[52%_13%_35%]"
        >

          <!-- LEFT: PROFILE -->
          <div class="relative z-20 flex items-center">
            <div class="max-w-[650px]">

              <p class="mb-5 text-xl text-slate-500">
                Hello, I'm
              </p>

              <h1
                class="text-5xl font-bold tracking-tight text-[#0c1830]
                      lg:text-6xl xl:text-7xl"
              >
                {{ portfolio.profile.name }}
              </h1>

              <div class="mt-4 flex flex-wrap items-center gap-2">
                <span class="text-2xl font-bold text-[#0c1830] lg:text-3xl">
                  {{ portfolio.profile.title }}
                </span>
              </div>

              <p class="mt-10 max-w-[590px] text-lg leading-8 text-slate-600">
                Software Engineer with 7+ years of professional experience
                building web applications, with a strong focus on frontend
                development using Vue.js, TypeScript and JavaScript.
              </p>

              <!-- Location -->
              <div class="mt-7 flex items-center gap-2 text-slate-500">
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
              <div class="mt-8 flex flex-wrap gap-4">

                <a
                  :href="portfolio.profile.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex h-14 items-center justify-center rounded-xl
                        bg-[#0c1a31] px-6 font-semibold text-white
                        transition hover:bg-[#172a48]"
                >
                  LinkedIn
                </a>

                <a
                  :href="`mailto:${portfolio.profile.email}`"
                  class="inline-flex h-14 items-center justify-center rounded-xl
                        border border-slate-300 bg-white px-6 font-semibold
                        text-slate-900 transition hover:bg-slate-50"
                >
                  Contact Me
                </a>

                <button
                  type="button"
                  class="inline-flex h-14 items-center justify-center rounded-xl
                        border border-blue-400 bg-blue-50 px-6 font-semibold
                        text-blue-700 transition hover:bg-blue-100"
                  @click="handleAskAI"
                >
                  Ask My AI
                </button>

              </div>

              <!-- Tech -->
              <div class="mt-14 flex flex-wrap gap-8 text-sm text-slate-600">

                <div class="text-center">
                  <div class="text-2xl font-bold text-emerald-600">V</div>
                  <span>Vue.js</span>
                </div>

                <div class="text-center">
                  <div class="text-2xl font-bold text-blue-600">TS</div>
                  <span>TypeScript</span>
                </div>

                <div class="text-center">
                  <div class="text-2xl font-bold text-yellow-500">JS</div>
                  <span>JavaScript</span>
                </div>

                <div class="text-center">
                  <div class="text-2xl font-bold text-cyan-500">≋</div>
                  <span>Tailwind CSS</span>
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
              AI Career Assistant
            </p>

            <h2 class="text-3xl font-bold text-slate-900">
              Ask about my experience
            </h2>

            <p class="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
              Ask about my skills, experience, projects, or technical background.
            </p>
          </div>

          <AICareerAssistant ref="mobileAIRef" />

        </div>
      </section>

    <!-- EXPERIENCE -->
    <section id="experience" class="border-t border-slate-200 px-6 py-24">
      <div class="mx-auto site-content site-container">

        <p class="text-sm font-semibold uppercase tracking-widest text-slate-500">
          Career
        </p>

        <h2 class="mt-2 text-3xl font-bold md:text-4xl">
          Professional Experience
        </h2>

        <div class="mt-12 space-y-10">
          <article
            v-for="job in portfolio.experience"
            :key="`${job.company}-${job.role}`"
          >
            <div
              class="flex flex-col justify-between gap-2 md:flex-row md:items-start"
            >
              <div>
                <h3 class="text-xl font-semibold">
                  {{ job.role }}
                </h3>

                <p class="mt-1 text-slate-600">
                  {{ job.company }} · {{ job.location }}
                </p>
              </div>

              <p class="text-sm text-slate-500">
                {{ job.period }}
              </p>
            </div>

            <p class="mt-4 leading-7 text-slate-600">
              {{ job.description }}
            </p>
          </article>
        </div>

      </div>
    </section>


    <!-- FEATURED PROJECT -->
    <section id="projects" class="bg-slate-50 px-6 py-24">
      <div class="mx-auto site-content site-container">

        <p class="text-sm font-semibold uppercase tracking-widest text-slate-500">
          Featured Work
        </p>

        <h2 class="mt-2 text-3xl font-bold md:text-4xl">
          Project
        </h2>

        <div
          v-for="project in portfolio.projects"
          :key="project.name"
          class="mt-10 rounded-2xl border border-slate-200 bg-white p-8"
        >
          <h3 class="text-2xl font-semibold">
            {{ project.name }}
          </h3>

          <p class="mt-2 text-sm text-slate-500">
            {{ project.location }} · {{ project.duration }}
          </p>

          <p class="mt-5 leading-7 text-slate-600">
            {{ project.description }}
          </p>

          <div class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="technology in project.technologies"
              :key="technology"
              class="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
            >
              {{ technology }}
            </span>
          </div>
        </div>

      </div>
    </section>


    <!-- SKILLS -->
    <section id="skills" class="px-6 py-24">
      <div class="mx-auto site-content site-container">

        <p class="text-sm font-semibold uppercase tracking-widest text-slate-500">
          Technologies
        </p>

        <h2 class="mt-2 text-3xl font-bold md:text-4xl">
          Technical Skills
        </h2>

        <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <div
            v-for="group in skillGroups"
            :key="group.title"
          >
            <h3 class="font-semibold">
              {{ group.title }}
            </h3>

            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="skill in group.skills"
                :key="skill"
                class="rounded-md bg-slate-100 px-3 py-2 text-sm text-slate-700"
              >
                {{ skill }}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>


    <!-- EDUCATION & CERTIFICATIONS -->
    <section id="education" class="bg-slate-50 px-6 py-24">
      <div class="mx-auto site-content site-container grid gap-16 md:grid-cols-2">

        <div>
          <p class="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Background
          </p>

          <h2 class="mt-2 text-3xl font-bold">
            Education
          </h2>

          <div
            v-for="education in portfolio.education"
            :key="education.degree"
            class="mt-8"
          >
            <h3 class="font-semibold">
              {{ education.degree }}
            </h3>

            <p class="mt-2 text-slate-600">
              {{ education.institution }}
            </p>

            <p class="mt-1 text-sm text-slate-500">
              {{ education.period }}
            </p>
          </div>
        </div>


        <div>
          <p class="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Learning
          </p>

          <h2 class="mt-2 text-3xl font-bold">
            Certifications
          </h2>

          <div class="mt-8 space-y-6">
            <div
              v-for="certificate in portfolio.certifications"
              :key="certificate.name"
            >
              <h3 class="font-semibold">
                {{ certificate.name }}
              </h3>

              <p class="mt-2 text-slate-600">
                {{ certificate.organization }}
              </p>

              <p class="mt-1 text-sm text-slate-500">
                {{ certificate.year }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- AI PLACEHOLDER -->
    <section id="contact">
      <ContactSection />
    </section>


    <!-- FOOTER -->
    <FooterSection />

  </div>
</template>