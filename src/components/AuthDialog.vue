<template>
  <v-dialog v-model="dialog" max-width="500">
    <template #activator="{ props }">
      <v-btn v-bind="props" variant="text">Jisajili</v-btn>
    </template>

    <v-card>
      <v-card-title>
        <v-tabs v-model="activeTab" grow>
          <v-tab value="login">Login</v-tab>
          <v-tab value="register">Register</v-tab>
        </v-tabs>
      </v-card-title>

      <v-card-text>
        <v-window v-model="activeTab">
          <v-window-item value="login">
            <LoginForm />
          </v-window-item>
          <v-window-item value="register">
            <RegistrationForm />
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoginForm from '@/components/LoginForm.vue'
import RegistrationForm from '@/components/RegistrationForm.vue'

const dialog = ref(false)
const activeTab = ref('login')
</script>
