<template>
    <v-app dark>
        <!--    Input my contests    -->
        <v-content>
            <Terminal />

            <div class="text-center pb-6 px-5">
                <v-btn
                    x-large
                    rounded
                    to="/about"
                    class="mx-4 my-2">
                    <v-icon class="mr-2">
                        mdi-account-circle
                    </v-icon> about me
                </v-btn>
                <v-btn
                    x-large
                    rounded
                    to="/skills"
                    class="mx-4 my-2">
                    <v-icon class="mr-2">
                        mdi-dns
                    </v-icon> skills
                </v-btn>
                <v-btn
                    x-large
                    rounded
                    to="/works"
                    class="mx-4 my-2">
                    <v-icon class="mr-2">
                        mdi-briefcase
                    </v-icon> works
                </v-btn>
            </div>
        </v-content>
    </v-app>
</template>

<script>
import Terminal from "./terminal";

export default {
  metaInfo: {
    title: "Home",
    titleTemplate: "%s Doreen Rowena Ligman Portfolio",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Doreen Ligman Portfolio" },
      { charset: "utf-8" },
      { property: "og:title", content: "Doreen Ligman" },
      { property: "og:site_name", content: "Doreen portfolio" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://takuzoo3868.github.io" },
      { property: "og:description", content: "Doreen Ligman Portfolio" }
    ]
  },
  components: {
    Terminal,
  },
};
</script>