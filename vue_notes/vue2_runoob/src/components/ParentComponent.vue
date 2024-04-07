<!-- ParentComponent.vue -->
<template>
  <div id="parent-component">
    <h1>Parent Component</h1>
    <my-local-component title="Custom Title for Local Component" :key="componentKey"></my-local-component>
  </div>
</template>

<script>
import MyLocalComponent from './MyLocalComponent.vue'

export default {
  components: {
    MyLocalComponent
  },
  data () {
    return {
      componentKey: 0
    }
  }
}
</script>

<style scoped>
/* Parent component styles go here */
</style>
