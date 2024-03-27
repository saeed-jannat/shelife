<template>
    <div class="relative flex items-start w-full max-w-96 overflow-x-hidden sm:items-center h-full">
    <div  class="rounded-xl gap-4 flex flex-col z-20 justify-start items-center w-full max-w-96 inset-0 mx-auto">
        <button @click="level('-')" class="flex justify-start w-full max-w-96">
            <back-svg/>
        </button>
        <div class="flex justify-center px-5">
            <logo-svg class="w-[197px]"/>
        </div>
        <div class=" lg:py-2 lg:pb-4 flex flex-col z-20 justify-start items-center w-full max-w-96 inset-0  mx-auto gap-9 max-h-150 ">
            <div class="flex flex-col gap-6 w-full max-w-96 pt-3">
                    <div class="flex flex-col gap-3 w-full max-w-96 pt-5">
                        <p class="text-base font-bold text-gray-800">تعداد سفارش</p>
                        <p class="text-xs font-normal text-gray-500">تعداد کیت مورد نظر خود را وارد کنید . </p>
                        <div class="px-16">
                            <form class="flex flex-nowrap border-2 border-rose-500 rounded py-2 px-4 fade-in1">
                                <button class="border-l-2 border-rose-500 pl-4" type="button" @click="kitQuantity+=1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1667 9.16667H10.8333V5.83333C10.8333 5.37333 10.4608 5 10 5C9.53917 5 9.16667 5.37333 9.16667 5.83333V9.16667H5.83333C5.3725 9.16667 5 9.54 5 10C5 10.46 5.3725 10.8333 5.83333 10.8333H9.16667V14.1667C9.16667 14.6267 9.53917 15 10 15C10.4608 15 10.8333 14.6267 10.8333 14.1667V10.8333H14.1667C14.6275 10.8333 15 10.46 15 10C15 9.54 14.6275 9.16667 14.1667 9.16667Z" fill="#FF4F62"/>
                                    </svg>
                                </button>
                                <input class="text-center w-full outline-none" v-model="kitQuantity" type="number">
                                <button class="border-r-2 border-rose-500 pr-4" type="button" @click="kitQuantity>1?kitQuantity-=1:''">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1667 10.8337H5.83333C5.3725 10.8337 5 10.4603 5 10.0003C5 9.54033 5.3725 9.16699 5.83333 9.16699H14.1667C14.6275 9.16699 15 9.54033 15 10.0003C15 10.4603 14.6275 10.8337 14.1667 10.8337Z" fill="#FF4F62"/>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
        <button @click="level('+')" class="bg-rose-500 rounded-xl py-3 w-full max-w-96 shadow-[0px_9px_17px_0px_#F86F6F42]">
            <span class="text-sm font-bold text-white">تایید</span>
        </button>
    </div>
</div>
</template>

<script setup>
import {ref} from 'vue'
import logoSvg from './logoSvg.vue';
import backSvg from './backSvg1.vue';

const emit=defineEmits(['levelPage'])

const level=(op)=>{
    var r=document.querySelector(':root').style
    if(op==='+'){
        r.setProperty('--fade-out1','100%')
        r.setProperty('--fade-in1','-100%')
        document.querySelector('form').classList.remove('fade-in1')
        document.querySelector('form').classList.add('fade-out1')
        setTimeout(()=>{
            document.querySelector('form').classList.remove('fade-out1')
            document.querySelector('form').classList.add('fade-in1')
            emit('levelPage',{op,kitQuantity})
        },300)
    }else{
        r.setProperty('--fade-out1','-100%')
        r.setProperty('--fade-in1','100%')
        document.querySelector('form').classList.remove('fade-in1')
        document.querySelector('form').classList.add('fade-out1')
        setTimeout(()=>{
            document.querySelector('form').classList.remove('fade-out1')
            document.querySelector('form').classList.add('fade-in1')
            emit('levelPage',op)
        },300)
    }
}
let kitQuantity=ref(1)
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
}
</style>