<template>
  <v-card class="pa-6" elevation="4" width="400">
    <v-card-title class="text-h5">Login</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="handleLogin">
        <v-text-field v-model="email" label="Email" prepend-icon="mdi-email" required></v-text-field>
        <v-text-field v-model="password" label="Password" prepend-icon="mdi-lock" type="password" required></v-text-field>
        <v-btn color="primary" type="submit" block>Login</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleLogin = () => {
  // Add login logic here (e.g., API call)
  console.log('Login attempt', { email: email.value, password: password.value })
}
</script>