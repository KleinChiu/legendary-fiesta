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
</template>

<script setup lang="ts">
import { ref } from "vue";

import { Persona, User } from "../data";
import { sleep } from "../lib";
import { fetchPersona, login as signIn } from "../lib/network";

//#region Counter
const count = ref(0);
const increment = () => (count.value += 1);
//#endregion

//#region Login
const user = ref<User | null>(null);
const login = () => signIn().then((u) => (user.value = u));
//#endregion

//#region Persona
const personas = ref<Persona[] | null>(null);
Promise.all([fetchPersona(), sleep(3000)]).then(([p]) => (personas.value = p));
//#endregion
</script>
