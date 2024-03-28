<template>
  <div class="loop">
    <!-- <ol>
      <li v-for="site in sites" v-bind:key="site">
        {{ site.name }}
      </li>
    </ol> -->
    <ul>
      <template v-for="site1 in sites">
        <li v-if="true" :key="'index-' + site1.id">{{ site1.name }}</li>
        <li v-if="true" :key="'index-' + site1.id">--------------</li>
      </template>
    </ul>
    <ul>
      <li v-for="(value, key, index) in object" v-bind:key="value">
        {{ index }}. {{ key }} : {{ value }}
      </li>
    </ul>
    <ul>
      <li v-for="n in 10" :key="n">
        {{ n }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'loop',
  data () {
    return {
      sites: [
        { name: 'Runoob' },
        { name: 'Google' },
        { name: 'Taobao' }
      ],
      object: {
        name: '菜鸟教程',
        url: 'http://www.runoob.com',
        slogan: '学的不仅是技术，更是梦想！'
      }
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
