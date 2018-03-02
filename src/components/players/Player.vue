<template>
  <ul v-bind:class="{ current: currentPlayer === player }">
    <li>
      {{player.name}}
    </li>
    <li>
      Initiative: <input type="text" v-model="initiative">
    </li>
    <li>
      HP: <input type="text" v-model="totalHp">
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['player'],
  data () {
    return {
      totalHp: this.player.totalHp,
      initiative: this.player.initiative
    }
  },
  computed: mapGetters({
    currentPlayer: 'currentPlayer'
  })
}
</script>

<style scoped>
.current {
  background: #afa;
}
</style>
