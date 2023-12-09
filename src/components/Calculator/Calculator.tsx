import { useState } from "react"
import './Calculator.css'
import Titles from "../Titles/Titles"
import Display from "../Display/Display"
import Buttons from "../Buttons/Buttons"
import { evaluate } from "mathjs"

const operations = /[-+/*]/g
const operations2 = ['+', '-', '*', '/']

const Calculator = () => {
    const [input, setInput] = useState<string>('0')
    const [lastResult, setLastResult] = useState<string>('')
    
    const updateInput = (event: string | number) => {
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
                if (data === '.') {
                    const lastNum = input.split(operations).pop()
                    lastNum?.includes('.') ? '' : setInput(prev => prev.concat('.'))
                    break
                }
                // Checking if the last character is an operation:
                if (operations2.includes(input[input.length - 1])) {
                    if (operations2.includes(input[input.length - 2]) && input[input.length - 1] === '-') {
                        const placeholder = input.slice(0, -2)
                        setInput(placeholder.concat(data))
                        break
                    } else if (data === '-') {
                        setInput(prev => prev.concat(data))
                        break
                    } else {
                        const placeholder = input.split('')
                        placeholder.pop()
                        setInput(placeholder.join('').concat(data))
                        break
                    }
                }
                // Checking if 'input' already has an '=':
                if (input.includes('=')) {
                    const index = input.indexOf('=')
                    const result = input.slice(index + 1)
                    setInput(result.concat(data))
                    break
                }
                // Checking if 'data' is any operation:
                if (data === '+') {
                    setInput(prev => prev.concat(data))
                    break
                } else if (data === '-') {
                    setInput(prev => prev.concat(data))
                    break
                } else if (data === '*') {
                    setInput(prev => prev.concat(data))
                    break
                } else if (data === '/') {
                    setInput(prev => prev.concat(data))
                    break
                }                
                break
        }
        setLastResult(data.toString())
    }

    const handleDelete = () => {
        setInput('0');
        setLastResult('');
    }

    const handleEqual = () => {
        if (operations.test(input[input.length - 1])) {
            return '';
        } else {
            const result = evaluate(input)
            setInput(result.toString())
            setLastResult(result.toString())
        }
    }

    return (
        <>
            <div className='outsider'>
                <Titles />

                <div id='operation-area' className='opArea'>
                    <Display input={input} result={lastResult} />

                    <Buttons handleDelete={handleDelete} updateInput={updateInput} handleEqual={handleEqual} />
                </div>
            </div>
        </>
    )
}

export default Calculator