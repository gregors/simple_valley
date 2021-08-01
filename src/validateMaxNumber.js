import { formatMessage } from './messageFormatter'

export default function validateMaxNumber(v, fields, options) {
  const { message, max } = options || {}

  const messages = [fields]
    .flatMap(x => x)
    .filter(field => invalid(v.data[field], max))
    .map(field => addMessage(field, message))

  v.messages = v.messages.concat(messages)
  const valid = messages.length == 0
  v.isValid = v.isValid && valid

  return v
}

function addMessage(field, customMessage) {
  const defaultMessage = `${field} too large`
  const message = formatMessage(field, defaultMessage, customMessage)

  return { field, type: 'number_max',  message }
}

function invalid(value, max) {
  return value > max
}
