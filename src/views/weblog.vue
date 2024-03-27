<template>
    <headerVue/>
    <section class="flex flex-col duration-300 gap-4 lg:gap-9 min-[320px]:px-4 min-[400px]:px-4 min-[500px]:px-9 sm:px-10 lg:px-28 xl:px-32 pt-4 lg:pt-10 mx-auto pb-28">
        <h3 class="sm:text-lg mdtext-xl xl:text-2xl font-bold">آموزش ها</h3>
        <div v-auto-animate="{duration:300}" :class="[getBlogs?'grid grid-cols-1 md:grid-cols-2':'flex justify-center']" class=" gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-4 lg:gap-7 min-[1158px]:gap-10">
            <educationCard v-for="item in getBlogs" :data="item"/> 
            <lodear2 v-if="getBlogs==null" class="mx-auto"/>
        </div>
    </section>
</template>

<script setup>
import headerVue from '@/components/header.vue';
import educationCard from '@/components/educationCard.vue';
import {onBeforeMount} from 'vue'
import { useDataStore } from '@/stores/data';
import lodear2 from '@/components/lodear2.vue';
const dataStore=useDataStore()
onBeforeMount(()=>{
    if(dataStore.getCategoryList==null)dataStore.getCategory()
    if(dataStore.getBlogs.value==null)dataStore.GetBlogs()
})
</script>