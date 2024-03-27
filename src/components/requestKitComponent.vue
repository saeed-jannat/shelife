<template>
    <section  class="relative justify-center flex items-start overflow-x-hidden sm:items-center h-screen px-4 pt-5">
        <figure class="flex absolute top-0 h-full w-full">
            <img v-for="item in 5" class="h-full w-96" src="@/assets/firstPageThings/backgroundStar.png" alt="">
        </figure>
        <KeepAlive>
            <component @levelPage="levelRequest" :detailsOfRequest="detailOfRequest" :is="activeTab"/>
        </KeepAlive>
    </section>
</template>


<script setup>
import { reactive, ref,shallowRef } from 'vue';
import requestKit1 from '@/components/choseProduct.vue'
import requestKit2 from '@/components/selectAddress.vue'
import requestKit3 from '@/components/enterTheNewAddress.vue'
import requestKit4 from '@/components/quantity.vue'
import requestKit5 from '@/components/selectDate.vue'
import requestKit6 from '@/components/pay.vue'
import { useDataStore } from '@/stores/data'

const dataStore=useDataStore()



let counter=ref(1)
let activeTab=shallowRef(requestKit1)
dataStore.Address()
let detailOfRequest=reactive({})
const levelRequest=(e)=>{
    if(e==='+' || e.op==='+'){
        if(counter.value==0){
            counter.value=2
        }else{
            counter.value++
        }
    }
    else if(e===0){
        counter.value=0
    }
    else if(counter.value>=0 && e==='-' || e.op==='-'){
        if(counter.value==0){
            counter.value=2
        }
        else{
            counter.value--
        }
    }
    if(counter.value==0){
        activeTab.value=requestKit3
    }
    if(counter.value==1){
        activeTab.value=requestKit1
    }else if(counter.value==2){
        dataStore.Address()
        if(e.selectedExpriment)detailOfRequest.product=e.selectedExpriment.value
        activeTab.value=requestKit2
    }else if(counter.value==3){
        if(e.selectedAddress)detailOfRequest.address=e.selectedAddress.value
        activeTab.value=requestKit4
    }else if(counter.value==4){
        if(e.kitQuantity)detailOfRequest.quantity=e.kitQuantity.value
        activeTab.value=requestKit5
    }else if(counter.value==5){
        if(e.res.data.data.make_response.url)detailOfRequest.url=e.res.data.data.make_response.url
        activeTab.value=requestKit6
    }
    

}



</script>


<style scoped>

:root{
    --enterTo2: 0% ;
    --enterFrom2: -70%;
    --leaveTo2: 70%;
    --leaveFrom2: 0%;
}

section::-webkit-scrollbar{
    display: none;
}

</style>