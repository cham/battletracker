<template>
  <div id="app">
    <header>
      <add-player></add-player>
    </header>
    <div>
      <player v-for="player in players" :key="player.id" v-bind:player="player"></player>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AddPlayer from './components/players/AddPlayer'
import Player from './components/players/Player'

export default {
  components: {
    AddPlayer,
    Player
  },
  computed: mapGetters({
    players: 'players'
  })
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
