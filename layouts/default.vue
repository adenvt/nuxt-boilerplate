<template>
  <div class="wrapper">
    <navbar />

    <sidebar />

    <section class="content-wrapper">
      <div class="content-heading">
        <breadcrumb />
      </div>

      <nuxt />
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Breadcrumb from '@/components/Breadcrumbs.vue'

export default {
  components: {
    Navbar, Sidebar, Breadcrumb,
  },
}
</script>
