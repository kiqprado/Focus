interface DisplayTimer {
  timeToSpend: number
}

export function DisplayTimer({ timeToSpend } : DisplayTimer) {
  return (
    <h1 className='text-9xl text-blue-100'>{timeToSpend}</h1>
  )
}