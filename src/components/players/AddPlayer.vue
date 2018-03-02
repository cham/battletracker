<template>
  <div>
    <a @click="showAddPlayer = !showAddPlayer">Add player</a>
    <ul v-if="showAddPlayer">
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
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { generateId } from '../../utils/uuidv4'

export default {
  data () {
    return {
      name: '',
      totalHp: 0,
      initiative: 0,
      showAddPlayer: false
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
        totalHp: parseInt(this.totalHp, 0),
        id: generateId()
      })
    },
    onRollInitiative () {
      this.initiative = Math.ceil(Math.random() * 20)
    }
  }
}
</script>

<style scoped>
div {
  overflow: hidden;
}
a {
  cursor: pointer;
  user-select: none;
}
ul, li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
li {
  float: left;
  margin-right: 2vmin;
}
</style>
