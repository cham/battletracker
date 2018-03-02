<template>
  <div id="app">
    <player v-for="player in players" :key="player.name" v-bind:player="player"></player>
    <add-player></add-player>
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
</style>
