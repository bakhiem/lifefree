<template>
  <v-app id="inspire">
    <Header />
    <core-drawer />
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/views/layout/Header.vue";
import CoreDrawer from "@/views/layout/Drawer.vue";
export default Vue.extend({
  name: "App",
  components: { 
    Header,
    CoreDrawer
  },
  data: () => ({
    //
  })
});
</script>
