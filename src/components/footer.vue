<template>
    <v-footer
        padless>
        <v-card
            class="flex"
            flat
            tile>
            <v-card-title class="teal justify-center">
                <v-btn
                    fab
                    v-for="link in links"
                    :key="link.icon"
                    class="mx-1"
                    icon
                    :href="link.to"
                    target="_blank">
                    <v-icon size="30px">
                        {{ link.icon }}
                    </v-icon>
                </v-btn>
            </v-card-title>

            <v-card-actions class="teal darken-2 justify-center">
                &copy;{{ new Date().getFullYear() }} — <strong>Doreen Ligman</strong>
            </v-card-actions>
        </v-card>
    </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {icon: "fab fa-codepen", to:"https://codepen.io/Doreen17"},
      {icon: "fab fa-github", to:"https://github.com/Doreen162"},
      {icon: "fab fa-linkedin", to:"https://www.linkedin.com/in/doreen-rowena-ligman-20a55919b/"},
      {icon: "fab fa-heroku", to:"https://dashboard.Heroku.com/apps"},
    ]
  })
}
</script>