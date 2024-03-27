<template>
    <section class="flex flex-col justify-between items-center w-full h-screen overflow-hidden">
        <flowerTopSvg/>
        <div class="flex flex-col items-center mx-auto">
            <p class="text-[100px] font-sans xl:text-[115px] font-medium text-rose-500">404</p>
            <p class="text-xl text-[22px] font-medium text-rose-500">page not found</p>
            <button @click="router.push('/')" class="flex justify-center items-center py-3 px-4 xl:py-2 xl:px-6 rounded-xl bg-rose-500 mt-4">
                <span class="text-[13px] xl:text-lg font-medium text-white">BACK TO HOME</span>
            </button>
        </div>
        <flowerBottomSvg/>
    </section>
</template>

<script setup>
import {useRouter} from 'vue-router'
import flowerTopSvg from '@/components/flowerTopSvg.vue';
import flowerBottomSvg from '@/components/flowerBottomSvg.vue';
const router=useRouter()
</script>