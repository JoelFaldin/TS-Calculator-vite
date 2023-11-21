import { useState } from "react"
import numberCollection from "./numberCollection"
import operations from "./operations"
import Buttons from "./Buttons"
import styles from '../styles/Calculator.module.css'

const Calculator = () => {
    const [input, setInput] = useState<string>('0')
    
    const updateInput = (data: string | number) => {
        const prevInput = input
        const lastChar = prevInput[prevInput.length - 1]
        if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
            setInput(prevInput.concat(data.toString()))
        } else if (typeof data === 'number' && data !== 0) {
            setInput(prevInput.concat(data.toString()))
            // typeof data === 'number' && data === 0 ? setInput('0') : setInput(prevInput.concat(data.toString()))
            // (document.getElementById('inputText') as HTMLElement).innerText = prevInput.concat(data)
            
        }

    }
    const handleDelete = () => {
        setInput('0');
        (document.getElementById('inputText') as HTMLElement).innerText = '0';
    }

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.h1Class}>FCC TypeScript Calculator</h1>
                <p className={styles.miniP}>Made with Vite + React</p>

                <section id='operation-area' className={styles.opArea}>
                    <section id='display' className={styles.display}>
                        <p className={styles.input} id='inputText' >{input}</p>
                    </section>

                    {numberCollection.map((n) => (
                        <Buttons text={n.number} identifier={n.id} key={`numCol${n.id}`} onClick={updateInput} />
                    ))}
                    {operations.map((o) => (
                        <Buttons text={o.op} identifier={o.id} key={`operation${o.id}`} onClick={updateInput} />
                    ))}
                    <Buttons text='.' identifier='decimal' onClick={updateInput} />

                    <button id='clear' onClick={handleDelete}>CLEAR</button>
                    <button id='equals' >=</button>
                </section>
            </div>
        </>
    )
}

export default Calculator