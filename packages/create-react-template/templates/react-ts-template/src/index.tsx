import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import 'antd/dist/reset.css'

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <ConfigProvider locale={zhCN}>
    <React.StrictMode>
      <React.Suspense>
        <RouterProvider router={router} />
      </React.Suspense>
    </React.StrictMode>
  </ConfigProvider>
)
