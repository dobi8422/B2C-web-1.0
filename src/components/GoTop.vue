<template>
  <div>
    <div class="goTop" :class="isTop ? 'goTopAfter' : ''" @click="goTop()">
      <i class="fas fa-arrow-circle-up"></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scrollNum: 0,
      isTop: false
    }
  },
  methods: {
    goTop () { document.documentElement.scrollTop = 0 }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      this.scrollNum = top
      if (top >= 420) { this.isTop = true } else { this.isTop = false }
    })
  }
}
</script>

<style>
.goTop {
  position: fixed;
  right: -50px;
  top: calc(56px + 3%);
  border-radius: 30px;
  z-index: 90;
  color: #e465a0;
  transition: 0.3s ease-in-out;
  font-size: 2em;
  text-align: center;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}
.goTopAfter {
  transition: 0.3s ease-in-out;
  right: 3%;
}
</style>
