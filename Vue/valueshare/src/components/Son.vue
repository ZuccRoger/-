<!--
 * @Author: your name
 * @Date: 2020-07-29 07:18:26
 * @LastEditTime: 2020-07-30 18:56:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sharing\Vue\valueshare\src\components\HelloWorld.vue
--> 
<template>
  <div>
    <div>{{data}}</div>
    <button @click="handleClick"></button>
    <sun></sun>
  </div>
</template>

<script>
import sun from "./Sun";
export default {
  components: {
    sun,
  },
  props: {
    data: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  methods: {
    handleClick: function () {
      this.$emit("childMethod", "监听器监听到了:'star'函数被触发");
      // alert("用emit触发 'star' 自定义事件，已经传给监听器");
    },
  },
};
</script>

<style>
</style>