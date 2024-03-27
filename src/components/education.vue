<template>
    <section class="px-7 lg:px-28 flex flex-col gap-2 lg:gap-3 2xl:gap-5 mb-9">
        <div class="pt-5 2xl:pt-10">
            <p class="text-lg font-medium 2xl:text-xl 2xl:font-semibold">آموزش ها</p>
        </div>
        <div v-auto-animate="{duration:300}" class="flex flex-col sm:grid sm:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3  2xl:grid-cols-4 2xl:grid-rows-1 gap-3 lg:gap-6 min-[1150px]:gap-4">
            <educationCard  v-for="item in homeStore.getBlogs" :data="item"/>
            <lodear2 v-if="homeStore.getBlogs==null" class="mx-auto scale-90 md:scale-100"/>
        </div>
    </section>
</template>

<script setup>
import educationCard from './educationCard.vue';
import { useHomeStore } from '@/stores/home';
import lodear2 from '@/components/lodear2.vue'

const homeStore=useHomeStore()

</script>