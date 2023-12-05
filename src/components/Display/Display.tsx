interface display {
    input: string
}

const Display: React.FC<display> = ({ input }) => {
    return (
        <section id='display' className='display'>
            <p className='input' id='inputText' >{input}</p>
            <p className='input2'>=</p>
        </section>
    )
}

export default Display