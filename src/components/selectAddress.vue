<template>
    <div class="section relative flex items-start w-full max-w-96 sm:items-center h-full pb-28">
    <div  class="rounded-xl gap-4 flex flex-col z-20 justify-start items-center w-full max-w-96 inset-0 mx-auto">
        <div class="flex justify-start w-full">
            <button @click="level('-')" >
                <back-svg/>
            </button>
        </div>
        
        <div class="flex justify-center px-5">
            <logo-svg class="w-[197px]"/>
        </div>
        <div class="lg:py-2 flex flex-col z-20 justify-start items-center w-full max-w-96 mx-auto gap-9 max-h-150 ">
            <div class="flex flex-col gap-6 w-full max-w-96">
                    <div class="flex flex-col gap-3 w-full max-w-96">
                        <p class="text-base font-bold text-gray-800">آدرس ها اطلاعات تحویل</p>
                        <form v-auto-animate="{ duration: 300 }" class="flex flex-col gap-3 fade-in1">
                            <button @click="level(0)" type="button" class="flex justify-center border-2 border-rose-500 py-4 w-full rounded-xl items-center text-sm text-black font-medium"><span>آدرس جدید +</span></button>
                            <address-card :key="i" v-for="(item,i) in getAddress" @delete="removeItem" @mousedown="startHold" @touchstart="startHold" @touchend="endHold" @mouseup="endHold" @address="(e)=>{selectedAddress=e}"  :data="item" :index="i" :deleted="deleted" />
                        </form>
                    </div>
                </div>
        </div>
        <!-- <div class="w-full flex flex-col gap-3 justify-start">
            <p class="text-sm font-bold text-gray-800">روش ارسال را انتخاب کنید</p>
            <div class="flex gap-3 justify-start">
                <button @click="selectShipping(item.id)"  :key="item.id" v-for="item in settingStore.shipping" :class="[selectedShipping==item.id?'border-rose-500 bg-rose-100 shadow-hourChecked':'border-rose-300']" class="flex gap-2 items-center border-2 px-1.5 py-1 rounded-xl h-12 text-sm text-gray-800 font-bold">
                    <span>{{ item.name }}</span>
                    <img class="h-full rounded-md border border-rose-500" :src="item.media_showcase.logo[0].original_url" :alt="item.media_showcase.logo[0].id">
                </button>
            </div>
        </div> -->
        <button @click="level('+')" :class="[deleted==false?'bg-rose-500':'bg-rose-400 cursor-not-allowed']" class=" rounded-xl py-3 w-full max-w-96 shadow-[0px_9px_17px_0px_#F86F6F42]">
            <span v-if="deleted==true" class="text-sm font-bold text-white">برای انصراف کلیک کنید</span>
            <span v-if="selectedAddress==null && deleted==false" class="text-sm font-bold text-white"> برای حذف آدرس روی ان کلیک کنید و نگه دارید</span>
            <span v-if="deleted==false && selectedAddress!=null" class="text-sm font-bold text-white">مرحله بعد</span>
        </button>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import {useDataStore} from '@/stores/data'
import logoSvg from './logoSvg.vue';
import backSvg from './backSvg1.vue';
import { storeToRefs } from 'pinia';
import addressCard from '@/components/addressCard.vue'
const dataStore=useDataStore()
const {getAddress}=storeToRefs(dataStore)
const selectedAddress=ref(null)
let watchHoldTime
const startHold=()=>{
    watchHoldTime=setTimeout(()=>{
        deleted.value=true
    },2000)
}
const endHold=()=>{
    clearTimeout(watchHoldTime)
}
const deleted=ref(false)
const emit=defineEmits(['levelPage'])
const level=(op)=>{
    var r=document.querySelector(':root').style
    if(op==='+'){
            r.setProperty('--fade-out1','100%')
            r.setProperty('--fade-in1','-100%')
        if(deleted.value==false && selectedAddress.value!=null){
            document.querySelector('form').classList.remove('fade-in1')
            document.querySelector('form').classList.add('fade-out1')
            setTimeout(()=>{
                document.querySelector('form').classList.remove('fade-out1')
                document.querySelector('form').classList.add('fade-in1')
                emit('levelPage',{op,selectedAddress})
            },300)
        }
    }else{
        r.setProperty('--fade-out1','-100%')
        r.setProperty('--fade-in1','100%')
        document.querySelectorAll('form').forEach(item=>{
            item.classList.remove('fade-in1')
        })
        document.querySelectorAll('form').forEach(item=>{
            item.classList.add('fade-out1')
        })
        setTimeout(()=>{
            document.querySelectorAll('form').forEach(item=>{
                item.classList.remove('fade-out1')
            })
            document.querySelectorAll('form').forEach(item=>{
                item.classList.add('fade-in1')
            })
            emit('levelPage',op)
        },300)
    }
    deleted.value=false
}
const removeItem=(e)=>{
    dataStore.addresss = dataStore.addresss.filter((item) => item.id !== e)
    dataStore.deleteAddress(e)
    selectedAddress.value=null
}
</script>

<style scoped>
.section::-webkit-scrollbar{
    display: none;
}
</style>