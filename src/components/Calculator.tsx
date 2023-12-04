import { useState } from "react"
// import numberCollection from "./numberCollection"
// import operations from "./operations"
// import Buttons from "./Buttons"
import styles from '../styles/Calculator.module.css'

const Calculator = () => {
    const [input, setInput] = useState<string>('0')
    
    const updateInput = (event: string | number) => {
        console.log(event)
        // const prevInput = input
        // const lastChar = prevInput[prevInput.length - 1]
        // console.log(data)
        // if (typeof data === 'number') {
        //     if (Number(input) === 0) {
        //         setInput(data.toString())
        //     } else {
        //         setInput(prevInput.concat(data.toString()))
        //     }
        // } else if (data === '.' && input.includes('.')) {
        // } else {
        //     setInput(input.concat(data))
        // }
        
        

        // if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        //     setInput(prevInput.concat(data.toString()))
        // } else if (typeof data === 'number' && data !== 0) {
        //     setInput(prevInput.concat(data.toString()))
        //     // typeof data === 'number' && data === 0 ? setInput('0') : setInput(prevInput.concat(data.toString()))
        //     // (document.getElementById('inputText') as HTMLElement).innerText = prevInput.concat(data)
            
        // }

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
                        <p className={styles.input2}>=</p>
                    </section>
                    <section className={styles.container}>
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
                        <button id='0' className='column' onClick={() => updateInput('0')}>0</button>
                        <button id='.' className='column' onClick={() => updateInput('.')}>.</button>
                        <button id='=' className='column' onClick={() => updateInput('=')}>=</button>


                        {/* <button id='clear' onClick={handleDelete}>CLEAR</button>
                        {numberCollection.map((n) => (
                            <Buttons text={n.number} identifier={n.id} key={`numCol${n.id}`} onClick={updateInput} />
                        ))}
                        {operations.map((o) => (
                            <Buttons text={o.op} identifier={o.id} key={`operation${o.id}`} onClick={updateInput} />
                        ))}
                        <Buttons text='.' identifier='decimal' onClick={updateInput} />

                        <button id='equals' className='column' >=</button> */}
                    </section>
                    
                </section>
            </div>
        </>
    )
}

export default Calculator