<template>
    <header class="container-fluid p-3 d-flex justify-content-between align-items-center">
        <h1>snap</h1>
        <i class="fa-solid fa-bars"></i>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    header{
        h1{
            font-weight: 700;
            font-size: 2rem;
        }
        i{
            font-weight: 700;
            font-size: 1.5rem;
            margin-top: -10px;
        }
    }
</style>