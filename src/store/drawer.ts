import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    drawer: false,
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
    ],
  },
  mutations: {
    setDrawer: (state: any, payload: any) => (state.drawer = payload),
    toggleDrawer: (state: any) => (state.drawer = !state.drawer),
  },
  actions: {

  },
})
