import React from "react"
import { moneyConvert } from "util/Ultilities"

export const PriceBar = ({ price, rate, saleOff }) => {

  return (
    <div className="d-flex justify-content-between">
      <div className="bg-danger px-3 rounded-pill">
        <span className="text-white fs-5 fw-semibold">{moneyConvert(price - price * saleOff / 100)} </span>
      </div>
      {!!saleOff && <span><s>{moneyConvert(price)}</s></span>}
    </div>
  )
}
