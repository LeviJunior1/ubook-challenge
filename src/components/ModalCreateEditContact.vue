<template>
  <b-modal id="modal-contact"
    hide-footer
    @hidden="resetModal"
    :title="edit ? 'Editar contato' : 'Criar novo contato'"
  >
    <form ref="form" 
      @submit.stop.prevent
    >
      <b-form-group
        label="Nome"
        label-for="name"
      >
        <b-form-input
          id="name"
          v-model="form.name"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="E-mail"
        label-for="email"
      >
        <b-form-input
          id="email"
          v-model="form.email"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Telefone"
        label-for="cellphone"
      >
        <b-form-input
          id="cellphone"
          v-model="form.cellphone"
        ></b-form-input>
      </b-form-group>
    </form>
    <div>
      <b-button class="mt-3" block @click="$bvModal.hide('modal-contact')">Cancelar</b-button>
      <b-button class="mt-3" block @click="$bvModal.hide('modal-contact'), $emit('modal-contact', form, edit)">Salvar</b-button>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalCreateEditContact',
  props: {
    edit: {
      type: Boolean,
      default: false
    },
    editForm: {
      type: Object,
      default: null
    }
  },
  watch: {
    editForm() {
      if(this.editForm) {
        this.form = this.editForm
      }
    }
  },
  data: () => ({
    form: {
      name: '',
      email: '',
      cellphone: ''
    },
  }),
  methods: {
    resetModal() {  
      Object.assign(this.$data, this.$options.data())
    }
  }
}
</script>

<style>

</style>