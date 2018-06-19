import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: resolve => require(['@/views/login/index'], resolve), hidden: true },
  { path: '/404', component: resolve => require(['@/views/404'], resolve), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: '/dashboard',
      component: resolve => require(['@/views/dashboard/index'], resolve),

    }]
  },
  {
    path: '/index',
    component: Layout,
    children: [
      {
        path: 'page',
        name: 'kongzhitai',
        component: resolve => require(['@/views/dashboard/index'], resolve),
        meta: { title: '控制台', icon: 'form' }
      }
    ]
  },
  {
    path: '/minipro',
    component: Layout,
    redirect: '/minipro/index',
    name: 'minipro',
    meta: { title: '小程序/公众号', icon: 'form' },
    children: [
      {
        path: 'index',
        name: 'xiaochengxu',
        component: resolve => require(['@/views/minipro/index'], resolve),
        meta: { title: '小程序', icon: 'form' }
      },{
        path: 'index2',
        name: 'gongzhonghao',
        component: resolve => require(['@/views/form/index'], resolve),
        meta: { title: '公众号', icon: 'form' }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'orderCenter',
        component: resolve => require(['@/views/form/index'], resolve),
        meta: { title: '订单中心', icon: 'form' }
      }
    ]
  },
  {
    path: '/slist',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'serverList',
        component: resolve => require(['@/views/form/index'], resolve),
        meta: { title: '服务列表', icon: 'form' }
      }
    ]
  },
  {
    path: '/clist',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'customList',
        component: resolve => require(['@/views/form/index'], resolve),
        meta: { title: '客户列表', icon: 'form' }
      }
    ]
  },
  {
    path: '/finCenter',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'financialCenter',
        component: resolve => require(['@/views/form/index'], resolve),
        meta: { title: '财务中心', icon: 'form' }
      }
    ]
  },
  {
    path: '/numCenter',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'numCenter',
        component: resolve => require(['@/views/form/index'], resolve),
        meta: { title: '数据统计', icon: 'form' }
      }
    ]
  },
  {
    path: '/powerControl',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'powerControl',
        component: resolve => require(['@/views/form/index'], resolve),
        meta: { title: '权限控制', icon: 'form' }
      }
    ]
  },


  /*模板*/
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: resolve => require(['@/views/table/index'], resolve),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: resolve => require(['@/views/tree/index'], resolve),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: resolve => require(['@/views/form/index'], resolve),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },


  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

