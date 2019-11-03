<template>
  <v-flex xs12 md6>
    <v-card>
      <v-card-title>Technologies And Frameworks</v-card-title>
      <v-card-text class="technology-card-text">
        <v-card v-for="(item,i) in getTechnologiesData" :key="i" :color="item.color">
          <v-card-title class="card-inner">{{item.heading}}</v-card-title>
          <v-card-text style="margin-bottom: 10px !important;">
            <ul style="display:inline-block">
              <li v-for="(data,j) in item.data1" :key="j">{{data}}</li>
            </ul>
            <ul class="technologies-row-2">
              <li v-for="(data,k) in item.data2" :key="k">{{data}}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props:{
    getTechnologiesData:{
      type: Array
    }
  }
};
</script>