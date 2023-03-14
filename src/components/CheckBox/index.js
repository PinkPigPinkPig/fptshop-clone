import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CheckBox({ label, onchange, value }) {
    const [checked, setChecked] = useState(false)

    const handleOnClick = (e) => {
        setChecked(!checked)
        onchange && onchange(!checked)
    }

    useEffect(() => {
        value && setChecked(value)
    }, [value])


    return (
        <div onClick={handleOnClick} className="d-flex justify-content-center alight-item-center">
            <FontAwesomeIcon icon={checked ? 'fa-square-check' : 'fa-square'} color={'#cb1c22'} size={'lg'} />
            <p className='mx-2'>{label}</p>
        </div>
    )
}
