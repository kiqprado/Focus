import { ComponentProps, ReactNode } from 'react'

import { useMediaRange } from '../utils/breakpoint-hook'

interface ButtonThemeProps extends ComponentProps<"button"> {
  icon: ReactNode;
  music: string;
  songOnPlay?: boolean;
}

export function ButtonTheme({ 
  icon, 
  songOnPlay, 
  ...props
} : ButtonThemeProps) {

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
      className={`${mobileRangeFull || tabletRangeFull ? 'w-36 h-16' : 'h-24 w-22'} 
        flex items-center justify-center border rounded-lg 
        ${songOnPlay ? 'bg-cyan-600' : ' bg-cyan-200' } hover:bg-cyan-300 text-cyan-900`}
    >
      {icon}
    </button>
  )
}
