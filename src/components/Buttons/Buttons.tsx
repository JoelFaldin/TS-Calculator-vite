interface button {
    handleDelete: () => void
    updateInput: (content: string | number) => void
    handleEqual: () => void
}

const Buttons: React.FC<button> = ({ handleDelete, updateInput, handleEqual }) => {
    return (
        <section className='container'>
            <button id='c' className='column' onClick={handleDelete}>CLEAR</button>
            <button id='*' className='column' onClick={() => updateInput('*')}>*</button>
            <button id='/' className='column' onClick={() => updateInput('/')}>/</button>
            <button id='9' className='column' onClick={() => updateInput(9)}>9</button>
            <button id='8' className='column' onClick={() => updateInput(8)}>8</button>
            <button id='7' className='column' onClick={() => updateInput(7)}>7</button>
            <button id='+' className='column' onClick={() => updateInput('+')}>+</button>
            <button id='6' className='column' onClick={() => updateInput(6)}>6</button>
            <button id='5' className='column' onClick={() => updateInput(5)}>5</button>
            <button id='4' className='column' onClick={() => updateInput(4)}>4</button>
            <button id='-' className='column' onClick={() => updateInput('-')}>-</button>
            <button id='3' className='column' onClick={() => updateInput(3)}>3</button> 
            <button id='2' className='column' onClick={() => updateInput(2)}>2</button>
            <button id='1' className='column' onClick={() => updateInput(1)}>1</button>
            <button id='.' className='column' onClick={() => updateInput('.')}>.</button>
            <button id='0' className='column'  onClick={() => updateInput(0)}>0</button>
            <button id='=' className='column' onClick={handleEqual}>=</button>
        </section>
    )
}

export default Buttons