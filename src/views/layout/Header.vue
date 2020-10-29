<template>
  <!-- <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color=""
          size="60"
        > <v-img src="https://gudlogo.com/wp-content/uploads/2019/04/logo-bong-hoa-sen17.jpg" />
          
        </v-avatar>

        <v-btn
          v-for="link in links"
          :key="link.value"
          text
          @click="redirect(link.value)"
          
        >
          {{ link.label }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field 
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
  </v-app-bar>-->
  <v-app-bar app flat>
    <v-app-bar-nav-icon class="hidden-xs-and-up" />

    <v-container class="mx-auto py-0">
      <v-row align="center">
        <v-avatar class="mr-10" color size="60">
          <v-img src="https://gudlogo.com/wp-content/uploads/2019/04/logo-bong-hoa-sen17.jpg" />
        </v-avatar>
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          v-bind="link"
          class="hidden-md-and-down"
          text
          @click="redirect(link.value)"
        >{{ link.label }}</v-btn>

        <v-spacer />

        <v-text-field
          append-icon="mdi-magnify"
          flat
          hide-details
          solo-inverted
          style="max-width: 300px;"
        />
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    links: [
      {
        label: "Mỗi ngày một câu chuyện",
        value: "home"
      },
      {
        label: "Bài viết",
        value: "list-post"
      },
      {
        label: "Đăng bài",
        value: "post"
      },
      {
        label: "Về chúng tôi",
        value: "about-us"
      }
    ]
  }),
  methods: {
    redirect(link) {
      if (this.$route.name !== link) {
        this.$router.push({ name: link }).catch(err => {
          console.log(err);
        });
      }
    }
  }
};
</script>
