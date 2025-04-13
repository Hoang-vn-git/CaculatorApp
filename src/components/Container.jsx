import React, { useState } from 'react'
import Input from './Input'
import Display from './Display'

function Container() {
  const [result, setResult] = useState('')
  const handleDisplay = (value) => {
    setResult(value)
  }
  return (
    <div className='container'>
        <h5>Caculator by Hoang</h5>
        <Display result={result}/>
        <Input handleDisplay={handleDisplay}  />
    </div>
  )
}

export default Container
