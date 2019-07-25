<template>
  <aside
    class="aside-container"
  >
    <nav class="sidebar">
      <b-navbar-nav class="sidebar-nav">
        <div class="nav-heading">
          <span>CASH PLUS</span>
        </div>
        <template v-for="menu in menus">
          <template v-if="!menu.children">
            <li
              :key="menu.name"
              class="nav-item"
            >
              <router-link
                :to="menu.url"
                class="nav-link"
              >
                <i :class="menu.icon" />
                <span>{{ menu.title }}</span>
              </router-link>
            </li>
          </template>
          <template v-else>
            <li
              :key="menu.name"
              v-b-toggle="`${menu.name}_children`"
              class="nav-item"
              aria-controls="all-data"
            >
              <a
                href="javascript:;"
                class="nav-link"
              >
                <i :class="menu.icon" />
                <span>{{ menu.title }}</span>
              </a>
            </li>

            <b-collapse
              :id="`${menu.name}_children`"
              :key="`${menu.name}_children`"
              class="nav-dropdown"
            >
              <b-navbar-nav class="nav-child animated fadeInLeft faster">
                <template v-for="submenu in menu.children">
                  <li
                    :key="submenu.name"
                    class="nav-item"
                  >
                    <router-link
                      :to="submenu.url"
                      class="nav-link"
                    >
                      <span>{{ submenu.title }}</span>
                    </router-link>
                  </li>
                </template>
              </b-navbar-nav>
            </b-collapse>
          </template>
        </template>
      </b-navbar-nav>
    </nav>
  </aside>
</template>
<script>
import menus from '@/menu'
import { filterMenu } from '@/utils/menu'

export default {
  data () {
    return { component: false }
  },

  computed: {
    minimize () {
      return this.$store.get('session/menu')
    },
    role () {
      return this.$store.get('session/user.name.roles.0.code')
    },
    menus () {
      return filterMenu(this.role, menus)
    },
  },

  methods: {
    handleClick (event) {
      event.preventDefault()
      event.target.parentElement.classList.toggle('open')
    },
  },
}
</script>
