import Vue from 'vue'
import Vuex from 'vuex'
import Animal from '@/models/Animal'
import Ticket from '@/models/Ticket'
import TicketService from '@/services/TicketService'
import FaqService from '@/services/FaqService'
// import TicketService from '@/services/FakeTicketService'
// import FaqService from '@/services/FakeFaqService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    animals: [],
    tickets: [],
    faqs: [],
    userAnimal: new Animal(),
    userFaq: {},
    location: 1,
    userTicket: new Ticket(),
    approvedTicket: undefined
  },
  // change the state of the app (must be synchronous)
  mutations: {
    // adoption
    storeAnimal(state, animal) {
      state.userFaq = animal
    },
    ADD_ANIMAL(state, animal) {
      state.animals.push(animal)
    },
    storeFaq(state, faq) {
      state.userFaq = faq
    },
    setTicketLocation (state, location) {
      state.location = location
    },
    setTicketInfo (state, userInput) {
      state.userTicket.setTicketInfo(userInput)
    },
    storeTicket (state, ticket) {
      state.userTicket = ticket
    },
    SET_TICKET (state, ticket) {
      state.approvedTicket = ticket
    },
    ADD_TICKET (state, ticket) {
      state.approvedTicket = ticket
    },
    SET_FAQS (state, faqs) {
      state.faqs = faqs
    },
    ADD_FAQ (state, faq) {
      state.faqs.push(faq)
    }
    

  },
  // asynchronous operations (Such as API calls)
  actions: {
    checkTicket ({ commit }, tic_id) {
      TicketService.checkTicket(tic_id)
        .then(res => {
          commit('SET_TICKET', res)
        })
    },
    addTicket ({ commit }, ticket) {
      TicketService.addTicket(ticket)
        .then(res => {
          commit('ADD_TICKET', res.content.toJSON())
        })
    },
    loadFaqs ({ commit }) {
      FaqService.getFaqs()
        .then(res => {
          commit('SET_FAQS', res)
        })
    },
    addFaq ({ commit }, faq) {
      FaqService.addFaq(faq)
        .then(res => {
          commit('ADD_FAQ', res.content.toJSON())
        })
    }
  },
  getters: {
    getSearchResults: state => search => {
      if (search === '')
        return state.faqs
      
      const words = search.split(' ')
      
      return state.faqs.filter(faq => words.some(
        word => faq.query.toLowerCase().includes(word.toLowerCase())
        || faq.answer.toLowerCase().includes(word.toLowerCase())))
    }
  }
})
