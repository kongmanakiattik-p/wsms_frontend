<template>
  <nav class="navbar">
    <div class="logo">
      <h2>MafiaCar</h2>
    </div>
    <div class="nav-links">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/search-car" class="nav-link">Search</RouterLink>
      <RouterLink to="/login-user" class="nav-link">User Login</RouterLink>
      <RouterLink to="/login-affiliator" class="nav-link">Affiliator Login</RouterLink>
    </div>
  </nav>
</template>

<script setup>
// Component logic
</script>

<style scoped>
@import '../assets/navbar.css';
</style>