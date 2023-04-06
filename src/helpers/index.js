import { LOCAL_STORE } from "constants/system"

export const localStorageHelper = {
  setItem: (key, value) => {
    let valueStringify = value
    if (typeof value === "object") {
      valueStringify = JSON.stringify(value)
    }
    localStorage.setItem(key, valueStringify)
  },
  getItem: (key, isObject) => {
    const value = localStorage.getItem(key)
    if (value && isObject) {
      try {
        return JSON.parse(value)
      } catch (e) {
        return value
      }
    }
    return value
  },
  removeItem: (key) => {
    localStorage.removeItem(key)
  },
  // TODO: check token expired
  isLogin: () => {
    return !!localStorageHelper.getItem(LOCAL_STORE.TOKEN)
  },
}
