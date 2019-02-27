<template>
  <aside class="aside-container">
    <nav class="sidebar">
      <b-navbar-nav class="sidebar-nav">
        <div class="nav-heading">
          <span>Main Navigation</span>
        </div>
        <b-nav-item
          v-b-toggle="'collapse1'"
          href="#">
          <i class="icon-speedometer"/>
          <span>Dashboard</span>

          <b-collapse id="collapse1">
            <b-navbar-nav class="nav-child animated fadeInLeft faster">
              <b-nav-item href="#">
                <span>Dashboard 1</span>
              </b-nav-item>
              <b-nav-item href="#">
                <span>Dashboard 2</span>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-nav-item>
        <b-nav-item href="#">
          <i class="icon-grid"/>
          <span>Widgets</span>
        </b-nav-item>
        <b-nav-item href="#">
          <i class="icon-layers"/>
          <span>Layouts</span>
        </b-nav-item>

        <div class="nav-heading">
          <span>Components</span>
        </div>

        <b-nav-item
          v-b-toggle="'collapse2'"
          aria-controls="collapse2"
          href="#">
          <i class="icon-chemistry"/>
          <span>Elements</span>

          <b-collapse id="collapse2">
            <b-navbar-nav class="nav-child animated fadeInLeft faster">
              <li class="nav-item">
                <router-link
                  to="/elements/table"
                  class="nav-link">
                  <span>Button</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/elements/table"
                  class="nav-link">
                  <span>Carousel</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/elements/table"
                  class="nav-link">
                  <span>Cards</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/elements/table"
                  class="nav-link">
                  <span>Dropdown</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/elements/table"
                  class="nav-link">
                  <span>Notification</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/elements/table"
                  class="nav-link">
                  <span>Tables</span>
                </router-link>
              </li>
            </b-navbar-nav>
          </b-collapse>
        </b-nav-item>

        <b-nav-item
          v-b-toggle="'collapse3'"
          aria-controls="collapse3"
          href="#">
          <i class="icon-note"/>
          <span>Forms</span>

          <b-collapse id="collapse3">
            <b-navbar-nav class="nav-child animated fadeInLeft faster">
              <b-nav-item href="#">
                <span>Standart</span>
              </b-nav-item>
              <b-nav-item href="#">
                <span>Extended</span>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-nav-item>

        <div class="nav-heading">
          <span>Extras</span>
        </div>

        <b-nav-item
          v-b-toggle="'collapse4'"
          aria-controls="collapse4"
          href="#">
          <i class="icon-doc"/>
          <span>Pages</span>

          <b-collapse id="collapse4">
            <b-navbar-nav class="nav-child animated fadeInLeft faster">
              <b-nav-item href="/login">
                <span>Login</span>
              </b-nav-item>
              <b-nav-item href="#">
                <span>Register</span>
              </b-nav-item>
              <b-nav-item href="#">
                <span>Not Found</span>
              </b-nav-item>
              <b-nav-item href="#">
                <span>Maintenance</span>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-nav-item>

      </b-navbar-nav>
    </nav>
  </aside>
</template>
<script>
export default {
  data () {
    return { component: false }
  },
}
</script>
