<template>
  <div class="form">
    <p>input 元素：</p>
    <input type="text" v-model="message" placeholder="编辑我……">
    <p>消息是: {{ message }}</p>
    <p>textarea 元素：</p>
    <p style="white-space: pre">{{ message2 }}</p>
    <textarea name="ta1" id="ta1" v-model="message2" placeholder="多行文本输入……" cols="30" rows="10"></textarea>

    <p>单个复选框：</p>
    <input type="checkbox" name="checkbox1" id="checkbox1" v-model="checked">
    <label for="checkbox1">{{ checked }}</label>

    <p>多个复选框：</p>
    <input type="checkbox" name="runoob" id="runoob" value="Runoob" v-model="checkedNames">
    <label for="Runoob">Runoob</label>
    <input type="checkbox" name="google" id="google" value="Google" v-model="checkedNames">
    <label for="google">Google</label>
    <input type="checkbox" name="taobao" id="taobao" value="Taobao" v-model="checkedNames">
    <label for="taobao">taobao</label>
    <br>
    <span>选择的值为: {{ checkedNames }}</span>

    <p>单选按钮：</p>
    <input type="radio" name="runoob" id="runoob" value="Runoob" v-model="picked">
    <label for="runoob">Runoob</label>
    <br>
    <input type="radio" name="google" id="google" value="Google" v-model="picked">
    <label for="google">Google</label>
    <br>
    <span>选中值为: {{ picked }}</span>

    <p>select 列表:</p>
    <select name="fruit" id="fruit" v-model="selected">
      <option value="">选择一个网站</option>
      <option value="www.runoob.com">Runoob</option>
      <option value="www.google.com">Google</option>
    </select>
    <div id="output">选择的网站是: {{ selected }}</div>
  </div>
</template>

<script>
export default {
  name: 'form',
  data () {
    return {
      message: 'Runoob',
      message2: '菜鸟教程\r\nhttp://www.runoob.com',
      checked: false,
      checkedNames: [],
      picked: 'Runoob',
      selected: ''
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
