<!--
 * @Author: your name
 * @Date: 2020-07-29 18:37:15
 * @LastEditTime: 2020-07-29 19:08:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sharing\Vue\valueshare\src\components\broB.vue
--> 
<template>
  <div>
    <label for="">我是B组件</label>
    <p>num:{{num}}</p>
    <p>deg:{{deg}}</p>
    <button @click="increment">++</button>
  </div>
</template>

<script>
import { EventBus } from '../event-bus'
export default {
  name: 'increase',
  data() {
    return {
      num: 1,
      deg: 180,
    }
  },
  methods: {
    increment() {
      EventBus.$emit('incremented', {
        num: this.num,
        deg: this.deg,
      })
    },
  },
  mounted() {
    EventBus.$on('incremented', ({ num, deg }) => {
      console.log('B incremented', num, deg)
    })
    EventBus.$on('decreased', ({ num, deg }) => {
      console.log('B decreased', num, deg)
      this.num--
      this.deg--
    })
  },
}
</script>

<style>
</style>