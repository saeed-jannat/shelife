<template>
    <footer class="flex flex-col gap-2 sm:gap-6 bg-rose-50 px-8 py-9 !pb-20">
        <ul class="flex justify-center gap-3 sm:gap-3">
            <router-link :to="{name:item.path}" class="text-gray-900 lg:text-gray-800 text-8 min-[375px]:text-10 sm:text-xs lg:text-lg font-semibold" v-for="item in dataStore.footerList">{{item.title}}</router-link>
        </ul>
        <div class="flex justify-center gap-1 min-[500px]:gap-2 sm:gap-4 lg:gap-6">
            <a :href="[homeStore.getSittings?homeStore.getSittings.filter(item=>item.label=='واتس آپ')[0].value:'']">
                <watsupSvg/>
            </a>
            <a :href="[homeStore.getSittings?homeStore.getSittings.filter(item=>item.label=='توئیتر')[0].value:'']">
                <twitterSvg/>
            </a>
            <a :href="[homeStore.getSittings?homeStore.getSittings.filter(item=>item.label=='تلگرام')[0].value:'']">
                <telegramSvg/>
            </a>
            <a :href="[homeStore.getSittings?homeStore.getSittings.filter(item=>item.label=='اینستاگرام')[0].value:'']">
                <instagramSvg/>
            </a>
        </div>
        <div class="flex justify-center gap-2">
            <a href="">
                <enamadSvg/>
            </a>
            <a href="">
                <enamadSvg/>
            </a>
            <a href="">
                <enamadSvg/>
            </a>
        </div>
    </footer>
</template>

<script setup>
import { useDataStore } from '@/stores/data';
import { useHomeStore } from '@/stores/home';
import watsupSvg from './watsupSvg.vue';
import telegramSvg from './telegramSvg.vue';
import instagramSvg from './instagramSvg.vue';
import twitterSvg from './twitterSvg.vue';
import enamadSvg from './enamadSvg.vue';
const dataStore=useDataStore()
const homeStore=useHomeStore()
</script>