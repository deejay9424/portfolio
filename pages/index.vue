<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <photo-card :user="getUser" />
      <personal-details :user="getUser"/>
      <training-and-experiences :getTimelineItems="getTimelineItems"/>
      <technologies :getTechnologiesData="getTechnologiesData"/>
    </v-layout>
  </v-container>
</template>

<script>
import Logo from "~/components/Logo.vue";
import PhotoCard from "~/components/PhotoCard.vue";
import PersonalDetails from "~/components/PersonalDetails.vue";
import TrainingAndExperiences from "~/components/TrainingAndExperiences";
import Technologies from "~/components/Technologies";
import { mapGetters } from "vuex";

export default {
  components: {
    Logo,
    PhotoCard,
    PersonalDetails,
    TrainingAndExperiences,
    Technologies
  },
  computed: {
    ...mapGetters(["getUser","getTechnologiesData","getTimelineItems"])
  }
};
</script>