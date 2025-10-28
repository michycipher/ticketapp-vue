<template>
  <div class="max-w-[1440px] mx-auto py-24">
    <Navbar />
    <h2 class="text-2xl font-bold mb-4">Manage Tickets</h2>

    <form @submit.prevent="handleSubmit" class="mb-6">
      <input v-model="title" placeholder="Title" class="input" />
      <select v-model="status" class="input">
        <option disabled value="">Select status</option>
        <option value="open">Open</option>
        <option value="in_progress">In Progress</option>
        <option value="closed">Closed</option>
      </select>
      <textarea v-model="description" placeholder="Description" class="input"></textarea>
      <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
      <button class="btn mt-2">{{ editing ? 'Update' : 'Create' }}</button>
    </form>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <TicketCard
        v-for="ticket in store.tickets"
        :key="ticket.id"
        :ticket="ticket"
        @edit="editTicket"
        @delete="deleteTicket"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMainStore } from '../store'
import TicketCard from '../components/TicketCard.vue'
import Navbar from '../components/Navbar.vue'

const store = useMainStore()
store.loadTickets()

const title = ref('')
const status = ref('')
const description = ref('')
const error = ref('')
const editing = ref(false)
const editingId = ref(null)

function handleSubmit() {
  error.value = ''
  if (!title.value || !status.value) {
    error.value = 'Title and status are required.'
    return
  }

  if (!['open', 'in_progress', 'closed'].includes(status.value)) {
    error.value = 'Invalid status value.'
    return
  }

  const ticket = {
    id: editing.value ? editingId.value : Date.now(),
    title: title.value,
    status: status.value,
    description: description.value,
  }

  if (editing.value) {
    store.updateTicket(ticket)
  } else {
    store.addTicket(ticket)
  }

  resetForm()
}

function editTicket(ticket) {
  title.value = ticket.title
  status.value = ticket.status
  description.value = ticket.description
  editing.value = true
  editingId.value = ticket.id
}

function deleteTicket(id) {
  if (confirm('Are you sure you want to delete this ticket?')) {
    store.deleteTicket(id)
  }
}

function resetForm() {
  title.value = ''
  status.value = ''
  description.value = ''
  error.value = ''
  editing.value = false
  editingId.value = null
}
</script>

<style>
.input {
  @apply block w-full mb-2 p-2 border rounded;
}
.btn {
  @apply bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600;
}
</style>