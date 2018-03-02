import * as types from '../../mutation-types'

export default {
  [types.ADD_PLAYER] (state, player) {
    state.players.push(player)
    state.players.sort((a, b) => b.initiative - a.initiative)
  },
  [types.NEXT_PLAYER] (state) {
    let playerIndex = 0
    if (!state.players.length) {
      return
    }
    if (!state.currentPlayer) {
      state.currentPlayer = state.players[0]
    } else {
      playerIndex = state.players.indexOf(state.currentPlayer)
      playerIndex++
      if (playerIndex > state.players.length - 1) {
        playerIndex = 0
        state.turn++
      }
    }
    state.currentPlayer = state.players[playerIndex]
    state.currentPlayer.statusEffects.forEach((status) => {
      status.turnsLeft--
    })
    state.currentPlayer.statusEffects = state.currentPlayer.statusEffects.filter(status => status.turnsLeft > -2)
  },
  [types.NEW_COMBAT] (state) {
    state.players = []
    state.currentPlayer = null
    state.turn = 1
  },
  [types.ADD_STATUS] (state, status) {
    const player = state.players.find(p => p.id === status.playerId)
    if (!player) {
      return
    }
    player.statusEffects.push({
      name: status.name,
      turnsLeft: status.turnsLeft
    })
  }
}
