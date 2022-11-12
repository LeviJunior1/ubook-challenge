<template>
  <b-container fluid id="app">
    <navbar @nav-create-contact="createAndEditContact"/>
    <list-contact />
  </b-container>
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

<style>
  body {
    margin: 0;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
