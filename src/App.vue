<template>
  <div id="app">
    <navbar @nav-create-contact="createAndEditContact"/>
    <list-contact />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ListContact from './views/ListContact.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    ListContact,
  },
  methods: {
    createAndEditContact() {
      this.$root.$emit('bv::show::modal', 'modal-contact')
    },
  }
}
</script>

<style lang="scss" scoped>
  body {
    margin: 0;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100vh;

    background-color: $background-default;
    font-family: Roboto, sans-serif;
  }
</style>
