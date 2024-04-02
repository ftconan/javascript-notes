<template>
  <div class="watch">
    <p style="font-size: 25px;">计数器：{{ counter }}</p>
    <button @click="counter++" style="font-size: 15px;">点我</button>
    <br><br>
    千米：<input type="text" v-model="kilometers">
    米：<input type="text" v-model="meters">
    <p id="info">修改前值为: {{ kilometers }}，修改后值为: {{ meters }}</p>
  </div>
</template>

<script>
export default {
  name: 'condition',
  data () {
    return {
      counter: 1,
      kilometers: 0,
      meters: 0
    }
  },
  methods: {

  },
  watch: {
    counter (nval, oval) {
      alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!')
    },
    kilometers: function (nval, oval) {
      this.meters = nval * 1000
    },
    meters: function (nval, oval) {
      this.kilometers = nval / 1000
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
