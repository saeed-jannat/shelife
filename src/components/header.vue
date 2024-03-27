<template>
    <header id="header" :class="[getHistoryShow==true ?'blur-[3px] pointer-events-none':'']" class="duration-300 pt-8 lg:pt-4 px-7 lg:px-24 border-b" >
        <div class="flex justify-between">
            <div class="flex justify-center items-center">
                <smalllogoheader-svg class="sm:hidden"/>
                <biglogoheaderSvg class="hidden sm:block lg:translate-y-5"/>
            </div>
            <div class="flex gap-1 items-center 2xl:items-end relative">
                <span :class="{'hidden':hasNewExpriment==false && hasNewExpriment!=2},[route.name!='home'?'top-0.5':'-top-0.5']" class="w-3 h-3 rounded-full bg-red-500 absolute right-0.5 sm:top-2 2xl:top-4 z-50 loader1"></span>
                <button class="h-fit" @click="homeStore.historyShow=!homeStore.historyShow">
                    <notification-svg/>
                </button>
                <button class="h-fit" @click="router.push('/profile')">
                    <smallprofile-svg/>
                </button>
                <button class="scale-[0.87] h-fit translate-y-[0.5px] min-[1535px]:translate-y-[3px]" v-if="route.name!='home'" @click="router.go(-1)">
                    <back-svg/>
                </button>
            </div>
        </div>
        <div class="flex justify-start sm:px-5 lg:px-8 lg:pt-1 xl:pt-3">
            <div class="text-sm lg:text-base sm:font-medium border-b-2 flex justify-center border-rose-500 px-4 pb-1 sm:px-16 lg:px-14 xl:px-28 2xl:px-40">
                <span v-if="route.name=='home'">خدمات</span>
                <span v-if="route.name=='weblogDetils'||route.name=='weblog'">وبلاگ</span>
            </div>
        </div>
    </header>
</template>

<script setup>
import { useRouter,useRoute } from 'vue-router'
import backSvg from '@/components/backSvg2.vue'
import notificationSvg from './notificationSvg.vue';
import smallprofileSvg from '@/components/smallprofileSvg.vue'
import smalllogoheaderSvg from '@/components/smalllogohedearSvg.vue'
import biglogoheaderSvg from '@/components/biglogoheaderSvg.vue'
import { useDataStore } from '@/stores/data.js'
import { storeToRefs } from 'pinia';
import { useHomeStore } from '@/stores/home';
import { watch,ref } from 'vue'


const homeStore=useHomeStore()
const {getHistoryShow}=storeToRefs(homeStore)


const router=useRouter()
const route=useRoute()
const dataStore=useDataStore()
const { getExperimentsData }=storeToRefs(dataStore)
let hasNewExpriment=ref(null)
if(getExperimentsData.value==true && getExperimentsData.value!=2)hasNewExpriment.value=getExperimentsData.value.filter(item=>item.status=='new')
watch(getExperimentsData,()=>{
    if(getExperimentsData.value!=2)hasNewExpriment.value=getExperimentsData.value.filter(item=>item.status=='new')
})
</script>

<style scoped>

.loader1 {
  aspect-ratio: 1;
  border-radius: 100%;
  box-shadow: 0 0 0 0 rgb(239 68 68);
  animation: l1 .7s infinite;
}
@keyframes l1 {
    100% {box-shadow: 0 0 0 5px rgba(239, 68, 68, 0.432)}
}
</style>