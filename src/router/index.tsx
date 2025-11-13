import { RouteObject, useRoutes, Navigate } from 'react-router-dom'
// import Discover from '@/pages/discover'
import React from 'react'

const Discover = React.lazy(()=> import('@/pages/discover'))

const Recommend = React.lazy(()=> import('@/pages/discover/c-pages/recommend'))


const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to='/discover'/>,
    },
    {
        path: '/discover',
        element: <Discover />,
        children:[
            {
                path: '',
                element: <Navigate to='recommend'/>,
            },
            {
                path: 'recommend',
                element: <Recommend />,
            }
        ]
    }
]

export const useAppRoutes = () => useRoutes(routes);