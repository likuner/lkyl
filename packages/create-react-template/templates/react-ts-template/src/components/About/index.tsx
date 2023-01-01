import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Result, Space, Typography } from 'antd'
import { useWeek } from '@/hooks/useWeek'

const { Text } = Typography

const About: React.FC = () => {
  const { title = '🥤这是 About 组件' } = useParams()

  const week = useWeek()

  const navigate = useNavigate()

  return (
    <Result
      title={title}
      extra={
        <Space size="middle" direction="vertical">
          <Text type="warning">{week}</Text>
          <Button type="primary" onClick={() => navigate('/')}>Back Home</Button>
        </Space>
      }
    />
  )
}

export default About