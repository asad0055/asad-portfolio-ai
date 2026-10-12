<script setup lang="ts">
import { portfolio } from '../../data/portfolio'
import ContactSection from '../ai/ContactSection.vue'
import FooterSection from '../layout/FooterSection.vue'
import Navbar from './Navbar.vue'
import HeroSection from './HeroSection.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const skillGroups = computed(() => [
  {
    title: t('skills.categories.frontend'),
    skills: portfolio.skills.frontend,
  },
  {
    title: t('skills.categories.stateManagement'),
    skills: portfolio.skills.stateManagement,
  },
  {
    title: t('skills.categories.backend'),
    skills: portfolio.skills.backend,
  },
  {
    title: t('skills.categories.platforms'),
    skills: portfolio.skills.platforms,
  },
  {
    title: t('skills.categories.database'),
    skills: portfolio.skills.database,
  },
  {
    title: t('skills.categories.devOps'),
    skills: portfolio.skills.devOps,
  },
  {
    title: t('skills.categories.engineering'),
    skills: portfolio.skills.engineering.map((skill) =>
      locale.value === 'no'
        ? t(`skills.engineering.${skill}`)
        : skill
    ),
  },
])

const { locale, t, tm } = useI18n()

const translatedExperience = computed(() => {
  const norwegianJobs =
    locale.value === 'no'
      ? (tm('experience.jobs') as Array<{
          role: string
          location: string
          period: string
          description: string
          highlights: string[]
        }>)
      : []

  return portfolio.experience.map((job, index) => {
    const translatedJob = norwegianJobs[index]

    return {
      ...job,
      role: translatedJob?.role ?? job.role,
      location: translatedJob?.location ?? job.location,
      period: translatedJob?.period ?? job.period,
      description: translatedJob?.description ?? job.description,
      highlights: translatedJob?.highlights ?? job.highlights,
    }
  })
});

const translatedProjects = computed(() => {
  const norwegianProjects =
    locale.value === 'no'
      ? (tm('projects.items') as Array<{
          location: string
          duration: string
          description: string
          highlights: string[]
        }>)
      : []

  return portfolio.projects.map((project, index) => {
    const translatedProject = norwegianProjects[index]

    return {
      ...project,
      location: translatedProject?.location ?? project.location,
      duration: translatedProject?.duration ?? project.duration,
      description: translatedProject?.description ?? project.description,
      highlights: translatedProject?.highlights ?? project.highlights,
    }
  })
});

const translatedEducation = computed(() => {
  const norwegianDegrees =
    locale.value === 'no'
      ? (tm('education.degrees') as string[])
      : []

  return portfolio.education.map((item, index) => ({
    ...item,
    degree: norwegianDegrees[index] ?? item.degree,
  }))
});

const translatedCertifications = computed(() => {
  const norwegianNames =
    locale.value === 'no'
      ? (tm('certifications.names') as string[])
      : []

  return portfolio.certifications.map((item, index) => ({
    ...item,
    name: norwegianNames[index] ?? item.name,
  }))
});

</script>

<template>
  <div class="bg-white text-slate-900">
        <Navbar />
      <!-- HERO -->
      <HeroSection />
    <!-- EXPERIENCE -->
    <section id="experience" class="border-t border-slate-200 px-0 lg:px-6 py-24">
      <div class="mx-auto site-content site-container">

        <p class="text-sm font-semibold uppercase tracking-widest text-slate-500">
          {{ t('experience.label') }}
        </p>

        <h2 class="mt-2 text-3xl font-bold md:text-4xl">
          {{ t('experience.heading') }}
        </h2>

        <div class="mt-12 max-w-[1400px] space-y-12">
          <article
            v-for="job in translatedExperience"
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
          {{ t('projects.label') }}
        </p>

        <h2 class="mt-2 text-3xl font-bold md:text-4xl">
          {{ t('projects.heading') }}
        </h2>

        <div
          v-for="project in translatedProjects"
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
          {{ t('skills.label') }}
        </p>

        <h2 class="mt-2 text-3xl font-bold md:text-4xl">
          {{ t('skills.heading') }}
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
            {{ t('education.label') }}
          </p>

          <h2 class="mt-2 text-3xl font-bold">
            {{ t('education.heading') }}
          </h2>

          <div
            v-for="education in translatedEducation"
            :key="education.institution"
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
            {{ t('certifications.label') }}
          </p>

          <h2 class="mt-2 text-3xl font-bold">
            {{ t('certifications.heading') }}
          </h2>

          <div class="mt-8 space-y-6">
            <div
                v-for="(certificate, index) in translatedCertifications"
                :key="index"
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