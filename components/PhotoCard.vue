<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>
      <!-- Left Card -->
      <v-flex xs12 md4>
        <v-card class="v-card-profile">
          <!-- Image -->
          <v-avatar size="150" class="mx-auto d-block pt-3">
            <img :src="user.imageSrc" />
          </v-avatar>
          <!-- Text -->
          <v-card-text class="text-xs-center">
            <!-- Designation -->
            <h4 class="category text-gray mb-3">{{user.title}}</h4>
            <!-- Name -->
            <h4 class="card-title font-weight-light">{{user.firstName + " "+ user.lastName}}</h4>
            <!-- About -->
            <p class="card-description font-weight-light">{{user.bio}}</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    props: {
        user:{
            type: Object
        }
    }
}
</script>