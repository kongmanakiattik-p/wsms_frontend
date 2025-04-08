<template>
    <LoginUser />
    <LoginAffiliator />
    <AffiliatorForm />
    <UserForm />
    <SearchCar />
</template>

<script setup>
  import LoginUser from './pages/LoginUser.vue' ;
  import LoginAffiliator from './pages/LoginAffiliator.vue';
  import AffiliatorForm from './pages/AffiliatorForm.vue';
  import UserForm from './pages/UserForm.vue';
  import SearchCar from './pages/SearchCar.vue';
</script>

<style scoped>
@import '../src/assets/app.css';
</style>