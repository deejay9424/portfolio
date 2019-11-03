<template>
  <certificates-carousel :certificatesData="certificatesData" />
</template>
<script>
import certificatesCarousel from "../components/certificatesCarousel";
import { mapGetters } from "vuex";

export default {
  components: {
    certificatesCarousel
  },
  created() {
    this.$store.commit("SET_PAGE_TITLE", "Certificates");
  },
  computed: {
    ...mapGetters(["certificatesData"])
  }
};
</script>