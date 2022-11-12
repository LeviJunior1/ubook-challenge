<template>
  <b-button pill variant="primary" @click.prevent.stop="$emit('create-contact')">
    <span>
      <b-icon icon="plus" variant="success"></b-icon>
    </span> Criar contato
  </b-button>
</template>

<script>
export default {
  name: 'ButtonCreateContact',
}
</script>

<style>

</style>