<template>
  <ul>
    <li>
      Name: <input type="text" v-model="name">
    </li>
    <li>
      Initiative: <input type="text" v-model="initiative">
      <button @click="onRollInitiative">Roll</button>
    </li>
    <li>
      HP: <input type="text" v-model="totalHp">
    </li>
    <li>
      <button @click="onAddPlayer">Add</button>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      name: '',
      totalHp: 0,
      initiative: 0
    }
  },
  methods: {
    ...mapActions([
      'addPlayer'
    ]),
    onAddPlayer () {
      this.addPlayer({
        name: this.name,
        initiative: parseInt(this.initiative, 0),
        totalHp: parseInt(this.totalHp, 0)
      })
    },
    onRollInitiative () {
      this.initiative = Math.ceil(Math.random() * 20)
    }
  }
}
</script>

<style scoped>
</style>
