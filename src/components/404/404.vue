<template>
    <v-app id>
        <v-content>
            <div>
                <div class="noise" />
                <div class="overlay" />
                <div class="terminal">
                    <div class="emoji_container">
                        <div class="emoji_wrap">
                            <div class="eyebrows_left" />
                            <div class="eyebrows_right" />
                            <div class="eye_left" />
                            <div class="eye_right" />
                            <div class="mouth" />
                            <div class="hand_wrap">
                                <div class="hand_1" />
                                <div class="hand_2" />
                                <div class="f_1a" />
                                <div class="f_1b" />
                                <div class="f_2" />
                                <div class="f_3" />
                                <div class="f_4" />
                                <div class="f_5" />
                            </div>
                        </div>
                    </div>

                    <h1 class="display-3 font-weight-bold">
                        Error <span class="errorcode">404</span>
                    </h1>

                    <p class="output">
                        Opps, looks like something was wrong we're working on it.
                    </p>
                    <p class="output">
                        Please try to <a href="/">go home</a>.
                    </p>
                </div>
            </div>
        </v-content>
    </v-app>
</template>

<style scoped>
    h1 {
        color: rgba(128, 255, 128, 0.8);
        text-shadow:
            0 0 1ex rgba(51, 255, 51, 1),
            0 0 2px rgba(255, 255, 255, 0.8);
        margin-bottom: 10px;
    }

    body {
        box-sizing: border-box;
        height: 100%;
        background-color: #303030;
        background-repeat: no-repeat;
        background-size: cover;
        font-family: "Noto Sans JP", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "メイリオ", "Meiryo", "sans-serif";
        font-size: 1.5rem;
        color: rgba(128, 255, 128, 0.8);
        text-shadow:
            0 0 1ex rgba(51, 255, 51, 1),
            0 0 2px rgba(255, 255, 255, 0.8);
    }

    .v-application p {
        margin-bottom: 5px;
    }

    .noise {
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
        opacity: .02;
    }

    .overlay {
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
        background:
            repeating-linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0,
            rgba(0, 0, 0, 0.3) 50%,
            rgba(0, 0, 0, 0) 100%);
        background-size: auto 4px;
        z-index: 1;
    }

    .overlay::before {
        content: "";
        pointer-events: none;
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
            0deg,
            transparent 0%,
            rgba(32, 128, 32, 0.2) 2%,
            rgba(32, 128, 32, 0.8) 3%,
            rgba(32, 128, 32, 0.2) 3%,
            transparent 100%);
        background-repeat: no-repeat;
        animation: scan 7.5s linear 0s infinite;
    }

    @keyframes scan {
        0%        { background-position: 0 -100vh; }
        35%, 100% { background-position: 0 100vh; }
    }

    .terminal {
        box-sizing: inherit;
        position: absolute;
        height: 100%;
        width: 100%;
        max-width: 100%;
        padding: 2rem;
        text-transform: uppercase;
        text-align: center;
    }

    .output {
        color: rgba(128, 255, 128, 0.8);
        text-shadow:
            0 0 1px rgba(51, 255, 51, 0.4),
            0 0 2px rgba(255, 255, 255, 0.8);
    }

    .output::before {
        content: "> ";
    }

    a {
        color: #fff;
        text-decoration: none;
    }

    a::before {
        content: "[";
    }

    a::after {
        content: "]";
    }

    .errorcode {
        color: white;
    }

    /* thinking face */
    /* color:normal yellow:#FFCB4_C, brown:#65471_B, hand:#F1902_0*/
    .emoji_container{
        position: relative;
        transform: scale(0.7);
        animation: anime 0.2s infinite;
    }
    @keyframes anime {
        0%{transform: rotate(0deg) translate(0, 0)scale(0.5);}
        12.5%{transform: rotate(0.6deg) translate(2px, -2px)scale(0.55);}
        25%{transform: rotate(8deg) translate(0px, 2px)scale(0.6);}
        37.5%{transform: rotate(0.6deg) translate(-2px, 0)scale(0.55);}
        50%{transform: rotate(0deg) translate(0, 0)scale(0.5);}
        62.5%{transform: rotate(-0.6deg) translate(2px, 0)scale(0.55);}
        75%{transform: rotate(-8deg) translate(0, 2px)scale(0.6);}
        87.5%{transform: rotate(-0.6deg) translate(-2px, -2px)scale(0.55);}
        100%{transform: rotate(0deg) translate(0, 0)scale(0.5);}
    }
    .emoji_wrap{
        position: relative;
        margin: 0 auto;
        width: 285px;
        height: 285px;
        background: #FFCB4C;
        border-radius: 50%;
    }
    .eyebrows_left{
        position: absolute;
        top: 35px;
        left: 68px;
        z-index: 2;
        background: #65471B;
        width: 72px;
        height: 40px;
        border-radius: 50%;
    }
    .eyebrows_left:before{
        content: "";
        position: absolute;
        top: 15px;
        left: 0;
        z-index: 3;
        background: #FFCB4C;
        width: 72px;
        height: 40px;
        border-radius: 50%;
    }
    .eyebrows_right{
        position: absolute;
        top: 68px;
        right: 45px;
        z-index: 2;
        background: #65471B;
        width: 72px;
        height: 40px;
        border-radius: 50%;
        transform: rotate(5deg);
    }
    .eyebrows_right:before{
        content: "";
        position: absolute;
        top: 15px;
        left: 0;
        z-index: 3;
        background: #FFCB4C;
        width: 72px;
        height: 40px;
        border-radius: 50%;
    }
    .eye_left{
        position: absolute;
        top: 75px;
        left: 85px;
        z-index: 2;
        background: #65471B;
        width: 35px;
        height: 45px;
        border-radius: 50%;
    }
    .eye_right{
        position: absolute;
        top: 80px;
        right: 70px;
        z-index: 2;
        background: #65471B;
        width: 35px;
        height: 45px;
        border-radius: 50%;
    }
    .mouth{
        position: absolute;
        top: 165px;
        left: 110px;
        z-index: 2;
        background: #65471B;
        width: 72px;
        height: 40px;
        border-radius: 50%;
        transform: rotate(10deg);
    }
    .mouth:before{
        content: "";
        position: absolute;
        top: 15px;
        left: 0;
        z-index: 3;
        background: #FFCB4C;
        width: 72px;
        height: 40px;
        border-radius: 50%;
    }
    .hand_wrap{
        position: absolute;
        bottom: 52px;
        left: 47px;
        z-index: 3;
        transform: rotate(-13deg);
    }
    .hand_1{
        position: absolute;
        top: 14px;
        left: -20px;
        z-index: 3;
        width: 80px;
        height: 60px;
        background: #F19020;
        border-radius: 50%;
        transform: rotate(70deg);
    }
    .hand_2{
        position: absolute;
        top: -10px;
        left: -22px;
        z-index: 3;
        width: 80px;
        height: 46px;
        background: #F19020;
        border-radius: 50%;
        transform: rotate(120deg);
    }
    .f_1a{
        position: absolute;
        top: -30px;
        left: 5px;
        z-index: 3;
        width: 60px;
        height: 32px;
        background: #F19020;
        border-radius: 16px;
        transform: rotate(135deg);
    }
    .f_1b{
        position: absolute;
        top: -50px;
        left: 26px;
        z-index: 3;
        width: 50px;
        height: 32px;
        background: #F19020;
        border-radius: 16px 100% 16px 100%;
        transform: rotate(-80deg);
    }
    .f_2{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        width: 150px;
        height: 24px;
        background: #F19020;
        border-radius: 12px;
    }
    .f_3{
        position: absolute;
        top: 20px;
        left: 38px;
        z-index: 3;
        width: 60px;
        height: 24px;
        background: #F19020;
        border-radius: 12px;
    }
    .f_4{
        position: absolute;
        top: 40px;
        left: 32px;
        z-index: 3;
        width: 60px;
        height: 24px;
        background: #F19020;
        border-radius: 12px;
    }
    .f_5{
        position: absolute;
        top: 60px;
        left: 6px;
        z-index: 3;
        width: 80px;
        height: 24px;
        background: #F19020;
        border-radius: 12px 12px 12px 50%;
    }
</style>

