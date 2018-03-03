<template>
  <div id="app">
    <header>
      <a class="new-combat" @click="confirmNewCombat = true">New Combat</a>
      <add-player></add-player>
    </header>
    <div class="player-area">
      <p>
        <a @click="nextPlayer">Next Player</a>
        <span class="current-turn">Turn: {{currentTurn}}</span>
      </p>
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
header {
  background: rgba(0,0,0,0.6);
  padding: 10px 20px;
  color: #fff;
}
.new-combat {
  position: absolute;
  right: 20px;
}
.current-turn {
  position: absolute;
  right: 20px;
}
.player-area {
  padding: 0 20px;
}
</style>
