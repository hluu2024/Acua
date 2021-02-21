import Vue from 'vue'
import './plugins/vuetify'
import './pubsub'
import App from './App.vue'
import router from './router'
import store from './store'
import io from 'socket.io-client'
import VueSocketIOExt from 'vue-socket.io-extended';

// export const socket = io('http://localhost:3000');
// Vue.use(VueSocketIOExt, socket);

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');

