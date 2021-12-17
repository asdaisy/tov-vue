<template>
  <div class="about">
    <h1>This is an about me page</h1>
    who I am: {{$route.params.me}}, {{me}}
  </div>
</template>
<script>
export default {
  name: 'AboutMe',
  props: ['me'],
  created() {
    console.log('About Com Created');
  },
  mounted() {
    console.log('About Com Mounted');
  },
};
</script>
