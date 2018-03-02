<template>
  <div id="app">
    <add-player></add-player>
    <player v-for="player in players" :key="player.id" v-bind:player="player"></player>
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
