<template>
  <div class="style1">
    <!-- <div class="static" v-bind:class="{ 'active': isActive, 'text-danger': hasError }"></div> -->
    <!-- <div v-bind:class="classObject"></div> -->
    <!-- <div v-bind:class="[activeClass, errorClass]"></div> -->
    <div v-bind:class="[errorClass, isActive ? activeClass : '']"></div>
    <!-- <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">菜鸟教程</div> -->
    <div v-bind:style="[baseStyles, overridingStyles]">菜鸟教程</div>
  </div>
</template>

<script>
export default {
  name: 'style1',
  data () {
    return {
      isActive: true,
      hasError: false,
      error: {
        value: true,
        type: 'fatal'
      },
      activeClass: 'active',
      errorClass: 'text-danger',
      activeColor: 'green',
      fontSize: 30,
      baseStyles: {
        color: 'green',
        fontSize: '30px'
      },
      overridingStyles: {
        'font-weight': 'bold'
      }
    }
  },
  methods: {

  },
  computed: {
    classObject: function () {
      return {
        // base: true,
        active: this.isActive && !this.hasError,
        'text-danger': this.error.value && this.error.type === 'fatal'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
  width: 100px;
  height: 100px;
  background: green;
}
.text-danger {
  background: red;
}
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
