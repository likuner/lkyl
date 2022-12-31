import React from 'react'
import { observer } from 'mobx-react'
import styles from './index.module.less'
import logo from '../../assets/logo.png'
import { Alert, Image, Input, Space } from 'antd'
import words from '../../store/words'

const Home: React.FC = () => {

  const handleChange = (e: any) => {
    words.setValue(e.target.value)
  }

  return (
    <Space direction="vertical" size="middle" className={styles.container}>
      <Image src={logo} width={100} />
      <Alert type="info" message={`${words.value}`} />
      <Input value={words.value} onChange={handleChange}/>
    </Space>
  )
}

export default observer(Home)