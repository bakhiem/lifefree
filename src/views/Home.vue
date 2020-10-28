<template>
 <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col>
          <v-sheet min-height="70vh" rounded="lg" class="pt-5">
            <div class="post-content" v-html="post.content"></div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
// @ is an alias to /src
import { mapActions , mapGetters} from 'vuex'

export default {
  name: "Home",
  data: () => ({
    post: {}
  }),
  computed: {
    ...mapGetters('post', ['listPost']),
  },
  mounted() {
    this.init()
  },
  methods: {
    ...mapActions('post', ['getAllPost']),
    init() {
      if (this.listPost && this.listPost.length > 0){ 
        this.post = this.listPost[Math.floor(Math.random() * this.listPost.length)]
      } else {
        this.getAllPost().then(() => {
          if (this.listPost.length > 0) {
            this.post = this.listPost[Math.floor(Math.random() * this.listPost.length)]
          }
        })
      }
    }
  }
};
</script>
