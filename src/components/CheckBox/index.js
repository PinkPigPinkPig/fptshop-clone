import React, { useState } from 'react'
import { faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CheckBox({ label, onchange }) {
    const [checked, setChecked] = useState(false)

    const handleOnClick = (e) => {
        setChecked(!checked)
        onchange && onchange(!checked)
    }
    console.log('cc');
    return (
        <div onClick={handleOnClick} className="">
            <FontAwesomeIcon icon={!checked ? faSquareCheck : faSquare} color={'#cb1c22'} size={'lg'} />
            <p>{label}</p>
        </div>
    )
}
