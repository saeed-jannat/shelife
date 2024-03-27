<template>
    <!-- <div  class="duration-300"> -->
        <headerVue />
        <servises  />
        <bannerVue />
        <education />
        <footerVue />
    <!-- </div> -->
</template>

<script setup>
import headerVue from '@/components/header.vue';
import servises from '@/components/cardsService.vue' 
import bannerVue from '@/components/banner.vue'
import education from '@/components/education.vue'
import footerVue from '@/components/footer.vue'
import { useDataStore } from '@/stores/data';
import { useHomeStore } from '@/stores/home';
import { onBeforeMount } from 'vue';
const homeStore=useHomeStore()
const dataStore=useDataStore()
onBeforeMount(()=>{
    if(dataStore.getCategoryList==null)dataStore.getCategory()
    if(homeStore.getBlogs==null){
        homeStore.getSetting()
        dataStore.GetBlogs()
    }
    if(dataStore.getExperiments==null)dataStore.getProduct()
})


</script>


<style>

</style>