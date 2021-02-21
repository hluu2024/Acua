<template>
  <v-card color="#117FA7" dark>
    <v-card-title class="headline">
      Next Update &nbsp;
      <v-progress-circular
        :rotate="-90"
        :size="50"
        :value="timer"
        dark
      >
        {{ 5 - (timer / 10) }}
      </v-progress-circular>
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import tickets from '@/store/modules/tickets'

@Component({
  props: {
    timer: Number
  }
})
export default class TicketCount extends Vue {
  private tickets = tickets // ticket state manager

  public get ticketCount(): number {
    return tickets.count
  }
}
</script>
