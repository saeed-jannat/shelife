<template>
    <headerVue/>
    <section v-auto-animate="{duration:300}" class="flex duration-300 flex-col px-4 lg:px-28 py-4 lg:py-8 gap-3 lg:gap-8 !pb-28">
        <h3 class="sm:text-lg mdtext-xl xl:text-2xl font-bold">آموزش ها</h3>
        <div v-if="details" v-html="details.body" class="text-sm font-medium sm:text-base"></div>
        <lodear2 v-if="details==null" class="mx-auto"/>
    </section>
</template>

<script setup>
import headerVue from '@/components/header.vue';
import axios from 'axios'
import { onBeforeMount,ref } from 'vue';
import { useRoute } from 'vue-router';
import lodear2 from '@/components/lodear2.vue';

const route=useRoute()
let details=ref(null)
onBeforeMount(()=>{
    axios.get(`/v1/front/posts/new-slug/${route.params.id}`)
    .then(res=>{
        details.value=res.data.data.post.post
    })
})
</script>