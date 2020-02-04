import React from 'react'

const Games = () => {
    return(
        <div>Games module</div>
    )
}

export default [
    {
        routeProps: {
            path: '/games',
            component: Games
        },
        name: 'Games'
    }
]