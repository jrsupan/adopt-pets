import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters: {
    animalsCount: (state) => {
      return state.cats.length + state.dogs.length
    },
    getAllCats: (state) => {
      return state.pets.filter((pet) => {
        return pet.species === 'cat'
      })
    }
  },
  mutations,
  actions,
  modules: {
  }
})
