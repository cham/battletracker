import * as types from '../../mutation-types'

export default {
  [types.ADD_PLAYER] (state, player) {
    state.players.push(player)
    state.players.sort((a, b) => b.initiative - a.initiative)
  }
}
