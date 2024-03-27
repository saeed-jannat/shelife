<template>
    <div class="relative flex items-start w-full max-w-96 sm:items-center">
    <div  class="rounded-xl gap-4 flex flex-col z-20 justify-start items-center w-full max-w-96 inset-0 mx-auto">
        <button @click="route.name=='request-kit'?router.go(-1):level('-')" class="flex justify-start w-full max-w-96">
            <back-svg/>
        </button>
        <div class="flex justify-center px-5">
            <logo-svg class="w-[197px]"/>
        </div>
        <div class="pt-5 lg:py-2 lg:pb-4 flex flex-col z-20 justify-start items-center w-full max-w-96 inset-0  mx-auto gap-9 max-h-150 ">
            <div class="flex flex-col gap-4 w-full max-w-96 pt-10 ">
                <p class="text-base font-bold text-gray-800">کیت مورد نظر خود را انتخاب کنید .</p>
                <expriment-card v-for="(item,i) in getExperiments" :data="item" :index="i" @expriment="(e)=>{selectedExpriment=e}" />
            </div>
        </div>
        <button @click="level('+')" class="bg-rose-500 rounded-xl py-3 w-full max-w-96 shadow-[0px_9px_17px_0px_#F86F6F42]">
            <span class="text-sm font-bold text-white">مرحله بعد</span>
        </button>
    </div>
</div>
</template>

<script setup>
import { useRouter,useRoute } from 'vue-router';
import logoSvg from './logoSvg.vue';
import backSvg from './backSvg1.vue';
import exprimentCard from '@/components/exprimentCard.vue'
import { ref } from 'vue'
import { useDataStore } from '@/stores/data';
import { storeToRefs } from 'pinia';
const route=useRoute()
const dataStore=useDataStore()
const {getExperiments}=storeToRefs(dataStore)
const {getprovinces}=storeToRefs(dataStore)
if(getprovinces.value==null)dataStore.getProvinces()
dataStore.getProduct()
const router = useRouter()

const selectedExpriment=ref(null)
const emit=defineEmits(['levelPage'])

const level=(op)=>{
    var r=document.querySelector(':root').style
    if(op==='+'){
            r.setProperty('--fade-out1','100%')
            r.setProperty('--fade-in1','-100%')
        if(selectedExpriment.value != null){
            document.querySelectorAll('label').forEach(item=>{
                item.classList.remove('fade-in1')
            })
            document.querySelectorAll('label').forEach(item=>{
                item.classList.add('fade-out1')
            })
            setTimeout(()=>{
                document.querySelectorAll('label').forEach(item=>{
                    item.classList.remove('fade-out1')
                })
                document.querySelectorAll('label').forEach(item=>{
                    item.classList.add('fade-in1')
                })
                emit('levelPage',{op,selectedExpriment})
            },300)
        }
    }else{
        r.setProperty('--fade-out1','-100%')
        r.setProperty('--fade-in1','100%')
        document.querySelectorAll('label').forEach(item=>{
            item.classList.remove('fade-in1')
        })
        document.querySelectorAll('label').forEach(item=>{
            item.classList.add('fade-out1')
        })
        setTimeout(()=>{
            document.querySelectorAll('label').forEach(item=>{
                item.classList.remove('fade-out1')
            })
            document.querySelectorAll('label').forEach(item=>{
                item.classList.add('fade-in1')
            })
            emit('levelPage',op)
        },300)
    }

}
</script>