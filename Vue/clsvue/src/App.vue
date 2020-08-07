<template>
  <div id='app'>
    <Son></Son>
    <div>
      <label>祖先:</label>
      <input type="text"
             v-model="one">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, ProvideReactive } 
from 'vue-property-decorator'
import Son from './components/Son.vue'
@Component({
  components: {
    Son,
  },
})
export default class App extends Vue {
  @ProvideReactive() one = 'value'
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
