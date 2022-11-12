import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    items: [],
    filter: null
  }),
  getters: {
    getItems(state) {
      return state.items || []
    },

    getFilter(state) {
      return state.filter || null
    },

    getItemsLength(state) {
      return !!state.items.length
    }
  },
  mutations: {
    REMOVE_ITEM(state, name) {
      let newList = state.items.filter(value => value.name != name)
      state.items = newList
    },

    ADD_ITEM(state, item) {
      let newList = [...state.items]
      newList.push(item)
      state.items = newList
    },

    EDIT_ITEM(state, item) {
      let newList = state.items.filter(value => value.name != item.name)
      newList.push(item)
      state.items = newList
    },

    FILTER_ITEM(state, filter) {
      state.filter = filter
    },
  },
  actions: {
    removeItem({ commit }, name) {
      commit('REMOVE_ITEM', name)
    },

    addItem({ commit }, item) {
      commit('ADD_ITEM', item)
    },

    editItem({ commit }, item) {
      commit('EDIT_ITEM', item)
    },

    filterItem({ commit }, filter) {
      commit('FILTER_ITEM', filter)
    },

    openModalCreateContact({ commit }) {
      commit('OPEN_MODAL_CREATE_CONTACT')
    }
  },
  modules: {
  }
})