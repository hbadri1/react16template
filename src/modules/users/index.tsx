import React from 'react'

const Users = () => {
    return(
        <div>Users module</div>
    )
}

export default [
    {
        routeProps: {
            path: '/users',
            component: Users
        },
        name: 'Users'
    }
]