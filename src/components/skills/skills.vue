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
                <h1 class="pagetitle display-3 font-weight-bold mt-8 mb-8">
                    Skills
                </h1>
            </v-col>

            <v-col
                xs="12"
                sm="6"
                md="3"
                lg="3"
                v-for="skill in skills"
                :key="skill.title">
                <template>
                    <v-hover>
                        <v-card
                            slot-scope="{ hover }"
                            class="text-xs-center ma-4"
                            :class="`elevation-${hover ? 12 : 4}`">
                            <v-card-title>
                                <div class="mx-auto">
                                    <v-progress-circular
                                        :value="skill.value"
                                        :rotate="-90"
                                        width="15"
                                        size="100">
                                        {{ skill.value }}
                                    </v-progress-circular>
                                </div>
                            </v-card-title>

                            <v-card-actions>
                                <v-layout justify-space-around>
                                    <div class="headline">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on }">
                                                <span
                                                    class="subtitle-1"
                                                    v-on="on"> 
                                                    {{ skill.title }}
                                                </span>
                                            </template>
                                            <span>{{ skill.duration }}</span>
                                        </v-tooltip>
                                    </div>
                                </v-layout>
                            </v-card-actions>
                        </v-card>
                    </v-hover>
                </template>
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
    title: "Skills",
    titleTemplate: "%s ← Doreen Ligman's Portfolio",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Doreen Ligman's Portfolio" },
      { charset: "utf-8" },
      { property: "og:title", content: "Doreen portfolio" },
      { property: "og:site_name", content: "Doreen portfolio" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://github.com/Doreen162" },
      { property: "og:description", content: "Doreen Ligman's Portfolio" }
    ]
  },
  data() {
    return {
      skills: [
        {
          title: "Html",
          value: 0,
          absoluteValue: 80,
          color: "white",
          show: false,
        },
        {
          title: "Css",
          value: 0,
          absoluteValue: 70,
          color: "white",
          show: false,
        },
        {
          title: "JavaScript",
          value: 0,
          absoluteValue: 30,
          color: "white",
          show: false,
        },
        {
          title: "Bootstrap",
          value: 0,
          absoluteValue: 60,
          color: "white",
          show: false,
        },
        {
          title: "React",
          value: 0,
          absoluteValue: 90,
          color: "white",
          show: false,
        },
        {
          title: "Vuejs",
          value: 0,
          absoluteValue: 50,
          color: "white",
          show: false,
        },
        {
          title: "Python",
          value: 0,
          absoluteValue: 60,
          color: "white",
          show: false,
        },
      ],
      interval: {},
      expand: false,
    }
  },
  computed: {
    dense() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  mounted() {
    let timesRun = 0;
    this.interval = setInterval(() => {
      if (timesRun === 10) {
        clearInterval(this.interval);
        return;
      }
      timesRun += 1;
      this.skills.forEach((skill) => {
        if (skill.absoluteValue !== skill.value) {
          skill.value += 10
        }
      });
    }, 300)
  }
};
</script>
