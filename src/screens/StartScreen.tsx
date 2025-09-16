import { texts } from '../constants/texts'

import type { Action } from '../types/Action'

import Title from '../components/shared/Title'
import Button from '../components/shared/Button'
import Paragraph from '../components/shared/Paragraph'


interface StartScreenProps {
    onStart: Action
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center">
                <Title text={texts.appTitle} />
                <Paragraph text={texts.instructions} />

                <Button label={texts.start} onClick={onStart} />
            </div>
        </div>
    )
}

export default StartScreen
