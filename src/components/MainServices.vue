<template>
  <div class="services-container">
    <h2 class="services-title">บริการของเรา</h2>
    <div class="services-grid">
      <router-link
        v-for="(service, index) in services"
        :key="index"
        :to="service.link"
        class="service-card-link"
      >
        <div class="service-card">
          <div class="service-image" :class="service.bgColor"></div>
          <h3 class="service-name">{{ service.name }}</h3>
          <p class="service-description">{{ service.description }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    name: 'เช่ารถระยะสั้น',
    description: 'รายวัน / รายสัปดาห์ / รายเดือน',
    bgColor: 'bg-light',
    link: '/short-rent-service', // Link to the short rent service page
  },
  {
    name: 'เช่ารถระยะยาว',
    description: 'เช่ารถยนต์ 3-5 ปี',
    bgColor: 'bg-light',
    link: '/long-rent-service', // Link to the long rent service page
  },
  {
    name: 'เช่ารถสำหรับองค์กร',
    description: 'เช่ารถสำหรับบริษัทและองค์กร',
    bgColor: 'bg-blue',
    link: '/corporate-rent-service', // Link to the corporate rent service page
  },
  {
    name: 'เช่ารถพร้อมคนขับ',
    description: 'รถหรูพร้อมคนขับมืออาชีพ',
    bgColor: 'bg-light',
    link: '/chauffeur-service', // Link to the chauffeur service page
  },
];
</script>

<style scoped>
@import '../assets/main-service.css';
</style>