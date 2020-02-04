import Login from '../../components/login/login'
import SignUp from '../../components/signup/signup'

export default [
    {
        routeProps: {
            path: '/login',
            component: Login
        },
        name: 'Login'
    },
    {
        routeProps: {
            path: '/signup',
            component: SignUp
        },
        name: 'Sign Up'
    }
]