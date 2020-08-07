<!--
 * @Author: your name
 * @Date: 2020-07-29 09:20:47
 * @LastEditTime: 2020-07-29 10:58:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sharing\Vue\valueshare\src\components\Sun.vue
--> 
<template>
  <p>{{Obj.text}}</p>
</template>

<script>
export default {
  name: 'sun',
  inject: ['obj'],
  data() {
    return { Obj: this.obj }
  },
  computed: {
    a() {
      return this.obj.text
    },
  },
  mounted () {
      console.log(typeof(this.Obj))
  }
}
</script>

<style>
</style>