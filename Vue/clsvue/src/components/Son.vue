<!--
 * @Author: your name
 * @Date: 2020-07-29 11:21:00
 * @LastEditTime: 2020-07-29 11:45:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sharing\Vue\clsvue\src\components\Son.vue
--> 
<template>
    <Sun></Sun>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Sun from './Sun.vue'
@Component({
  components: {
    Sun,
  },
})
export default class Son extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
