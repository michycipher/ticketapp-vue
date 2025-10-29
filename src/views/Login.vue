<!-- <template>
  <div class="max-w-md mx-auto mt-12 p-6 bg-white shadow rounded">
    <h2 class="text-xl font-bold mb-4">Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" class="input" />
      <input v-model="password" type="password" placeholder="Password" class="input" />
      <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
      <button class="btn mt-4">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMainStore } from '../store'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const store = useMainStore()
const router = useRouter()

function handleLogin() {
  try {
    store.login(email.value, password.value)
    router.push('/dashboard')
  } catch (e) {
    error.value = e.message
  }
}
</script>

<style>
.input {
  @apply block w-full mb-2 p-2 border rounded;
}
.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600;
}
</style> -->

<template>
  <Navbar />
  <main
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4"
  >
    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <h2 class="text-2xl font-bold text-Purple-700 mb-4 text-center">
        Welcome Back
      </h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1"
            >Email</label
          >
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="input w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200"
          />
          <p v-if="errors.email" class="error">{{ errors.email }}</p>
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1"
            >Password</label
          >
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="input w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200"
          />
          <p v-if="errors.password" class="error">{{ errors.password }}</p>
        </div>

        <button
          class="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 focus:outline-none"
        >
          Login
        </button>
      </form>

      <p class="text-center text-sm text-gray-600 mt-4">
        Don’t have an account?
        <a href="/auth/signup" class="text-purple-600 font-semibold">
          Sign Up
        </a>
      </p>

      <!-- Toast Notification -->
      <!-- <div
        v-if="toast.message"
        :class="['toast', toast.type]"
        class="absolute top-4 right-4"
      >
        {{ toast.message }}
      </div> -->
      <transition name="fade">
        <div
          v-if="toast.message"
          :class="[
            'fixed top-6 right-6 px-4 py-2 rounded-lg shadow-lg text-white',
            toast.type === 'success' ? 'bg-green-500' : 'bg-red-500',
          ]"
        >
          {{ toast.message }}
        </div>
      </transition>
    </div>
  </main>

  <!-- Login Modal  -->
  <div
    v-if="showModal"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
  >
    <div
      class="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center transform transition-all scale-95 hover:scale-100"
    >
      <h3 class="text-lg font-semibold text-gray-800 mb-2">Note</h3>
      <p class="text-gray-600 mb-4">
        Check the <strong>README</strong> file for the login details.
      </p>
      <button
        @click="showModal = false"
        class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
      >
        Got it
      </button>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import { ref } from "vue";
import { useMainStore } from "../store";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

const email = ref("");
const password = ref("");
const errors = ref({});
const toast = ref({ message: "", type: "" });
const showModal = ref(true); // This will show a modal immediately when page loads

const store = useMainStore();
const router = useRouter();

function showToast(message, type = "success") {
  toast.value = { message, type };
  setTimeout(() => (toast.value = { message: "", type: "" }), 3000);
}

function handleLogin() {
  errors.value = {};

  if (!email.value) errors.value.email = "Email is required.";
  if (!password.value) errors.value.password = "Password is required.";

  if (Object.keys(errors.value).length > 0) {
    showToast("Please fix the errors below.", "error");
    return;
  }

  try {
    store.login(email.value, password.value);
    showToast("Login successful!", "success");
    setTimeout(() => router.push("/dashboard"), 1000);
  } catch (e) {
    showToast(e.message, "error");
  }
}
</script>

<style scoped>
.input {
  @apply block w-full p-2 border rounded;
}
.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600;
}
.error {
  @apply text-red-500 text-sm mt-1;
}
.toast {
  @apply px-4 py-2 rounded shadow-lg text-white;
}
.toast.success {
  @apply bg-green-500;
}
.toast.error {
  @apply bg-red-500;
}
</style>
