<template>
    <main :class="{'container': innerWidth >= 1200}">
        <div class="hero">
            <div class="box-image">
                <img src="/img/image-hero-mobile.png" alt="" v-if="innerWidth < 1200">
                <img src="/img/image-hero-desktop.png" alt="" v-if="innerWidth >= 1200">
            </div>
        </div>
        <section class="mt-4 d-flex flex-column justify-content-center" :class="{'align-items-center': innerWidth < 1200}">
            <h1>Make remote work</h1>
            <p :class="{'text-center px-2' : innerWidth < 1200}">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <a href="#">Learn more</a>
            <FooterComponent />
        </section>
    </main>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue';
    export default {
        name: 'MainComponent',
        components: {
            FooterComponent
        },
        data() {
            return {
                innerWidth: 0
            }
        },
        methods: {
            handleResize() {
                this.innerWidth = window.innerWidth;
            }
        },
        mounted() {
            this.innerWidth = window.innerWidth;
            window.addEventListener('resize', this.handleResize);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize);
        },
    }
</script>

<style lang="scss" scoped>
    .hero{
        .box-image{
            width: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    section{
        gap: 8px;
        h1{
            font-size: 2.2rem;
            font-weight: 700;
        }
        p{
            font-size: 18px;
            color: hsl(0, 0%, 41%);
        }
        a{
            color: hsl(0, 0%, 98%);
            background-color: hsl(0, 0%, 8%);
            padding: 15px 20px;
            border-radius: 12px;
            text-decoration: none;
            border: 1px solid transparent;
            transition: color 0.3s, background-color 0.3s;
            &:hover{
                color: black;
                background-color: hsl(0, 0%, 98%);
                border: 1px solid black;
            }
        }
    }
    @media screen and (min-width: 1200px){
        main{
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            height: 700px;
            margin-top: 80px;
            img{
                padding: 50px;
                margin-top: -50px;
            }
            section{
                gap: 32px;
                padding: 20px;
            }
            h1{
                font-size: 6rem;
            }
            p{
                max-width: 70%;
            }
            a{
                width: 25%;
                text-align: center;
            }
        }
    }
    @media (min-width: 680px) and (max-width: 1200px) {
    main{
        .box-image{
            display: flex;
            justify-content: center;
            height: 450px !important;
            min-width: 100vw;
            img{
                max-height: 450px !important;
                max-width: 70%;
            }
        }
        p{
            max-width: 700px;
        }
    }
  }
</style>