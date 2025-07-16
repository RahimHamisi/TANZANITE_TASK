<template>
  <v-container id="services" class="services-container py-16">
    <v-row>
      <v-col cols="12" class="text-center">
        <h2 class="section-title">Huduma Zetu</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(service, index) in services"
        :key="index"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-animateonscroll="{ animation: 'fadeInUp', delay: index * 100 }"
            class="service-card"
            :class="{ 'service-card--hover': isHovering }"
            v-bind="props"
            elevation="2"
            rounded="xl"
          >
            <v-card-text class="text-center">
              <v-icon size="48" color="primary" class="icon mb-4">
                {{ icons[index] }}
              </v-icon>
              <h3 class="service-title">{{ service }}</h3>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const services = ref([
  'Maendeleo Binafsi',
  'Usimamizi wa Fedha Binafsi',
  'Maendeleo ya Kitaaluma',
  'Maendeleo ya Biashara',
  'Maendeleo ya Teknolojia',
  'Huduma za Ushauri',
]);

const icons = ref([
  'mdi-account-star',
  'mdi-cash-multiple',
  'mdi-school-outline',
  'mdi-storefront-outline',
  'mdi-laptop',
  'mdi-head-lightbulb',
]);
</script>

<style scoped>
.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #35898C;
  margin-bottom: 2rem;
}

.service-card {
  padding: 2rem;
  background-color: #fff;
  transition: 0.3s ease;
  cursor: pointer;
}

.service-card--hover {
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.service-title {
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.icon {
  transition: transform 0.3s ease;
}

.service-card--hover .icon {
  transform: scale(1.2);
}
</style>
