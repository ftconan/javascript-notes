<!-- ParentComponent.vue -->
<template>
  <div id="parent-component">
    <h1>Parent Component</h1>
    <my-local-component title="Custom Title for Local Component" :key="componentKey"></my-local-component>
    <child-component @customEvent="handleCustomEvent"></child-component>
    <p v-if="receivedData">Received data: {{ receivedData.message }}</p>
  </div>
</template>

<script>
import MyLocalComponent from './MyLocalComponent.vue'
import ChildComponent from './ChildComponent.vue'

export default {
  components: {
    MyLocalComponent,
    ChildComponent
  },
  data () {
    return {
      componentKey: 0,
      receivedData: null
    }
  },
  methods: {
    handleCustomEvent (data) {
      // 父组件接收到子组件发出的 customEvent，并在此处理
      this.receivedData = data
    }
  }
}
</script>

<style scoped>
/* Parent component styles go here */
</style>
