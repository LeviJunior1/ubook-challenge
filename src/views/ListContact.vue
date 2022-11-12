<template>
  <div>
    <b-table
      v-if="getItemsLength"
      hover
      show-empty
      :items="getItems"
      :fields="fields"
      :filter="getFilter"
    >
      <template #cell(name)="data">
        <span>
          <b-avatar size="sm" :text="avatarLetter(data.item)" :variant="randomColor()"></b-avatar>
        </span> {{ data.item.name }}
      </template>
      <template #cell(actions)="row">
        <div class="d-flex justify-content-end">
          <b-button size="sm" variant="light" @click="showModaContact(row.item)" class="mr-1">
            <b-icon icon="pencil" aria-hidden="true"></b-icon>
          </b-button>
          <b-button size="sm" variant="light" @click="showModalRemoveContact(row.item.name)">
            <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
          </b-button>
        </div>
      </template>
    </b-table>
    <empty-table-contact 
      v-else
      @create-contact="showModaContact"
    />
    
    <modal-remove-contact @modal-remove-contact="removeContact" :name="itemRemove"/>
    <modal-create-edit-contact @modal-contact="createAndEditContact" :edit="edit" :editForm="itemEdit"/>

  </div>
</template>

<script>
import ModalRemoveContact from '@/components/ModalRemoveContact.vue'
import ModalCreateEditContact from '@/components/ModalCreateEditContact.vue'
import EmptyTableContact from '@/components/EmptyTableContact.vue'

import { mapActions } from 'vuex'

export default {
  name: "ListContact",
  components: {
    ModalRemoveContact,
    ModalCreateEditContact,
    EmptyTableContact
  },
  computed: {
    getItems() {
      return this.$store.getters.getItems
    },
    getFilter() {
      return this.$store.getters.getFilter
    },
    getItemsLength() {
      return this.$store.getters.getItemsLength
    }
  },
  data: () => ({
    fields: [
      {
        key: 'name',
        label: 'Contatos'
      },
      {
        key: 'email',
        label: 'E-mail'
      },
      {
        key: 'cellphone',
        label: 'Telefone'
      },
      { key: 'actions', label: '' }
    ],
    itemRemove: null,
    itemEdit: null,
    edit: false
  }),
  methods: {
    ...mapActions([
      'removeItem',
      'addItem',
      'editItem'
    ]),
    removeContact(name) {
      this.removeItem(name)
      this.itemRemove = null
    },
    createAndEditContact(form, edit) {
      edit ? this.editItem(form) : this.addItem(form)
      this.edit = false
      this.itemEdit = null
    },
    avatarLetter(item) {
      return item?.name ? item.name.split('')[0] : 'u'
    },
    randomColor() {
      const colors = ['secondary', 'primary', 'dark', 'light', 'success', 'danger', 'warning', 'info']
      const number = Math.floor(Math.random() * colors.length)
      return colors[number] || colors[0]
    },
    showModaContact(item = null) {
      if(item) {
        this.edit = true
        this.itemEdit = item
      }
      this.$root.$emit('bv::show::modal', 'modal-contact')
    },
    showModalRemoveContact(item) {
      this.$root.$emit('bv::show::modal', 'modal-remove-contact')
      this.itemRemove = item
    }
  }
}
</script>

<style>

</style>