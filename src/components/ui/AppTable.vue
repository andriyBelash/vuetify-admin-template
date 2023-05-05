<script setup>
const emit = defineEmits(['setQuery'])

</script>

<template>
  <div class="app-table">
    <div class="app-table-query mb-4">
      <v-select
          label="page"
          :items="[5,10,15,20]"
          variant="underlined"
          hide-details
          density="compact"
          color="indigo"
          style="max-width: 100px"
          @update:modelValue="emit('setQuery', 'per_page', $event)"
      ></v-select>
      <v-text-field
          hide-details
          color="indigo"
          label="Search..."
          variant="underlined"
          style="max-width: 200px"
          density="compact"
          @input="emit('setQuery', 'search', $event.target.value)"
      />
    </div>
    <table class="products-table">
      <thead>
      <slot name="thead"></slot>
      </thead>
      <tbody>
      <slot name="tbody"></slot>
      </tbody>
    </table>
    <v-pagination @update:modelValue="emit('setQuery', 'page', $event)" active-color="indigo" :length="17" :total-visible="6" size="small" style="justify-content: flex-end"></v-pagination>
  </div>
</template>

<style scoped>

</style>
