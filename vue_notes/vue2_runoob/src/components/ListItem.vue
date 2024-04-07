<!-- ListItem.vue -->
<template>
  <transition name="fade">
    <div v-if="isVisible" class="list-item">
      {{ itemText }}
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    itemText: {
      type: String,
      required: true
    },
    isVisible: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
