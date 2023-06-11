<template>
    <main>
        <div class="hero">
            <div class="box-image">
                <img src="/img/image-hero-mobile.png" alt="">
            </div>
        </div>
        <section class="mt-5 d-flex flex-column align-items-center justify-content-center gap-2">
            <h1>Make remote work</h1>
            <p class="text-center px-2">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <a href="#">Learn more</a>
        </section>
    </main>
</template>

<script>
    export default {
        name: 'MainComponent',
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    .hero{
        .box-image{
            width: 375px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    section{
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
        }
    }
</style>