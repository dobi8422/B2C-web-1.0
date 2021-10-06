<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="promotion_img carousel-item active" data-bs-toggle="modal" data-bs-target="#promotion_1_Modal">
          <img src="http://lh5.ggpht.com/-eT8QXLe_qqo/UbR1_9kVMnI/AAAAAAAATEI/keD2mx_HxaQ/s1600/1890425941.jpg" class="h-100">
        </div>
        <div class="promotion_img carousel-item">
          <img src="https://d3gjxtgqyywct8.cloudfront.net/o2o/image/32feea65-7263-4c54-939b-9d779d82f22c.jpg" class="h-100">
        </div>
        <div class="promotion_img carousel-item">
          <img src="https://picsum.photos/2000/400?random=13" class="h-100">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="promotion_1_Modal" tabindex="-1" aria-labelledby="promotion_1_ModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="promotion_1_ModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            活動介紹預定地
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hi: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.promotion_img{
  height: 420px;
  background: black;
}
</style>
