<template>
  <b-navbar type="light" variant="light">
    <b-nav-form>
      <b-form-input class="mr-sm-2" placeholder="Search" v-model="filter" :disabled="!getItemsLength"></b-form-input>
      <button-create-contact v-if="getItemsLength" @create-contact="$emit('nav-create-contact')" />
    </b-nav-form>
  </b-navbar>
</template>

<script>
import ButtonCreateContact from './ButtonCreateContact.vue'

import { mapActions } from 'vuex'

export default {
  name: 'Navbar-Default',
  components: { 
    ButtonCreateContact
  },
  data: () => ({
    filter: null
  }),
  watch: {
    filter() {
      this.filterItem(this.filter)
    }
  },
  computed: {
    getItemsLength() {
      return this.$store.getters.getItemsLength
    }
  },
  methods: {
    ...mapActions([
      'filterItem',
      'openModalCreateContact'
    ]),
  }
}
</script>

<style>

</style>