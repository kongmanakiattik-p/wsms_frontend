<template>
    <div class="car-detail-container">
      <h1 class="car-title">[Name Car]</h1>
      <div class="car-details">
        <div class="car-image">
          <!-- Placeholder for car image -->
        </div>
        <div class="car-info">
          <div v-for="(item, index) in itemList" :key="index" class="info-item">
            <div class="info-date-container">
              <div class="info-date">XXX</div>
              <div class="date-subtext">03 Jul</div>
            </div>
            <div class="info-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <services />
    </div>
  </template>
  
  <script setup>
  import services from '../components/Services.vue';
  const itemList = [
    { 
      title: 'Item Title', 
      description: 'Use this space to promote the business, its products or its services.' 
    },
    { 
      title: 'Item Title', 
      description: 'Use this space to promote the business, its products or its services.' 
    },
    { 
      title: 'Item Title', 
      description: 'Use this space to promote the business, its products or its services.' 
    }
  ];
  </script>
  
  <style scoped>
  @import '../assets/cardetail.css';
  </style>