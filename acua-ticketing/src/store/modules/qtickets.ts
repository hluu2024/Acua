import {
    getModule,
    Module,
    Mutation,
    Action,
    MutationAction,
    VuexModule
} from 'vuex-module-decorators'
import store from '@/store'
import { Ticket } from '../models'
import userModule from './users'
// import { fetchTickets, removeTicket, strikeTicket, fetchTotal } from '@/services/FakeTicketService'
import {updateTicket, strikeTicket, fetchTicketsWindow, placeTicket, delTicket, fetchTicketsQueue } from '../api'
import users from './users'

@Module({
    namespaced: true,
    name: 'qtickets',
    store,
    dynamic: true
})
class QTicketsModule extends VuexModule {
    public qtickets: Ticket[] = []
    public count: number = 0

    public ticketLoader: boolean = false
    public check: boolean = false

    @Mutation
    public setCheck() {
        // this.loadTickets()
        this.check = true
    }

    @Mutation
    public setFalse() {
        this.check = false
    }

    @MutationAction
    public async loadTickets() {
        const qtickets: Ticket[] = await fetchTicketsWindow(userModule.user)
        return { qtickets }
    }

    @MutationAction
    public async loadTicketsQueue() {
        const qtickets: Ticket[] = await fetchTicketsQueue(userModule.user)
        return { qtickets }
    }


    /* @MutationAction
    public async ticketCount(user: any) {
      const count: number = await fetchTotal(user)
      return { count }
    } */

    @Action
    public async strikeTicket({ id, ticket }: { id: number, ticket: Ticket }) {
        await strikeTicket(id, ticket)
    }

    // Ticket params work! It Gets stuck on id = 1 if you uncomment console.log(id, ticket)
    // Might be becuase the delete method or patch method hasnt been updated?
    // But the old version never used DELETE request IIRC? So it may be something else
    // therefore not letting us perform a PATCH request when trying to resolve?

    @Action
    public async resolve({ id, ticket }: { id: number, ticket: Ticket }) {
        // By uncommenting this, you will see the results in the browser console.
        // You will also get lint errors which can be ignored if you comment out console.log(id, ticket) again
        // console.log(id, ticket)
        await updateTicket(id, ticket)
    }

    @Action
    public async refresh({ id, ticket }: { id: number, ticket: Ticket }) {
        // By uncommenting this, you will see the results in the browser console.
        // You will also get lint errors which can be ignored if you comment out console.log(id, ticket) again
        console.log(id, ticket)
        await updateTicket(id, ticket)
        // this.check = true
    }

    @Action
    public async queueUp({ ticket }: { ticket: Ticket }) {
        // By uncommenting this, you will see the results in the browser console.
        // You will also get lint errors which can be ignored if you comment out console.log(id, ticket) again
        // console.log(ticket)
        await placeTicket(ticket)
        // this.check = true
    }

    @Action
    public async delete({id}: {id: number}) {
        // By uncommenting this, you will see the results in the browser console.
        // You will also get lint errors which can be ignored if you comment out console.log(id, ticket) again
        // console.log(ticket)
        await delTicket(id)
        // this.check = true
    }

    @Mutation
    public setLoader() {
        this.ticketLoader = !this.ticketLoader
    }

    /*public get xtickets(): Ticket[] {
      return this.tickets.slice(0, this.limit)
    }*/

    public get firstTicket(): Ticket {
        return this.qtickets[0]
    }


    public setFirstTicket() {
        this.qtickets[0].user_id = 0
    }
}

export default getModule(QTicketsModule)
