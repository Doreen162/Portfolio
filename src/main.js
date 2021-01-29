"use strict"

import Vue from "vue"
import vuetify from "./plugins/vuetify"
import router from "./plugins/router"
import App from "./App.vue";
import VueMeta from "vue-meta"
import VueAnalytics from "vue-analytics"

Vue.config.productionTip = false;
//const isProd = process.env.NODE_ENV === "production"

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount("#app");

Vue.use(
  VueMeta,
  VueAnalytics, {
    id: "UA-115999013-1",
    router,
    debug: {
      enabled: !isProd,
      sendHitTask: isProd
    }
  }
)