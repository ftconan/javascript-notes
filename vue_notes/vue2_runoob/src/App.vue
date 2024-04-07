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
    <h1>Axios Demo</h1>
    <button @click="fetchData">Fetch Data</button>
    <button @click="postData">Post Data</button>
    <pre v-if="responseData">{{ JSON.stringify(responseData, null, 2) }}</pre>
    <h1>Vue.js 响应接口 Demo</h1>
    <p>Count: {{ count }}</p>
    <button @click="incrementCounter">Increment Counter</button>
    <button @click="decrementCounter">Decrement Counter</button>
    <button @click="asyncUpdateCounter">Async Update Counter (+20 after 2 seconds)</button>
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
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
      'alexa': '10000',
      responseData: null,
      count: 0
    }
  },
  directives: {
    highlight: highlightDirective
  },
  methods: {
    details: function () {
      return this.site + ' - 学的不仅是技术，更是梦想！'
    },
    async fetchData () {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        this.responseData = response.data
      } catch (error) {
        console.error(error)
      }
    },
    async postData () {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
          title: 'foo',
          body: 'bar',
          userId: 1
        })
        this.responseData = response.data
      } catch (error) {
        console.error(error)
      }
    },
    incrementCounter () {
      this.count++
    },
    decrementCounter () {
      this.count--
    },
    asyncUpdateCounter () {
      setTimeout(() => {
        this.count += 20
      }, 2000)
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
