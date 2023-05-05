<script setup>
import {useRouter} from 'vue-router';

const router = useRouter()
const login = () => {
  router.push(`/`)
}
</script>

<template>
  <div class="auth">
    <div class="auth-block">
      <h3>ВХІД</h3>
      <v-sheet class="bg-white pa-12" rounded>
            <v-text-field
                class="mb-2"
                clearable
                label="Електронна пошта"
                color="blue"
                variant="underlined"
            ></v-text-field>

            <v-text-field
                clearable
                label="Пароль"
                placeholder="Enter your password"
                color="blue"
                variant="underlined"
            ></v-text-field>

            <br>

            <v-btn
                block
                color="blue"
                size="large"
                type="submit"
                variant="elevated"
                class="text-white"
                @click="login"
            >
              ВХІД
            </v-btn>
      </v-sheet>
    </div>
  </div>
</template>

<style>
</style>
