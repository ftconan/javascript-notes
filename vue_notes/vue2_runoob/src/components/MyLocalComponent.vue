<!-- MyLocalComponent.vue -->
<template>
  <div class="my-local-component">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <button @click="toggleMessage">Toggle Message</button>
  </div>
</template>

<script>
export default {
  name: 'MyLocalComponent',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      message: 'Hello from the local component!',
      isHidden: false
    }
  },
  methods: {
    toggleMessage () {
      this.isHidden = !this.isHidden
      this.message = this.isHidden ? 'Message hidden' : 'Hello from the local component!'
    }
  }
}
</script>

<style scoped>
.my-local-component {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
}
</style>
