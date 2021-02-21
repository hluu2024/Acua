<template >
  <div >
      <v-container grid-list-xl>
        <v-layout row wrap>
          <v-flex d-flex xs6 offset-xs2>
            <TicketCard/>
          </v-flex>
        </v-layout>
      </v-container>

    <TicketQueue />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TicketCard from '@/components/TicketCard.vue'
import TicketQueue from '@/components/TicketQueue.vue'
import tickets from '@/store/modules/tickets'
import qtickets from '@/store/modules/qtickets'
import users from '@/store/modules/users'

@Component({
  components: {
    TicketCard,
    TicketQueue
  }
})
export default class Manager extends Vue {
  public timer: number = 0
  private tickets  = tickets
  private qtickets = qtickets
  private users = users
  private polling: number | undefined = undefined
  private countdown: number | undefined = undefined

        public get loader(): boolean {
            return tickets.ticketLoader;
        }

        public mounted(): void {
            tickets.loadTickets()
            qtickets.loadTickets()
            // tickets.ticketCount(this.users.user)
            this.pollData()
        }


        public beforeDestroy(): void {
            clearInterval(this.polling)
            clearInterval(this.countdown)
        }

        private pollData(): void {
            this.polling = setInterval(() => {
                if (tickets.tickets.length < 12) {
                    tickets.loadTickets()
                }
            }, 11000)

            this.countdown = setInterval(() => {
                if (this.timer === 100) {
                    return (this.timer = 0)
                }
                this.timer += 10
            }, 1000)
        }
    }
</script>
