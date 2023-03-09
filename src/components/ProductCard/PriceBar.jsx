import React from "react"

export const PriceBar = ({ price, rate }) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="bg-danger px-3 rounded-pill">
        <span className="text-white fs-5 fw-semibold">11.499.000 ₫</span>
      </div>
      <span>11.499.000 ₫</span>
    </div>
  )
}
