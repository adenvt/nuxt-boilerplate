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
        let el      = input

        if (input.is('.custom-radio'))
          el = input.parents('[role="radiogroup"]')
        else if (input.is('.select2-hidden-accessible'))
          el = input.next('.select2').find('.select2-selection')
        else if (input.is('.custom-file'))
          el = input.next()

        el.focus().animateCss('shake')
      })

      return false
    },
  },
}
