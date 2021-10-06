<template>
  <nav aria-label="Page navigation" class="justify-content-center d-flex">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="getProductPages(pages.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pages.total_pages" :key="page" :class="{ active: pages.current_page === page }">
        <a class="page-link" href="#" @click.prevent="getProductPages(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="getProductPages(pages.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Pagination',
  props: ['pages'],
  methods: {
    getProductPages (pages) {
      this.$emit('emitProductPage', pages)
      // 觸發內層getProductPages => 觸發外層emitProductPage => 觸發最終所需methods
    }
  }
}
</script>

<style lang="scss" scoped>
.page-link, .disabled .page-link{
  background: none;
  border: none;
  color: black;
}
.active .page-link{
  border-radius: 50%;
  background: rgb(136, 84, 84);
}
</style>
