<template>
  <ul v-bind:class="{ current: currentPlayer === player, 'player-wrapper': true }">
    <li class="player-name">
      {{player.name}}
    </li>
    <li class="player-initiative">
      Initiative: {{player.initiative}}
    </li>
    <li class="player-hp">
      HP: {{player.totalHp}}
      <button @click="showTakeDamage = true">Damage</button>
      <modal v-if="showTakeDamage" @cancel="showTakeDamage = false">
        <h3 slot="header">Damage Player</h3>
        <div slot="body">
          <p>
            Amount: <input type="number" ref="playerdamage" v-model="playerDamage">
          </p>
          <p>
            <button ref="adddamagebutton" @click="onAddDamage()">Damage</button>
          </p>
        </div>
      </modal>
    </li>
    <li class="player-status">
      <button class="player-addstatus" @click="showAddStatusEffect = true">Add Status</button>
      <modal v-if="showAddStatusEffect" @cancel="showAddStatusEffect = false">
        <h3 slot="header">Add Status Effect</h3>
        <div slot="body">
          <p>
            Name: <input type="text" ref="statusname" v-model="statusName">
          </p>
          <p>
            Duration: <input type="number" ref="turnsleft" v-model="turnsLeft">
          </p>
          <p>
            <button ref="addstatusbutton" @click="onAddStatus()">Add</button>
          </p>
        </div>
      </modal>
      <ul class="status-list" v-if="player.statusEffects.length">
        <li v-for="status in player.statusEffects" :key="status.id">
          <span v-if="status.turnsLeft > -1">{{status.turnsLeft}} turns - {{status.name}}</span>
          <span v-else>Expired - {{status.name}}</span>
        </li>
      </ul>
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
      showAddStatusEffect: false,
      showTakeDamage: false,
      statusName: '',
      turnsLeft: 0,
      playerDamage: 0
    }
  },
  computed: mapGetters({
    currentPlayer: 'currentPlayer'
  }),
  methods: {
    ...mapActions([
      'addStatus',
      'damagePlayer'
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
      this.showAddStatusEffect = false
    },
    onAddDamage () {
      const damage = parseInt(this.playerDamage, 0)
      this.$refs.playerdamage.classList.remove('invalid')
      if (!damage) {
        this.$refs.playerdamage.classList.add('invalid')
        return
      }
      this.damagePlayer({
        playerId: this.player.id,
        damage
      })
      this.showTakeDamage = false
    },
    onKeyPressStatus (e) {
      if (e.target === this.$refs.addstatusbutton) {
        return
      }
      if (e.key === 'Enter') {
        this.onAddStatus()
      }
    },
    onKeyPressDamage (e) {
      if (e.target === this.$refs.adddamagebutton) {
        return
      }
      if (e.key === 'Enter') {
        this.onAddDamage()
      }
    }
  },
  watch: {
    showAddStatusEffect (opened) {
      window.removeEventListener('keyup', this.onKeyPressStatus)
      if (opened) {
        this.$nextTick(() => {
          window.addEventListener('keyup', this.onKeyPressStatus)
          this.$refs.statusname.focus()
        })
      }
    },
    showTakeDamage (opened) {
      window.removeEventListener('keyup', this.onKeyPressDamage)
      if (opened) {
        this.$nextTick(() => {
          window.addEventListener('keyup', this.onKeyPressDamage)
          this.$refs.playerdamage.focus()
        })
      }
    }
  }
}
</script>

<style scoped>
.current {
  background: rgba(0,0,0,0.2);
}
.current .player-name {
  text-indent: 20px;
}
.player-wrapper {
  overflow: hidden;
  margin: 0;
  padding: 5px;
  line-height: 32px;
}
.player-name,
.player-initiative,
.player-hp,
.player-status {
  float: left;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 25%;
}
.player-addstatus {
  float: right;
}
.status-list {
  clear: right;
}
</style>
