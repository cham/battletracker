import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

const state = {
  players: [],
  currentPlayer: null,
  turn: 1
}

export default {
  state,
  getters,
  actions,
  mutations
}
