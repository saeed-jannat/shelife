<template>
        <div class="relative flex items-start overflow-hidden sm:items-center h-full ">
        <div  class="rounded-xl gap-4 flex flex-col z-20 justify-start items-center w-full max-w-96 inset-0 mx-auto">
            <button @click="router.go(-1)" class="flex justify-start w-full max-w-96 z-50">
                <backSvg/>
            </button>
            <div class="flex justify-center px-5">
                <logo-svg class="w-[197px]"/>
            </div>
            <div class=" py-5 lg:px-2 lg:py-2 lg:pb-4 flex flex-col z-20 justify-start items-center w-full max-w-96 inset-0  mx-auto gap-9 max-h-150 ">
                <div class="flex flex-col gap-0 w-full max-w-96 pt-10">
                    <div class="flex flex-col gap-3 text-gray-900">
                        <p class="text-base font-bold">تایید شناسه کیت</p>
                        <p class="text-sm font-normal text-justify px-1">شماره شناسه در داخل بسته بندی کیت است را در کادر زیر وارد کنید .</p>
                    </div>
                    <form class="flex flex-col ">
                        <div class="h-16">
                            <div :class="[ShowKitId==true?'top-3':'top-10']" class="transition-all duration-300 relative w-fit px-2  right-3 rounded-lg text-gray-600 text-sm bg-first-page py-2" >
                                <span>شناسه :</span>
                            </div>
                            <input @focus="ShowKitId=true" @blur="kitId==''?ShowKitId=false:''" :class="[kitId!=''?'border-2 border-green-500':'border-2 border-red-500']" v-model="kitId" class="inputKitId w-full border p-2 rounded-lg outline-0" type="text" maxlength="8">
                        </div>
                    </form>
                </div>
            </div>
            <button @click="level('+')" class="bg-rose-500 rounded-xl py-3 w-full max-w-96 shadow-[0px_9px_17px_0px_#F86F6F42]">
                <span class="text-sm font-bold text-white">تایید شناسه</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref,onMounted } from 'vue'
import backSvg from '@/components/backSvg1.vue'
import logoSvg from '@/components/logoSvg.vue'
import { useDataStore } from '@/stores/data';
const dataStore=useDataStore()
dataStore.getProduct()
const router=useRouter()
let kitId=ref('')
let ShowKitId=ref(false)
const emit=defineEmits(['levelPage'])
const level=(op)=>{
    var r=document.querySelector(':root').style
    if(op==='+'){
        if(kitId!=''){
            r.setProperty('--fade-out1','100%')
            r.setProperty('--fade-in1','-100%')
            document.querySelector('form').classList.remove('fade-in1')
            document.querySelector('form').classList.add('fade-out1')
            setTimeout(()=>{
                document.querySelector('form').classList.remove('fade-out1')
                document.querySelector('form').classList.add('fade-in1')
                emit('levelPage',{op,kitId})
            },300)
        }
    }else{
        emit('levelPage',op)
    }
}
onMounted(()=>{
    document.querySelector('.inputKitId').addEventListener('keydown',(e)=>{
        if(e.keyCode<106 && e.keyCode>95 || e.keyCode==8 || e.keyCode>47 && e.keyCode<58 || e.keyCode==17 || e.keyCode==86){
        }else{
            e.preventDefault()
        }
    })
})

</script>