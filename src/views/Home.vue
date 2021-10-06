<template>
  <div class="home" style="background:url(https://picsum.photos/1000/2000?random=13); background-size:cover;">
    <div class="container-fluid p-0">
      <img src="https://picsum.photos/2000/700?random=13" class="img-fluid">
      <p class="col-6 mx-auto my-5 align-center fs-1 bg-dark rounded-pill p-3 text-warning">Hola Cake</p>
    </div>
    <div class="container-fluid col-12 mt-2">
      <div class="row col-11 col-md-8 mx-auto my-4">
        <div class="row my-4 mx-auto bblur">
          <div id="box0" class="col-md-5 success"></div>
          <div class="col-md-7">
            <p class="fs-3 mt-2">關於我們</p>
            <p class="fs-5 text-dark">看就被⋯地台你還不清歸⋯交往全真什麼這，不起我都可以啊而且我。這樣想不認識只是，段照顧畫的，下是趕老師的那種。大也讓人能理看就被⋯地台你還不清歸⋯交往全真什麼這，不起我都可以啊而且我。這樣想不認識只是，段照顧畫的，下是趕老師的那種。大也讓人能理</p>
            <p class="fs-6 text-end"><router-link class="text-muted nav-link" to="/about" @click="loading">更多資訊&ensp;></router-link></p>
          </div>
        </div>
        <div class="fs-3 p-0">目前活動
          <SmPromotion class="col-12"/>
        </div>
        <div class="row p-5 my-4 mx-auto bblur">
          <div id="box1" class="col-md-5 success"></div>
          <div class="col-md-6 mx-auto">
            <p class="fs-3 mt-2">巧克力蛋糕</p>
            <p class="fs-5 text-dark">看就被⋯地台你還不清歸⋯交往全真什麼這，不起我都可以啊而且我。這樣想不認識只是，段照顧畫的，下是趕老師的那種。大也讓人能理看就被⋯地台你還不清歸⋯交往全真什麼這，不起我都可以啊而且我。這樣想不認識只是，段照顧畫的，下是趕老師的那種。大也讓人能理</p>
            <p class="text-end fs-6"><router-link class="text-muted nav-link" to="/product" @click="loading">更多資訊&ensp;></router-link></p>
          </div>
        </div>
        <div class="row p-5 my-4 mx-auto bblur">
          <div class="col-md-6 mx-auto">
            <p class="fs-3 mt-2">乳酪蛋糕</p>
            <p class="fs-5 text-dark">看就被⋯地台你還不清歸⋯交往全真什麼這，不起我都可以啊而且我。這樣想不認識只是，段照顧畫的，下是趕老師的那種。大也讓人能理看就被⋯地台你還不清歸⋯交往全真什麼這，不起我都可以啊而且我。這樣想不認識只是，段照顧畫的，下是趕老師的那種。大也讓人能理</p>
            <p class="text-end fs-6"><router-link class="text-muted nav-link" to="/product" @click="loading">更多資訊&ensp;></router-link></p>
          </div>
          <div id="box2" class="col-md-5 success"></div>
        </div>
        <div class="row p-5 my-4 mx-auto bblur">
          <div id="box3" class="col-md-5 success"></div>
          <div class="col-md-6 mx-auto">
            <p class="fs-3 mt-2">草莓蛋糕</p>
            <p class="fs-5 text-dark">看就被⋯地台你還不清歸⋯交往全真什麼這，不起我都可以啊而且我。這樣想不認識只是，段照顧畫的，下是趕老師的那種。大也讓人能理看就被⋯地台你還不清歸⋯交往全真什麼這，不起我都可以啊而且我。這樣想不認識只是，段照顧畫的，下是趕老師的那種。大也讓人能理</p>
            <p class="text-end fs-6"><router-link class="text-muted nav-link" to="/product" @click="loading">更多資訊&ensp;></router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import SmPromotion from '@/views/SmPromotion'

export default {
  components: {
    SmPromotion
  },
  methods: {
    loading () { this.updateLoading() },
    ...mapActions(['updateLoading'])
  }
}
</script>

<style lang="scss" scoped>
#box0{
  background: url(https://picsum.photos/550/300?random=10);
  background-position: center center;
  background-size: cover;
  height: 250px;
}
#box1{
  background: url(https://picsum.photos/550/300?random=1);
  background-position: center center;
  background-size: cover;
  height: 250px;
}
#box2{
  background: url(https://picsum.photos/550/300?random=3);
  background-position: center center;
  background-size: cover;
  height: 300px;
}
#box3{
  background: url(https://picsum.photos/550/300?random=2);
  background-position: center center;
  background-size: cover;
  height: 300px;
}
</style>
