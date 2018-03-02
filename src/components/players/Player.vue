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
    <li>
      Status effects:
      <ul v-if="player.statusEffects.length">
        <li v-for="status in player.statusEffects" :key="status.id">
          <span v-if="status.turnsLeft > -1">{{status.turnsLeft}} turns - {{status.name}}</span>
          <span v-else>Expired - {{status.name}}</span>
        </li>
      </ul>
      <button @click="showAddStatusEffect = true">Add Status</button>
      <modal v-if="showAddStatusEffect" @cancel="showAddStatusEffect = false">
        <h3 slot="header">Add Status Effect</h3>
        <div slot="body">
          <p>
            Name: <input type="text" ref="statusName" v-model="statusName">
          </p>
          <p>
            Duration: <input type="text" ref="turnsLeft" v-model="turnsLeft">
          </p>
          <p>
            <button @click="onAddStatus();showAddStatusEffect = false">Add</button>
          </p>
        </div>
      </modal>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { generateId } from '../../utils/uuidv4'
import Modal from '../utility/Modal'
import valid from './validators/Player'

export default {
  components: {
    Modal
  },
  props: ['player'],
  data () {
    return {
      totalHp: this.player.totalHp,
      initiative: this.player.initiative,
      showAddStatusEffect: false,
      statusName: '',
      turnsLeft: 0
    }
  },
  computed: mapGetters({
    currentPlayer: 'currentPlayer'
  }),
  methods: {
    ...mapActions([
      'addStatus'
    ]),
    onAddStatus () {
      if (!valid(this)) {
        return
      }
      this.addStatus({
        playerId: this.player.id,
        name: this.statusName,
        turnsLeft: parseInt(this.turnsLeft, 0),
        id: generateId()
      })
    }
  }
}
</script>

<style scoped>
.current {
  background: #afa;
}
</style>
