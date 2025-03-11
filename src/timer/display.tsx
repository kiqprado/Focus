import { format } from 'date-fns'

interface DisplayTimer {
  timeToSpend: number
}

export function DisplayTimer({ timeToSpend } : DisplayTimer) {
  const time = new Date(0)
  time.setSeconds(timeToSpend)

  const formattedTime = format(time, 'mm:ss')
  
  return (
      <h1 className='min-w-108 text-9xl text-center text-blue-100 tracking-wider tabular-nums'>
        {formattedTime}
      </h1>
  )
}