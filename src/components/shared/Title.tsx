interface TitleProps {
    text: string
}

const Title: React.FC<TitleProps> = ({ text }) => {
    return (
        <h1 className="text-large_text text-center">{text}</h1>
    )
}

export default Title
