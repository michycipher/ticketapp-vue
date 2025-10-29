<template>
  <nav class="w-full bg-white shadow-md fixed top-0 left-0 z-50">
    <div
      class="px-6 py-2 flex justify-between items-center max-w-[1440px] mx-auto"
    >
      <h1>
        <router-link
          to="/"
          class="font-extrabold text-3xl bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent"
        >
          Tix
        </router-link>
      </h1>
      <div class="flex gap-4 items-center py-2">
        <template v-if="isAuth">
          <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          <router-link to="/tickets" class="nav-link">Tickets</router-link>
          <button
            @click="logout"
            class="bg-red-800 text-white px-3 py-1 rounded hover:bg-red-400"
          >
            Logout
          </button>
        </template>

        <template v-else>
          <router-link
            to="/auth/login"
            class="font-semibold text-blue-600 hover:bg-blue-800 hover:rounded hover:text-white hover:px-3 hover:py-3 transition-all"
            >Login</router-link
          >
          <router-link
            to="/auth/signup"
            class="px-3 py-3 rounded font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-500 shadow-lg hover:-translate-y-1 transition-transform"
            >Get Started</router-link
          >
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
// import { ref, watchEffect } from "vue";
import { useMainStore } from '../store'
import { storeToRefs } from "pinia";

const router = useRouter();
// const route = useRoute();
// const isAuth = ref(false);
const store = useMainStore()
const { isAuth } = storeToRefs(store)

// watchEffect(() => {
//   isAuth.value = !!localStorage.getItem("ticketapp_session");
// });

// function logout() {
//   localStorage.removeItem("ticketapp_session");
//   router.push("/");
// }
function logout() {
  store.logout()
  router.push('/')
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-purple-600;
}
</style>
