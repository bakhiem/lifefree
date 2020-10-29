<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    temporary
  >
    <v-list>
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        :href="link.href"
        @click="redirect(link.value)"
      >
        <v-list-item-title v-text="link.label" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations,
    mapState,
  } from 'vuex'

  export default {
    name: 'CoreDrawer',

    computed: {
    ...mapState('drawer', ['links']),
    ...mapState('drawer', {myDrawer: 'drawer'}),
      drawer: {
        get () {
          return this.myDrawer
        },
        set (val) {
          this.setDrawer(val)
        },
      },
    },

    methods: {
      ...mapMutations('drawer',['setDrawer']),
    redirect(link) {
      if (this.$route.name !== link) {
        this.$router.push({ name: link }).catch(err => {
          console.log(err);
        });
      }
      this.setDrawer(false)
    }
    },
  }
</script>
