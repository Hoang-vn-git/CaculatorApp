import React from 'react'

function Display({ result }) {
  return (
    <div className='displayScreen'>
      <div className="result">
        <h1>{result}</h1>
      </div>
    </div>
  )
}

export default Display
