<template>
  <v-container
    id="join"
    class="join-section py-16"
  >
    <v-row
      align="center"
      justify="center"
      v-animateonscroll="{ animation: 'fadeInUp' }"
    >
      <v-col
        cols="12"
        md="8"
        class="text-center"
      >
        <h2 class="join-title mb-4">
          Anza Safari Yako ya Mafunzo
        </h2>
        <p class="join-subtitle mb-6">
          Jisajili leo na uanze kubadilisha kesho yako!
        </p>
        <v-btn
          color="primary"
          x-large
          rounded
          class="join-btn"
          href="#"
        >
          Jisajili Sasa
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.join-section {
  background-color: #f0f5f5;
  border-radius: 12px;
  max-width: 900px;
  margin: 3rem auto;
  box-shadow: 0 6px 12px rgba(53, 137, 140, 0.2);
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.join-title {
  font-size: 2rem;
  font-weight: 700;
  color: #35898C;
}

.join-subtitle {
  font-size: 1.125rem;
  color: #555;
}

.join-btn {
  box-shadow: 0 4px 10px rgba(53, 137, 140, 0.4);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.join-btn:hover {
  background-color: #2a6e6f !important;
  box-shadow: 0 6px 16px rgba(42, 110, 111, 0.6);
}
</style>
