import React, { useState } from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import styles from './components.module.scss'

export default function ProductsFilter({ label, option, row = 2 }) {
    const list = [...Array(option.length).keys()].map(_ => false)
    const [showAll, setShowAll] = useState(true)
    const [listOption, setListOption] = useState(list)

    const handleSubmit = (event, isAllOtp, index) => {
        const value = event.target.checked
        if (isAllOtp) {
            setShowAll(value)
            setListOption(list)
            return
        }
        const newOption = [...listOption]
        newOption[index] = value
        setListOption(newOption)
        setShowAll(false)
    }

    return (
        <div className={`container text-center mt-2`}>
            <div className='align-baseline my-2'>
                <p className='text-start fw-bold'>{label}</p>
            </div>
            <FormGroup>
                <div className={`row row-cols-${row} ${styles.container}`}>
                    <FormControlLabel className='col' control={<Checkbox checked={showAll} onChange={event => handleSubmit(event, true)} />} label={'Tất cả'} />
                    {option.map((item, index) => (
                        <FormControlLabel key={index} className='col' control={<Checkbox checked={listOption[index]} onChange={event => handleSubmit(event, false, index)} />} label={item} />
                    ))}
                </div>
            </FormGroup>
        </div>
    )
}
