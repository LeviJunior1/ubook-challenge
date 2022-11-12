<template>
  <b-modal id="modal-remove-contact" hide-footer title="Excluir contato">
    <p class="text-break">
      Deseja realmente excluir o contato?
    </p>
    <div>
      <b-button class="mt-3" block @click="$bvModal.hide('modal-remove-contact')">Cancelar</b-button>
      <b-button class="mt-3" block @click="$bvModal.hide('modal-remove-contact'), $emit('modal-remove-contact', name)">Excluir</b-button>
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

<style>

</style>