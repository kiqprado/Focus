import { useState, useEffect, useRef } from 'react'

import { Play, Pause, Square, Plus, Minus } from 'lucide-react'

import { DisplayTimer } from "../timer/display"
import { ButtonTimer } from "../elements/button-timer"
import { ButtonTheme, themes } from '../elements/button-theme'

export function App() {
  const [ onPlay, setOnPlay ] = useState(false)
  const [ timeToSpend, setTimeToSpend ] = useState(1800)

  const intervalRef = useRef<number | null>(null)

  const [ activeSongPlaying, setActiveSongPlaying ] = useState<number | null>(null)
  const [ audioTheme, setAudioTheme ] = useState<HTMLAudioElement | null>(null)

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
    <div>
      <div className='h-screen flex items-center justify-center gap-16'>
        <div className='flex flex-col gap-6 px-4'>
          <DisplayTimer
            timeToSpend={timeToSpend}
          />

          <div className='flex items-center justify-between px-2'>
            <ButtonTimer
              onClick={HandlePlayerTimer}
            >
             { onPlay ? <Pause/> : <Play/> }
            </ButtonTimer>

            <ButtonTimer
              onClick={HandleResetTimer}
            >
             <Square/>
            </ButtonTimer>

            <ButtonTimer
              onClick={HandleDecrementTime}
            >
             <Minus/>
            </ButtonTimer>

            <ButtonTimer
              onClick={HandleIncrementTime}
            >
             <Plus/>
            </ButtonTimer>
          </div>
        </div>

        <div className="max-w-48 flex gap-4 flex-wrap">
          {themes.map((theme, index) => (
            <ButtonTheme
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

