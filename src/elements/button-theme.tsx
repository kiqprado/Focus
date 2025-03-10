import { ComponentProps, ReactNode } from "react";

import { FlameKindling, CloudHail, Shrub, Store } from 'lucide-react'

interface ButtonThemeProps extends ComponentProps<"button"> {
  icon: ReactNode;
  music: string;
  songOnPlay?: boolean;
}

export const themes: ButtonThemeProps[] = [
  { icon: <FlameKindling className="size-10" />, music: "/sounds/fire.mp3" },
  { icon: <CloudHail className="size-10" />, music: "/sounds/rain.mp3" },
  { icon: <Shrub className="size-10" />, music: "/sounds/fire.mp3" },
  { icon: <Store className="size-10" />, music: "/sounds/fire.mp3" },
];

export function ButtonTheme({ 
  icon, 
  songOnPlay, 
  ...props
} : ButtonThemeProps) {

  return (
    <button 
      {...props} 
      className={`h-24 w-22 flex items-center justify-center border rounded-lg ${songOnPlay ? 'bg-purple-500' : ' bg-cyan-200' } hover:bg-cyan-300 text-cyan-900`}
    >
      {icon}
    </button>
  )
} 