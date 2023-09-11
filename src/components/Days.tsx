import dayjs from 'dayjs'

export function Days() {
  const now = dayjs()
  const libertyDay = dayjs('2023-10-12')

  const daysRemaining = libertyDay.diff(now, 'day')

  return (
    <div className="fixed cursor-progress top-9 bg-white/10 px-12 py-4 rounded-xl">
      <span className="font-bold text-4xl text-white">
        {daysRemaining} dias restantes
      </span>
    </div>
  )
}
