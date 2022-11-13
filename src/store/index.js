import Vue from 'vue'
import Vuex from 'vuex'

import { generateId } from '../utils/generateId'

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
    REMOVE_ITEM(state, id) {
      let newList = state.items.filter(value => value.id != id)
      state.items = newList
    },

    ADD_ITEM(state, item) {
      let newItem = item
      newItem.id = generateId()

      let newList = [...state.items]
      newList.push(newItem)

      state.items = newList
    },

    EDIT_ITEM(state, item) {
      let newList = state.items.filter(value => value.id != item.id)
      newList.push(item)
      state.items = newList
    },

    FILTER_ITEM(state, filter) {
      state.filter = filter
    },
  },
  actions: {
    removeItem({ commit }, id) {
      commit('REMOVE_ITEM', id)
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
  },
  modules: {}
})