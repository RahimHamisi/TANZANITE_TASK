<template>
  <v-app-bar app color="primary" dark elevate-on-scroll flat>
    <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none" />
    <v-toolbar-title class="custom-title">
      <div class="title-text">
        <h2>Tanzanite Skills</h2>
        <h5>Academy</h5>
      </div>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items class="d-none d-md-flex">
      <v-btn v-for="item in menuItems" :key="item.title" variant="text" :href="item.path">
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary app location="left" class="d-md-none">
    <v-list>
      <v-list-item v-for="item in menuItems" :key="item.title" @click="goToSection(item.path)">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const menuItems = [
  { title: 'Huduma', path: '#services' },
  { title: 'Kuhusu', path: '#courses' },
  { title: 'Mawasiliano', path: '#join' },
  { title: 'Jisajili', path: '#register' },
]

const goToSection = (anchor) => {
  drawer.value = false
  const el = document.querySelector(anchor)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.custom-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  margin: 0;
  padding: 0;
}

.custom-title .title-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0;
  padding-left: 0;
}

.custom-title h2 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
}

.custom-title span {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 400;
  color: #ccc;
}

.v-list-item-title {
  font-size: 1rem;
  font-weight: 500;
}
</style>