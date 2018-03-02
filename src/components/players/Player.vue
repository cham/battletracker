<template>
  <ul>
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
export default {
  props: ['player'],
  data () {
    return {
      totalHp: this.player.totalHp,
      initiative: this.player.initiative
    }
  }
}
</script>

<style scoped>
</style>
