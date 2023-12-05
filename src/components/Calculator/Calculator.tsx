import { useState } from "react"
import './Calculator.css'
import Titles from "../Titles/Titles"
import Display from "../Display/Display"
import Buttons from "../Buttons/Buttons"

const operations =['*', '/', '+', '-']

const Calculator = () => {
    const [input, setInput] = useState<string>('0')
    const [prevNumber, setPrevNumber] = useState<number>(0)
    
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
                <Titles />

                <section id='operation-area' className='opArea'>
                    <Display input={input} />

                    <Buttons handleDelete={handleDelete} updateInput={updateInput} />
                </section>
            </div>
        </>
    )
}

export default Calculator