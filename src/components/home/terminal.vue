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
                md="9"
                lg="10"
                offset-xl="1">
                <h1 class="pagetitle display-3 font-weight-bold mt-8 mb-10">
                    Welcome to my portfolio!!!
                </h1>

                <v-card class="terminal-card">
                    <div class="terminal-window">
                        <header>
                            <div class="button green" />
                            <div class="button yellow" />
                            <div class="button red" />
                        </header>
                        <section class="terminal">
                            <div class="history" />
                            <div id="typed-strings">
                                <p><span class="gray"> $ </span>Hello ? ^500</p>
                                <p>
                                    <!-- code -->
                                    <span class="duo-2">const </span> <span class="duo-1">me </span> = <span class="duo-3"> new</span> <span class="uno-1">Human()</span>;<br>
                                    <br>
                                    <span class="uno-3">me.name</span> = <span class="duo-1">Doreen Ligman</span>;<br>
                                    <span class="uno-3">me.college</span> = <span class="duo-1">Lifechoices Academy</span>;<br>
                                    <span class="uno-3">me.major</span> = <span class="duo-1">Web Development/Programming Languages Course</span>;<br>
                                    <br>
                                    <span class="duo-3">while </span> (<span class="uno-3">me.</span><span class="uno-1">isLive()</span>) {  <span class="uno-5">// Is life worth living? It all depends on the liver. - William James </span> &#127867;<br>
                                    <pre>  <span class="uno-3">me.</span><span class="uno-1">coding()</span>;</pre>
                                    <pre>  <span class="uno-3">me.</span><span class="uno-1">eat()</span>;</pre>
                                    <pre>  <span class="uno-3">me.</span><span class="uno-1">sleep()</span>;</pre>
                                    <br>
                                    <pre>  <span class="duo-3">if</span> (<span class="uno-3">day</span> <span class="duo-3"> ===</span> "<span class="uno-3">off</span>"){</pre>
                                    <pre>    <span class="uno-3">me.</span><span class="uno-1">spa()</span>;</pre>
                                    <pre>    <span class="uno-3">me.</span><span class="uno-1">gardening(<span class="uno-3">Hibiscus</span>, <span class="uno-3">Banyan</span>)</span>;</pre>
                                    <pre>    <span class="uno-3">me.</span><span class="uno-1">red_ink_stamps(</span><span class="uno-3">temple</span>, <span class="uno-3">shrine</span><span class="uno-1">)</span>;</pre>
                                    <pre>  }</pre>
                                    <pre>}</pre> ^1500
                                    <!-- code -->
                                </p>
                            </div>
                            <span id="whoami" />
                            <span class="typed-cursor" />
                        </section>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Typed from "typed.js";

export default {
  mounted() {
    new Typed("#whoami", {
      stringsElement: "#typed-strings",
      startDelay: 2000,
      backSpeed: 15,
      typeSpeed: 1,
      loop: false,
      showCursor: false,
      contentType: "html",
    });

  },
}
</script>

<style>
    #whoami {
        white-space: pre-wrap;
    }

    @keyframes my-fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .pagetitle {
        text-align: center;
    }

    .terminal-card {
        border-radius: 0.5rem 0.5rem 0 0;
    }

    .terminal-window {
        text-align: left;
        width: auto;
        height: auto;
        min-height: 435px;
        border-radius: 8px 8px 0 0;
        margin: auto;
        position: relative;
        animation-name: my-fade-in;
        animation-duration: 4s;
    }

    .terminal-window header {
        background: #191919;
        height: 30px;
        border-radius: 0.5rem 0.5rem 0 0;
        padding-left: 10px;
    }

    .terminal-window header .button {
        width: 12px;
        height: 12px;
        margin: 10px 8px 0 0;
        display: inline-block;
        border-radius: 8px;
    }

    .terminal-window header .button.green {
        background: #32c146;
    }

    .terminal-window header .button.yellow {
        background: #f6b73e;
    }

    .terminal-window header .button.red {
        background: #f55551;
    }

    .terminal-window section.terminal {
        color: white;
        font-size: 11pt;
        background: #232323;
        white-space: pre;
        padding: 10px;
        box-sizing: border-box;
        border-bottom-left-radius: 0.5rem 0.5rem;
        border-bottom-right-radius: 0.5rem 0.5rem;
        position: absolute;
        width: 100%;
        top: 30px;
        bottom: 0;
        overflow: auto;
    }

    .terminal-window section.terminal .typed-cursor {
        opacity: 1;
        -webkit-animation: blink 0.7s infinite;
        -moz-animation: blink 0.7s infinite;
        animation: blink 0.7s infinite;
        display: inline;
    }

    .terminal-window .gray { color: gray; }
    .terminal-window .uno-1 { color: #d6e9ff}
    .terminal-window .uno-3 { color: #88b4e7}
    .terminal-window .uno-4 { color: #586f89}
    .terminal-window .uno-5 { color: #444c55}
    .terminal-window .duo-1 { color: #34febb}
    .terminal-window .duo-2 { color: #32ae85}
    .terminal-window .duo-3 { color: #57a784}
</style>
