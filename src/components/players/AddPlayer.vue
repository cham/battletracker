<template>
  <div>
    <ul>
      <li>
        <input class="addplayer-name" type="text" ref="name" v-model="name">
      </li>
      <li>
        Initiative: <input type="number" ref="initiative" v-model="initiative">
        <button @click="onRollInitiative">Roll</button>
      </li>
      <li>
        HP: <input type="number" ref="hp" v-model="totalHp">
      </li>
      <li>
        <button ref="addplayerbutton" @click="onAddPlayer">Add</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { generateId } from '../../utils/uuidv4'
import valid from './validators/AddPlayer'

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
      if (!valid(this)) {
        return
      }
      this.addPlayer({
        name: this.name,
        initiative: parseInt(this.initiative, 0),
        totalHp: parseInt(this.totalHp, 0),
        statusEffects: [],
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
ul, li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
li {
  float: left;
  margin-right: 15px;
}
h4 {
  margin: 0;
  margin-bottom: 5px;
  font-weight: 500;
}
.addplayer-name {
  margin-left: 0;
  width: 150px;
}
</style>
