<template>
    <div class="relative px-5 py-5 flex flex-col  sm:justify-center items-center w-full h-screen gap-5 lg:gap-6 overflow-hidden bg-first-page">
        <div class="w-full flex justify-start max-w-96">
            <button @click="level('-')" class="flex flex-col items-center justify-center z-10 md:scale-100" >
                <back-svg/>
            </button>
        </div>
        <logo-svg/>
        <div class="z-50 flex flex-col w-full max-w-96">
            <div class="z-50 flex flex-col w-full max-w-96">
                <div class="form flex flex-col gap-4 fade-in">
                    <div class="text-base text-gray-800 font-bold">
                        <p >کد تایید را وارد کن .</p>
                    </div>
                    <div class="flex flex-col gap-6 lg:gap-8">
                        <div class="text-sm font-normal text-gray-800">
                            <p >کد تایید ارسال شده به شماره {{ telNumber }} را وارد کن.</p>
                        </div>
                        <form class="relative telform h-fit flex justify-center gap-4">
                            <v-otp-input
                                class="flex gap-4"
                                dir="ltr"
                                ref="otpInput"
                                v-model:value="bindModal"
                                input-classes="otp-input"
                                separator=""
                                :num-inputs="5"
                                :should-auto-focus="true"
                                input-type="letter-numeric"
                                :conditionalClass="['one', 'two', 'three', 'four','five']"
                                @on-change="handleOnChange"
                                
                            />
                        </form>
                    </div>
                </div>
            </div>
            </div>
            <div class="flex flex-col gap-3 w-full max-w-96">
            <button @click="level('+')" class="w-full max-w-96 z-10 py-3 font-medium rounded-lg bg-rose-500">
                <span  class="text-sm text-white">مرحله بعد</span>
            </button>
            <button @click="clearInput()" class="w-full bg-green-600 max-w-96 py-3 font-medium rounded-lg z-50 shadow-[0px_9px_17px_0px_#F86F6F42]">
                <span class="text-sm text-white">ارسال مجدد کد</span>
            </button>

        </div>
    </div>
</template>

<script setup>
import { ref,watch } from 'vue'
import VOtpInput from "vue3-otp-input"
import backSvg from './backSvg1.vue'
import logoSvg from './logoSvg.vue';
import { useAuthorisationStore } from '@/stores/authorisation'
import {storeToRefs} from 'pinia'

const authorisationStore=useAuthorisationStore()
const {getVerified}=storeToRefs(authorisationStore)
const {getStatusOfregister}=storeToRefs(authorisationStore)

const props=defineProps(['telNumber'])
let validate=ref(0)
const otpInput = ref(null);
const bindModal = ref("");

watch(bindModal,(new1)=>{
    if(new1.length==5){
        validate.value=1
    }else{
        validate.value=0
    }
})

watch(getVerified,(newVal)=>{
    console.log(getVerified)
    var inputs= document.querySelectorAll('.otp-input')
    if(newVal==true){
        inputs.forEach(item=>{
        item.style.border="1px solid green"
       })
    }
    else{
        inputs.forEach(item=>{
        item.style.border="1px solid red"
       })
    }
})

// const handleOnComplete = (value) => {
//     authorisationStore.verify(bindModal.value)
// };

const handleOnChange = (value) => {
};

const clearInput = () => {
  otpInput.value?.clearInput();
  authorisationStore.registerLogin()
};




const emit=defineEmits(['levelPage'])


var r=document.querySelector(':root').style

const level=(operator)=>{
    if(operator==='+'){
        r.setProperty('--fade-out','-100%')
        r.setProperty('--fade-in','100%')
        authorisationStore.verify(bindModal.value)
        if(validate.value==1 && getVerified.value==true){
            document.querySelector('.form').classList.remove('fade-in')
            document.querySelector('.form').classList.add('fade-out')
            if(getStatusOfregister.value=='login'){
                
                authorisationStore.login(bindModal.value)
            }else{
                setTimeout(()=>{
                    document.querySelector('.form').classList.remove('fade-out')
                    document.querySelector('.form').classList.add('fade-in')
                    emit('levelPage',operator)
                },300)
            }
            
        } 
        var el=document.querySelectorAll('.otp-input')
        el.forEach((item)=>{
            if(item.value==''){
                item.classList.add('bounce')
            }
            setTimeout(()=>{
                item.classList.remove('bounce')
            },1000)
        })
    }else{
        r.setProperty('--fade-in','-100%')
        r.setProperty('--fade-out','100%')
        emit('levelPage',operator)
    }
}

</script>

<style>

</style>