<template>
    <v-container
        py-6
        px-5>
        <v-row
            justify="center"
            align-content="center">
            <v-col
                cols="12"
                xs="7"
                sm="10"
                md="10"
                lg="10"
                offset-xl="1">
                <h1 class="pagetitle display-3 font-weight-bold mt-8 mb-12">
                    Projects
                </h1>
            </v-col>
        </v-row>

        <v-row
            justify="center"
            class="pb-7">
            <v-col
                cols="11"
                sm="6"
                align="center">
                <v-hover v-slot:default="{ hover }">
                    <v-card max-width="530">
                        <v-img
                            :src="require('../../../src/assets/images.png')"
                            max-height="255">
                            <v-expand-transition>
                                <v-card
                                    v-if="hover"
                                    height="100%"
                                    width="100%"
                                    class="d-flex transition-fast-in-fast-out v-card--reveal title white--text"
                                    href="https://github.com/Doreen162/Github-finder-project"
                                    target="_blank"
                                    rel="noopener">
                                    Learn More
                                    <v-icon
                                        small
                                        class="mx-2">
                                        open_in_new
                                    </v-icon>
                                </v-card>
                            </v-expand-transition>
                        </v-img>
                        <v-card-title class="text-left">
                            <h3 class="headline">
                                My Project Site
                            </h3>
                        </v-card-title>
                        <v-card-text
                            class="text-left">
                            <p class="mb-1">
                                React Project
                            </p>
                            <p class="mb-1">
                                Github Login
                            </p>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col
                cols="11"
                sm="6"
                align="center">
                <v-hover v-slot:default="{ hover }">
                    <v-card max-width="530">
                        <v-img
                            :src="require('../../../src/assets/contact.png')"
                            max-height="255">
                            <v-expand-transition>
                                <v-card
                                    v-if="hover"
                                    height="100%"
                                    width="100%"
                                    class="d-flex transition-fast-in-fast-out v-card--reveal title white--text"
                                    href="https://github.com/Doreen162/contact-keeper"
                                    target="_blank"
                                    rel="noopener">
                                    Learn More
                                    <v-icon
                                        small
                                        class="mx-2">
                                        open_in_new
                                    </v-icon>
                                </v-card>
                            </v-expand-transition>
                        </v-img>

                        <v-card-title class="text-left">
                            <h3 class="headline">
                                My Project Site
                            </h3>
                        </v-card-title>
                        <v-card-text
                            class="text-left">
                            <p class="mb-1">
                                React Project 2
                            </p>
                            <p class="mb-1">
                                Contact Keeper
                            </p>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col
                cols="11"
                sm="6"
                align="center">
                <v-hover v-slot:default="{ hover }">
                    <v-card max-width="530">
                        <v-img
                            :src="require('../../../src/assets/login.png')"
                            max-height="255">
                            <v-expand-transition>
                                <v-card
                                    v-if="hover"
                                    height="100%"
                                    width="100%"
                                    class="d-flex transition-fast-in-fast-out v-card--reveal title white--text"
                                    href="https://github.com/Doreen162/it-logger"
                                    target="_blank"
                                    rel="noopener">
                                    Learn More
                                    <v-icon
                                        small
                                        class="mx-2">
                                        open_in_new
                                    </v-icon>
                                </v-card>
                            </v-expand-transition>
                        </v-img>

                        <v-card-title class="text-left">
                            <h3 class="headline">
                                My Project Site
                            </h3>
                        </v-card-title>
                        <v-card-text
                            class="text-left">
                            <p class="mb-1">
                                React Project 3
                            </p>
                            <p class="mb-1">
                                IT logger
                            </p>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col
                cols="11"
                sm="6"
                align="center">
                <v-hover v-slot:default="{ hover }">
                    <v-card max-width="530">
                        <v-img
                            :src="require('../../../src/assets/beauty.png')"
                            max-height="255">
                            <v-expand-transition>
                                <v-card
                                    v-if="hover"
                                    height="100%"
                                    width="100%"
                                    class="d-flex transition-fast-in-fast-out v-card--reveal title white--text"
                                    href="https://github.com/Doreen162/Beauty-salon"
                                    target="_blank"
                                    rel="noopener">
                                    Learn More
                                    <v-icon
                                        small
                                        class="mx-2">
                                        open_in_new
                                    </v-icon>
                                </v-card>
                            </v-expand-transition>
                        </v-img>

                        <v-card-title class="text-left">
                            <h3 class="headline">
                                My Project Site
                            </h3>
                        </v-card-title>
                        <v-card-text
                            class="text-left">
                            <p class="mb-1">
                                Final React Project
                            </p>
                            <p class="mb-1">
                                Beauty
                            </p>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col
                cols="11"
                sm="6"
                align="center">
                <v-hover v-slot:default="{ hover }">
                    <v-card max-width="530">
                        <v-img
                            :src="require('../../../src/assets/Lottery.png')"
                            max-height="255">
                            <v-expand-transition>
                                <v-card
                                    v-if="hover"
                                    height="100%"
                                    width="100%"
                                    class="d-flex transition-fast-in-fast-out v-card--reveal title white--text"
                                    href="http://Doreen162.github/lottery-project"
                                    target="_blank"
                                    rel="noopener">
                                    Learn More
                                    <v-icon
                                        small
                                        class="mx-2">
                                        open_in_new
                                    </v-icon>
                                </v-card>
                            </v-expand-transition>
                        </v-img>

                        <v-card-title class="text-left">
                            <h3 class="headline">
                                My Project Site
                            </h3>
                        </v-card-title>
                        <v-card-text
                            class="text-left">
                            <p class="mb-1">
                                Python Project
                            </p>
                            <p class="mb-1">
                                Lottery Ticket
                            </p>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>    
        </v-row>

        <div class="text-center pb-6 px-5">
            <v-btn
                x-large
                rounded
                to="/"
                class="mx-4 my-2">
                <v-icon class="mr-2">
                    mdi-home
                </v-icon> back home
            </v-btn>
        </div>
    </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Projects",
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
  // TODO: input data
}
</script>

<style lang="scss" scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  // opacity: 0.5;
  background-color: rgba(32, 32, 32, 0.4);
  position: absolute;
  width: 100%;
}
</style>