const httpModule = require('tns-core-modules/http')

export default {
  addTicket (ticket) {
    // ticket.first_name.replace(/'/g,'"')
    // console.log(ticket.first_name)
    return httpModule.request({
      // url: `http://[::1]:3000/tickets`,
      // url:`https://acuateam.herokuapp.com/tickets`,
      url: 'https://acua-team.herokuapp.com/tickethistories',
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify(ticket)
    })
  },

  checkTicket (tic_id) {
    return httpModule.getJSON(
        `https://acua-team.herokuapp.com/tickethistories/${tic_id}`
        // `https://acuateam.herokuapp.com/tickets/${ticketId}`

  )}
}
