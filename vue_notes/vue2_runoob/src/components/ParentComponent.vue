<!-- ParentComponent.vue -->
<template>
  <div id="parent-component">
    <h1>Parent Component</h1>
    <my-local-component title="Custom Title for Local Component" :key="componentKey"></my-local-component>
    <child-component @customEvent="handleCustomEvent"></child-component>
    <p v-if="receivedData">Received data: {{ receivedData.message }}</p>
    <br>
    <button @click="toggleItemVisibility">Toggle Item</button>
    <list-item v-for="(item, index) in items" :key="index" :itemText="item.text" :isVisible="item.isVisible" />
  </div>
</template>

<script>
import MyLocalComponent from './MyLocalComponent.vue'
import ChildComponent from './ChildComponent.vue'
import ListItem from './ListItem.vue'

export default {
  components: {
    MyLocalComponent,
    ChildComponent,
    ListItem
  },
  data () {
    return {
      componentKey: 999,
      receivedData: null,
      items: [
        { text: 'Item 1', isVisible: true },
        { text: 'Item 2', isVisible: false }
      ]
    }
  },
  methods: {
    handleCustomEvent (data) {
      // 父组件接收到子组件发出的 customEvent，并在此处理
      this.receivedData = data
    },
    toggleItemVisibility () {
      this.items[0].isVisible = !this.items[0].isVisible
    }
  }
}
</script>

<style scoped>
/* Parent component styles go here */
</style>
