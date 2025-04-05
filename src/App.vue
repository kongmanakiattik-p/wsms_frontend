<template>
  <div class="app-container">
    <NavBar />
    <main class="main-content">
      <CarDetail />
      
      <div class="services-section">
        <ServiceCard v-for="(service, index) in serviceList" :key="index" :service="service" />
      </div>
    </main>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import CarDetail from './pages/carDetail.vue';
import ServiceCard from './components/ServiceCard.vue';

const serviceList = [
  {
    name: 'Service Name',
    description: 'This is the space to describe the service. Focus the description on how customers or clients can benefit from using this service: explain how it solves a problem, or makes life easier or more enjoyable.',
    details: 'Be sure to include all the relevant details users will want to know, like pricing, duration, and location. If they\'ll need to prepare or bring anything with them, let them know here. Give users an idea of what to expect from the service and tell them how to book it.'
  },
  {
    name: 'Service Name',
    description: 'This is the space to describe the service. Focus the description on how customers or clients can benefit from using this service: explain how it solves a problem, or makes life easier or more enjoyable.',
    details: 'Be sure to include all the relevant details users will want to know, like pricing, duration, and location. If they\'ll need to prepare or bring anything with them, let them know here. Give users an idea of what to expect from the service and tell them how to book it.'
  },
  {
    name: 'Service Name',
    description: 'This is the space to describe the service. Focus the description on how customers or clients can benefit from using this service: explain how it solves a problem, or makes life easier or more enjoyable.',
    details: 'Be sure to include all the relevant details users will want to know, like pricing, duration, and location. If they\'ll need to prepare or bring anything with them, let them know here. Give users an idea of what to expect from the service and tell them how to book it.'
  }
];
</script>

<style scoped>
@import '../src/assets/app.css';
</style>