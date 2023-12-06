import { useState } from "react"
import './Calculator.css'
import Titles from "../Titles/Titles"
import Display from "../Display/Display"
import Buttons from "../Buttons/Buttons"

const operations = /[-+/*]/g

const Calculator = () => {
    const [input, setInput] = useState<string>('0')
    const [result, setResult] = useState<string>('0')
    const [prevNumber, setPrevNumber] = useState<number>(0)
    
    const updateInput = (event: string | number) => {
        // We use 'input' to check values, and 'prevInput' to update the state:
        const data = event
        const prevInput = input

        switch (typeof data) {
            case 'number':
                if (input.charAt(0) === '0' && input.length === 1) {
                    setInput(data.toString())
                    break
                }
                setInput(prevInput.concat(data.toString()))
                break
            case 'string':
                const newValue = input.split(operations)
                console.log(newValue)
                // Here, 'data' can be a decimal '.':
                if (data === '.') {
                    // Checking if the prev number its only a 0:
                    if (input.length === 1 && input === '0') {
                        return
                    }
                    // Checking if the prev number has a '.':
                    if (!newValue[newValue.length - 1].includes('.')) {
                        setInput(prevInput.concat(data))
                        return
                    }
                return
                }
                // Or it can be any operation:
                if (data === '+') {
                    if (result === '') { return; }
                    setInput(prevInput.concat(data))
                } else if (data === '-') {
                    if (result === '') { return; }
                    setInput(prevInput.concat(data))
                } else if (data === '*') {
                    setInput(prevInput.concat(data))
                    if (result === '') { return; }
                } else if (data === '/') {
                    setInput(prevInput.concat(data))
                    if (result === '') { return; }
                }
        }
    }

    const handleDelete = () => {
        setInput('0');
        (document.getElementById('inputText') as HTMLElement).innerText = '0';
    }

    return (
        <>
            <div className='outsider'>
                {/* This is a test!!! */}
                <p style={{color: 'white'}}>Test: {prevNumber}</p>
                <Titles />

                <section id='operation-area' className='opArea'>
                    <Display input={input} result={result} />

                    <Buttons handleDelete={handleDelete} updateInput={updateInput} />
                </section>
            </div>
        </>
    )
}

export default Calculator