import * as types from '../../mutation-types'

export default {
  [types.ADD_PLAYER] (state, player) {
    state.players.push(player)
    state.players.sort((a, b) => b.initiative - a.initiative)
  },
  [types.NEXT_PLAYER] (state) {
    if (!state.players.length) {
      return
    }
    if (!state.currentPlayer) {
      state.currentPlayer = state.players[0]
      return
    }
    let playerIndex = state.players.indexOf(state.currentPlayer)
    playerIndex++
    if (playerIndex > state.players.length - 1) {
      playerIndex = 0
    }
    state.currentPlayer = state.players[playerIndex]
  }
}
