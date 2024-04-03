<template>
  <div class="event">
    <button v-on:click="counter +=1">增加 1</button>
    <p>这个按钮被点击了 {{ counter }} 次。</p>
    <button v-on:click="greet">Greet</button>
    <button v-on:click="say('hi')">Say hi</button>
    <button v-on:click="say('what')">Say what</button>
    <!-- 阻止单击事件冒泡 -->
    <a v-on:click.stop="doThis"></a>
    <!-- 提交事件不再重载页面 -->
    <form v-on:submit.prevent="onSubmit"></form>
    <!-- 修饰符可以串联  -->
    <a v-on:click.stop.prevent="doThat"></a>
    <!-- 只有修饰符 -->
    <form v-on:submit.prevent></form>
    <!-- 添加事件侦听器时使用事件捕获模式 -->
    <div v-on:click.capture="doThis">...</div>
    <!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
    <div v-on:click.self="doThat">...</div>
    <!-- click 事件只能点击一次，2.1.4版本新增 -->
    <a v-on:click.once="doThis"></a>
    <!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
    <input v-on:keyup.13="submit">
    <!-- 同上 -->
    <input v-on:keyup.enter="submit">
    <!-- 缩写语法 -->
    <input @keyup.enter="submit">
    <!-- Alt + C -->
    <input @keyup.alt.67="clear">
    <!-- Ctrl + Click -->
    <div @click.ctrl="doSomething">Do something</div>
  </div>
</template>

<script>
export default {
  name: 'event',
  data () {
    return {
      counter: 0,
      name: 'Vue.js'
    }
  },
  methods: {
    greet: function (event) {
      alert('Hello ' + this.name + '!')
      if (event) {
        alert(event.target.tagName)
      }
    },
    say: function (message) {
      alert(message)
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
