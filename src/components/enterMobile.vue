<template>
    <div class="relative px-5 py-10 flex flex-col justify-center items-center w-full h-screen gap-5 lg:gap-6 overflow-hidden bg-first-page">
        <logo-svg/>
        <div class="z-50 flex flex-col w-full max-w-96">
                <div class="flex flex-col gap-3 lg:gap-1">
                    <div class="text-base text-gray-800 font-bold">
                        <p >ورود /  ثبت نام</p>
                    </div>
                    <div class="text-sm font-normal text-gray-800">
                        <p>سلام عزیزم لطفا شماره مبایل خودتو وارد کن .</p>
                    </div>
                    <form  class="flex relative telform h-10 fade-in pt-1" id="telnumber">
                        <div :class="[lablePos==true?'-top-3 ':'top-2']" class="absolute w-fit px-2 transition-all duration-300 right-3 rounded-lg text-gray-600 text-sm bg-first-page py-1" >
                            <span>شماره تماس :</span>
                        </div>
                        <input @click="lablePos=true" @blur="telNumber==null?lablePos=false:''" v-model="telNumber" :class="[errormsg==' '?'!ring-green-500 ring-2 bg-green-100':'!ring-red-500 ring-2 !bg-reed-500']" class="w-full border p-2 rounded-lg outline-0" id="telInput" type="tel" maxlength="11">
                    </form>
                </div>
            </div>
            <div class="flex flex-col gap-3 w-full max-w-96">
            <button @click="level('+')" class="w-full max-w-96 py-3 font-medium rounded-lg bg-rose-500 z-50 shadow-[0px_9px_17px_0px_#F86F6F42]">
                <span  class="text-sm text-white">ارسال کد</span>
            </button>
            <div class="w-full flex justify-between pt-1">
                <form class="z-50 flex gap-2 items-center px-2">
                    <input  v-model="rules" class="accent-red-500" type="checkbox" id="checkRules" name="checkRules">
                    <label class="text-xs font-medium"  for="checkRules">شرایط و قوانین آزمایشگاه آنلاین <router-link :to="{name:'terms-and-conditions'}" class="text-blue-700 underline text-xs">شی لایف</router-link> را میپذیرم .</label>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref,watch } from 'vue';
import { useAuthorisationStore } from '@/stores/authorisation'
import logoSvg from './logoSvg.vue';


const authorisationStore=useAuthorisationStore()
let lablePos=ref(false)
let errormsg=ref(null)
let telNumber=ref(null)
let rules=ref(false)



watch(telNumber,(newtel)=>{
    if(newtel.length<=10){
        errormsg.value='شماره تلفن را درست وارد کنید'
    }
    else if(newtel.length==11 && newtel[0]==0 && newtel[1]==9){
        errormsg.value=' '
    }
})

const emit=defineEmits(['levelPage'])

const level=(op)=>{
    var r=document.querySelector(':root').style
    if(op==='+'){
        r.setProperty('--fade-out','-100%')
        r.setProperty('--fade-in','100%')
        if(errormsg.value==' ' && rules.value==true){
            document.querySelector('form').classList.remove('fade-in')
            document.querySelector('form').classList.add('fade-out')
            authorisationStore.registerLogin(telNumber.value)
            setTimeout(()=>{
                emit('levelPage',{op,telNumber})
                document.querySelector('form').classList.remove('fade-out')
                document.querySelector('form').classList.add('fade-in')
            },300)
            errormsg.value=' '
        }
    }else{
        r.setProperty('--fade-in','-100%')
        r.setProperty('--fade-out','100%')
        emit('levelPage',op)
    }
}

</script>


<style>

</style>@/stores/authorization