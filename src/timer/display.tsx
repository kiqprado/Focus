import { format } from 'date-fns'

interface DisplayTimer {
  timeToSpend: number
}

export function DisplayTimer({ timeToSpend } : DisplayTimer) {
  const time = new Date(0)
  time.setSeconds(timeToSpend)

  const formattedTime = format(time, 'mm:ss')
  
  return (
      <h1 className='text-9xl text-blue-100'>{formattedTime}</h1>
  )
}