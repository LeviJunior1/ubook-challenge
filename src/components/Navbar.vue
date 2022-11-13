<template>
  <b-navbar>
    <b-img :src="require('@/assets/ic-logo.png')" fluid alt=""></b-img>
    <b-navbar-nav class="ml-auto">
      <b-nav-form class="nav-form-search">
        <button-create-contact
          v-if="getItemsLength"
          class="mr-4"
          @create-contact="$emit('nav-create-contact')"
        />
        <b-form-input
          class="d-sm-none d-md-block"
          placeholder="Buscar..."
          size="sm"
          v-model="filter"
          :disabled="!getItemsLength"
        ></b-form-input>
      </b-nav-form>
    </b-navbar-nav>
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
