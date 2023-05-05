<script setup>
import {drawerList} from "../../helpers/drawer-list";
import {useDrawerStore} from "../../stores/drawer";

const store = useDrawerStore()
</script>

<template>
  <v-app-bar  prominent :absolute="true" :elevation="0">
    <div class="pl-4 pr-4" style="width: 100%;display: flex;align-items: center;justify-content: space-between;">
      <v-btn @click="store.toggleDrawer" icon="mdi-menu" color="rgb(17, 24, 49)"></v-btn>
      <v-btn icon="mdi-logout-variant" color="rgb(17, 24, 49)"></v-btn>
    </div>
  </v-app-bar>
</template>

<style>
</style>
