<template>
  <div>
    <div class="message toast-body col-6 col-lg-3 col-xxl-2 position-fixed p-1">{{ message }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default { computed: { ...mapGetters(['message']) } }
</script>

<style lang="scss" scoped>
.message{
  background: rgba(162, 202, 83, 0.5);
  vertical-align: text-bottom;
  color: white;
  z-index: 100;
  height: 55px;
  top: 56px;
  right: 0;
  backdrop-filter: blur(4px)
}
</style>
