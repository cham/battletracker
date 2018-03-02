<template>
  <div id="app">
    <player v-for="player in players" :key="player.name" v-bind:player="player"></player>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Player from './components/players/Player'

export default {
  components: {
    Player
  },
  computed: mapGetters({
    players: 'players'
  })
}
</script>

<style scoped>
</style>
