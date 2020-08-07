<!--
 * @Author: your name
 * @Date: 2020-07-29 18:37:10
 * @LastEditTime: 2020-07-29 19:07:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sharing\Vue\valueshare\src\components\broA.vue
--> 
<template>
  <div>
    <label for="">我是A组件</label>
    <p>num:{{num}}</p>
    <p>deg:{{deg}}</p>
    <button @click="decrease">-</button>
  </div>
</template>

<script>
import { EventBus } from '../event-bus'
export default {
  name: 'Decrease',
  data() {
    return {
      num: 1,
      deg: 180,
    }
  },
  methods: {
    decrease() {
      EventBus.$emit('decreased', {
        num: this.num,
        deg: this.deg,
      })
    },
  },
  mounted() {
    EventBus.$on('incremented', ({ num, deg }) => {
      console.log('A incremented', num, deg)
      this.num ++
      this.deg ++
    })
    EventBus.$on('decreased', ({ num, deg }) => {
      console.log('A decreased', num, deg)
    })
  },
}
</script>

<style>
</style>