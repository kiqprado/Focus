import type { ReactNode, ComponentProps } from 'react'

import { useMediaRange } from '../utils/breakpoint-hook'

interface ButtonTimerProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function ButtonTimer({ children, ...props }: ButtonTimerProps ) {
  //Query's Media Range
  const isMobileSM = useMediaRange('mobileSM')
  const isMobileMD = useMediaRange('mobileMD')
  const isMobileLG = useMediaRange('mobileLG')
  const isTabletMD = useMediaRange('tabletMD')
  const isTabletLG = useMediaRange('tabletLG')

  const mobileRangeFull = isMobileSM || isMobileMD || isMobileLG
  const tabletRangeFull = isTabletMD || isTabletLG

  return (
    <button
      {...props}
      className={`flex items-center justify-center 
        ${mobileRangeFull || tabletRangeFull ? 'px-4 py-2' : 'p-2'}
      text-cyan-200 hover:text-cyan-300 border rounded-lg`}
    >
      {children}
    </button>
  )
}