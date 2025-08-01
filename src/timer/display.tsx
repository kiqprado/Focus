import { format } from 'date-fns'

import { useMediaRange } from '../utils/breakpoint-hook'

interface DisplayTimer {
  timeToSpend: number
}

export function DisplayTimer({ timeToSpend } : DisplayTimer) {
  const time = new Date(0)
  time.setSeconds(timeToSpend)

  const formattedTime = format(time, 'mm:ss')

  //Query's Media Range
  const isMobileSM = useMediaRange('mobileSM')
  const isMobileMD = useMediaRange('mobileMD')
  const isMobileLG = useMediaRange('mobileLG')
  const isTabletMD = useMediaRange('tabletMD')
  const isTabletLG = useMediaRange('tabletLG')

  const mobileRangeFull = isMobileSM || isMobileMD || isMobileLG
  const tabletRangeFull = isTabletMD || isTabletLG
  
  return (
      <h1 
        className={`text-9xl ${mobileRangeFull || tabletRangeFull ? '' : 'tracking-wider'}
          text-blue-100  tabular-nums text-neon`}
      >
        {formattedTime}
      </h1>
  )
}