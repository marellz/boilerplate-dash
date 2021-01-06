<template>
  <footer class="footer">
    <div class="container pt-5">
      <hr />
      <p class="text-center small">All Rights Reserved. {{ year }}</p>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    hasAuth: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>
