import React, { lazy } from 'react'
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'
import Layout from '../views/Layout'

const Home = lazy(() => import('../components/Home'))
const About = lazy(() => import('../components/About'))
const ErrorPage = lazy(() => import('../views/ErrorPage'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'home',
        element: <Navigate to='/' />
      },
      {
        path: 'about/:title?',
        element: <About />
      }
    ]
  }
]

export default createBrowserRouter(routes)