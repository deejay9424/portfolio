<template>
  <photo-card :user="getUser"/>
</template>

<script>
import Logo from '~/components/Logo.vue';
import PhotoCard from '~/components/PhotoCard.vue';
import { mapGetters } from "vuex";

export default {
  components: {
    Logo,
    PhotoCard
  },
  computed:{
    ...mapGetters(["getUser"])
  }
}
</script>
