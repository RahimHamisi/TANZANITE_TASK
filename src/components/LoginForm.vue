<template>
  <v-container class="d-flex justify-center align-center fill-height" fluid>
    <v-card class="pa-6" elevation="8" max-width="400" rounded="xl">
      <v-card-title class="text-h5 text-center font-weight-bold">
        Login to Your Account
      </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="handleLogin">
          <v-text-field
            v-model="email"
            label="Email"
            prepend-inner-icon="mdi-email"
            type="email"
            variant="outlined"
            class="mb-4"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            prepend-inner-icon="mdi-lock"
            type="password"
            variant="outlined"
            class="mb-6"
            required
          ></v-text-field>

          <v-btn type="submit" color="primary" block rounded="lg" size="large">
            Login
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleLogin = () => {
  console.log('Login attempt', { email: email.value, password: password.value })
}
</script>

<style scoped>
.fill-height {
  min-height: 75vh;
  background: linear-gradient(to right, #e3f2fd, #f5f5f5);
}
</style>
