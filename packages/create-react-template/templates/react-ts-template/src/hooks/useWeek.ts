import { useEffect, useState } from 'react'

export const useWeek = (time: number | Date = new Date()): string => {
  const [week, setWeek] = useState('')

  useEffect(() => {
    const weekArr: string[] = ['日', '一', '二', '三', '四', '五', '六']
    if (typeof time === 'number') {
      setWeek(weekArr[new Date(time).getDay()])
    } else {
      setWeek(weekArr[time.getDay()])
    }
  }, [time])

  return `星期${week}`
}