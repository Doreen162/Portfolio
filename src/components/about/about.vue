<template>
    <v-container
        py-6
        px-5>
        <v-row
            justify="center"
            align-content="center">
            <v-col
                xs="7"
                sm="10"
                md="11"
                lg="12"
                offset-xl="1">
                <h1 class="pagetitle display-3 font-weight-bold mt-8 mb-12">
                    About me
                </h1>

                <v-card>
                    <v-card-actions class="justify-center">
                        <v-avatar
                            size="230"
                            class="elevation-4 mt-n10 my-icon">
                            <v-img :src="require('../../assets/profile-pic.jpg')" />
                        </v-avatar>
                    </v-card-actions>

                    <v-card-title primary-title>
                        <div>
                            <span class="display-1 font-weight-bold mb-1">{{ myname }}</span>
                            <div>{{ jobs }}</div>
                        </div>
                    </v-card-title>
                    <v-card-text>
                        <p>{{ about }}</p>
                    </v-card-text>

                    <div class="px-2">
                        <v-card-title primary-title>
                            <div class="headline">
                                Work Experience
                            </div>
                        </v-card-title>

                        <v-card-text>
                            <v-list
                                two-line>
                                <v-list-item-group>
                                    <v-list-item
                                        v-for="(activity, i) in activities"
                                        :key="i"
                                        :href="activity.href">                                    
                                        <v-list-item-avatar>
                                            <v-icon v-text="activity.icon" />
                                        </v-list-item-avatar>

                                        <v-list-item-content>
                                            <v-list-item-title v-text="activity.text" />
                                            <v-list-item-subtitle v-text="activity.subtext" />
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-card-text>
                    </div>

                    <div class="px-2">
                        <v-card-title primary-title>
                            <div>
                                <div class="headline">
                                    Education
                                </div>
                            </div>
                        </v-card-title>

                        <v-timeline
                            class="px-2"
                            :dense="dense">
                            <v-timeline-item
                                v-for="(item, i) in items"
                                :key="i"
                                :color="item.color"
                                :icon="item.icon"
                                fill-dot
                                large>
                                <v-card
                                    :color="item.color"
                                    dark>
                                    <v-card-title class="body-1">
                                        {{ item.title }}
                                    </v-card-title>
                                    <v-card-text class="white text--primary pt-4">
                                        <p class="title gray">
                                            {{ item.text }}
                                        </p>
                                        <div class="gray font-weight-bold">
                                            {{ item.major }}
                                        </div>
                                        <div class="mt-2">
                                            <v-icon class="black--text text--lighten-4">
                                                mdi-calendar
                                            </v-icon>
                                            <span class="black--text font-weight-bold"> {{ item.date }}</span>
                                        </div>
                                        <div class="text-center">
                                            <v-btn
                                                :color="item.color"
                                                class="mx-4"
                                                :href="item.href"
                                                target="_blank"
                                                :style="item.bt_display">
                                                <v-icon class="mr-1">
                                                    {{ item.bt_icon }}
                                                </v-icon> {{ item.bt_title }}
                                            </v-btn>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-timeline-item>
                        </v-timeline>
                    </div>
                </v-card>
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
            <v-btn 
                v-scroll="onScroll"
                x-large
                rounded
                @click="toTop"
                class="mx-4 my-2">
                <v-icon class="mr-2">
                    fas fa-angle-up
                </v-icon> go to top
            </v-btn>
        </div>
    </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "About me",
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
  data() {
    return {
      myname: "Doreen Ligman",
      jobs: "Full Stack Development Intern",
      about: " I'm South African female citizen. I'm currently 26 years old and the languages I speak is English and Afrikaans. My abilities are good communication skills, working well in a team, self-movitation, good time management, critical thinking, determination and persistance. My interest are watching news because I love knowing what is going on around the world, watching movies and doing outdoor/adventures.  My love for computers started at Naspers Labs. Web development is my  centre of interest, I always love the idea of building an application from scratch. Most of my work is available on Codepen and Github.", 
      items: [
        {
          color: "teal darken-4",
          icon: "fa-university",
          title: "Web Development/Programming Languages Course",
          text: "Lifechoices Academy",
          major: "Html, Css, JavaScript, Bootstrap, React, Vuejs, Python",
          date: "Feb. 2020 - Aug. 2020",
          startdate: "2019-04-07",
          bt_display: "display:none"
        },
        {
          color: "teal darken-3",
          icon: "fa-university",
          title: "Caregiver",
          text: "South Africa Red Cross Society",
          major: "Home Base Level 1,2 & 3",
          date: "Jun. 2017 - Aug. 2017",
          startdate: "2017-06-24",
          bt_display: "display:none"
        },
        {
          color: "teal darken-2",
          icon: "fa-school",
          title: "Grade 9 - 12",
          text: "Hindle High School",
          major: "Grade 9 - 12",
          date: "Apr. 2009 - Dec. 2012",
          startdate: "2009-04-12",
          bt_display: "display:none"
        },
      ],
      activities: [
        {
          text: "Full Stack Development Intern (Salasian Lifechoices)",
          subtext: "September 2020 - Present",
          icon: "fas fa-briefcase",
        },
        {
          text: "Caregiver (Creative Wellness)",
          subtext: "April 2018 - May 2018",
          icon: "fas fa-briefcase",
        },
        {
          text: "Caregiver (Volunteer at Huis Matina)",
          subtext: "Nov 2017 - Dec 2017",
          icon: "fas fa-briefcase",
        },
        {
          text: "General Worker (Rainbow Factory)",
          subtext: "June 2014 - Nov 2016",
          icon: "fas fa-briefcase",
        },
      ],
      interval: {},
      expansionPanel: true,
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  computed: {
    dense() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },
  methods: {
    onScroll (e){
      if (typeof window === "undefined") return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 500
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  },
};
</script>

<style>
    .gray {
        color: #424242;
    }
    .my-icon {
        transition: all 1s linear 0s;
        border-radius: 50%;
        cursor: pointer;
    }
    .my-icon:hover {
        transform: rotateY(360deg);
    }
</style>