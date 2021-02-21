import axios from 'axios'
// import {Socket} from "socket.io";
import {Ticket, UserSubmit, User} from './models'
import VueSocketIOExt from 'modules/vue-socket.io-extended';
import { Socket } from 'vue-socket.io-extended';

export const api = axios.create(
    {
        baseURL: 'https://acua-team.herokuapp.com/',
        withCredentials: false,
    });

// points to loopback server wherever hosted


/**
 * Ticket API calls
 */

export async function fetchTickets(user: any) {
    const order: string = 'filter[order]=tic_id ASC'
    // const where: string = `filter[where][and][0][location]=${user.location}`
    // + `&filter[where][and][2][isComplete]=false`
    // const limit: string = 'filter[limit]=12'
    const where: string = `filter[where][and][0][time_serviced]=not serviced`
    + `&filter[where][and][1][user_id]=1`
    // + `&filter[where][and][2][user_id]=${}`
    // + `&filter[where][and][2][isComplete]=false`
    // const response = await api.get(`/tickethistories?${order}&${where}&${limit}`)
    const response = await api.get(`/tickethistories?${where}&${order}`)
    // const response = await api.get(`/tickethistories`)
    return response.data as Ticket[]
  }


export async function fetchTicketsQueue(user: any) {
    // const order: string = 'filter[order]=tic_id ASC'
    // const where: string = `filter[where][and][0][location]=${user.location}`
    // + `&filter[where][and][2][isComplete]=false`
    // const limit: string = 'filter[limit]=12'
    const where: string = `filter[where][time_serviced]=not serviced`
    //  + '&filter[where][and][1][user_id]!=1'
    // + `&filter[where][and][2][isComplete]=false`
    // const response = await api.get(`/tickethistories?${order}&${where}&${limit}`)
    const response = await api.get(`qtickets?${where}`)
    // const response = await api.get(`/tickethistories`)
    return response.data as Ticket[]
}


export async function fetchTicketsWindow(user: any) {
    // const order: string = 'filter[order]=tic_id ASC'
    // const where: string = `filter[where][and][0][location]=${user.location}`
    // + `&filter[where][and][2][isComplete]=false`
    // const limit: string = 'filter[limit]=12'
    const where: string = `filter[where][and][0][time_serviced]=not serviced`
    + `&filter[where][and][1][user_id] = ${user.id}`
    //  + '&filter[where][and][1][user_id]!=1'
    // + `&filter[where][and][2][isComplete]=false`
    // const response = await api.get(`/tickethistories?${order}&${where}&${limit}`)
    const response = await api.get(`qtickets?${where}`)
    // const response = await api.get(`/tickethistories`)
    return response.data as Ticket[]
}

export async function fetchTotal(user: any): Promise<number> {
  const where: string = `filter[where]`
  const response = await api.get(`/tickethistories/count?${where}`)
  return response.data.count as number
}

export async function placeTicket(ticket: Ticket) {
    await api.post(`qtickets/`, ticket)
}

export async function delTicket(id: number) {
    await api.delete(`qtickets/${id}`)
}

export async function updateTicket(id: number, update: any) {
    await api.patch(`tickethistories/${id}`, update)
}

export async function strikeTicket(id: number, ticket: Ticket): Promise<void> {
    await api.put(`tickethistories/${id}`, ticket)
}

/**
 * User API calls
 */

export async function loginUser(userSubmit: UserSubmit): Promise<User> {
    const response = await api.patch('/users/login', userSubmit)

    return response.data as User
}

export async function logoutUser(user: any): Promise<void> {
    await api.patch('/users/logout', user)
}
