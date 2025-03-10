import { ComponentProps, ReactNode } from "react";

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

  return (
    <button 
      {...props} 
      className={`h-24 w-22 flex items-center justify-center border rounded-lg ${songOnPlay ? 'bg-cyan-600' : ' bg-cyan-200' } hover:bg-cyan-300 text-cyan-900`}
    >
      {icon}
    </button>
  )
}