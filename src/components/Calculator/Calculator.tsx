import { useState } from "react"
import './Calculator.css'

const operations =['*', '/', '+', '-']

const Calculator = () => {
    const [input, setInput] = useState<string>('0')
    
    const updateInput = (event: string | number) => {
        const data = event
        const prevInput = input
        const lastChar = prevInput[prevInput.length - 1]
        console.log(lastChar)
        switch (data) {
            case '*':
            case '/':
            case '+':
            case '-':
                if (Number(lastChar) === 0 || operations.includes(lastChar) || lastChar === '.') {
                } else {
                    setInput(prevInput.concat(data))
                }
                break
            case '9':
            case '8':
            case '7':
            case '6':
            case '5':
            case '4':
            case '3':
            case '2':
            case '1':
            case '0':
                if (Number(lastChar) === 0) {
                    setInput(data)
                } else {
                    setInput(prevInput.concat(data))
                }
                break
            case '.':
                if (operations.includes(prevInput) || input.includes(data)) {
                } else {
                    setInput(prevInput.concat(data))
                }
                break
        }
    }
    const handleDelete = () => {
        setInput('0');
        (document.getElementById('inputText') as HTMLElement).innerText = '0';
    }

    return (
        <>
            <div className='outsider'>
                <h1 className='h1Class'>FCC TypeScript Calculator</h1>
                <p className='miniP'>Made with Vite + React</p>

                <section id='operation-area' className='opArea'>
                    <section id='display' className='display'>
                        <p className='input' id='inputText' >{input}</p>
                        <p className='input2'>=</p>
                    </section>
                    <section className='container'>
                        <button id='c' className='column' onClick={handleDelete}>CLEAR</button>
                        <button id='*' className='column' onClick={() => updateInput('*')}>*</button>
                        <button id='/' className='column' onClick={() => updateInput('/')}>/</button>
                        <button id='9' className='column' onClick={() => updateInput('9')}>9</button>
                        <button id='8' className='column' onClick={() => updateInput('8')}>8</button>
                        <button id='7' className='column' onClick={() => updateInput('7')}>7</button>
                        <button id='+' className='column' onClick={() => updateInput('+')}>+</button>
                        <button id='6' className='column' onClick={() => updateInput('6')}>6</button>
                        <button id='5' className='column' onClick={() => updateInput('5')}>5</button>
                        <button id='4' className='column' onClick={() => updateInput('4')}>4</button>
                        <button id='-' className='column' onClick={() => updateInput('-')}>-</button>
                        <button id='3' className='column' onClick={() => updateInput('3')}>3</button> 
                        <button id='2' className='column' onClick={() => updateInput('2')}>2</button>
                        <button id='1' className='column' onClick={() => updateInput('1')}>1</button>
                        <button id='.' className='column' onClick={() => updateInput('.')}>.</button>
                        <button id='0' className='column'  onClick={() => updateInput('0')}>0</button>
                        <button id='=' className='column' onClick={() => console.log('it should complete the operation now')}>=</button>
                    </section>
                </section>
            </div>
        </>
    )
}

export default Calculator