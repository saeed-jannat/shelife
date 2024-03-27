<template>
    <section class="relative flex flex-col overflow-hidden h-screen">
        <figure class="flex absolute z-10 h-full w-full">
            <img class="h-full w-96" v-for="item in 5" src="@/assets/firstPageThings/backgroundStar.png" alt="">
        </figure>
        <KeepAlive>
            <component @levelPage="levelAuthorisation" :is="activeTab" :counter="getCounter" :telNumber="telnumber"></component>
        </KeepAlive>
    </section>
</template>

<script setup>
// import registerLogin1 from '@/components/register-login1.vue'
import registerLogin1 from '@/components/enterMobile.vue'
import registerLogin2 from '@/components/enterTheSmsToken.vue'
import registerLogin3 from '@/components/register.vue'
import { useAuthorisationStore } from '@/stores/authorisation.js'
import { useDataStore } from '@/stores/data'
import { storeToRefs } from 'pinia'
import { ref,shallowRef,computed } from 'vue'
import { useRouter } from 'vue-router'


const router=useRouter()
const authorisationStore=useAuthorisationStore()
const dataStore=useDataStore()
const {getStatusOfregister}=storeToRefs(authorisationStore)
let activeTab=shallowRef(registerLogin1)
const counter=ref(1)
const getCounter=computed(()=>counter.value)
const telnumber=ref(null)


const levelAuthorisation=(e)=>{
    if(counter.value==1){
        telnumber.value=+e.telNumber.value
    }
    if(e==='+' || e.op==='+'){
        if(counter.value==2){
            dataStore.personalDetail=e.personalDetail.fNameLname
        }else if(counter.value==3 && getStatusOfregister.value=='login'){
        }else{
            counter.value++
        }
    }else if(counter.value>1 && e==='-'){
        counter.value--
    }
    if(counter.value==1){
        activeTab.value=registerLogin1
    }else if(counter.value==2){
        activeTab.value=registerLogin2
    }else if(counter.value==3){
        activeTab.value=registerLogin3
    }  
}
</script>