import * as types from '../../mutation-types'

export const addPlayer = ({ commit }, player) => {
  commit(types.ADD_PLAYER, player)
}

export const nextPlayer = ({ commit }) => {
  commit(types.NEXT_PLAYER)
}

export const newCombat = ({ commit }) => {
  commit(types.NEW_COMBAT)
}
