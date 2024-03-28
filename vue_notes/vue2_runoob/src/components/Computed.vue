<template>
  <div class="computed">
    {{ message.split('').reverse().join('') }}
    <p>原始字符串：{{ message }}</p>
    <p>计算后反转字符串：{{ reversedMessage }}</p>
    <p>使用方法后反转字符串: {{ reversedMessage2() }}</p>
    <!-- <form action="form-data" v-on:submit.prevent="onSubmit"></form>
    <input v-model="message">
    <p>使用方法后反转字符串: {{ message }}</p>
    <button v-on:click="reversedMessage2">反转字符串</button> -->
    <p v-for="(value, key) in site" v-bind:key="key">
      {{ key }} : {{ value }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'computed',
  data () {
    return {
      message: 'Runoob!',
      name: 'Google',
      url: 'http:www.google.com'
    }
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    },
    site: {
      get: function () {
        return this.name + ' ' + this.url
      },
      set: function (newValue) {
        let names = newValue.split('')
        console.log(names)
        this.name = names[0]
        this.url = names[names.length - 1]
      }
    }
  },
  methods: {
    reversedMessage2: function () {
      return this.message.split('').reverse().join('')
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
