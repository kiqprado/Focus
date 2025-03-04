import { ComponentProps, ReactNode } from "react";


interface ButtonThemeProps extends ComponentProps<'button'> {
  children: ReactNode
} 

export function ButtonTheme({children} : ButtonThemeProps) {
  return (
    <button className='h-24 w-22 flex items-center justify-center border rounded-lg bg-cyan-200 hover:bg-cyan-300 text-cyan-900'>
      {children}
    </button>
  )
}