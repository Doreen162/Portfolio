import Vue from "vue"
import Router from "vue-router"
import Home from "@/components/home/home"

Vue.use(Router);

export default new Router ({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import("@/components/about/about.vue")
    },
    {
      path: "/works",
      name: "works",
      component: () =>
        import("@/components/works/works.vue")
    },
    {
      path: "/skills",
      name: "skills",
      component: () =>
        import("@/components/skills/skills.vue")
    },
    {
      // bad
      path: "/404",
      name: "NotFound",
      component: ( ) =>
        import("@/components/404/404.vue")
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});