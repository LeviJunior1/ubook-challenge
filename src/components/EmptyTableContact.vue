<template>
  <b-container>
    <div>
      <b-img :src="require('@/assets/ic-book.png')" fluid alt=""></b-img>
      <p>Nenhum contato foi criado ainda.</p>
      <button-create-contact class="btn-create-contact" @create-contact="$emit('create-contact')" />
    </div>
  </b-container>
</template>

<script>
import ButtonCreateContact from './ButtonCreateContact.vue'
export default {
  name: 'EmptyTableContact',
  components: { ButtonCreateContact },
}
</script>

<style lang="scss" scoped>
  div.container {
    display: flex;
    justify-content: center;
  }

  p {
    margin: 1.5rem 0;
  }

  button.btn.btn-create-contact {
    display: block;
    margin: auto;
  }
</style>