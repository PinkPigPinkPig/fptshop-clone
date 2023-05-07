import * as yup from "yup"
export const schema = yup.object({
  ["recipientName"]: yup.string().required("Vui lòng bổ sung thông tin"),
  ["recipientPhone"]: yup.number().required("Vui lòng bổ sung thông tin"),
  ["recipientAddress"]: yup.string().required("Vui lòng bổ sung thông tin"),
})
