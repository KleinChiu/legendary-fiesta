<template>
  <header>
    <span v-if="!!user"> Welcome, {{ user.username }} </span>
    <span v-else>
      <button @click="login">Log In Here</button>
    </span>
  </header>

  <main>
    <button @click="increment">Click Me!</button>
    <div>Clicked: {{ count }}</div>

    <div v-for="person in personas" v-if="personas">
      <span>{{ person.name }}</span>
      <p>{{ person.story }}</p>
    </div>
    <p v-else>Now loading ... <progress /></p>
  </main>

  <footer v-if="canShare">
    Do you enjoy this app?
    <span class="shareable" @click.prevent="shareApp">
      Share with you friends!
    </span>
  </footer>
  <footer v-else>Your device does not support share feature...</footer>
</template>

<script lang="ts">
export const Click_Key = "CLICK_COUNT";
</script>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

import db, {
  addAllPersonas,
  getAllPersonas,
  openPersonaStore,
  Persona,
  User,
} from "../data";
import { fetchPersona, login as signIn } from "../lib";

//#region Counter
const count = ref(Number.parseInt(localStorage.getItem(Click_Key) ?? "0"));
const increment = () => (count.value += 1);
watch(count, (val) => localStorage.setItem(Click_Key, val.toString()));
//#endregion

//#region Login
const user = ref<User | null>(null);
const login = () => signIn().then((u) => (user.value = u));
//#endregion

//#region Persona
const personas = ref<Persona[]>([]);
const refreshPersonas = () =>
  db
    .then(openPersonaStore)
    .then(getAllPersonas)
    .then((ps) => (personas.value = ps));
refreshPersonas();

fetchPersona()
  .then((ps) => db.then(openPersonaStore).then(addAllPersonas(ps ?? [])))
  .then(refreshPersonas);
//#endregion

//#region Share app
const canShare = computed(() => navigator.canShare());
const shareApp = () =>
  navigator.share({
    text: "Checkout this PWA",
    title: "Legendary Fiesta",
    url: location.href,
  });
//#endregion
</script>

<style scoped>
.shareable {
  cursor: pointer;
  text-decoration: underline;
}
</style>
