<script setup>
import { ref } from "vue";
import {useRouter, useRoute} from "vue-router";
import AppContent from "../../components/default/AppContent.vue";
import {drawerList} from "../../helpers/drawer-list";
import {useDrawerStore} from "../../stores/drawer";

const router = useRouter();
const route = useRoute();
const store = useDrawerStore()

const itemClick = (url) => {
  if(url) {
    router.push(url)
  }
}
</script>

<template>
  <v-navigation-drawer
      color="#111831"
      permanent
      theme="dark"
      width="300"
      v-model="store.drawer"
      app
      block
  >
    <v-row>
      <v-col style="height: 100px" class="aside-head">
        <img alt="Vue logo" src="@/assets/img/vue.png" />
        <h2>Name of project</h2>
      </v-col>
    </v-row>


    <v-list
        density="compact"
        nav
        active-color="blue"
        color="#ffffff"
    >
      <template v-for="i in drawerList">
        <v-list-subheader class="pt-2 pb-2" v-if="i.group && !i.isExpanded" style='font-size:20px'>{{i.title}}</v-list-subheader>
        <v-list-item v-if="!i.group && !i.isExpanded" @click="itemClick(i.route)"
                     :active="i.route === route.path || route.path.includes(i.route)"
                     :prepend-icon="i.icon" :title="i.name" :value="i.route" />
        <v-list-group v-if="i.isExpanded" :value="i.value">
          <template v-slot:activator="{ props }">
            <v-list-item
                v-bind="props"
                :title="i.title"
                :prepend-icon="i.icon"
                :active="i.route === route.path || route.path.includes(i.route)"
            ></v-list-item>
          </template>

          <v-list-item
              v-for="child in i.children"
              :key="child"
              :value="child.name"
              :title="child.name"
              :active="i.route === route.path || route.path.includes(i.route)"
          ></v-list-item>
        </v-list-group>
      </template>

    </v-list>
  </v-navigation-drawer>

  <v-main>
    <app-content></app-content>
  </v-main>
</template>

<style>
</style>
