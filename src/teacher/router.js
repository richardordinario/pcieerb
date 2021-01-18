import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'TeacherDashboard',
        component: () => import('./views/Dashboard.vue'),
        // async beforeEnter(to, from, next) {
        //     try {
        //         var permission = await localStorage.getItem('auth')
        //         if(permission) {
        //             next()
        //         }
        //     } catch (error) {
        //         location.href = '/'
        //     }
        // },
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('auth')) {
                next()
            } else {
                next()
                location.href = '/';
            }
        },
        // meta: {teacher: true}
    },
    {
        path: '/dashboard',
        name: 'TeacherDashboard',
        component: () => import('./views/Dashboard.vue'),
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('auth')) {
                next()
            } else {
                location.href = '/';
            }
        },
        // meta: {teacher: true}
    },
    {
        path: '/subject',
        name: 'TeacherSubject',
        component: () => import('./views/Subject.vue'),
        beforeEnter: (to, from, next) =>{
            if (localStorage.getItem('auth')) {
                next()
            } else {
                location.href = '/';
            }
        },
        // meta: {teacher: true}

    },
    
]

const router = new VueRouter({
    mode: 'history',
    base: '/teacher/',
    routes
})

// function isAuth() {
//     return localStorage.getItem('auth')
// }

// router.beforeEach((to, from, next) => {
//     if(to.matched.some(record => record.meta.teacher)) {
//         if(!isAuth()) {
//             window.location.href = '/'
//         }else {
//             next()
//         }
//     }else {
//         next()
//     }
// })

export default router