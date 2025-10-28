<template>
  <div class="max-w-[1440px] mx-auto py-24">
    <Navbar />
    <h2 class="text-2xl font-bold mb-4">Dashboard</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pb-10">
      <div class="card">Total Tickets: {{ store.tickets.length }}</div>
      <div class="card">Open: {{ count("open") }}</div>
      <div class="card">Resolved: {{ count("closed") }}</div>
    </div>

    <div>
      <router-link
        to="/tickets"
        class="px-3 py-3 rounded font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-500 shadow-lg hover:-translate-y-1 transition-transform"
        >Create Ticket</router-link
      >
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      <TicketCard
        v-for="ticket in store.tickets"
        :key="ticket.id"
        :ticket="ticket"
      />
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import TicketCard from "../components/TicketCard.vue";
import { useMainStore } from "../store";

const store = useMainStore();
store.loadTickets();

function count(status) {
  return store.tickets.filter((t) => t.status === status).length;
}
</script>

<style>
.card {
  @apply p-4 bg-white rounded shadow text-center;
}
</style>
