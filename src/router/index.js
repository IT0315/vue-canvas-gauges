import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Gauges from '@/components/gauges'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Gauges',
      component: Gauges
    }
  ]
})
