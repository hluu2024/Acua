import Vue from 'nativescript-vue'
import store from './store'
import Home from './views/Home.vue'
import VueDevtools from 'nativescript-vue-devtools'
import RadListView from 'nativescript-ui-listview/vue'
import VueTelInput from 'vue-tel-input'

Vue.use(RadListView)
Vue.registerElement('BarcodeScanner', () => require('nativescript-barcodescanner').BarcodeScannerView)
Vue.registerElement("PreviousNextView", () => require("nativescript-iqkeyboardmanager"). PreviousNextView)

Vue.use(VueTelInput)

//fonticon plugin
import { TNSFontIcon, fonticon } from 'nativescript-fonticon';
TNSFontIcon.debug = false;
TNSFontIcon.paths = {
  'fa': './fonts/font-awesome.css',
  'ion': './fonts/ionicons.css',
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);


if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h('frame', [h(Home)])
}).$start()
