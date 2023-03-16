import React from 'react'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <div className={`container-fluid px-0 top-0 ${styles.appFooter}`}>
        <div className='container bg-light d-flex justify-content-center align-content-center py-5'><h1 className='fs-1'>THIS IS NOT FOOTER</h1></div>
    </div>
  )
}
