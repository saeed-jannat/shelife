<template>
    <section :class="[dataStore.getExperimentsData.length>4?'h-screen':'h-1/2 rounded-b-3xl border-2 border-rose-500']" class="bg-[#ffffff36] fixed  backdrop-blur-[2px] top-0 z-[1000] border-t-0 w-full right-0 flex items-start justify-center "> 
        <div class="section flex flex-col gap-4 w-full h-screen overflow-y-scroll md:w-auto lg:w-[800px] 2xl:w-[1000px]">
            <div class="flex flex-col gap-4 w-full h-fit">
                <div class="flex bg-[#fff] backdrop-blur-[2px] fixed top-0 z-[1000] pt-4 flex-col gap-4 w-full md:w-[750px] lg:w-[800px] 2xl:w-[1000px]">
                    <div class="flex justify-start w-full px-4 sm:px-6">
                        <button class="z-50 " @click="homeStore.historyShow=false">
                            <back-svg/>
                        </button>
                    </div>
                    <div class="flex gap-2 items-center w-full border-b border-rose-200 pb-3 2xl:pb-5 px-4 sm:px-6">
                        <history-svg/>
                        <p class="text-base 2xl:text-lg font-bold text-gray-800">تاریخچه آزمایشات</p>
                    </div>
                </div>
                <div  class="flex flex-col relative h-fit items-center justify-start gap-3 sm:gap-3 xl:gap-4 px-4 pb-20 sm:px-6 min-h-36 pt-[8.5rem] 2xl:pt-[9.5rem]">
                    <historyCard v-if="dataStore.getExperimentsData!=2 && dataStore.getExperimentsData.length>0" class="rounded-2xl" v-for="item in dataStore.getExperimentsData" :data="item"/>
                    <lodear2 v-if="dataStore.getExperimentsData==''"/>
                    <p v-if="dataStore.getExperimentsData==2" class="text-center text-sm font-bold text-gray-900">آزمایشی وجود ندارد</p>
                </div>
            </div>
            
        </div>
    </section>
</template>

<script setup>
import historyCard from '@/components/historyCard.vue'
import { useDataStore } from '@/stores/data.js'
import backSvg from '@/components/backSvg1.vue'
import historySvg from '@/components/historySvg.vue'
import lodear2 from '@/components/lodear2.vue';
import { useHomeStore } from '@/stores/home';

const homeStore=useHomeStore()
const dataStore=useDataStore()
if(dataStore.getExperimentsData=='')dataStore.GetExperiments()
</script>


<style>
.section::-webkit-scrollbar{
    display: none;
}
</style>@/stores/authorization.js