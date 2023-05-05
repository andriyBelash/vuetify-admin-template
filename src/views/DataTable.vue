<script setup>
import {ref} from 'vue'
import AppTable from "../components/ui/AppTable.vue";
import {useFetch} from "../composables/functions";
import AppModal from "../components/ui/AppModal.vue";

const {data, error} = useFetch(`https://jsonplaceholder.typicode.com/users`)
const setQuery = (k,v) => {
  console.log(k,v)
}
const showModal = ref(false)
const closeModal = () => {
  showModal.value = false
}
</script>

<template>
  <v-card class="pa-4">
    <v-btn @click="showModal = true" color="indigo" class="mb-4">
      <v-icon icon="mdi-plus"></v-icon>
      Add
    </v-btn>
    <app-table
      @set-query="setQuery"
    >
      <template #thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>username</th>
          <th>phone</th>
          <th></th>
        </tr>
      </template>
      <template #tbody>
        <tr v-for="i in data">
          <td >{{i.id}}</td>
          <td >{{i.name}}</td>
          <td >{{i.username}}</td>
          <td >
            {{i.phone}}
          </td>
          <td >
            -
          </td>
        </tr>
      </template>
    </app-table>
  </v-card>
  <app-modal max-width="550px" title="Створення юзера" @click="closeModal" :show="showModal">
    <template #body>
      <v-text-field></v-text-field>
      <v-text-field></v-text-field>
      <v-text-field></v-text-field>
    </template>
    <template #footer>
      <v-btn>test click</v-btn>
    </template>
  </app-modal>
</template>



<style scoped>

</style>
