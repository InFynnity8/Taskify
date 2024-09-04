import React from 'react'
import './InputField.css'

const InputField: React.FC = () => {
  return (
    <form className='input'>
      <input type="text" placeholder="Enter a task" className='input-box'/>
      <button type='submit' className='input-submit'>Go</button>
    </form>
  )
}

export default InputField
