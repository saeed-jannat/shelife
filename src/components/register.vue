<template>
        <div class="section mx-auto relative px-5 py-5 flex flex-col sm:justify-center items-center w-full h-screen gap-8 lg:gap-6 bg-first-page">
            <div class="w-full flex justify-start max-w-96">
                <button @click="level('-')" class="flex flex-col items-center justify-center z-50" >
                    <back-svg/>
                </button>
            </div>
            <logo-svg/>
        <div class="z-50 flex flex-col w-full max-w-96">
            <div class="z-50 flex flex-col w-full max-w-96">
                <div class="z-50 flex flex-col w-full max-w-96  lg:pb-0">
                <div class="flex flex-col gap-0">
                    <div class="text-base text-gray-800 font-bold">
                        <p>ساخت پروفایل کاربری</p>
                    </div>
                    <div class="flex flex-col gap-5 lg:gap-0">
                        <form class="fade-in relative telform h-fit flex flex-col justify-center gap-1 lg:gap-0">
                            <div class="h-16 px-0.5">
                                <div :class="[showFName==true?'top-3':'top-10']" class="z-50 transition-all duration-300 relative w-fit px-2  right-3 rounded-lg text-gray-600  text-sm bg-first-page py-2" >
                                    <span>*نام :</span>
                                </div>
                                <input @click="showFName=true" @blur="personalDetail.fName==''?showFName=false:''" v-model="personalDetail.fName" :class="[personalDetail.fName!=''&&personalDetail.fName.length>1 ?'ring-2 ring-green-500':'ring-2 ring-red-500']" class="w-full border p-2 rounded-lg outline-0" id="telInput"  type="text" minlength="10">
                            </div>
                            <div class="h-16 px-0.5">
                                <div :class="[showLName==true?'top-3':'top-10']" class="z-50 transition-all duration-300 relative w-fit px-2  right-3 rounded-lg text-gray-600  text-sm bg-first-page py-2" >
                                    <span>  *نام خانوادگی :</span>
                                </div>
                                <input @click="showLName=true" @blur="personalDetail.lName==''?showLName=false:''" v-model="personalDetail.lName" :class="[personalDetail.lName!=''&&personalDetail.lName.length>2 ?'ring-2 ring-green-500':'ring-2 ring-red-500']" class="w-full border p-2 rounded-lg outline-0" id="telInput"  type="text" minlength="10">
                            </div>
                            <div @click="showBirth=true" @blur="showBirth=false">
                                <div :class="[showBirth==true?'top-3':'top-10']" class="transition-all duration-300 relative w-fit px-2 top-10 right-3 rounded-lg text-gray-600 z-50 text-sm bg-first-page py-2" >
                                    <span>*تاریخ تولد :</span>
                                </div>
                                        <input
                                        type="text"
                                        :class="[personalDetail.birth!=''?'border-green-500':'border-red-500']"
                                        class="custom-input w-full border-2 p-2 rounded-lg outline-0"
                                        />
                                        <date-picker
                                        v-model="personalDetail.birth"
                                        format="YYYY-MM-DD"
                                        display-format="jYYYY-jMM-jDD"
                                        custom-input=".custom-input"
                                        color="#FF4F62"
                                        />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <div class="flex flex-col gap-3 w-full max-w-96">
            <button @click="level('+')" class="w-full max-w-96 z-10 py-3 font-medium rounded-lg bg-rose-500 shadow-[0px_9px_17px_0px_#F86F6F42]">
                <span  class="text-sm text-white">ثبت نام</span>
            </button>
            
        </div>
    </div>
</template>

<script setup>
import datePicker from 'vue3-persian-datetime-picker'
import { reactive,ref } from 'vue'
import backSvg from './backSvg1.vue'
import { useAuthorisationStore } from '@/stores/authorisation'
import logoSvg from './logoSvg.vue';
import { storeToRefs } from 'pinia';


const authorisationStore=useAuthorisationStore()
const {getStatusOfregister}=storeToRefs(authorisationStore)

const emit=defineEmits(['levelPage'])

const personalDetail=reactive({
    birth:'',
    fName:'',
    lName:''
})

let showFName=ref(false)
let showLName=ref(false)
let showBirth=ref(false)


const level=(op)=>{
    var r=document.querySelector(':root').style
    if(op==='+'){
        if(personalDetail.birth!='' && personalDetail.fNameLname!=''){
            
            r.setProperty('--fade-out','-100%')
            r.setProperty('--fade-in','100%')
            document.querySelector('.section').classList.add('fade')
            if(getStatusOfregister.value=='register'){
                authorisationStore.register(personalDetail.fName,personalDetail.lName)
            }
            setTimeout(()=>{
                emit('levelPage',{op,personalDetail})
            },300)
        }
    }else{
        r.setProperty('--fade-in','-100%')
        r.setProperty('--fade-out','100%')
        emit('levelPage',op)
    }

}
</script>@/stores/authorization