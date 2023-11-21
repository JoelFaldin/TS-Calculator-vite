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
        <button id={identifier} onClick={handleClick}>{text}</button>
    )
}

export default Buttons