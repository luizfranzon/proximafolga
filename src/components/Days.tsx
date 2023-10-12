import dayjs from 'dayjs'

export function Days() {
  const now = dayjs()
  const libertyDay = dayjs('2023-10-12')

  let cardText
  if (libertyDay.diff(now, 'day') === 0) {
    cardText = 'Hoje acaba!'
  } else if (libertyDay.diff(now, 'day') === 1) {
    cardText = 'Amanhã acaba!'
  } else {
    cardText = libertyDay.diff(now, 'day')
  }

  return (
    <div className="fixed cursor-progress top-9 bg-white/10 px-12 py-4 rounded-xl">
      <span className="font-bold text-4xl text-white">
        {cardText} dias restantes
      </span>
    </div>
  )
}
