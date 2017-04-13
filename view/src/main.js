// vue
import Vue from 'vue'
import VueRouter from 'vue-router'

// view
import App from './App.vue'
import Ajax from './Ajax.vue'
import Login from './Login.vue'
import Frame from './Frame.vue'
import Home from './Home.vue'
import Charts from './Charts.vue'
import Chart1 from './Chart1.vue'
import indexConfig from './indexConfig.vue'
import DataView from './DataView.vue'
import Dimension from './Dimension.vue'
import Index from './Index.vue'
import Iframe from './Iframe.vue'
import UI from './UI.vue'


window.Vue = Vue

/* filter */
Vue.filter('date', function(v, f) {
    return String(v).match(/^\d+$/) ? new Date(v).format(f || 'yyyy-MM-dd HH:mm:ss') : ''
})


/* router */
Vue.use(VueRouter)
var router = new VueRouter({
    routes: [
        // check login
        {
            path: '/',
            beforeEnter: function(to, form, next) {
                // if login
                // next({
                //     path: '/home'
                // })
                router.replace('/home')
            }
        }, {
            path: '/login',
            component: Login
        }, {
            path: '/frame',
            component: Frame,
            children: [{
                meta: {
                    title: 'UI 组件'
                },
                path: '/ui',
                component: UI
            }, {
                meta: {
                    title: '接口测试'
                },
                path: '/ajax',
                component: Ajax
            }, {
                path: '/home',
                component: Home
            }, {
                meta: {
                    title: '实时报表'
                },
                path: '/charts',
                component: Charts,
            }, {
                meta: {
                    title: '报表'
                },
                path: '/charts/chart1',
                component: Chart1
            }, {
                meta: {
                    title: '指数配置'
                },
                path: '/indexConfig',
                component: indexConfig
            }, {
                meta: {
                    title: '指标'
                },
                path: '/index/:id',
                component: Index
            }, {
                meta: {
                    title: '数据视图'
                },
                path: '/dataview/:id',
                component: DataView
            }, {
                meta: {
                    title: '维度'
                },
                path: '/dimension/:id',
                component: Dimension
            }, {
                path: '/iframe/:src(.*)',
                component: Iframe
            }, ]
        }, {
            path: '/indexConfig2', // ext
            component: indexConfig
        }
    ]
})

/* vue root */
var app = new Vue({
    render: h => h(App),
    router: router,
}).$mount('#app')

window.app = app
