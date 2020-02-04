import React from 'react'

const Analytics = () => {
    return(
        <div>Analytics module</div>
    )
}

export default [
    {
        routeProps: {
            path: '/analytics',
            component: Analytics
        },
        name: 'Analytics'
    }
]