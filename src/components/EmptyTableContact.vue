<template>
  <div>
    <b-img :src="require('@/assets/ic-book.png')" fluid alt=""></b-img>
    <p>Nenhum contato foi criado ainda.</p>
    <button-create-contact @create-contact="$emit('create-contact')" />
  </div>
</template>

<script>
import ButtonCreateContact from './ButtonCreateContact.vue'
export default {
  name: 'EmptyTableContact',
  components: { ButtonCreateContact },
}
</script>

<style>

</style>