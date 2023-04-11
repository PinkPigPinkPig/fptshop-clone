import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { CATE_DATA } from '../helper'
import styles from './components.module.scss'
import { useSelector } from 'react-redux'
import { productSelector } from 'ReduxSaga/Product/ProductRedux'

const ListCate = () => {
    const { category } = useSelector(productSelector)

    const renderCate = (cate, index) => {
        return (
            <Link to={cate.route} className={`col-2 border p-4 bg-transparent text-decoration-none text-black`} key={index}>
                <div className='d-flex flex-column justify-content-center align-items-center '>
                    <img src={cate?.thumbnail} alt='' className='mb-3'/>
                    <Typography>{cate.categoryName}</Typography>
                </div>
            </Link>
        )
    }
  return (
    <div className='row m-0'>
        {category.map(renderCate)}
    </div>
  )
}

export default ListCate