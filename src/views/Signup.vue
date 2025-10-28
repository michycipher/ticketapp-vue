<!-- <template>
  <div class="max-w-md mx-auto mt-12 p-6 bg-white shadow rounded">
    <h2 class="text-xl font-bold mb-4">Sign Up</h2>
    <form @submit.prevent="handleSignup">
      <input v-model="email" type="email" placeholder="Email" class="input" />
      <input v-model="password" type="password" placeholder="Password" class="input" />
      <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
      <button class="btn mt-4">Sign Up</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

function handleSignup() {
  if (!email.value || !password.value) {
    error.value = 'All fields are required.'
    return
  }
  localStorage.setItem('ticketapp_session', 'mock_token')
  router.push('/dashboard')
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
  <div class="max-w-md mx-auto mt-12 p-6 bg-white shadow rounded">
    <h2 class="text-xl font-bold mb-4">Sign Up</h2>
    <form @submit.prevent="handleSignup">
      <div class="mb-4">
        <input v-model="fullName" type="text" placeholder="Full Name" class="input" />
        <p v-if="errors.fullName" class="error">{{ errors.fullName }}</p>
      </div>

      <div class="mb-4">
        <input v-model="email" type="email" placeholder="Email" class="input" />
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>

      <div class="mb-4">
        <input v-model="password" type="password" placeholder="Password" class="input" />
        <p v-if="errors.password" class="error">{{ errors.password }}</p>
      </div>

      <div class="mb-4">
        <input v-model="confirmPassword" type="password" placeholder="Confirm Password" class="input" />
        <p v-if="errors.confirmPassword" class="error">{{ errors.confirmPassword }}</p>
      </div>

      <button class="btn mt-4">Sign Up</button>
    </form>

    <!-- Toast Notification -->
    <div v-if="toast.message" :class="['toast', toast.type]" class="absolute top-4 right-4">
      {{ toast.message }}
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const fullName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errors = ref({})
const toast = ref({ message: '', type: '' })
const router = useRouter()

function showToast(message, type = 'success') {
  toast.value = { message, type }
  setTimeout(() => (toast.value = { message: '', type: '' }), 3000)
}

function handleSignup() {
  errors.value = {}

  if (!fullName.value) errors.value.fullName = 'Full name is required.'
  if (!email.value) errors.value.email = 'Email is required.'
  if (!password.value) errors.value.password = 'Password is required.'
  if (!confirmPassword.value) errors.value.confirmPassword = 'Please confirm your password.'
  if (password.value && confirmPassword.value && password.value !== confirmPassword.value) {
    errors.value.confirmPassword = 'Passwords do not match.'
  }

  if (Object.keys(errors.value).length > 0) {
    showToast('Please fix the errors below.', 'error')
    return
  }

  const user = {
    fullName: fullName.value,
    email: email.value,
  }

  localStorage.setItem('ticketapp_session', 'mock_token')
  localStorage.setItem('ticketapp_user', JSON.stringify(user))

  showToast('Signup successful!', 'success')
  setTimeout(() => router.push('/dashboard'), 1000)
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