<template>
  <div class="home">
    <h2>ENV: {{env}}</h2>
    <img alt="Vue logo" src="../assets/logo.png">
    <el-input ref="msg_box" placeholder="Please input" v-model="child_msg"></el-input>
    <HelloWorld :msg="child_msg">부모의 컨텐츠</HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      child_msg: 'Welcome to Your Vue.js App',
      env: process.env.VUE_APP_ENV,
    };
  },
  mounted() {
    this.$refs.msg_box.focus();
  },
};
</script>
