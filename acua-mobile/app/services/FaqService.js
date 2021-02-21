const httpModule = require('tns-core-modules/http')

export default {
  getFaqs () {
    return httpModule.getJSON('http://localhost:3000/faqs')
  },
  addFaq (faq) {
    return httpModule.request({
      // url: `https://acua-server.herokuapp.com/faqs`,
      // url: 'http://localhost:3000',
      url: 'https://acuaserver.herokuapp.com/tickets',
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify(faq)
    })
  }
}
