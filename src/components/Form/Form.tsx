import React, { useState } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'

export const Form = () => {
    const [showNumber, setShowNumber] = useState(false)
    const handleChange = (event:any) => {
        event.stopPropagation()
        setShowNumber(!showNumber)
     }
    return (
        <>
       { !showNumber && (<div className="mx-auto mt-8" style={{ width:'45.313rem'}}>
            <div className="flex w-full">
                <div className="mr-4" style={{ width: '34.563rem'}}>
                <Input />
                </div>
                <div>
                <Button name="Join Waitlist"/>
                </div>
                </div>
            <button className="mt-8 font-medium text-grey text-2xl" onClick={handleChange}>
            { 'I would prefer an SMS instead.' }
            </button>
        </div>)}
            {showNumber && (<div className="mx-auto mt-8" style={{ width: '45.313rem' }}>
            <button className="mb-8 font-medium text-grey text-2xl" onClick={handleChange}>
            { 'I think an e-mail will do ' }
            </button>
                <div className="flex justify-around">
                    <p className="mt-5">Phone Number</p>
                <div className="mr-4" style={{ width: '20.563rem'}}>
                <Input placeholder='i.e  +234 0800 000 0000' />
                </div>
                <div>
                <Button name="Join Waitlist"/>
                </div>
            </div>
        </div>)}
        
            
        </>
    )
}
 Form.displayName = 'Form'