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
import ParentComponent from '@/components/ParentComponent'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history', // 使用 HTML5 History 模式
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
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
      path: '/pc',
      name: 'ParentComponent',
      component: ParentComponent
    }
  ]
})
