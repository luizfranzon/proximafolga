import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'

import Head from 'next/head'

dayjs.locale('pt-br')
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)
dayjs.tz.setDefault('America/Sao_Paulo')

export default function Home() {
  return (
    <>
      <Head>
        <title>Próxima folga do Luiz</title>
      </Head>
      <div className="text-white flex flex-col items-center justify-center h-screen bg-[#232136] gap-4 px-4">
        <h1 className="text-3xl text-center xl:text-6xl font-bold text-[#c4a7e7]">
          Quando é a próxima folga do Luiz?
        </h1>
        <span className="text-3xl text-center xl:text-6xl font-medium italic">
          TODO DIA AGORA
        </span>
        <span className="text-3xl text-white/60 text-center xl:text-4xl font-medium">
          liberdade cantou familia! 😎😎😎
        </span>
      </div>
    </>
  )
}
