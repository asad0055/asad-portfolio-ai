<template>
  <section
    id="contact"
    class="relative overflow-hidden bg-[#071a33] px-6 py-24"
  >
    <!-- Background decoration -->
    <div
      class="pointer-events-none absolute -left-32 top-0 h-80 w-80
             rounded-full bg-blue-500/10 blur-3xl"
    ></div>

    <div
      class="pointer-events-none absolute -right-32 bottom-0 h-96 w-96
             rounded-full bg-[#608bc6]/10 blur-3xl"
    ></div>

    <div class="site-container">
      <!-- Heading -->
      <div class="mx-auto max-w-2xl text-center">
        <p
          class="mb-3 text-sm font-semibold uppercase tracking-[0.2em]
                 text-blue-400"
        >
          Contact
        </p>

        <h2 class="text-3xl font-bold text-white md:text-4xl">
          Let's Connect
        </h2>

        <p class="mt-4 leading-7 text-slate-400">
          Interested in discussing an opportunity or learning more about
          my experience? Feel free to get in touch.
        </p>
      </div>

      <!-- Contact cards -->
      <div class="mt-12 grid gap-5 md:grid-cols-3">
        <!-- Email -->
        <a
          href="mailto:asad_0055@hotmail.com"
          class="group rounded-2xl border border-blue-400/20
                 bg-[#0c2342]/70 p-6 transition duration-300
                 hover:-translate-y-1 hover:border-blue-400/60
                 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)]"
        >
          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl
                   bg-blue-500/10 text-blue-400 transition
                   group-hover:bg-blue-500/20"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              class="h-6 w-6"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </div>

          <p class="mt-5 text-sm text-slate-400">
            Email
          </p>

          <p
            class="mt-1 break-all font-medium text-white
                   transition group-hover:text-blue-300"
          >
            asad_0055@hotmail.com
          </p>
        </a>

        <!-- LinkedIn -->
        <a
          href="https://linkedin.com/in/asad-rehman-dev/"
          target="_blank"
          rel="noopener noreferrer"
          class="group rounded-2xl border border-blue-400/20
                 bg-[#0c2342]/70 p-6 transition duration-300
                 hover:-translate-y-1 hover:border-blue-400/60
                 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)]"
        >
          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl
                   bg-blue-500/10 text-blue-400 transition
                   group-hover:bg-blue-500/20"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-6 w-6"
            >
              <path
                d="M6.5 8.5H3.2V19h3.3V8.5ZM4.85 3
                   A1.92 1.92 0 1 0 4.85 6.84
                   A1.92 1.92 0 0 0 4.85 3ZM19.8 13
                   c0-3.17-1.69-4.65-3.94-4.65
                   a3.4 3.4 0 0 0-3.08 1.69V8.5H9.5V19h3.28v-5.2
                   c0-1.37.26-2.7 1.96-2.7
                   1.68 0 1.7 1.57 1.7 2.79V19h3.28Z"
              />
            </svg>
          </div>

          <p class="mt-5 text-sm text-slate-400">
            LinkedIn
          </p>

          <p
            class="mt-1 font-medium text-white transition
                   group-hover:text-blue-300"
          >
            View my profile
          </p>
        </a>

        <!-- Phone -->
        <a
          href="tel:+4796832901"
          class="group rounded-2xl border border-blue-400/20
                bg-[#0c2342]/70 p-6 transition duration-300
                hover:-translate-y-1 hover:border-blue-400/60
                hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)]"
        >
          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl
                  bg-blue-500/10 text-blue-400 transition
                  group-hover:bg-blue-500/20"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              class="h-6 w-6"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2
                  19.79 19.79 0 0 1-8.63-3.07
                  19.5 19.5 0 0 1-6-6
                  19.79 19.79 0 0 1-3.07-8.67
                  A2 2 0 0 1 4.11 2h3
                  a2 2 0 0 1 2 1.72
                  12.84 12.84 0 0 0 .7 2.81
                  2 2 0 0 1-.45 2.11L8.09 9.91
                  a16 16 0 0 0 6 6l1.27-1.27
                  a2 2 0 0 1 2.11-.45
                  12.84 12.84 0 0 0 2.81.7
                  A2 2 0 0 1 22 16.92Z"
              />
            </svg>
          </div>

          <p class="mt-5 text-sm text-slate-400">
            Phone
          </p>

          <p
            class="mt-1 font-medium text-white transition
                  group-hover:text-blue-300"
          >
            +47 968 32 901
          </p>
        </a>
      </div>

      <!-- Location -->
      <div
        class="mt-9 flex items-center justify-center gap-2
              text-sm text-slate-400"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          class="h-5 w-5 text-blue-400"
        >
          <path
            d="M20 10c0 5-8 11-8 11S4 15 4 10
              a8 8 0 1 1 16 0Z"
          />
          <circle cx="12" cy="10" r="2.5" />
        </svg>

        <span>Based in Norway</span>
      </div>
    </div>
  </section>
</template>