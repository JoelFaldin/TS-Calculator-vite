import { useState } from "react"
import './Calculator.css'
import Titles from "../Titles/Titles"
import Display from "../Display/Display"
import Buttons from "../Buttons/Buttons"
import { evaluate } from "mathjs"

// const operations = /[-+/*]/g
const operations2 = ['+', '-', '*', '/']

const Calculator = () => {
    const [input, setInput] = useState<string>('0')
    const [lastResult, setLastResult] = useState<string>('')
    
    const updateInput = (event: string | number) => {
        // We use 'input' to check values, and 'prevInput' to update the state:
        const data = event

        switch (typeof data) {
            case 'number':
                if (input.length === 1 && input === '0') {
                    setInput(data.toString())
                    break
                } else {
                    setInput(prev => prev.concat(data.toString()))
                }
                break
            case 'string':
                if (input.length === 1 && input === '0' && data !== '.') {
                    break
                }
                // Handling the decimal:
                if (data === '.' && input[input.length - 1] !== '.') {
                    setInput(prev => prev.concat(data))
                    break
                } else if (data === '.' && input[input.length - 1] === '0') {
                    
                }
                // Checking if last char is an operation:
                if (operations2.includes(input[input.length - 1])) {
                    if (input[input.length - 1] === '-' && data === '-' ) {
                        break
                    } else if (input[input.length - 1] === data) {
                        break
                    } else if (operations2.includes(input[input.length - 2])) {
                        break
                    } else if (input[input.length - 1] !== '-' && data === '-') {
                        setInput(prev => prev.concat(data))
                        break
                    } else {
                        setInput(prev => prev.slice(0, -1).concat(data === '-' ? '' : data))
                        break
                    }   
                }
                // Checking if 'data' is any operation:
                if (data === '+') {
                    setInput(prev => prev.concat(data))
                } else if (data === '-') {
                    setInput(prev => prev.concat(data))
                } else if (data === '*') {
                    setInput(prev => prev.concat(data))
                } else if (data === '/') {
                    setInput(prev => prev.concat(data))
                }
                
                break
        }
    }

    const handleDelete = () => {
        setInput('0');
        setLastResult('');
        (document.getElementById('inputText') as HTMLElement).innerText = '0';
    }

    const handleEqual = () => {
        const result = evaluate(input)
        setLastResult(result)
    }

    return (
        <>
            <div className='outsider'>
                <Titles />

                <section id='operation-area' className='opArea'>
                    <Display input={input} result={lastResult} />

                    <Buttons handleDelete={handleDelete} updateInput={updateInput} handleEqual={handleEqual} />
                </section>
            </div>
        </>
    )
}

export default Calculator