import './Display.css'

interface display {
    input: string,
    result: string
}

const Display: React.FC<display> = ({ input, result }) => {
    return (
        <>
            <div className='display'>
                <p id='display' className='input'>{input}</p>
                <p className='result'>{result}</p>
            </div>
        </>
    )
}

export default Display