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
      className={`flex items-center justify-center relative overflow-hidden
        ${mobileRangeFull || tabletRangeFull ? 'px-4 py-2' : 'p-2'}
        text-cyan-200 border rounded-lg transition-all duration-300 ease-in-out
        bg-gradient-to-r from-cyan-950 via-cyan-800 to-cyan-950
        hover:brightness-125 hover:scale-105 active:scale-95 active:brightness-150
      `}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}