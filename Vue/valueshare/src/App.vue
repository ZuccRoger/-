<!--
 * @Author: your name
 * @Date: 2020-07-29 07:18:26
 * @LastEditTime: 2020-07-30 19:03:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sharing\Vue\valueshare\src\App.vue
--> 
<template>
  <div>
    <input type="number" v-model="text" />
    <son :data="Number(text)" @childMethod="parentMethods"></son>
    <!-- <bro-a></bro-a>
    <bro-b></bro-b>-->
  </div>
</template>

<script>
import son from "./components/Son";
// import broA from '../src/components/broA.vue'
// import broB from '../src/components/broB.vue'
// import { EventBus } from './event-bus.js'
export default {
  name: "parent",
  components: {
    son,
    // broA,
    // broB,
  },
  data() {
    return {
      text: 1,
    };
  },
  provide() {
    return { obj: { text: this.text } };
  },
  methods: {
    parentMethods() {
      this.text++;
    },
  },
  // mounted() {
  //   EventBus.$on('incremented', ({ num, deg }) => {
  //     console.log('App incremented', num, deg)
  //   })
  //   EventBus.$on('decreased', ({ num, deg }) => {
  //     console.log('App decreased', num, deg)
  //   })
  // },
};
</script>

<style>
</style>