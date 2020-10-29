<template>
 <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col>
          <v-sheet min-height="80vh" rounded="lg" class="pt-5 pb-2">
              <v-skeleton-loader v-if="!post"
                class="mx-auto"
                type="card"
                style="width: 80%;"
              ></v-skeleton-loader>
            <div v-if="post">
              <h3 class="text-center pb-4">{{post.title}}</h3>
              <div class="post-content" v-html="post.content"></div>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    <v-btn
      class="mx-2 reload-button"
      fab
      dark
      large
      color="indigo"
      style=""
      @click="randomAgain"
    >
      <v-icon dark v-if="!$route.params.id">
        mdi-autorenew
      </v-icon>
      <v-icon dark v-else>
        mdi-keyboard-return
      </v-icon>
    </v-btn>
    </v-container>
  </v-main>
</template>

<script>
// @ is an alias to /src
import { mapActions , mapGetters} from 'vuex'

export default {
  name: "Home",
  data: () => ({
    post: undefined
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
      if (this.listPost && this.listPost.length > 0){ 
        if(this.$route.params.id) {
          this.post = this.listPost.filter(item => item.id === this.$route.params.id)[0]
          return
        } else {
          this.post = this.listPost[Math.floor(Math.random() * this.listPost.length)]
        }
      } else {
        this.getAllPost().then(() => {
          if (this.listPost.length > 0) {
            if(this.$route.params.id) {
              this.post = this.listPost.filter(item => item.id === this.$route.params.id)[0]
              return
            }
            this.post = this.listPost[Math.floor(Math.random() * this.listPost.length)]
          }
        })
      }
    },
    randomAgain() {
      if (this.$route.params.id) {
        this.$router.push({ name: 'list-post' })
      } else {
        this.post = this.listPost[Math.floor(Math.random() * this.listPost.length)]
        window.scrollTo(0,0)
      }
    }
  }
};
</script>
