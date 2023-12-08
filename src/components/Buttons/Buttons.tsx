import './Buttons.css'

interface button {
    handleDelete: () => void
    updateInput: (content: string | number) => void
    handleEqual: () => void
}

const Buttons: React.FC<button> = ({ handleDelete, updateInput, handleEqual }) => {
    return (
        <section className='container'>
            <button id='clear' className='column' onClick={handleDelete}>CLEAR</button>
            <button id='multiply' className='column' onClick={() => updateInput('*')}>*</button>
            <button id='divide' className='column' onClick={() => updateInput('/')}>/</button>
            <button id='nine' className='column' onClick={() => updateInput(9)}>9</button>
            <button id='eight' className='column' onClick={() => updateInput(8)}>8</button>
            <button id='seven' className='column' onClick={() => updateInput(7)}>7</button>
            <button id='add' className='column' onClick={() => updateInput('+')}>+</button>
            <button id='six' className='column' onClick={() => updateInput(6)}>6</button>
            <button id='five' className='column' onClick={() => updateInput(5)}>5</button>
            <button id='four' className='column' onClick={() => updateInput(4)}>4</button>
            <button id='subtract' className='column' onClick={() => updateInput('-')}>-</button>
            <button id='three' className='column' onClick={() => updateInput(3)}>3</button> 
            <button id='two' className='column' onClick={() => updateInput(2)}>2</button>
            <button id='one' className='column' onClick={() => updateInput(1)}>1</button>
            <button id='decimal' className='column' onClick={() => updateInput('.')}>.</button>
            <button id='zero' className='column'  onClick={() => updateInput(0)}>0</button>
            <button id='equals' className='column' onClick={handleEqual}>=</button>
        </section>
    )
}

export default Buttons