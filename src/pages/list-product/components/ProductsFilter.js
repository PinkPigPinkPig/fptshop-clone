import React, { useState } from 'react'
import CheckBox from 'components/CheckBox'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

const listOptions = [
    {
        label: 'Samsung',
        value: false
    },
    {
        label: 'Xiaomi',
        value: false
    },
    {
        label: 'Asus',
        value: false
    },
    {
        label: 'Masstel',
        value: false
    },
    {
        label: 'Tecno',
        value: false
    },
    {
        label: 'Nokia',
        value: false
    },
    {
        label: 'Vivo',
        value: false
    },
    {
        label: 'Samsung',
        value: false
    },
]

export default function ProductsFilter() {

    return (
        <div className="container text-center">
            <FormGroup>
                <div>
                    <p>Hãng sản xuất</p>
                </div>
                <div className="row row-cols-3">
                    <FormControlLabel className='col' control={<Checkbox />} label={'Tất cả'} />
                    {listOptions.map((item, index) => (
                        <FormControlLabel key={index} className='col' control={<Checkbox />} label={item.label} />
                    ))}
                </div>
            </FormGroup>
        </div>
    )
}
