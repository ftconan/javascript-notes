<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <img src="./assets/logo.png">
    <!-- <h3>site:{{ site }}</h3>
    <h3>url:{{ url }}</h3>
    <h3>{{ details() }}</h3> -->
    <p v-highlight="'custom-highlight-class'">Hover over me to see the highlighting effect.</p>
    <p v-highlight>Hover over me too!</p>
    <router-view />
  </div>
</template>

<script>
import highlightDirective from '@/directives/highlightDirective' // 假设该文件位于项目中的 'directives' 目录下

export default {
  name: 'app',
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
  directives: {
    highlight: highlightDirective
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
.highlight {
  background-color: yellow;
}

.custom-highlight-class {
  background-color: lightblue;
}
</style>
