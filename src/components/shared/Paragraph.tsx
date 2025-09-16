interface ParagraphProps {
    text: string,
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
    return (
        <p className="text-small_text text-center">{text}</p>
    )
}

export default Paragraph
