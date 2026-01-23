# Vue 3 + Vite

# Tix — Your All-in-One Ticketing App

Welcome to Tix! This is a Vue 3 project built for the HNG Internship. It’s a ticket booking and support app that lets users sign up, log in, manage tickets, and view stats — all in a clean, responsive interface.

This README explains what the app does and how it works. It also includes a breakdown of the mock API logic and how to inspect stored user data in your browser (Network).

---

## What Tix Can Do

- 🏠 Landing page with hero, features, and CTA
- 🔐 Signup and login with form validation
- 🔁 Conditional navbar based on auth state
- 📊 Dashboard with ticket stats (total, open, resolved)
- 📝 Create, update, delete tickets
- 🔔 Toast notifications for success and errors
- 📦 LocalStorage-based mock API (no backend needed)
- 📱 Fully responsive with TailwindCSS

---

## 🧱 Tech Stack

- **Vue 3** — Frontend framework
- **Pinia** — State management
- **Vue Router** — Routing
- **TailwindCSS** — Styling
- **LocalStorage** — Mock backend for user and ticket data

---

## 🧠 How Authentication Works (Mock API)

This app uses a **mock authentication system** just `localStorage`.

### 📝 Login

To log in, use the following mock credentials:

```js
{
  email: 'user@example.com',
  password: 'password123'
}

### 🔐 Signup

When a user signs up, their info is saved to `localStorage` like this:

```js
{
  fullName: "Chux",
  email: "chux@example.com",
  password: "secret123"
}
