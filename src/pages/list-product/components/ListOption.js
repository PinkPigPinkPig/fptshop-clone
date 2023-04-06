import React, { useRef } from 'react'
import styles from './components.module.scss'

function ListOption() {

  const list = ['Samsung', 'Tecno', 'Nokia', 'Vivo', 'Iphone', 'Xiaomi', 'Oppo']
  const Item = ({ label }) => (
    <div className={`${styles.item} py-2 mx-2 bg-success`}>
      <p className={`${styles.item}`}>{label}</p>
    </div>
  )

  return (
    <div className={styles.parentContainer}>
      <p>dien thoai</p>
      <div className={styles.listContainer}>
        {list?.map((item, index) => {
          return (
            <Item key={index} label={item} />
          )
        })}
      </div>
    </div>
  )
}

export default ListOption