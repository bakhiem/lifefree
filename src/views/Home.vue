<template>
 <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col>
          <v-sheet min-height="80vh" rounded="lg" class="pt-5 pb-2">
            <div v-if="post">
              <h3 class="text-center pb-4">{{post.title}}</h3>
              <div class="post-content" v-html="post.content"></div>
            </div>
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
      window.scrollTo(0,0)
      if(this.$route.params.id) {
        this.post = this.listPost.filter(item => item.id === this.$route.params.id)[0]
        return
      }
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
