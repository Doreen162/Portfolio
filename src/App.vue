<template>
    <v-app>
        <Header />

        <router-view />

        <Footer />
    </v-app>
</template>

<script>
import Header from "./components/header";
import Footer from "./components/footer";

export default {
  name: "App",
  metaInfo: {
    title: "Home",
    titleTemplate: "%s ← Doreen Ligman's Portfolio",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Doreen Ligman's Portfolio" },
      { charset: "utf-8" },
      { property: "og:title", content: "Doreen portfolio" },
      { property: "og:site_name", content: "Doreen portfolio" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://takuzoo3868.github.io" },
      { property: "og:description", content: "Doreen Ligman's Portfolio" }
    ]
  },
  components: {
    Header,
    Footer,
  }
}
</script>