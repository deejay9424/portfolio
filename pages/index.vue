<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <photo-card :user="getUser" />
      <personal-details :user="getUser"/>
    </v-layout>
  </v-container>
</template>

<script>
import Logo from "~/components/Logo.vue";
import PhotoCard from "~/components/PhotoCard.vue";
import PersonalDetails from "~/components/PersonalDetails.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Logo,
    PhotoCard,
    PersonalDetails
  },
  computed: {
    ...mapGetters(["getUser"])
  }
};
</script>
