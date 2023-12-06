import { useState } from "react"
import './Calculator.css'
import Titles from "../Titles/Titles"
import Display from "../Display/Display"
import Buttons from "../Buttons/Buttons"

const operations = /[-+/*]/g
const operations2 = ['+','-', '*', '/']

const Calculator = () => {
    const [input, setInput] = useState<string>('0')
    const [op, setOp] = useState<string>('')
    const [lastResult, setLastResult] = useState<string>('')
    
    const updateInput = (event: string | number) => {
        // We use 'input' to check values, and 'prevInput' to update the state:
        const data = event
        const prevInput = input
        const newValue = input.split(operations)

        switch (typeof data) {
            // Checking if 'data' is a number:
            case 'number':
                if (input.charAt(0) === '0' && input.length === 1) {
                    setInput(data.toString())
                    break
                }
                setInput(prevInput.concat(data.toString()))
                break
            case 'string':
                // Here, 'data' can be a decimal '.':
                if (data === '.') {
                    // Checking if the prev number its only a 0:
                    if (input.length === 1 && input === '0') {
                        break
                    }
                    // Checking if the prev number has a '.':
                    if (!newValue[newValue.length - 1].includes('.')) {
                        setInput(prevInput.concat(data))
                        break
                    }
                return
                }
                // Or it can be any operation:
                if (data === '+') {
                    if (checkInput()) {
                        const number = operate(newValue[0], op, newValue[1])
                        if (number !== undefined) {
                            setInput(number.toString().concat('+'))
                            setLastResult(number.toString())
                        }
                    } else {
                        setInput(prevInput => prevInput.concat('+'))
                    }
                    setOp('+')
                } else if (data === '-') {
                    if (checkInput()) {
                        const number = operate(newValue[0], op, newValue[1])
                        if (number !== undefined) {
                            setInput(number.toString().concat('-'))
                            setLastResult(number.toString())
                        }
                    } else {
                        setInput(prevInput => prevInput.concat('-'))
                    }
                    setOp('-')
                } else if (data === '*') {
                    if (checkInput()) {
                        const number = operate(newValue[0], op, newValue[1])
                        if (number !== undefined) {
                            setInput(number.toString().concat('*'))
                            setLastResult(number.toString())
                        }
                    } else {
                        setInput(prevInput => prevInput.concat('*'))
                    }
                    setOp('*')
                } else if (data === '/') {
                    if (checkInput()) {
                        const number = operate(newValue[0], op, newValue[1])
                        if (number !== undefined) {
                            setInput(number.toString().concat('/'))
                            setLastResult(number.toString())
                        }
                    } else {
                        setInput(prevInput => prevInput.concat('/'))
                    }
                    setOp('/')
                }
        }
    }

    // Checking if theres any operator in 'input':
    const checkInput = () => {
        let result = false
        for (let i = 0; i < 4; i++) {
            for (let k = 0; k < input.length; k++) {
                input[k] === operations2[i] ? result = true : ''
            }
        }
        return result
    }

    const operate = (num1: string, operator: string, num2: string) => {
        const n1 = Number(num1)
        const n2 = Number(num2)

        if (n1 === undefined || n2 === undefined) {
            return undefined
        }

        switch (operator) {
            case '+':
                return n1 + n2
            case '-':
                return n1 - n2
            case '*':
                return n1 * n2
            case '/':
                return n2 != 0 ? n1 / n2 : undefined
        }
    }

    const handleDelete = () => {
        setInput('0');
        (document.getElementById('inputText') as HTMLElement).innerText = '0';
    }

    const handleEqual = () => {
        const numbers = input.split(operations)
        if (numbers.length === 2) {
            const result = operate(numbers[0], op, numbers[1])
            if (result !== undefined) {
                setInput(result.toString())
                setLastResult(result.toString())
            }
        } else {
            ''
        }
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