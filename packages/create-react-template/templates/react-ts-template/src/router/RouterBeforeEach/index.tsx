import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

// 全局路由守卫
const RouterBeforeEach: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // console.log(location, 'location')
    // if (location.pathname.includes('/about')) {
    //   navigate('/')
    // }
  }, [location, navigate])

  return (
    <Outlet />
  )
}

export default RouterBeforeEach