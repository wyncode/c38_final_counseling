import React from 'react'
import './Backdrop.css'

const Backdrop = ({ setOpen, open }) => {
    return (
        <div className="backdrop" onClick={() => setOpen(!open)} />
    )
}

export default Backdrop;