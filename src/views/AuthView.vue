<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4">
        <v-tabs v-model="activeTab" centered>
          <v-tab value="login">Login</v-tab>
          <v-tab value="register">Register</v-tab>
        </v-tabs>
        <v-window v-model="activeTab">
          <v-window-item value="login">
            <LoginForm />
          </v-window-item>
          <v-window-item value="register">
            <RegistrationForm />
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup >
import { ref } from 'vue'
import LoginForm from '../components/LoginForm.vue';
import RegistrationForm from '../components/RegistrationForm.vue';

const activeTab = ref('login')
</script>