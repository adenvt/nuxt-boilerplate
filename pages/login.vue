<template>
  <section class="container">
    <div class="page">
      <div class="page-header">
        <h1>Sign <b class="font-red">In</b></h1>
        <span>Signin to your accounts</span>
      </div>
      <div class="page-content">
        <b-form>
          <b-form-group label="Email">
            <b-input-group>
              <b-input-group-text slot="prepend">
                <i class="icon-lock" />
              </b-input-group-text>
              <b-form-input placeholder="Enter Your Email" />
            </b-input-group>
          </b-form-group>

          <b-form-group label="Password">
            <b-input-group>
              <b-input-group-text slot="prepend">
                <i class="icon-key" />
              </b-input-group-text>
              <b-form-input
                type="password"
                placeholder="Enter Your Password"
              />
            </b-input-group>
          </b-form-group>

          <b-button
            variant="outline-primary btn-block btn-lg"
            class="mt-4 mb-2"
            @click="submit"
          >
            SIGNIN
          </b-button>

          <a
            href="#"
            class="font-small font-asphalt"
          >Forgot your password?</a>
        </b-form> <!-- END: FORM-->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  layout : 'blank',
  methods: {
    submit () {
      this.$router.push({ path: '/dashboard' })
    },
  },
}
</script>
