import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import Reports from "../components/Reports";
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            redirect: "/dashboard"
        },
        {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    },
        {
            path: "/reports",
            name: "Reports",
            component: Reports
        }
]
});
router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

    if (requiresAuth && !currentUser) next('login')
    else next()
})
export default router