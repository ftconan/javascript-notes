<template>
  <div class="temp">
    <div>{{ msg }}</div>
    <label for="r1">修改颜色</label><input type="checkbox" v-model="use" id="r1">
    <br><br>
    <div v-bind:class="{'class1': use}"></div>
    {{ 5+5 }}<br>
    {{ ok ? 'Yes' : 'No' }}<br>
    {{ message.split('').reverse().join('') }}<br>
    <div v-bind="'list-' + id ">菜鸟教程</div>
    <p v-if="seen">现在你看到我了</p>
    <pre><a v-bind:href="url">菜鸟教程</a></pre>
    <form action="form-data" v-on:submit.prevent="onSubmit"></form>
    <input v-model="message">
    <p>{{ message | capitalize }}</p>
    <button v-on:click="reverseMessage">反转字符串</button>
  </div>
</template>

<script>
export default {
  name: 'temp',
  data () {
    return {
      msg: '<h1>菜鸟教程</h1>',
      use: false,
      ok: true,
      message: 'Runoob',
      id: 1,
      url: 'http://www.runoob.com'
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) {
        return ''
      }
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
