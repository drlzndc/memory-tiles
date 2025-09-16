import { useState } from 'react'

import type { Action } from './types/Action'
import type { ScreenName } from './types/ScreenName'

import StartScreen from './screens/StartScreen'
import GameScreen from './screens/GameScreen'
import EndScreen from './screens/EndScreen'


const App: React.FC = () => {
  const [level, setLevel] = useState<number>(1)
  const [screenName, setScreenName] = useState<ScreenName>('start')

  const startGame: Action = () => {
    setScreenName('game')
  }
  const increaseLevel: Action = () => {
    setLevel(level + 1)
  }
  const endGame: Action = () => {
    setScreenName('end')
  }
  const restartGame: Action = () => {
    setLevel(1)
    startGame()
  }

  const screens: Record<ScreenName, React.ReactNode> = {
    start: <StartScreen onStart={startGame} />,
    game: <GameScreen level={level} onComplete={increaseLevel} onFail={endGame} />,
    end: <EndScreen level={level} onRestart={restartGame} />
  }

  return screens[screenName]
}

export default App
