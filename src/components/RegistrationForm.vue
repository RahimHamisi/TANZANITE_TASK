<template>
  <v-card class="pa-6" elevation="4" width="400">
    <v-card-title class="text-h5">Register</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="handleRegister">
        <v-text-field v-model="name" label="Full Name" prepend-icon="mdi-account" required></v-text-field>
        <v-text-field v-model="email" label="Email" prepend-icon="mdi-email" required></v-text-field>
        <v-text-field v-model="password" label="Password" prepend-icon="mdi-lock" type="password" required></v-text-field>
        <v-btn color="primary" type="submit" block>Register</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')

const handleRegister = () => {
  // Add registration logic here (e.g., API call)
  console.log('Registration attempt', { name: name.value, email: email.value, password: password.value })
}
</script>