<template>
  <v-flex xs12 md11 style="margin:auto">
    <v-carousel>
      <v-carousel-item v-for="(item, i) in certificatesData" :key="i">
        <v-sheet :color="item.color" height="100%" tile>
          
          <v-row class="fill-height" align="center" justify="center">
            <!-- <div class="display-3"></div> --><img :src="item.img" height="510px" width="fit-content"/>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-flex>
</template>

<script>
export default {
  data() {
    
  },
  props:{
    certificatesData:{
      type: Array
    }
  }
};
</script>