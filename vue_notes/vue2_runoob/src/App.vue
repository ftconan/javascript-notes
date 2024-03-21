<template>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div> -->
  <!-- <div class="hello">
    <h1>{{ msg }}</h1>
  </div> -->
  <div id="vue_det">
    <h3>site:{{ site }}</h3>
    <h3>url:{{ url }}</h3>
    <h3>{{ details() }}</h3>
  </div>
</template>

<script>
export default {
  name: 'vue_det',
  // data () {
  //   return {
  //     'msg': '欢迎来到菜鸟教程！'
  //   }
  // }
  data () {
    return {
      'site': '菜鸟教程',
      'url': 'www.runoob.com',
      'alexa': '10000'
    }
  },
  methods: {
    details: function () {
      return this.site + ' - 学的不仅是技术，更是梦想！'
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
