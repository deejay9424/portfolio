<template>
  <v-app :dark="getDark">
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :dark="getDark" fixed temporary app>
      <v-list>
        <v-list-item v-for="(item, i) in getMenuItems" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
        <!-- Dark/Light theme button -->
        <v-list-item-action>
          <v-switch v-model="getDark" />
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Lights Out</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      </v-list>
      
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; Deejay's Portfolio 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    getMenuItems(){
      return this.$store.getters.getMenuItems;
    },
    title(){
      return this.$store.getters.getAppTitle;
    }
  },
  data () {
    return {
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      getDark:false
    }
  }
}
</script>
