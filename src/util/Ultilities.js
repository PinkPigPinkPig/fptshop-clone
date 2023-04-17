export const moneyConvert = (number) => {
    return number?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
}