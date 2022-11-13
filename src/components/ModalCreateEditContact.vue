<template>
  <b-modal
    id="modal-contact"
    hide-footer
    centered
    @hidden="resetModal"
  >
    <template #modal-header>
      <h5 class="modal-title text-style-1">{{ edit ? 'Editar contato' : 'Criar novo contato' }}</h5>
    </template>
    <form ref="form" 
      @submit.stop.prevent
    >
      <b-row>
        <b-col cols="12">
          <b-form-group
            label="Nome"
            label-for="name"
            class="text-style-1"
          >
            <b-form-input
              id="name"
              v-model="form.name"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="E-mail"
            label-for="email"
            class="text-style-1"
          >
            <b-form-input
              id="email"
              v-model="form.email"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group
            label="Telefone"
            label-for="cellphone"
            class="text-style-1"
          >
            <b-form-input
              id="cellphone"
              v-model="form.cellphone"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
    </form>
    <div class="d-flex justify-content-end">
      <b-button
        pill
        class="btn-cancel"
        @click="$bvModal.hide('modal-contact')"
      >
        Cancelar
      </b-button>
      <b-button
        pill
        class="btn-confirm"
        @click="$bvModal.hide('modal-contact'), $emit('modal-contact', form, edit)"
      >
        Salvar
      </b-button>
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

<style lang="scss" scoped>
  header {
    line-height: 0;
    margin: auto 0.125rem;
  }

  .text-style-1 {
    font-size: 0.825rem;
  }
</style>