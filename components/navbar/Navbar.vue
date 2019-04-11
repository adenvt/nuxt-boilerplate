<template>
  <div class="tob-navbar">
    <b-navbar
      toggleable="md"
      variant="light">

      <div class="navbar-header">
        <b-navbar-brand href="#">BOILERPLATE</b-navbar-brand>
      </div>

      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown
          class="hide-caret"
          right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <div class="avatar">
              <img
                src="https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
                alt="">
            </div>
          </template>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="/login">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
