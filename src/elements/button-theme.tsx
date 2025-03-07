import { ComponentProps, ReactNode } from "react";


interface ButtonThemeProps extends ComponentProps<'button'> {
  children: ReactNode
  songOnPlay: boolean
} 

export function ButtonTheme({children, songOnPlay,  ...props} : ButtonThemeProps) {
  return (
    <button 
      {...props} 
      className={`h-24 w-22 flex items-center justify-center border rounded-lg ${songOnPlay ? 'bg-purple-500' : ' bg-cyan-200' } hover:bg-cyan-300 text-cyan-900`}
    >
      {children}
    </button>
  )
} 