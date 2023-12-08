import './Display.css'

interface display {
    input: string,
    result: string
}

const Display: React.FC<display> = ({ input, result }) => {
    return (
        <section id='display' className='display'>
            <p className='input' id='inputText' >{input}</p>
            <p className='input2'>{result}</p>
        </section>
    )
}

export default Display