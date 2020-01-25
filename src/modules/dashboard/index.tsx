import React from 'react'

const Dashboard = () => {
    return(
        <div>Dashboard module</div>
    )
}

export default {
    routeProps: { //To be passed to react-router
        path: '/dashboard',
        exact: true,
        component: Dashboard
    },
    name: 'Dashboard'
}