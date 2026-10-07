<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
]

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 80
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToSection = (href: string) => {
  const id = href.replace('#', '')

  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
<header
  class="fixed left-0 right-0 top-0 z-50
         transition-all duration-500 ease-out"
  :class="
    isScrolled
      ? 'px-0 pt-0'
      : 'px-5 pt-5 lg:px-8 lg:pt-6'
  "
>
  <nav
    class="relative overflow-hidden border-blue-300/25
           bg-gradient-to-r
           from-[#173d68]/95
           via-[#174a82]/95
           to-[#0b315f]/95
           backdrop-blur-2xl
           transition-all duration-500 ease-out"
    :class="
      isScrolled
        ? 'w-full max-w-none rounded-none border-x-0 border-t-0 border-b shadow-[0_8px_30px_rgba(3,20,43,0.25)]'
        : 'site-container rounded-[24px] border shadow-[0_15px_45px_rgba(3,20,43,0.30),0_0_25px_rgba(59,130,246,0.18)]'
    "
  >
  <div :class="isScrolled ? 'site-container' : ''">
        <!-- subtle blue glow -->
        <div
            class="pointer-events-none absolute inset-0
                bg-gradient-to-r
                from-white/[0.04]
                via-blue-400/[0.08]
                to-blue-500/[0.14]"
        ></div>

        <div
            class="relative flex items-center justify-between px-7
                    transition-all duration-500 ease-out lg:px-10"
            :class="isScrolled ? 'h-[66px]' : 'h-[78px]'"
            >
           <!-- Logo -->
            <button
            type="button"
            class="inline-flex cursor-pointer shrink-0 items-end
                    transition-transform duration-200
                    hover:-translate-y-0.5"
            aria-label="devbyasad - Back to top"
            @click="scrollToTop(); closeMenu()"
            >
                <span
                    class="font-['Pilcrow_Rounded']
                        text-[27px] font-bold leading-none
                        tracking-[-0.02em] text-white"
                >
                    devbyasad
                </span>

                <span
                    class="mb-[2px] ml-[3px] h-[7px] w-[7px]
                        rounded-full bg-[#2495ff]
                        shadow-[0_0_8px_rgba(36,149,255,0.8)]"
                ></span>
            </button>

            <!-- Desktop navigation -->
            <div
            class="absolute left-1/2 hidden -translate-x-1/2
                    items-center gap-10 lg:flex"
            >
            <button
                v-for="item in navItems"
                :key="item.label"
                type="button"
                aria-label="Navigation links"
                class="rounded-lg cursor-pointer px-3 py-2
                        text-[15px] font-semibold text-white/90
                        transition-all duration-200
                        hover:-translate-y-0.5
                        hover:bg-blue-400/10
                        hover:text-blue-200
                        hover:shadow-[0_6px_18px_rgba(59,130,246,0.15)]"
                @click="scrollToSection(item.href)"
                >
                {{ item.label }}
            </button>
            </div>

            <!-- Desktop Contact -->
            <button
                type="button"
                aria-label="Contact"
                class="hidden items-center cursor-pointer gap-2.5 rounded-[14px]
                        bg-[#1685ff] px-6 py-3.5
                        text-[15px] font-semibold text-white
                        shadow-[0_0_22px_rgba(22,133,255,0.42)]
                        transition duration-200
                        hover:-translate-y-0.5 hover:bg-[#2995ff]
                        hover:shadow-[0_0_30px_rgba(22,133,255,0.58)]
                        lg:inline-flex"
                @click="scrollToSection('#contact')"
                >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    class="h-[19px] w-[19px]"
                >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                </svg>

                Contact
            </button>

            <!-- Mobile hamburger -->
            <button
                type="button"
                class="flex h-11 w-11 cursor-pointer items-center justify-center
                        rounded-xl text-white transition
                        hover:bg-white/10 lg:hidden"
                :aria-expanded="isMenuOpen"
                aria-label="Toggle navigation menu"
                @click="isMenuOpen = !isMenuOpen"
                >
                <svg
                    v-if="isMenuOpen"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="h-6 w-6"
                >
                    <path d="M6 6l12 12M18 6 6 18" />
                </svg>

                <svg
                    v-else
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="h-6 w-6"
                >
                    <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
            </button>
        </div>

       <!-- Mobile menu -->
        <div
        v-if="isMenuOpen"
        class="relative border-t border-white/10
                px-5 pb-5 pt-3 lg:hidden"
        >
            <div class="flex flex-col gap-1">
                <button
                v-for="item in navItems"
                :key="item.label"
                type="button"
                aria-label="Mobile Navigation links"
                class="rounded-xl px-4 cursor-pointer py-3 text-left
                        text-sm font-medium text-white/90
                        transition hover:bg-white/10 hover:text-white"
                @click="scrollToSection(item.href); closeMenu()"
                >
                {{ item.label }}
                </button>

                <button
                type="button"
                aria-label="Mobile Navigation links"
                class="mt-2 flex items-center justify-center gap-2
                        rounded-xl bg-[#1685ff] px-4 py-3
                        text-sm font-semibold text-white
                        shadow-[0_0_20px_rgba(22,133,255,0.3)]"
                @click="scrollToSection('#contact'); closeMenu()"
                >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    class="h-[18px] w-[18px]"
                >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                </svg>

                Contact
                </button>
            </div>
        </div>

      </div>
    </nav>
  </header>
</template>