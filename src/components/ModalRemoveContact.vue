<template>
  <b-modal
    id="modal-remove-contact"
    hide-footer
    centered
  >
    <template #modal-header>
      <h5 class="text-style-1">Excluir contato</h5>
    </template>
    <p class="text-break">
      Deseja realmente excluir o contato?
    </p>
    <div class="button-grouped">
      <b-button
        pill
        class="btn-cancel"
        @click="$bvModal.hide('modal-remove-contact')"
      >
        Cancelar
      </b-button>
      <b-button
        pill
        class="btn-confirm"
        @click="$bvModal.hide('modal-remove-contact'), $emit('modal-remove-contact', name)"
      >
        Excluir
      </b-button>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalRemoveContact',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .button-grouped {
    display: flex;
    justify-content: flex-end;
  }
</style>