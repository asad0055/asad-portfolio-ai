<template>
 <footer
    class="bg-gradient-to-r
            from-[#173d68]/95
            via-[#174a82]/95
            to-[#0b315f]/95
            backdrop-blur-2xl
            px-6 py-6"
    >
    <div
      class="mx-auto flex site-container flex-col items-center
             justify-between gap-3 sm:flex-row"
    >
      <!-- Brand -->
      <button
        type="button"
        class="inline-flex cursor-pointer cursor-pointer items-center"
        aria-label="Back to top"
        @click="scrollToTop"
      >
        <span
          class="font-['Pilcrow_Rounded'] text-[24px]
                font-bold leading-none text-white"
        >
          devbyasad
        </span>

        <span
          class="ml-[3px] mt-[8px] h-[7px] w-[7px]
                rounded-full bg-[#2495ff]
                shadow-[0_0_8px_rgba(36,149,255,0.8)]"
        ></span>
      </button>

      <!-- Copyright -->
      <p class="font-['Pilcrow_Rounded'] font-medium text-center text-sm text-white/70 sm:text-right">
        © {{ currentYear }} Asad Ur Rehman. All rights reserved.
        </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>