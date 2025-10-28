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
  <div class="max-w-md mx-auto mt-12 p-6 bg-white shadow rounded relative">
    <h2 class="text-xl font-bold mb-4">Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="mb-4">
        <input v-model="email" type="email" placeholder="Email" class="input" />
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>

      <div class="mb-4">
        <input v-model="password" type="password" placeholder="Password" class="input" />
        <p v-if="errors.password" class="error">{{ errors.password }}</p>
      </div>

      <button class="btn mt-4">Login</button>
    </form>

    <!-- Toast Notification -->
    <div v-if="toast.message" :class="['toast', toast.type]" class="absolute top-4 right-4">
      {{ toast.message }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMainStore } from '../store'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errors = ref({})
const toast = ref({ message: '', type: '' })

const store = useMainStore()
const router = useRouter()

function showToast(message, type = 'success') {
  toast.value = { message, type }
  setTimeout(() => (toast.value = { message: '', type: '' }), 3000)
}

function handleLogin() {
  errors.value = {}

  if (!email.value) errors.value.email = 'Email is required.'
  if (!password.value) errors.value.password = 'Password is required.'

  if (Object.keys(errors.value).length > 0) {
    showToast('Please fix the errors below.', 'error')
    return
  }

  try {
    store.login(email.value, password.value)
    showToast('Login successful!', 'success')
    setTimeout(() => router.push('/dashboard'), 1000)
  } catch (e) {
    showToast(e.message, 'error')
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