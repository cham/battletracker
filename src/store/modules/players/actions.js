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

export const addStatus = ({ commit }, status) => {
  commit(types.ADD_STATUS, status)
}

export const damagePlayer = ({ commit }, { playerId, damage }) => {
  commit(types.DAMAGE_PLAYER, { playerId, damage })
}
