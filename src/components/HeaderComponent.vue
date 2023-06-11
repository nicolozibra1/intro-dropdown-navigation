<template>
    <header>
        <div class="container-fluid p-3 d-flex justify-content-between align-items-center">
            <h1>snap</h1>
            <i class="fa-solid fa-bars" @click="setActive('hamburger')"></i>
        </div>
        <div class="hamburger container-fluid py-3" v-if="this.hamburger">
            <div class="xmark d-flex align-items-center justify-content-end">
                <img src="/img/icon-close-menu.svg" alt="" @click="setActive('close_menu')" class="pt-2 pb-4">
            </div>
            <ul class="d-flex flex-column gap-4">
                <li>
                    <span class="pe-3" @click="setActive('features')">Features</span>
                    <img src="/img/icon-arrow-up.svg" alt="" v-if="this.features">
                    <img src="/img/icon-arrow-down.svg" alt="" v-if="!this.features">
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
                    <span class="pe-3" @click="setActive('company')">Company</span>
                    <img src="/img/icon-arrow-up.svg" alt="" v-if="this.features">
                    <img src="/img/icon-arrow-down.svg" alt="" v-if="!this.features">
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
    export default {
        name: 'HeaderComponent',
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
    }
</style>