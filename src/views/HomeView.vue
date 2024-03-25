<template>
   <!-- чтобы включить поле авторизации в сторе нужно поставить auth = false -->
    <AuthComponent v-if="!store.auth"/>
    <ChartComponent v-else/>
  </template>
  <script setup lang="ts">
  import ChartComponent from '@/components/ChartComponent.vue'
  import AuthComponent from '@/components/AuthComponent.vue'
  import { useAuthStore } from '@/stores/authStore'
  
  const store = useAuthStore()
  </script>
  
  
  
  <style scoped>
  
  </style>