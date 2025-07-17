<template>
  <v-app>
    <AppHeader />

    <v-main style="margin-top: 0; padding-top: 0;">
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
