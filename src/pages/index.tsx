import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('pt-br')
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)
dayjs.tz.setDefault('America/Sao_Paulo')

export default function Home() {
  const [nextDayOff, setNextDayOff] = useState('')
  const [nextDayOffDate, setNextDayOffDate] = useState('')

  useEffect(() => {
    const now = dayjs('2023-02-07')
    let dayOff = dayjs('2023-01-31')
    let lastDayOff

    while (dayOff < now) {
      dayOff = dayOff.add(6, 'day')
      lastDayOff = dayOff.subtract(6, 'day')
    }

    const workedDaysCurrentWeek = now.diff(lastDayOff, 'day')
    setNextDayOffDate(dayOff.format('DD/MM - dddd'))

    switch (workedDaysCurrentWeek) {
      case 1:
        setNextDayOff('em 5 dias')
        break
      case 2:
        setNextDayOff('em 4 dias')
        break
      case 3:
        setNextDayOff('em 3 dias')
        break
      case 4:
        setNextDayOff('em 2 dias')
        break
      case 5:
        setNextDayOff('Amanhã')
        break
      case 6:
        setNextDayOff('Hoje')
        break
    }
  }, [])

  return (
    <div className="text-white flex flex-col items-center justify-center h-screen gap-4 px-4">
      <h1 className="text-3xl text-center xl:text-6xl font-bold text-[#c4a7e7]">
        Quando é a próxima folga do Luiz?
      </h1>
      <span className="text-3xl text-center xl:text-6xl font-medium italic">
        {nextDayOff}.
      </span>
      <span className="text-3xl text-white/60 text-center xl:text-4xl font-medium italic">
        {nextDayOffDate}.
      </span>
    </div>
  )
}
