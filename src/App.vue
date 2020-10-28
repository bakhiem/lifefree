<template>
  <v-app id="inspire">
    <Header />
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/views/layout/Header.vue";
export default Vue.extend({
  name: "App",
  components: { Header },
  data: () => ({
    //
  })
});
</script>
