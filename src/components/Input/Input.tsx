import React, { FC, useState } from 'react'
import './Input.css'

interface InputProps {
    placeholder?: string
 }

export const Input: FC<InputProps> = ({ placeholder = 'Your Email Address' }) => {
    const [text, setText] = useState('')
    
    const handleChange = (event:any) => {
        setText(event.target.value)
     }
    return (
        <label>
            <div className="inputContainer" >
                <input value={text} placeholder={placeholder} onChange={ handleChange } />
            </div>
        </label>
    )
}
 Input.displayName = 'Input'