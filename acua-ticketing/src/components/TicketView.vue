<template >
<v-card
    height="350"
    width="600"
    class="mx-auto"
  >

  <v-list style="background-color:#117FA7;">
      <v-list-tile >
        <v-list-tile-content >
          <v-list-tile-title class="title text-xs-center" style="color:white;">Window Caller</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

  <v-navigation-drawer permanent width="600">
    
    <v-list  v-for="(ticket, i) in queue" :key="i">

        <v-list-tile-content >
          <v-list-tile-title class="headline text-xs-center">Ticket #{{ticket.tic_id}}</v-list-tile-title>
          <v-list-tile-sub-title style="font-size:20px;" class="text-xs-center">Name: {{ticket.first_name}}</v-list-tile-sub-title>
          <v-list-tile-sub-title style="font-size:30px;" class="text-xs-center font-weight-bold">Go To Window: {{ticket.user_id}}</v-list-tile-sub-title>
        </v-list-tile-content>

    </v-list>
    <v-list  v-if="queue.length === 0">
      <v-list-tile-content>
        <v-list-tile-title class="text-xs-center">No Tickets</v-list-tile-title>
      </v-list-tile-content>
    </v-list>
  </v-navigation-drawer>
</v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Ticket, User } from '@/store/models'
import qtickets from '@/store/modules/qtickets'
import users from '@/store/modules/users'
import socket from 'socket.io-client'
@Component
export default class TicketView extends Vue {
  private qtickets = qtickets // ticket state manager
  private users = users

  public pincServer() {
    this.$socket.client.emit('suck')
  }

  public get queue(): Ticket[] {
    return this.qtickets.qtickets
  }

  public get ticket(): Ticket {
    return this.qtickets.firstTicket
  }

  public get remaining(): number {

    return this.qtickets.count
  }

  // test - error Property 'first_name' does not exist on type 'UsersModule'.
  public get first_name(): string | null {
    return this.users.first_name
  }

  public get username(): string | null {
    return this.users.username === null ? null : this.users.username
  }

  public get window(): number | null {
    return this.users.window === null ? null : this.users.window + 1
  }

}
</script>

