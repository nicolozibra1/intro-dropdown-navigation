<template>
    <header>
        <div class="d-flex align-items-center justify-content-between ps-3">
            <h1>snap</h1>
            <div class="container-fluid p-3 d-flex justify-content-between align-items-center">
                <div class="nav-left">
                    <ul class="d-flex gap-5 pt-2 ps-5">
                        <li>
                            <div class="features">
                                <div @click="setActive('features')">
                                    <span class="pe-1">Features</span>
                                    <img src="/img/icon-arrow-up.svg" alt="" v-if="this.features">
                                    <img src="/img/icon-arrow-down.svg" alt="" v-if="!this.features">
                                </div>
                                <div class="dropdown mt-2" v-if="this.features">
                                    <ul v-for="sublink in store.features" class="d-flex justify-content-center p-2">
                                        <li>
                                            <img :src="'/img/' + sublink.icon" alt="">
                                            <span class="ps-2">{{ sublink.name }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>  
                        </li>
                        <li>
                            <div class="company">
                                <div @click="setActive('company')">
                                    <span class="pe-1 company">Company</span>
                                    <img src="/img/icon-arrow-up.svg" alt="" v-if="this.features">
                                    <img src="/img/icon-arrow-down.svg" alt="" v-if="!this.features">
                                </div>
                                <div class="dropdown mt-2 ms-4" v-if="this.company">
                                    <ul v-for="sublink in store.company" class="d-flex justify-content-center p-2">
                                        <li class="text-center">
                                            <span>{{ sublink.name }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>Careers</li>
                        <li>About</li>
                    </ul>
                </div>
                <div class="nav-right">
                    <div class="sign d-flex align-items-center gap-3 p-1">
                        <a href="#">Login</a>
                        <a href="#" class="btn">Register</a>
                    </div>
                </div>
            </div>
            <i class="fa-solid fa-bars pe-3" id="icon-menu" @click="setActive('hamburger')"></i>
        </div>
        



        <div class="hamburger container-fluid py-3" v-if="this.hamburger">
            <div class="xmark d-flex align-items-center justify-content-end">
                <img src="/img/icon-close-menu.svg" alt="" @click="setActive('close_menu')" class="pt-2 pb-4">
            </div>
            <ul class="d-flex flex-column gap-4">
                <li>
                    <div @click="setActive('features')">
                        <span class="pe-3" >Features</span>
                        <img src="/img/icon-arrow-up.svg" alt="" v-if="this.features">
                        <img src="/img/icon-arrow-down.svg" alt="" v-if="!this.features">
                    </div>
                    <div class="dropdown mt-2" v-if="this.features">
                        <ul v-for="sublink in store.features">
                            <li class="py-2">
                                <img :src="'/img/' + sublink.icon" alt="">
                                <span class="ps-2">{{ sublink.name }}</span>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div @click="setActive('company')">
                        <span class="pe-3">Company</span>
                        <img src="/img/icon-arrow-up.svg" alt="" v-if="this.features">
                        <img src="/img/icon-arrow-down.svg" alt="" v-if="!this.features">
                    </div>
                    <div class="dropdown mt-2" v-if="this.company">
                        <ul v-for="sublink in store.company">
                            <li class="py-2">
                                <span>{{ sublink.name }}</span>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>Careers</li>
                <li>About</li>
            </ul>
            <div class="sign d-flex flex-column align-items-center gap-3 mt-5">
                <a href="#">Login</a>
                <a href="#" class="btn">Register</a>
            </div>
        </div>
        <div class="overlay" v-if="this.hamburger">
                
        </div>
    </header>
</template>

<script>
import { store } from '../data/store';
import MainComponent from './MainComponent.vue';
    export default {
        name: 'HeaderComponent',
        components: {
            MainComponent,
        },
        data() {
            return {
                store,
                hamburger: false,
                features: false,
                company: false,
            }
        },
        methods: {
            setActive(select) {
                if(select === 'hamburger') {
                    this.hamburger = true;
                }
                else if(select === 'close_menu') {
                    this.hamburger = false;
                }
                else if(select === 'features' && this.features === false) {
                    this.features = true;
                }
                else if(select === 'features' && this.features === true) {
                    this.features = false;
                }
                else if(select === 'company' && this.company === false) {
                    this.company = true;
                }
                else if(select === 'company' && this.company === true) {
                    this.company = false;
                }
            }
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
            cursor: pointer;
        }
        ul{
            list-style: none;
        }
        li{
            color: hsl(0, 0%, 41%);
            font-size: 18px;
            span, img{
                cursor:pointer;
            }
        }
        .hamburger{
            height: 100vh;
            width: 65%;
            background-color: white;
            position: absolute;
            top:0;
            right: 0;
            .xmark{
                img{
                    cursor: pointer;
                }
            }
            a{
            text-decoration: none;
            color: hsl(0, 0%, 41%);
            }
            .btn{
                border: 1px solid black;
                width: 70%;
                border-radius: 15px;
            }
        }
        .overlay{
            height: 100vh;
            width: 35%;
            background-color: rgba(0, 0, 0, 0.514);
            position: absolute;
            top: 0;
            left: 0;
        }
        .nav-left, .nav-right{
            display: none;
        }
    }
    @media screen and (min-width: 1200px){
        #icon-menu{
            display: none;
        }
        a{
            text-decoration: none;
            color: hsl(0, 0%, 41%);
        }
        .btn{
            border: 1px solid black;
            width: 70%;
            border-radius: 15px;
        }
        .features, .company{
            position: relative;
        }
        .dropdown{
            position: absolute;
            top:30px;
            left: -70px;
            background-color: white;
            border-radius: 12px;
            box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
            width: 150px;
        }
    }
    @media screen and (min-width: 1200px) {
        .nav-left{
            display: flex !important;
            align-items: center;
            justify-content: start;
        }
        .nav-right{
            display: block !important;
        }
    }

</style>