import React, { useEffect, useState } from 'react'

function Input({handleDisplay}) {
    const [input, setInput] = useState('')
    const buttons = [
        '7', '8', '9', '*',
        '4', '5', '6', '-',
        '3', '2', '1', '+',
        '0', '.', 'AC', '/',
        '='
    ]
    const handleInput = (value) => {
       if (value === '='){
        try {
            setInput(eval(input).toString())
        } catch {
            setInput('Error result')
        }
       } else if (value === 'AC'){
        setInput('')
       } else {
        setInput(input + value);
       }
    }
    
    useEffect(() => {
        handleDisplay(input);
    }, [input]);

    return (
        <div className='button'>
            {buttons.map((button) => {
                return (
                    <button onClick={() => handleInput(button)} key={button} className={`btn ${button}`}>{button}</button>
                )
            })}

        </div>
    )
}

export default Input;
