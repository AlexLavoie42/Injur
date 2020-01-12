import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import firebase from 'firebase'
import Admin from "../components/Admin";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeForm_Witnesses2 from "../components/EmployeeForm_Witnesses2";
import EmployeeForm_Basic3 from "../components/EmployeeForm_Basic3";
import EmployeeForm_IncType4 from "../components/EmployeeForm_IncType4";
import EmployeeForm_Adv5 from "../components/EmployeeForm_Adv5";
import EmployeeForm_InjType6 from "../components/EmployeeForm_InjType6";
import Tip from "../components/Tip";
import IncidentList from "../components/IncidentList";
import ThankyouMessage from "../components/ThankyouMessage";
import ManagerView from "../components/ManagerView";

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
            path: '/manager',
            name: 'Manager',
            component: ManagerView,
            meta: {
                requiresAuth: true
            }
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
            path: "/admin",
            name: "Admin",
            component: Admin
        },
        {
            path: "/tip",
            name: "Tip",
            component: Tip
        },
        {
            path: "/reports",
            name: "Reports",
            component: IncidentList
        },
        {
            path: "/employeeform",
            name: "EmployeeForm",
            component: EmployeeForm,
            // meta: {
            //     requiresAuth: true
            // }
        },
        {
            path: "/employeeform_witness",
            name: "EmployeeForm_Witnesses2",
            component: EmployeeForm_Witnesses2
            // meta: {
            //     requiresAuth: true
            // }
        },
        {
            path: "/employeeform_basic",
            name: "EmployeeForm_Basic3",
            component: EmployeeForm_Basic3
            // meta: {
            //     requiresAuth: true
            // }
        },
        {
            path: "/employeeform_type",
            name: "EmployeeForm_IncType4",
            component: EmployeeForm_IncType4
            // meta: {
            //     requiresAuth: true
            // }
        },
        {
            path: "/employeeform_adv",
            name: "EmployeeForm_Adv5",
            component: EmployeeForm_Adv5
            // meta: {
            //     requiresAuth: true
            // }
        },
        {
            path: "/thankyou",
            name: "ThankYou",
            component: ThankyouMessage
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