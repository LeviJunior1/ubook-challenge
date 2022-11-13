<template>
  <b-button pill class="text-style-3" @click.prevent.stop="$emit('create-contact')">
    <span>
      <b-icon icon="plus"></b-icon>
    </span> Criar contato
  </b-button>
</template>

<script>
export default {
  name: 'ButtonCreateContact',
}
</script>

<style lang="scss" scoped>
  button {
    background-color: $light-yellowish-green;
    color: $red-light;
    border-color: none;
    border: none;
    
    &:hover,
    &:active,
    &:focus {
      background-color: $light-yellowish-green;
      color: $red-light;
      box-shadow: none;
    }
  }

  span svg.bi-plus {
    color: $red-light;
  }
</style>