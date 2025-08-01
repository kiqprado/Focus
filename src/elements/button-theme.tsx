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
    className={`
      ${mobileRangeFull || tabletRangeFull ? 'w-36 h-16' : 'h-24 w-22'} 
      flex items-center justify-center rounded-lg transition-all duration-300 ease-in-out transform
      text-white
      ${songOnPlay 
        ? 'bg-gradient-to-br from-fuchsia-700 via-purple-600 to-fuchsia-700 shadow-[0_0_12px_rgba(232,121,249,0.5)]' 
        : 'bg-gradient-to-br from-cyan-700 via-cyan-500 to-cyan-700 shadow-[0_0_10px_rgba(34,211,238,0.4)]'
      }
      hover:brightness-125 hover:scale-105 
      active:scale-100 active:brightness-150 
      active:shadow-[0_0_20px_rgba(255,255,255,0.5)]
      border border-white/20
    `}
  >
    {icon}
  </button>

  )
}
