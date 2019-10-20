<template>
  <v-flex xs12 md8>
    <v-card>
      <v-card-title>Personal Details</v-card-title>
      <!-- Form -->
      <v-card-text class="pt-1 pb60" >
      <v-form>
        <v-container py-0>
          <v-layout wrap>
            <v-flex xs12 md6>
              <v-label>Name : {{user.firstName + " "+ user.lastName}}</v-label>
            </v-flex>
            <v-flex xs12 md6>
              <v-label>Current Position : {{user.title}}</v-label>
            </v-flex>
            <v-flex xs12 md6>
              <v-label>Contact Number : {{user.contactNumber}}</v-label>
            </v-flex>
            <v-flex xs12 md6>
              <v-label>E-mail : {{user.contactEmail}}</v-label>
            </v-flex>
            <v-flex xs12 md6>
              <v-label>Current Employer : {{user.currentCompany}}</v-label>
            </v-flex>
            <v-flex xs12 md6>
              <v-label>Education : {{user.education}}</v-label>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
    props:{
        user:{
            type: Object
        }
    }
};
</script>
<style scoped>
.pb60{
  padding-bottom: 60px;
}
</style>