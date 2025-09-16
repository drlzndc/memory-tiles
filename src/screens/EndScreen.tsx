import { texts } from '../constants/texts'

import type { Action } from '../types/Action'

import Title from '../components/shared/Title'
import Button from '../components/shared/Button'
import Paragraph from '../components/shared/Paragraph'


interface EndScreenProps {
    level: number
    onRestart: Action
}

const EndScreen: React.FC<EndScreenProps> = ({ level, onRestart }) => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center">
                <Title text={texts.gameOver} />
                <Paragraph text={texts.levelReached.replace('{level}', level.toString())} />

                <Button label={texts.playAgain} onClick={onRestart} />
            </div>
        </div>
    )
}

export default EndScreen
