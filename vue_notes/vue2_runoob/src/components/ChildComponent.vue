<template>
  <div class="child-component">
    <button @click="handleClick">Trigger Custom Event</button>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  methods: {
    handleClick () {
      // 触发自定义事件 'customEvent'，并传递一个数据对象
      this.$emit('customEvent', { message: 'Hello from Child!' })
    }
  }
}
</script>

<style scoped>
.child-component {
  /* 子组件样式 */
  border: 1px solid #ccc;
}
</style>
