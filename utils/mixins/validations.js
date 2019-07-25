import _get from 'lodash/get'

export default {
  methods: {
    validate () {
      if (this.$v)
        this.$v.$touch()

      const isValid = !_get(this.$v, '$invalid', false)

      if (isValid)
        return isValid

      this.$nextTick(() => {
        const selector = [
          '.form-control.is-invalid',
          '.vdp-datepicker[state="invalid"] .form-control',
          '.select2-hidden-accessible[state="invalid"]',
          '.v-money[state="invalid"]',
        ].join(',')

        const input = $(selector).eq(0)
        let element = input

        if (input.is('.custom-radio'))
          element = input.parents('[role="radiogroup"]')
        else if (input.is('.select2-hidden-accessible'))
          element = input.next('.select2').find('.select2-selection')
        else if (input.is('.custom-file'))
          element = input.next()

        element.focus().animateCss('shake')
      })

      return false
    },
  },
}
