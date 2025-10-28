<template>
  <div class="p-4 rounded-lg shadow-md bg-white">
    <h3 class="font-bold text-lg">{{ ticket.title }}</h3>
    <p class="text-sm text-gray-600">{{ ticket.description }}</p>
    <span :class="statusClass" class="px-2 py-1 rounded text-white text-xs">{{ ticket.status }}</span>
    <div class="mt-2 flex gap-2">
      <button @click="$emit('edit', ticket)" class="text-blue-500">Edit</button>
      <button @click="$emit('delete', ticket.id)" class="text-red-500">Delete</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['ticket'])

const statusClass = {
  open: 'bg-open',
  in_progress: 'bg-in_progress',
  closed: 'bg-closed',
}[props.ticket.status]
</script>