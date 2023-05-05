<script setup>
import { useRoute } from "vue-router";
const route = useRoute()
import AppHeader from "./AppHeader.vue";
</script>

<template>
  <v-container class="pl-3 pr-4" style="height: 100%">
    <app-header></app-header>
    <h2>{{route.meta.title}}</h2>
    <v-spacer class="mb-10"></v-spacer>
    <div style="height: 100%"  v-if="route.meta.layout === 'empty'">
      <router-view v-slot="{ Component, route }">
        <transition name="fade">
          <component :is="Component" @loading="isLoading = !isLoading" :key="route.path" />
        </transition>
      </router-view>
    </div>
    <div v-else>
      <router-view v-slot="{ Component, route }">
        <transition name="fade">
          <component :is="Component" @loading="isLoading = !isLoading" :key="route.path" />
        </transition>
      </router-view>
    </div>
  </v-container>
</template>

<style>
</style>
