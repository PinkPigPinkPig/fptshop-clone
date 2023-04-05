import { BASE_URL } from "config/env"

const UNAUTHORIZE_URL = []
class ApiUtil {
  fetch = async (url = '', config = {}) => {
    try {
      config.method = config?.method ? config.method : "POST"
      config.timeout = 30000
      if (!config.headers) {
        config.headers = {}
      }
      config.validateStatus = function (status) {
        return status
      }
      config.headers["Content-Type"] = "application/json"
      config.headers["Accept"] = "application/json"

      const token = await getAccessToken()
      config.headers['Authorization'] = `Bearer ${token}`
      console.log('config ', config)
      config.url = BASE_URL + url
      let response = await axios(config)
      const data = response.data
      console.log('response ' + url + ' >>>>>> ' + response.status + ' : ', data)
      if (data && data.status === 200) {
        return data
      }
    } catch (error) {
      console.log("error", error)
    }
  }
}

export default new ApiUtil()
