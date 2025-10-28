import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    user: null,
    tickets: [],
  }),
  actions: {
    login(email, password) {
      if (email === 'user@example.com' && password === 'password123') {
        localStorage.setItem('ticketapp_session', 'mock_token')
        this.user = { email }
        return true
      }
      throw new Error('Invalid credentials')
    },
    logout() {
      localStorage.removeItem('ticketapp_session')
      this.user = null
    },
    loadTickets() {
      const data = localStorage.getItem('tickets')
      this.tickets = data ? JSON.parse(data) : []
    },
    saveTickets() {
      localStorage.setItem('tickets', JSON.stringify(this.tickets))
    },
    addTicket(ticket) {
      this.tickets.push(ticket)
      this.saveTickets()
    },
    updateTicket(updated) {
      const index = this.tickets.findIndex(t => t.id === updated.id)
      if (index !== -1) {
        this.tickets[index] = updated
        this.saveTickets()
      }
    },
    deleteTicket(id) {
      this.tickets = this.tickets.filter(t => t.id !== id)
      this.saveTickets()
    },
  },
})