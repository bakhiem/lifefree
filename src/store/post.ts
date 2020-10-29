import firebase from 'firebase'
import util from '@/utils/utils'
export default {
  namespaced: true,
  state: {
    listPost: undefined,
    config: undefined
  },
  getters: {
    listPost: (state: any) => state.listPost,
  },
  mutations: {
    SET_LIST_POST: (state: any, payload: any) => {
      state.listPost = payload
    },
    SET_CONFIG: (state: any, payload: any) => {
      state.listPost = payload
    },
  },
  actions: {
    async getAllPost(store: any) {
      try {
        const response =  await firebase.firestore().collection('posts').get()
        store.commit('SET_LIST_POST', util.getDataFromDocs(response))
        return Promise.resolve({})
      } catch(err) {
        console.log(err)
      }
    },
    async submit(store: any, bean: any) {
      // console.log(bean)
      const response = await firebase.firestore().collection('posts').add(bean)
      return Promise.resolve(response.id)
    },
    async getConfig(store: any) {
      try {
        const response =  await firebase.firestore().collection('config').get()
        store.commit('SET_CONFIG', util.getDataFromDocs(response))
        return Promise.resolve({})
      } catch(err) {
        console.log(err)
      }
    },
  }
}