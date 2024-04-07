// highlightDirective.js
export default {
  bind (el, binding, vnode) {
    const highlightClass = binding.value || 'highlight' // 获取传入的高亮类名，默认为 'highlight'

    el.addEventListener('mouseenter', () => {
      el.classList.add(highlightClass)
    })

    el.addEventListener('mouseleave', () => {
      el.classList.remove(highlightClass)
    })
  }
}
