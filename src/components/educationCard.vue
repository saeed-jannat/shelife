<template>
    <article @click="router.push({name:'weblogDetils',params:{id:data.id,slug:data.slug}})" class=" cursor-pointer py-1 px-1 border border-[#ece8e8c2] sm:border-0 sm:shadow-educationShadow grid grid-cols-5 w-full gap-3 rounded-xl h-fit">
        <figure class="relative flex justify-center items-center p-1 col-span-2 z-50">
            <img  class="bg-gray-400 w-full rounded-lg aspect-[3/3] h-full text-white text-10 py-[35%] px-[15%] text-center" :src="data.media_showcase.main_image[0].original_url" :alt="data.title">
        </figure>
        <div class="col-span-3 flex flex-col py-1 pt-2 2xl:pt-2 gap-0 justify-between pl-1 text-[#313131]">
            <p  class="font-semibold text-xs 2xl:text-sm" >{{ data.title }}</p>
            <p  class="text-[9px] 2xl:text-xs font-medium">دسته بندی: {{ route.name!='home'?data.category.name:category }}</p>
            <p  class=" font-[500] text-justify text-10 2xl:text-xs">{{ data.summary }}</p>
            <div class="flex justify-end pt-1">
                <button class="flex items-center justify-center bg-rose-500 rounded-md py-2 px-3">
                    <span class="text-[9px] lg:text-10 text-white font-normal">مشاهده بیشتر</span>
                </button>
            </div>
        </div>
    </article>
</template>

<script setup>
import { ref,onMounted,watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter,useRoute } from 'vue-router';
import { useDataStore } from '@/stores/data'
const dataStore=useDataStore()
const router=useRouter()
const route=useRoute()

const props=defineProps({
    data:Object,
})

const {getCategoryList} = storeToRefs(dataStore)

let image=ref(false)
let category=ref(null)
// const errorImage=()=>{
//     image.value=true
// }

watch(getCategoryList,(nVal)=>{
    nVal!=null && route.name=='home'?getCategoryList.value.forEach(item=>item.id==props.data.post_category_id?category.value=item.name:''):''
})
onMounted(()=>{
    if(getCategoryList.value!=null && route.name=='home')getCategoryList.value.forEach(item=>item.id==props.data.post_category_id?category.value=item.name:'')
})
</script>

<style scoped>
figure::before{
    content: '';
    width: 70%;
    height: 70%;
    border: 1px solid #fff;
    border-radius: 6px;
    z-index: 1000;
    position: absolute;
}
</style>
