<template>
    <div class="services-container">
      <h2 class="services-title">บริการของเรา</h2>
      <div class="services-grid">
        <a 
v-for="(service, index) in services" 
:key="index" 
          href="#" 
          class="service-card-link"
        >
          <div class="service-card">
          <div class="service-image" :class="service.bgColor"></div>
          <h3 class="service-name">{{ service.name }}</h3>
          <p class="service-description">{{ service.description }}</p>
        </div>
</a>
      </div>
    </div>
  </template>
  
  <script setup>
  const services = [
    {
      name: 'เช่ารถระยะสั้น',
      description: 'รายวัน / รายสัปดาห์ / รายเดือน',
      bgColor: 'bg-light'
    },
    {
      name: 'เช่ารถระยะยาว',
      description: 'เช่ารถยนต์ 3-5 ปี',
      bgColor: 'bg-light'
    },
    {
      name: 'เช่ารถสำหรับองค์กร',
      description: 'เช่ารถสำหรับบริษัทและองค์กร',
      bgColor: 'bg-blue'
    },
    {
      name: 'เช่ารถพร้อมคนขับ',
      description: 'รถหรูพร้อมคนขับมืออาชีพ',
      bgColor: 'bg-light'
    }
  ];
  </script>
  
  <style scoped>
  @import '../assets/main-service.css';
  </style>