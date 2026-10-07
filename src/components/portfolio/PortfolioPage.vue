<script setup lang="ts">
import { portfolio } from '../../data/portfolio'
import AICareerAssistant from '../ai/AICareerAssistant.vue'
import ContactSection from '../ai/ContactSection.vue'
import FooterSection from '../layout/FooterSection.vue'
import Navbar from './Navbar.vue'
import { ref } from 'vue'

const skillGroups = [
  { title: 'Frontend', skills: portfolio.skills.frontend },
  { title: 'State Management', skills: portfolio.skills.stateManagement },
  { title: 'Backend & APIs', skills: portfolio.skills.backend },
  { title: 'CMS & Platforms', skills: portfolio.skills.platforms },
  { title: 'Database', skills: portfolio.skills.database },
  { title: 'Development & DevOps', skills: portfolio.skills.devOps },
  { title: 'Engineering', skills: portfolio.skills.engineering },
]

const heroTech = [
  { short: 'V', label: 'Vue.js', color: 'text-emerald-600' },
  { short: 'R', label: 'React', color: 'text-cyan-500' },
  { short: 'API', label: 'REST API', color: 'text-blue-600' },
  { short: 'GH', label: 'GitHub', color: 'text-slate-800' },
  { short: 'AI', label: 'AI', color: 'text-violet-600' },
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
                Hello, I'm
              </p>

              <h1
                class="text-4xl font-bold text-center lg:text-left tracking-tight text-[#0c1830]
                      lg:text-6xl xl:text-7xl"
              >
                {{ portfolio.profile.name }}
              </h1>

              <div class="mt-1 flex flex-wrap items-center justify-center gap-2 md:mt-4 lg:justify-start">
                <span class="text-center text-2xl font-bold text-[#0c1830] lg:text-left lg:text-3xl">
                  {{ portfolio.profile.title }}
                </span>
              </div>

              <p class="md:mt-10 mt-4 max-w-[590px] text-center lg:text-left text-lg leading-8 text-slate-600">
                {{ portfolio.profile.summary }}
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

                  Contact Me
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
                  Ask My AI
                </button>

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
    <section id="experience" class="border-t border-slate-200 px-0 lg:px-6 py-24">
      <div class="mx-auto site-content site-container">

        <p class="text-sm font-semibold uppercase tracking-widest text-slate-500">
          Career
        </p>

        <h2 class="mt-2 text-3xl font-bold md:text-4xl">
          Professional Experience
        </h2>

        <div class="mt-12 max-w-[1400px] space-y-12">
          <article
            v-for="job in portfolio.experience"
            :key="`${job.company}-${job.role}`"
            class="relative border-l-2 border-slate-200 pl-6"
          >
            <span
              class="absolute -left-[7px] top-1.5 h-3 w-3
                    rounded-full border-2 border-blue-500 bg-white"
            ></span>
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

            <p class="mt-4 max-w-5xl leading-7 text-slate-600">
              {{ job.description }}
            </p>

            <ul
              v-if="job.highlights?.length"
              class="mt-5 max-w-5xl space-y-3"
            >
              <li
                v-for="highlight in job.highlights"
                :key="highlight"
                class="flex gap-3 text-slate-600"
              >
                <span
                  class="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
                ></span>

                <span class="leading-7">
                  {{ highlight }}
                </span>
              </li>
            </ul>
          </article>
        </div>

      </div>
    </section>


    <!-- FEATURED PROJECT -->
    <section id="projects" class="bg-slate-50 px-0 lg:px-6 py-24">
      <div class="mx-auto site-content site-container">

        <p class="text-sm font-semibold uppercase tracking-widest text-slate-500">
          Featured Work
        </p>

        <h2 class="mt-2 text-3xl font-bold md:text-4xl">
          Featured Projects
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

          <ul
            v-if="project.highlights?.length"
            class="mt-5 space-y-3"
          >
            <li
              v-for="highlight in project.highlights"
              :key="highlight"
              class="flex gap-3 text-slate-600"
            >
              <span
                class="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
              ></span>

              <span class="leading-7">
                {{ highlight }}
              </span>
            </li>
          </ul>

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
    <section id="skills" class="px-0 lg:px-6 py-24">
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
    <section id="education" class="bg-slate-50 px-0 lg:px-6 py-24">
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