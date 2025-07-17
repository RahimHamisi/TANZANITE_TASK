<template>
  <v-container class="d-flex justify-center align-center min-screen" fluid>
    <v-card class="pa-6" elevation="8" max-width="400" rounded="xl">
      <v-card-title class="text-h5 text-center font-weight-bold">
        Create an Account
      </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="handleRegister">
          <v-text-field
            v-model="name"
            label="Full Name"
            prepend-inner-icon="mdi-account"
            variant="outlined"
            class="mb-4"
            dense
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            label="Email"
            prepend-inner-icon="mdi-email"
            type="email"
            variant="outlined"
            class="mb-4"
            dense
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            prepend-inner-icon="mdi-lock"
            type="password"
            variant="outlined"
            class="mb-4"
            dense
            required
          ></v-text-field>

          <v-text-field
            v-model="confirmPassword"
            label="Confirm Password"
            prepend-inner-icon="mdi-lock-check"
            type="password"
            variant="outlined"
            class="mb-6"
            dense
            :error="passwordMismatch"
            :error-messages="passwordMismatch ? 'Passwords do not match' : ''"
            required
          ></v-text-field>

          <v-btn
            type="submit"
            color="primary"
            block
            rounded="lg"
            size="large"
          >
            Register
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const passwordMismatch = computed(() => password.value !== confirmPassword.value)

const handleRegister = () => {
  if (passwordMismatch.value) {
    console.warn('Passwords do not match')
    return
  }

  console.log('Registration attempt', {
    name: name.value,
    email: email.value,
    password: password.value,
  })
}
</script>

<style scoped>
.min-screen {
  height: 80dvh;
  background-color: #f4f6f8;
}
</style>
