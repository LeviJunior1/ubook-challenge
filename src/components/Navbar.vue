<template>
  <nav>
    <b-container fluid>
      <b-row class="pt-2">
        <b-col cols="6" md="2">
          <b-img :src="require('@/assets/ic-logo.png')" fluid alt=""></b-img>
        </b-col>
        <b-col cols="12" md="2" class="d-flex justify-content-end p-0">
          <button-create-contact
            v-if="getItemsLength"
            class="mr-1"
            @create-contact="$emit('nav-create-contact')"
          />
        </b-col>
        <b-col cols="12" md="8">
          <b-form-input
            placeholder="Buscar..."
            size="sm"
            v-model="filter"
            :disabled="!getItemsLength"
          ></b-form-input>
        </b-col>
      </b-row>
    </b-container>
  </nav>
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
