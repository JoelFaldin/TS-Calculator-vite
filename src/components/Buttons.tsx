import styles from '../styles/Buttons.module.css'

interface BtnProps {
    text: string | number;
    identifier: string;
    onClick: (data: any) => void;
}

const Buttons: React.FC<BtnProps> = ({text, identifier, onClick}) => {
    const handleClick = () => {
        onClick(text)
    }
    return (
        <button id={identifier} onClick={handleClick} className={`${styles.button} column`}  >{text}</button>
    )
}

export default Buttons