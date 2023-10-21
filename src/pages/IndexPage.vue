<template>
  <q-page class="flex flex-center">

    <q-card class="" v-if="decision && decision.answer">
      <q-img  style="width: 100vw; height: 100vh;min-width: 350px;" :src="decision.image">
        <div class="absolute-top text-subtitle2 text-center">
          <h1>{{decision.answer}}</h1>
        </div>
        <div class="absolute-bottom text-subtitle2 text-center">
          <Btn />
        </div>
      </q-img>
    </q-card>

    <div class="full-width text-center text-purple"
         v-else
         style="width: 100vw; height: 100vh;">
      <h1>Press the button</h1>
      <h5>to make a decision</h5>
      <Btn />
    </div>


  </q-page>

</template>

<script>
import {computed, defineComponent, ref} from 'vue'
import Btn from "components/Btn.vue";
import {useAppStore} from "stores/app-store";

export default defineComponent({
  name: 'IndexPage',
  components: {Btn},
  setup () {
    const store = useAppStore();
    const decision = computed(() => store.decision);
    return {
      decision
    }
  }
})
</script>
