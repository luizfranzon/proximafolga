import { useEffect, useState } from "react"
import 'dayjs/locale/pt-br'

export default function Home() {

  const [nextDayOff, setNextDayOff] = useState("")
  const [nextDayOffDate, setNextDayOffDate] = useState("")

  useEffect(() => {
    const dayjs = require("dayjs")
    dayjs.locale("pt-br")

    var utc = require('dayjs/plugin/utc')
    var timezone = require('dayjs/plugin/timezone')
    var relativeTime = require('dayjs/plugin/relativeTime')

    dayjs.extend(utc)
    dayjs.extend(timezone)
    dayjs.extend(relativeTime)

    dayjs.tz.setDefault("America/Sao_Paulo")

    const now = dayjs() //.format('DD/MM/YYYY')
    let DayOff = dayjs("2023-01-31")
    let workedDays = now.diff(DayOff, 'day')

    while (DayOff < now) {
      DayOff = DayOff.add(6, 'day')
    }

    setNextDayOffDate(DayOff.format('DD/MM - dddd'))

    if (workedDays % 6 == 0) {
      setNextDayOff("Hoje")
    } else if (workedDays % 5 == 0) {
      setNextDayOff("Amanhã")
    } else {
      setNextDayOff(`em ${6 - workedDays} dias`)
    }
  }, [])

  return (
    <div className="text-white flex flex-col items-center justify-center h-screen gap-4 px-4">
      <h1 className="text-3xl text-center xl:text-6xl font-bold text-[#c4a7e7]">Quando é a próxima folga do Luiz?</h1>
      <span className="text-3xl text-center xl:text-6xl font-medium italic">{nextDayOff}.</span>
      <span className="text-3xl text-white/60 text-center xl:text-4xl font-medium italic">{nextDayOffDate}.</span>
    </div>
  )
}
