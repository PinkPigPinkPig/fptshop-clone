export const moneyConvert = (number, num = 1) => {
  const result = number * num
  return result?.toLocaleString("it-IT", { style: "currency", currency: "VND" })
}

export const calculatePayMoney = (price, saleOff, num = 1) => {
  const result = ((price * (100 - saleOff)) / 100) * num
  return result?.toLocaleString("it-IT", { style: "currency", currency: "VND" })
}
