import firebase from 'firebase'
import util from '@/utils/utils'
export default {
  namespaced: true,
  state: {
    listPost: undefined
  },
  getters: {
    listPost: (state: any) => state.listPost,
  },
  mutations: {
    SET_LIST_POST: (state: any, payload: any) => {
      state.listPost = payload
    },
  },
  actions: {
    async getAllPost({ commit }) {
      try {
        const response =  await firebase.firestore().collection('posts').get()
        commit('SET_LIST_POST', util.getDataFromDocs(response))
      } catch(err) {
        console.log(err)
      }
    },
    submit({ commit }, bean: any) {
      console.log(bean)
      firebase.firestore().collection('posts').add(bean)
    }
  }
}