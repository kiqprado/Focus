import { useState, useEffect } from 'react'

import { Play, Pause, Square, Plus, Minus, Shrub, CloudHail, FlameKindling, Store } from 'lucide-react'

import { DisplayTimer } from "../timer/display"
import { ButtonTimer } from "../elements/button-timer"
import { ButtonTheme } from '../elements/button-theme'
export function App() {
  const [onPlay, setOnPlay ] = useState(false)
  const [timeToSpend, setTimeToSpend] = useState(3000)

  function HandlePlayerTimer() {
    setOnPlay((prev) => !prev)
  }

  function HandleResetTimer() {
    setOnPlay(false)
    setTimeToSpend(3000)
  }

  return (
    <div>
      <div className='h-screen flex items-center justify-center gap-16'>
        <div className='flex flex-col gap-6'>
          <DisplayTimer
            timeToSpend={timeToSpend}
          />

          <div className='flex items-center justify-between px-2'>
            <ButtonTimer
              onClick={HandlePlayerTimer}
            >
             { onPlay ? <Play/> : <Pause/>}
            </ButtonTimer>

            <ButtonTimer
              onClick={HandleResetTimer}
            >
             <Square/>
            </ButtonTimer>

            <ButtonTimer>
             <Plus/>
            </ButtonTimer>

            <ButtonTimer>
             <Minus/>
            </ButtonTimer>
          </div>
        </div>

        <div className='max-w-48 flex gap-4 flex-wrap'>
          <ButtonTheme>
            <FlameKindling className='size-10'/>
          </ButtonTheme>

          <ButtonTheme>
            <CloudHail className='size-10'/>
          </ButtonTheme>

          <ButtonTheme>
            <Shrub className='size-10'/>
          </ButtonTheme>

          <ButtonTheme>
            <Store className='size-10'/>
          </ButtonTheme>
        </div>
      </div>
    </div>
  )
}
