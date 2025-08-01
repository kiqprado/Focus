import { useState, useEffect, useRef } from 'react'

import { DisplayTimer } from "../timer/display"

import { ButtonTimer } from "../elements/button-timer"
import { themes } from '../elements/themes'
import { ButtonTheme } from '../elements/button-theme'

import { useMediaRange } from '../utils/breakpoint-hook'

import { Play, Pause, Square, Plus, Minus } from 'lucide-react'

export function App() {
  const [ onPlay, setOnPlay ] = useState(false)
  const [ timeToSpend, setTimeToSpend ] = useState(1800)

  const intervalRef = useRef<number | null>(null)

  const [ activeSongPlaying, setActiveSongPlaying ] = useState<number | null>(null)
  const [ audioTheme, setAudioTheme ] = useState<HTMLAudioElement | null>(null)

  //Query's Media Range
  const isMobileSM = useMediaRange('mobileSM')
  const isMobileMD = useMediaRange('mobileMD')
  const isMobileLG = useMediaRange('mobileLG')
  const isTabletMD = useMediaRange('tabletMD')
  const isTabletLG = useMediaRange('tabletLG')

  const mobileRangeFull = isMobileSM || isMobileMD || isMobileLG
  const tabletRangeFull = isTabletMD || isTabletLG
  // const desktopRange = !mobileRangeFull && !tabletRangeFull

  function HandlePlayerTimer() {
    setOnPlay((prev) => !prev)
  }

  function HandleResetTimer() {
    setOnPlay(false)
    setTimeToSpend(1800)
  }

  function HandleDecrementTime() {
    setTimeToSpend((prev) => (prev >= 300 ? prev - 300 : 0))
  }

  function HandleIncrementTime() {
    setTimeToSpend((prev) => (prev <= 5700 ? prev + 300 : 6000))
  }

  function HandleSongPlaying(index: number) {
    if(activeSongPlaying === index) {
      audioTheme?.pause()
      setActiveSongPlaying(null)
      setAudioTheme(null)
    } else {
      audioTheme?.pause()
      const newAudio = new Audio(themes[index].music)
      newAudio.loop = true
      newAudio.play()
      setAudioTheme(newAudio)
      setActiveSongPlaying(index)
    }
  }

  useEffect(() => {
    if(!onPlay) {
      if(intervalRef.current !== null) {
        clearInterval(intervalRef.current)
      }
      return
    }
    
    intervalRef.current = setInterval(() => {
      setTimeToSpend((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => {
      if(intervalRef.current!== null) {
        clearInterval(intervalRef.current)
      }
    }
  },[onPlay])

  return (
    <div className='h-svh flex'>
      <div 
        className={`flex w-full ${mobileRangeFull || tabletRangeFull ? 'flex-col' : 'flex-row'} 
          gap-16 items-center justify-center relative`}
      >
        <div 
          className={`flex flex-col items-center gap-6`}
        >
          <DisplayTimer
            timeToSpend={timeToSpend}
          />
          <div className={`w-full flex justify-around`}>
            <ButtonTimer
              onClick={HandlePlayerTimer}
              title='Play / Pause'
            >
              { onPlay ? <Pause/> : <Play/> }
            </ButtonTimer>

            <ButtonTimer
              onClick={HandleResetTimer}
              title='Stop'
            >
             <Square/>
            </ButtonTimer>

            <ButtonTimer
              onClick={HandleDecrementTime}
              title='Sub 5 min'
            >
             <Minus/>
            </ButtonTimer>

            <ButtonTimer
              onClick={HandleIncrementTime}
              title='Add 5 min'
            >
             <Plus/>
            </ButtonTimer>
          </div>
        </div>

        <div 
          className={`flex gap-6 
            ${mobileRangeFull || tabletRangeFull ? 'flex-wrap' : 'flex-wrap max-w-56'}
            ${mobileRangeFull || tabletRangeFull ? 'absolute bottom-8' : ''}
            items-center justify-center`}
        >
          {themes.map((theme, index) => (
            <ButtonTheme
              title='Music Theme'
              key={index}
              icon={theme.icon}
              music={theme.music}
              songOnPlay={activeSongPlaying === index}
              onClick={() => HandleSongPlaying(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

