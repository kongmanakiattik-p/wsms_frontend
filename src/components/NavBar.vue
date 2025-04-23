<template>
  <nav class="navbar">
    <div class="logo">
      <h2>MafiaCar</h2>
    </div>
    <div class="nav-links">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/search-car" class="nav-link">Search</RouterLink>
      <template v-if="!isLoggedIn">
        <RouterLink to="/login-user" class="nav-link">Login/Register</RouterLink>
      </template>
      <template v-else>
        <a href="#" @click.prevent="handleLogout" class="nav-link">Logout</a>
      </template>
    </div>
    <!-- Add popup message -->
    <div v-if="showPopup" class="popup" :class="{ 'fade-out': isClosing }">
      Successfully logged out!
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isLoggedIn = ref(false)
const showPopup = ref(false)
const isClosing = ref(false)

const handleLogout = () => {
  isLoggedIn.value = false
  showPopup.value = true
  isClosing.value = false

  // Start fade out animation after 2 seconds
  setTimeout(() => {
    isClosing.value = true
  }, 2000)

  // Hide popup after fade out animation
  setTimeout(() => {
    showPopup.value = false
  }, 2500)
}

defineExpose({ isLoggedIn })
</script>

<style scoped>
@import '../assets/navbar.css';
</style>