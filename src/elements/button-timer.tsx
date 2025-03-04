import type { ReactNode, ComponentProps } from "react"

interface ButtonTimerProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function ButtonTimer({ children, ...props }: ButtonTimerProps ) {
  return (
    <button
      {...props}
      className='flex items-center justify-center p-2 text-cyan-200 hover:text-cyan-300 border rounded-lg'
    >
      {children}
    </button>
  )
}