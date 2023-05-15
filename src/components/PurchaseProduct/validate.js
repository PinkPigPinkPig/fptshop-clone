import dayjs from "dayjs"
import * as yup from "yup"
export const schema = yup.object({
  ["recipientName"]: yup.string().required("Vui lòng bổ sung thông tin"),
  ["recipientPhone"]: yup
    .number()
    .required("Vui lòng bổ sung thông tin")
    .typeError("Số điện thoại không hợp lệ"),
  ["recipientAddress"]: yup.string().required("Vui lòng bổ sung thông tin"),
  ["recipientEmail"]: yup
    .string()
    .email("Email không hợp lệ")
    .max(255)
    .required("Vui lòng bổ sung thông tin"),
  ["recipientDob"]: yup
    .string()
    .required("Vui lòng bổ sung thông tin")
    // .test("recipientDob", "Ngày sinh không hợp lệ", (date) => date < dayjs()),
})
