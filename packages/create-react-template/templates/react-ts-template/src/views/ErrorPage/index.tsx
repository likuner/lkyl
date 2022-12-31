import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Result } from 'antd'

const ErrorPage: React.FC = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="😢 您访问的页面不存在~"
      extra={<Button type="primary" onClick={handleClick}>Back Home</Button>}
    />
  )
}

export default ErrorPage