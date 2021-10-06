import { validate } from '@babel/types'
import { defineRule, configure } from 'vee-validate'

// 及時驗證
configure({
  // validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  // validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: true // controls if `input` events should trigger validation with `handleChange` handler
  // validateOnModelUpdate: true // controls if `update:modelValue` events should trigger validation with `handleChange` handler
})

defineRule('email', value => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return '請輸入信箱'
  }
  // Check if email
  if (!/^([A-Za-z0-9-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/.test(value)) {
    return '請輸入正確的email格式'
  }
  return true
})
defineRule('name', value => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return '請輸入姓名'
  }
  // if (/^0-9/.test(value)) {
  //   return '請輸入真正的名字'
  // }
  return true
})
defineRule('tel', value => {
  if (!value || !value.length) {
    return '請輸入電話'
  }
  if (!/^(\d{2}-\d{4}-\d{4})|(\d{4}-\d{3}-\d{3})/.test(value) || value.length > 12) {
    return '請輸入正確的格式：00-0000-0000, 0000-000-000'
  }
  return true
})
defineRule('address', value => {
  if (!value || !value.length) {
    return '請輸入地址'
  }
  return true
})
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
defineRule('pay_way', value => {
  if (!value || !value.length) {
    return '請選擇付款方式'
  }
  return true
})
defineRule('message', value => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return '請輸入您的留言'
  }
  return true
})

export default validate
