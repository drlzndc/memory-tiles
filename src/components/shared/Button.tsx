import type { Action } from '../../types/Action'


interface ButtonProps {
    label: string
    onClick: Action
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="
                px-6 py-3 m-6 rounded-lg cursor-pointer
              text-dark_text bg-dark_button hover:bg-light_button
            "
        >
            {label}
        </button>
    )
}

export default Button
