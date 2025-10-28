<template>
  <div class="relative overflow-hidden">
    <Navbar />

    <!-- Hero Section -->
    <section class="relative bg-[#7C3AED] text-white py-24 px-14 overflow-hidden">
      <div
        class="absolute top-[-200px] right-[-100px] w-[400px] h-[400px] bg-white opacity-10 rounded-full"
      ></div>
      <div
        class="absolute bottom-[10px] left-[-150px] w-[250px] h-[250px] bg-white opacity-5 rounded-full"
      ></div>

      <div class="container relative text-center z-10">
        <h1 class="text-5xl font-extrabold mb-6 leading-tight">
          Book Anything. Go Anywhere.
        </h1>
        <p class="text-xl mb-10 opacity-95">
          Book flights, concerts, events, and transportation seamlessly. One app
          for every journey and experience.
        </p>
        <div class="flex justify-center flex-wrap gap-6">
          <router-link
            to="/auth/signup"
            class="px-10 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-500 shadow-lg hover:-translate-y-1 transition-transform"
          >
            Get Started
          </router-link>
          <router-link
            to="/auth/signup"
            class="px-10 py-4 rounded-lg font-semibold text-blue-600 bg-white hover:-translate-y-1 transition-transform shadow-lg"
          >
            Learn More
          </router-link>
        </div>
      </div>
    </section>

    <!-- SVG Wave -->
    <svg
      class="absolute w-full rotate-180"
      viewBox="0 0 1920 150"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0,64 C320,120 640,20 960,64 C1280,108 1600,40 1920,64 L1920,150 L0,150 Z"
        fill="#7C3AED"
        class="animate-[waveMotion_3s_ease-in-out_infinite]"
      />
    </svg>

    <!-- Connected Components -->
    <Features />
    <Cta />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Features from "../components/Features.vue";
import Cta from "../components/Cta.vue";
</script>
