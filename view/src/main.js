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
import Tishu from './Tishu.vue'
import ZhibiaoDetail from './ZhibiaoDetail.vue'
import Iframe from './Iframe.vue'


// window.Vue = Vue

Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    router: new VueRouter({
        routes: [
            // check login
            {
                path: '',
                beforeEnter: function(to, form, next) {
                    // if login
                    next({
                        path: '/home'
                    })
                }
            }, {
                path: '/login',
                component: Login
            }, {
                path: '/frame',
                component: Frame,
                children: [{
                    path: '/ajax',
                    component: Ajax
                }, {
                    path: '/home',
                    component: Home
                }, {
                    path: '/charts',
                    component: Charts,
                }, {
                    path: '/charts/chart1',
                    component: Chart1
                }, {
                    path: '/tishu',
                    component: Tishu
                }, {
                    path: '/tishu/index/:id',
                    component: ZhibiaoDetail
                }, {
                    path: '/iframe/:src(.*)',
                    component: Iframe
                }, ]
            }, {
                path: '/tishu2', // ext
                component: Tishu
            }
        ]
    }),
}).$mount('#app')
