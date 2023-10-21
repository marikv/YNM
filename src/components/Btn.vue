<script setup>

import {api} from "boot/axios";
import {useAppStore} from "stores/app-store";

const store = useAppStore();

function makeDecision() {
  api.get('https://yesno.wtf/api')
    .then(response => {
      console.log(response.data);
      const answer = response.data.answer
      const image = response.data.image
      const decision = {
        answer,
        image
      };
      store.setDecision(decision);
    })
    .catch(error => {
      console.log(error)
    });
}
</script>

<template>
  <q-btn
    color="purple"
    icon="mouse"
    size="xl"
    @click="makeDecision()"
    round></q-btn>
</template>

<style scoped>

</style>
