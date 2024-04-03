import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Temp from '@/components/Temp'
import Condition from '@/components/Condition'
import Loop from '@/components/Loop'
import Computed from '@/components/Computed'
import Watch from '@/components/Watch'
import Style from '@/components/Style'
import Event from '@/components/Event'
import Form from '@/components/Form'
import Module from '@/components/Module'

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
    },
    {
      path: '/computed',
      name: 'Computed',
      component: Computed
    },
    {
      path: '/watch',
      name: 'Watch',
      component: Watch
    },
    {
      path: '/style',
      name: 'Style',
      component: Style
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/module',
      name: 'Module',
      component: Module
    }
  ]
})
