<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col>
          <v-sheet min-height="80vh" rounded="lg" class="pt-5 pb-2">
            <div class="list-post">
              <v-skeleton-loader v-if="listPost && listPost.length === 0"
                class="mx-auto"
                type="card"
              ></v-skeleton-loader>
              <template v-for="(item, index) in listPost">
                <v-card :key="index" class="mx-auto mb-5">
                  <v-img :src="item.thumbnail" max-height="350px"></v-img>
                  <v-card-title>{{ item.title }}</v-card-title>
                  <v-card-subtitle>
                    <div v-html="getSubtitle(item.content)"></div>
                  </v-card-subtitle>
                  <v-card-actions class="pt-0">
                    <v-btn color="orange lighten-2" text @click="readPost(item.id)">Đọc tiếp</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Post",
  data: () => ({}),
  computed: {
    ...mapGetters("post", ["listPost"])
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapActions("post", ["getAllPost"]),
    init() {
      this.getAllPost()
    },
    getSubtitle(content) {
      return content.replace(/(([^\s]+\s\s*){50})(.*)/,"$1…");
    },
    readPost(id) {
      this.$router.push({ name: 'one-post', params: {
        id
      }}).catch((err) => {console.log(err)})
    }
  }
};
</script>
