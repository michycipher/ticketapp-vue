<template>
  <footer class="relative bg-gray-900 text-white py-12 bottom-0 left-0 w-full">
    <div class="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
      <div class="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 mb-10">
        <!-- Brand -->
        <div>
          <h3 class="text-2xl font-bold mb-4">Tix</h3>
          <p class="text-gray-400 leading-relaxed">
            Your trusted partner for all ticketing needs. Book with confidence.
          </p>
        </div>

        <!-- Product -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Product</h3>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-purple-400 transition-colors">Features</a></li>
            <li><a href="#" class="hover:text-purple-400 transition-colors">Pricing</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Company</h3>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-purple-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Support</h3>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm sm:text-base">
        © {{ currentYear }} Tix. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
