import { Module, GetterTree, MutationTree, ActionTree, Commit, Getter } from 'vuex'
import {
  Count,
  MutationPayload,
  ActionPayload,
  INCREMENT,
  DECREMENT
} from '../types'
const count: Module<Count, {}> = {
  namespaced: true,
  state: {
    value: 1
  },
  getters: {
    double: (state) => {
      return state.value * 2
    }
  } as GetterTree<Count, {}>,
  mutations: {
    [INCREMENT] (state, payload: MutationPayload) {
      state.value += payload.amount
    },
    [DECREMENT] (state, payload: MutationPayload) {
      state.value -= payload.amount
    }
  } as MutationTree<Count>,
  actions: {
    incrementAsync ({ commit }, playload: ActionPayload) {
      setTimeout(() => {
        commit(INCREMENT, {
          amount: playload.amount
        })
      }, 1000)
    }
  } as ActionTree<Count, {}>
}

export default count
