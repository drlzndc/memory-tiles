import Paragraph from '../shared/Paragraph'


interface LevelProps {
    value: number
}

const Level: React.FC<LevelProps> = ({ value }) => {
    return (
        <Paragraph text={`Level ${value}`} />
    )
}

export default Level
