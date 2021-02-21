<template>
  <div>
    <div>
      <v-container grid-list-xl>
        <v-layout row wrap>
          <v-flex d-flex xs6 offset-xs3>
            <TicketView/>
          </v-flex>
          <v-flex d-flex xs6>
            <TicketCount :timer="timer"/>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <TicketQueue/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TicketView from '@/components/TicketView.vue'
import TicketQueue from '@/components/TicketQueue.vue'
import TicketCount from '@/components/TicketCount.vue'
import tickets from '@/store/modules/tickets'
import qtickets from '@/store/modules/qtickets'
import users from '@/store/modules/users'

@Component({
  components: {
    TicketQueue,
    TicketView,
    TicketCount
  }
})
export default class Manager extends Vue {
  public timer: number = 0
  private tickets  = tickets
  private qtickets  = qtickets
  private users = users
  private polling: number | undefined = undefined
  private countdown: number | undefined = undefined

  public get loader(): boolean {
    return tickets.ticketLoader;
  }

  public mounted(): void {
    tickets.loadTickets()
    qtickets.loadTicketsQueue()
    // tickets.ticketCount(this.users.user)
    this.pollData()
  }

  public beforeDestroy(): void {
    clearInterval(this.polling)
    clearInterval(this.countdown)
  }

  private pollData(): void {
    this.polling = setInterval(() => {
      // tickets.ticketCount(this.users.user)
      tickets.loadTickets()
      qtickets.loadTicketsQueue()
    }, 5500)

    this.countdown = setInterval(() => {
      if (this.timer === 50) {
        return (this.timer = 0)
      }
      this.timer += 10
    }, 1000)
  }
}
</script>