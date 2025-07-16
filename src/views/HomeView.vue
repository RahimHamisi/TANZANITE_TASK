<template>
  <v-app>
    <AppHeader />

    <v-main>
      <HeroSection />
      <ServicesSection />
      <JoinSection />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue';
import HeroSection from '../components/HeroSection.vue';
import ServicesSection from '../components/ServicesSection.vue';
import JoinSection from '../components/JoinSection.vue';
import AppFooter from '../components/AppFooter.vue';
</script>
