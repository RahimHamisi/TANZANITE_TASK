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
      <v-btn
        variant="text"
        href="#services"
        :class="{ 'active-link': activeSection === '#services' }"
        @click.prevent="goToSection('#services')"
      >Huduma</v-btn>

      <v-btn
        variant="text"
        href="#join"
        :class="{ 'active-link': activeSection === '#join' }"
        @click.prevent="goToSection('#join')"
      >Mawasiliano</v-btn>

      <AuthDialog />
    </v-toolbar-items>
  </v-app-bar>


  <v-navigation-drawer
    v-model="drawer"
    temporary
    app
    location="left"
    class="d-md-none custom-drawer"
  >
    <transition name="fade-slide">
      <v-list v-if="drawer">
        <v-list-item
          :class="{ 'v-list-item--active': activeSection === '#services' }"
          @click="goToSection('#services')"
        >
          <v-list-item-title>Huduma</v-list-item-title>
        </v-list-item>

        <v-list-item
          :class="{ 'v-list-item--active': activeSection === '#join' }"
          @click="goToSection('#join')"
        >
          <v-list-item-title>Mawasiliano</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <AuthDialog />
        </v-list-item>
      </v-list>
    </transition>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AuthDialog from '@/components/AuthDialog.vue'

const drawer = ref(false)
const activeSection = ref<string | null>(null)

const goToSection = (anchor: string) => {
  drawer.value = false
  const el = document.querySelector(anchor)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    activeSection.value = anchor
  }
}

const handleScroll = () => {
  const sections = ['#services', '#join']
  let current: string | null = null
  for (const sec of sections) {
    const el = document.querySelector(sec)
    if (el) {
      const top = el.getBoundingClientRect().top
      if (top <= 100) current = sec
    }
  }
  activeSection.value = current
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
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

.custom-drawer {
  background-color: #1e293b;
  color: #e0e7ff;
  padding-top: 1rem;
}

.custom-drawer .v-list-item {
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.custom-drawer .v-list-item:hover {
  background-color: #334155;
}

.custom-drawer .v-list-item.v-list-item--active {
  background-color: #000000; 
  color: white;
  font-weight: 600;
}


.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.active-link {
  color: #000000; 
  font-weight: 700;
  border-bottom: 2px solid #000000; 
}
</style>
