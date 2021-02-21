const httpModule = require('tns-core-modules/http')

export default {
    getAnimals() {
        return httpModule.getJSON(`https://acuaserver.herokuapp.com/animals`)
    }
}


