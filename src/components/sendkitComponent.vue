<template>
    <section class="relative justify-center flex items-start overflow-hidden sm:items-center h-screen pt-5 px-4">
        <figure class="flex absolute h-full w-full">
            <img v-for="item in 5" class="h-full w-96" src="@/assets/firstPageThings/backgroundStar.png" alt="">
        </figure>
        <KeepAlive>
            <component @levelPage="levelRequest($event)" :detailsSendRequest="detailsSendRequest" :kitQuantity="KitQuantity" :is="activeTab"/>
        </KeepAlive>
    </section>
</template>

<script setup>
import { reactive, ref,shallowRef } from 'vue';

import requestKit1 from '@/components/enterTheSerial.vue'
import requestKit2 from '@/components/choseProduct.vue'
import requestKit3 from '@/components/selectAddress.vue'
import requestKit4 from '@/components/enterTheNewAddress.vue'
import requestKit5 from '@/components/selectDate.vue'
import requestKit6 from '@/components/pay.vue'




import { useDataStore } from '@/stores/data'

const dataStore=useDataStore()



let counter=ref(1)
let activeTab=shallowRef(requestKit1)
let KitQuantity=ref()
const detailsSendRequest=reactive({})
const levelRequest=(e)=>{
    if(e==='+' || e.op==='+'){
        if(counter.value==0 ){
            counter.value=3
        }else{
            counter.value++
        }
    }
    else if(e===0){
        counter.value=0
    }
    else if(counter.value>=0 && e==='-'){
        if(counter.value==0){
            counter.value=3
        }else if(counter.value==4){
            counter.value=3
        }else if(counter.value==1){

        }
        else{
            counter.value--
        }
    }
    if(counter.value==5){
        KitQuantity.value=e.kitQuantity
    }
    if(counter.value==0){
        activeTab.value=requestKit4
    }
    if(counter.value==1){
        activeTab.value=requestKit1
    }else if(counter.value==2){
        if(e.kitId)detailsSendRequest.serial=e.kitId.value
        activeTab.value=requestKit2
    }else if(counter.value==3){
        if(e.selectedExpriment)detailsSendRequest.product=e.selectedExpriment.value
        dataStore.Address()
        activeTab.value=requestKit3
    }else if(counter.value==4){
        if(e.selectedAddress)detailsSendRequest.address=e.selectedAddress.value
        activeTab.value=requestKit5
    }else if(counter.value==5){
        activeTab.value=requestKit6
    }
}

</script>