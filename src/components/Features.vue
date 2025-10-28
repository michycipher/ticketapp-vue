<template>
  <section class="bg-gray-50 py-24">
    <div class="max-w-[1440px] mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-extrabold text-gray-900 mb-4">
          Why Choose Tix?
        </h2>
        <p class="text-lg text-gray-500">
          Everything you need for booking tickets, all in one place
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(f, index) in features"
          :key="index"
          class="bg-white flex flex-col items-center p-10 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all"
        >
          <div class="w-12 h-12 flex items-center justify-center text-2xl rounded-full mb-6 bg-purple-900 text-white">
            <font-awesome-icon :icon="f.icon" />
          </div>
          <h3 class="text-2xl font-bold mb-3 text-gray-900">
            {{ f.title }}
          </h3>
          <p class="text-gray-500">{{ f.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  { icon: 'plane', title: 'Multi-Purpose Booking', text: 'From flights and trains to concerts and sports events, book any ticket type with ease.' },
  { icon: 'bolt', title: 'Lightning Fast', text: 'Instant booking confirmations and digital tickets delivered directly to your device.' },
  { icon: 'lock', title: 'Secure & Trusted', text: 'Bank-level encryption and secure payment processing for your peace of mind.' },
  { icon: 'credit-card', title: 'Easy Payment', text: 'Multiple payment options including cards, wallets, and buy-now-pay-later.' },
  { icon: 'mobile-alt', title: 'Mobile Ready', text: 'Access your tickets anytime, anywhere with our responsive mobile experience.' },
  { icon: 'bullseye', title: 'Best Prices', text: 'Compare prices across providers and get exclusive deals and early-bird offers.' },
]
</script>