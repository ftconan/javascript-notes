import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Temp from '@/components/Temp'
import Condition from '@/components/Condition'
import Loop from '@/components/Loop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/temp',
      name: 'Temp',
      component: Temp
    },
    {
      path: '/condition',
      name: 'Condition',
      component: Condition
    },
    {
      path: '/loop',
      name: 'Loop',
      component: Loop
    }
  ]
})
