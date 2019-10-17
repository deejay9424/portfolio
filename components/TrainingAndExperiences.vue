<template>
<div>
<!-- <v-flex xs12 md5> -->
  <v-timeline  v-for="item in getTimelineItems" :key="item" align-top="alignTop" :dense="dense" :reverse="reverse" >
    <!-- 1st timeline -->
    <v-timeline-item :fill-dot="fillDot" :hide-dot="hideDot" :icon="icon ? 'mdi-star' : ''" :icon-color=" iconColor ? 'deep-orange' : ''" :left="left" :right="right" :small="small">
      <template v-slot:icon>
        <v-avatar v-if="avatar">
          <img src="/Dj.jpg" />
        </v-avatar>
      </template>
      <span slot="opposite">{{item.date}}</span>
      <v-card class="elevation-2">
        <v-card-title class="headline">{{item.title}}</v-card-title>
        <v-card-text>{{item.text}}</v-card-text>
      </v-card>
    </v-timeline-item>
    
  </v-timeline>
<!-- </v-flex> -->
</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data: () => ({
    alignTop: false,
    avatar: false,
    dense: false,
    fillDot: false,
    hideDot: false,
    icon: true,
    iconColor: false,
    left: false,
    reverse: false,
    right: true,
    small: true
  }),
  computed:{
    ...mapGetters(["getTimelineItems"])
  }
};
</script>