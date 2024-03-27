<template>
    <div class="flex items-center justify-center h-screen w-full">
        <div class=" flex flex-col w-full max-w-96 py-4 gap-6 items-center z-50">
            <logo-svg class="w-[197px]"/>
            <p v-if="route.path=='/request-kit'" class="px-4 text-base font-normal">کاربر عزیز شما تعداد  <span class="font-bold">{{ detailsOfRequest.quantity }}عدد</span> کیت آزمایشگاهی خریداری کردید . </p>
            <p v-if="route.path=='/request-kit'" class="text-base font-normal">مبلغ قابل پرداخت:<span class="font-bold"> {{ detailsOfRequest.quantity*dataStore.getExperiments.filter(item=>props.detailsOfRequest.product==item.id)[0].price }} تومان</span></p>
            <p v-if="route.path=='/send-kit'"></p>
            <a :href="detailsOfRequest?detailsOfRequest.url:''" class="flex justify-center items-center bg-rose-500 rounded-xl py-3 w-full max-w-96 shadow-[0px_9px_17px_0px_#F86F6F42]"">
                <span class="text-sm font-bold text-white">پرداخت</span>
            </a>
        </div>
    </div>
</template>

<script setup>
import { useRouter,useRoute } from 'vue-router';
import logoSvg from './logoSvg.vue';
import { useDataStore } from '@/stores/data';
const dataStore=useDataStore()
const router=useRouter()
const route=useRoute()
const props=defineProps(['kitQuantity','hour','date','detailsOfRequest'])
</script>

<style scoped>

</style>