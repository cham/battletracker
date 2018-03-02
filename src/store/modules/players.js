const state = {
  all: [
    {
      name: 'Spooky Steve',
      initiative: 0,
      totalHp: 27
    },
    {
      name: 'Normal Norman',
      initiative: 0,
      totalHp: 22
    }
  ]
}

const getters = {
  players: state => state.all
}

const actions = {
}

const mutations = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
