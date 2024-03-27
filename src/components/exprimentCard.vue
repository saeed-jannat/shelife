<template>
    <label @click="emits('expriment',data.id)" :for="`expriment${index}`" :class="{'fade-in1':route.name!='request-kit'}" class="border-2 border-rose-500 flex justify-between py-2 px-3 w-full rounded-xl items-center">
        <div class="flex gap-3 items-center">
            <input name="expriment" :id="`expriment${index}`" class="appearance-none z-50 w-[13px] h-[13px] duration-300 rounded-[2px] border border-rose-500 scale-125" type="radio">
            <figure class="w-11 h-11 rounded-full overflow-hidden">
                <img v-if="data.media_showcase.main_image[0].original_url" class="bg-gray-300 w-full h-full text-8" :src="data.media_showcase.main_image[0].original_url" :alt="data.title">
                <div v-else
                class="loading w-full  h-full bg-gray-400 relative overflow-hidden after:absolute after:bg-[#c7c7c7] after:blur-[6px] after:w-1/3 after:h-[150%] after:rotate-[19deg] after:right-[-50%] after:top-[-20%]"
                ></div>
            </figure>
            <p class="text-sm text-black font-semibold">{{ data.title }}</p>
        </div>
        <p class="text-xs text-black font-medium">قیمت : {{ data.price }} تومان</p>
    </label>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route=useRoute()
const props =defineProps(['data','index'])
const emits=defineEmits(['expriment'])

</script>

<style scoped>
input:checked{
    background-color: rgb(244 63 94);
}
input::before{
    content: '✓';
    color: #fff !important;
    height: 12px;
    display: block;
    scale: 0.6;
    transform: translateY(-5.5px) translateX(0.5px);
    font-weight: 700;
}
</style>