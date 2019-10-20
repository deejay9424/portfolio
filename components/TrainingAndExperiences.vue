<template>
  <v-flex xs12 md5>
    <!-- Timeline with card -->

    <!-- <v-timeline  v-for="item in getTimelineItems" :key="item" align-top="alignTop" :dense="dense" :reverse="reverse" >
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
    
    </v-timeline>-->

    <v-card>
      <v-card-title>My Timeline</v-card-title>
      <v-card-text class="pt-1">
        <v-timeline>
          <v-timeline-item v-for="(item,i) in getTimelineItems" :key="i" :color="item.color" small>
            <template v-slot:icon>
              <span :class="`headline font-weight-bold ${item.color}--text`">{{item.date}}</span>
            </template>
            <div class="py-4">
              <h2 :class="`headline font-weight-light mb-4 ${item.color}--text`">{{item.title}}</h2>
              <div>{{item.text}}</div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
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
  props:{
    getTimelineItems:{
      type: Array
    }
  }
};
</script>