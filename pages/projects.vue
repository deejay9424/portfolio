<template>
  <p>Projects</p>
</template>

<script>
export default {
  created() {
    this.$store.commit("SET_PAGE_TITLE", "Projects");
  }
};
</script>