import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { CATE_DATA } from '../helper'
import styles from './components.module.scss'

const ListCate = () => {
    const renderCate = (cate, index) => {
        return (
            <Link to='#' className={`col-2 border p-4 bg-light text-decoration-none text-black`} key={index}>
                <div className='d-flex flex-column justify-content-center align-items-center '>
                    <img src={cate?.image} alt='' className='mb-3'/>
                    <Typography>{cate.title}</Typography>
                </div>
            </Link>
        )
    }
  return (
    <div className='row'>
        {CATE_DATA.map(renderCate)}
    </div>
  )
}

export default ListCate