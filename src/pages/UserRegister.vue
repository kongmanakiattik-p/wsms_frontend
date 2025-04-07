<template>
  <div class="user-register-container">
    <h1 class="user-title">Account Registration</h1>
    <h3 class="user-subtitle">
      Welcome to [web name].<br />You can start using our services by registering your information below.
    </h3>
    <h3 class="user-subtitle">
        or If you already have an account, please <RouterLink to="/user-login" class="nav-link">Login</RouterLink> here.
    </h3>
    <div class="user-content">
      <!-- Image -->
      <div class="user-image">
        <!-- Placeholder for the car image -->
      </div>

      <!-- Form -->
      <div class="user-form">
        <div class="form-group">
          <label for="name">Name</label>
          <p class="textfield-sub">Username</p>
          <input type="text" id="username" placeholder="Example: John123" />
          <p class="textfield-sub">First name</p>
          <input type="text" id="firstname" placeholder="Example: John" />
          <p class="textfield-sub">Last name</p>
          <input type="text" id="lastname" placeholder="Example: Doe" />
        </div>
        <div class="form-group">
          <label for="address">Address</label>
          <textarea id="address" placeholder="Enter your address"></textarea>
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="text" id="phone" placeholder="Example: 012-345-6789" />
        </div>
        <div class="form-group">
          <label for="email">Account Email</label>
          <input type="email" id="email" placeholder="Example: johndoe1234@example.com" required/>
          <p class="textfield-sub-require">* Require</p>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required/>
          <p class="textfield-sub-require">* Require</p>
        </div>
        <button type="submit" class="register-button">Register now</button>
      </div>

    </div>
  </div>
</template>

<script setup>
// to-be add later
</script>

<style scoped>
@import '../assets/user-register.css';
</style>