<template>
  <div id="app">
    <header>
      <a @click="confirmNewCombat = true">New Combat</a>
      <a @click="nextPlayer">Next</a>
      <add-player></add-player>
    </header>
    <div>
      <div>
        Turn: {{currentTurn}}
      </div>
      <player v-for="player in players" :key="player.id" v-bind:player="player"></player>
    </div>
    <confirmation-modal v-if="confirmNewCombat"
      message="This will delete your current combat."
      @confirm="confirmNewCombat = false;newCombat()"
      @cancel="confirmNewCombat = false"
    ></confirmation-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddPlayer from './components/players/AddPlayer'
import Player from './components/players/Player'
import ConfirmationModal from './components/utility/ConfirmationModal'

export default {
  components: {
    AddPlayer,
    Player,
    ConfirmationModal
  },
  computed: mapGetters({
    players: 'players',
    currentTurn: 'currentTurn'
  }),
  methods: mapActions([
    'nextPlayer',
    'newCombat'
  ]),
  data () {
    return {
      confirmNewCombat: false
    }
  }
}
</script>

<style scoped>
#app {
  font-family: sans-serif;
}
header {
  height: 75px;
  background: #555;
  color: #fff;
  padding: 5px 10px;
}
</style>
