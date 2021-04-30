import newValidator from '@/validator'
import validateRequired from '@/validateRequired'

describe('validateRequired', () => {
  describe('with valid data', () => {

    it('sets isValid to true', () => {
      let validator = newValidator({title: 'hello' })

      validator = validateRequired(validator, 'title')

      expect(validator.isValid).toBe(true)
    })

    it('doesnt add message', () => {
      let validator = newValidator({title: 'hello' })
      expect(validator.messages.length).toBe(0)

      validator = validateRequired(validator, 'title')

      expect(validator.messages.length).toBe(0)
    })
  })

  describe('with invalid data', () => {

    it('sets isValid to false', () => {
      let validator = newValidator({})

      validator = validateRequired(validator, 'title')

      expect(validator.isValid).toBe(false)
    })

    it('adds message', () => {
      let validator = newValidator({})
      expect(validator.messages.length).toBe(0)

      validator = validateRequired(validator, 'title')

      expect(validator.messages.length).toBe(1)
      expect(validator.messages[0].message).toEqual('title required')
      expect(validator.messages[0].field).toEqual('title')
      expect(validator.messages[0].type).toEqual('required')
    })
  })
})
