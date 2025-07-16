<template>
  <v-container fluid class="hero-section py-16" >
    <v-row align="center" justify="center" class="flex-nowrap flex-column flex-md-row">
      
      <v-col
        cols="12"
        md="4"
        class="d-flex justify-center mb-8 mb-md-0"
        v-animateonscroll="{ animation: 'fadeInLeft' }"
      >
        <v-icon size="128" color="white">mdi-diamond-stone</v-icon>
      </v-col>

      <v-col
        cols="12"
        md="8"
        class="text-md-left text-center"
        v-animateonscroll="{ animation: 'fadeInRight' }"
      >
        <h1 class="hero-title mb-4">Tanzanite Skills Academy</h1>
        <h2 class="hero-subtitle mb-6">Jifunze Leo, Badilisha Kesho Yako</h2>
        <v-btn color="secondary" x-large rounded href="#join">Jisajili Sasa</v-btn>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>
.hero-section {
  background: linear-gradient(to right, #35898C, #2c3e50);
  color: white;
  min-height: 300px;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
}

.v-icon {
  filter: drop-shadow(0 0 4px rgba(0,0,0,0.3));
}
</style>
