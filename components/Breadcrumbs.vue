<template>
  <b-breadcrumb :items="items" />
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          text: 'Admin',
          href: '#',
        },
        {
          text: 'Manage',
          href: '#',
        },
        {
          text  : 'Library',
          active: true,
        },
      ],
    }
  },
}
</script>
