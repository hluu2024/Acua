  export default class {

  constructor () {
    this.location = 'temp'
  }

  setLocation (qrCode) {
    this.location = qrCode
  }

  setTicketInfo ({ phone, first_name, last_name, email, reasonForVisit}) {
    this.user_id = 1
    this.loc_id = 1
    this.wind_id = 0
    this.phone = phone
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
    this.reason_of_visit = reasonForVisit
    this.time_created = new Date()
    this.time_serviced = "not serviced"
  }

}
