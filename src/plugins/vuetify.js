import Vue from "vue"
import Vuetify from "vuetify/lib"
import "vuetify/src/styles/main.sass"

import "typeface-roboto/index.css"
import "@mdi/font/css/materialdesignicons.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa" || "mdi",
  },
  theme: {
    dark: true,
  },
});