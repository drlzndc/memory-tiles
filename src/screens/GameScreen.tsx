import type { Action } from '../types/Action'

import Level from '../components/game/Level'
import Grid from '../components/game/Grid'


interface GameScreenProps {
    level: number
    onComplete: Action
    onFail: Action
}

const GameScreen: React.FC<GameScreenProps> = ({ level, onComplete, onFail }) => {
    return (
        <div className='flex flex-col justify-center gap-5 h-screen'>
            <Level value={level} />
            <Grid level={level} onComplete={onComplete} onFail={onFail} />
        </div>
    )
}

export default GameScreen
