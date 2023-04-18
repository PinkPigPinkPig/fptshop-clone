import React, { useEffect, useState } from "react"
import EmptyCard from "./components/EmptyCart"
import styles from "./Cart.module.scss"
import { localStorageHelper } from "helpers"
import { LOCAL_STORE } from "constants/system"
import { Box, Button, Divider, Typography } from "@mui/material"
import ProductMini from "components/ProductMini/ProductMini"
import PurchaseProduct from "components/PurchaseProduct/PurchaseProduct"

const Cart = () => {
  const [productList, setProductList] = useState([])
  const [changeList, setChangeList] = useState(false)
  useEffect(() => {
    const data = JSON.parse(localStorageHelper.getItem(LOCAL_STORE.CART))
    setProductList(data)
  }, [changeList])

  const onDelete = () => {
    setChangeList(prev => !prev)
  }
  
  return (
    <div className="container d-flex justify-content-center">
      <div className={`bg-light w-75 rounded shadow`}>
        {productList?.length > 0 ? (
          <PurchaseProduct productList={productList} onDelete={onDelete}/>
        ) : (
          <EmptyCard />
        )}
      </div>
    </div>
  )
}

export default Cart
