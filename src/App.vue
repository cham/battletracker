<template>
  <div id="app">
    <p v-for="player in players">{{player.name}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    players: 'players'
  })
}
</script>

<style>
</style>
