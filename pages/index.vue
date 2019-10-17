<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <photo-card :user="getUser" />
      <personal-details :user="getUser"/>
      <training-and-experiences />
    </v-layout>
  </v-container>
</template>

<script>
import Logo from "~/components/Logo.vue";
import PhotoCard from "~/components/PhotoCard.vue";
import PersonalDetails from "~/components/PersonalDetails.vue";
import TrainingAndExperiences from "~/components/TrainingAndExperiences";
import { mapGetters } from "vuex";

export default {
  components: {
    Logo,
    PhotoCard,
    PersonalDetails,
    TrainingAndExperiences
  },
  computed: {
    ...mapGetters(["getUser"])
  }
};
</script>