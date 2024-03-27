<template>
    <div class="relative flex items-start w-full max-w-96 overflow-hidden sm:items-center h-full z-40">
        <div @click.self="handleModal" v-if="selectCity" class="flex justify-center w-full h-screen absolute top-0 right-0 z-30">
            <transition>
                <form  v-if="selectCity==true" :class="[selectCity?'w-[80%] top-[24%] sm:top-[35%] h-52 overflow-scroll absolute z-50 bg-gray-100':'']" class="containerCity flex flex-col items-center justify-center rounded-2xl shadow-2xl p-3 sm:py-4">
                    <div  class="w-full h-full flex flex-col gap-2 justify-between pb-3">
                        <label @click.capture="hanldleCities(index)" class=" border sm:hover:bg-gray-100 sm:hover:shadow-md duration-300 bg-white p-2 rounded-md" :for="item.id" v-for="(item,index) in state==true?getState:getcities">
                            <input v-model="addAddress.city" :value="item" class=" hidden" type="radio" :id="item.id"/>
                            <span class="span text-gray-800 font-medium text-sm">{{ item.name }}</span>
                        </label>
                    </div>
                </form>
            </transition>
        </div>
    <div class="rounded-xl gap-4 flex flex-col z-20 justify-start items-center w-full max-w-96 inset-0 mx-auto">
        <button @click="level('-')" class="flex justify-start w-full max-w-96">
            <back-svg/>
        </button>
        <div class="flex justify-center px-5">
            <logo-svg class="w-[197px]"/>
        </div>
        <div class="pt-5 px-4 lg:py-2 lg:pb-4 flex flex-col z-20 justify-start items-center w-full max-w-96 inset-0  mx-auto gap-9 max-h-150 ">
            <div class="flex flex-col gap-6 w-full max-w-96 pt-3 pb-6">
                    <div class="flex flex-col w-full max-w-96 ">
                        <p class="text-base font-bold text-gray-800">آدرس و اطلاعات تحویل</p>
                        <form class="flex flex-col gap-1 fade-in1">
                            <div class="flex h-16 gap-4">
                                <div  class="h-16">
                                    <div :class="[addAddress.state!=''?'top-4':'top-10']" class=" transition-all duration-300 relative w-fit px-2 right-3 rounded-lg text-gray-600 text-sm font-medium bg-first-page py-2" >
                                        <span>استان :</span>
                                    </div>
                                    <input @focus="showSelectCity('state')" v-model="addAddress.state.name" :class="[addAddress.state!=''?'border-2 border-green-500':'border-2 border-red-500']" class="w-full border p-2 rounded-lg outline-0" type="text" >
                                </div>
                                <div  class="h-16">
                                    <div :class="[addAddress.city!=''?'top-4':'top-10']" class=" transition-all duration-300 relative w-fit px-2 right-3 rounded-lg text-gray-600 text-sm font-medium bg-first-page py-2" >
                                        <span>شهر :</span>
                                    </div>
                                    <input @focus="showSelectCity('city')" v-model="addAddress.city.name" :class="[addAddress.city!=''?'border-2 border-green-500':'border-2 border-red-500']" class="w-full border p-2 rounded-lg outline-0" type="text" >
                                </div>    
                            </div>
                            
                            <div  class="h-16">
                                <div :class="[ShowAddress==true?'!top-3 ':'top-9']" class="transition-all duration-300 relative w-fit px-2 top-10 right-3 rounded-lg text-gray-600 text-sm font-medium bg-first-page py-1" >
                                    <span>آدرس :</span>
                                </div>
                                <input @focus="ShowAddress=true" @blur="addAddress.address==''?ShowAddress=false:''" v-model="addAddress.address" :class="[addAddress.address!=''?'border-2 border-green-500':'border-2 border-red-500']" class="w-full border p-2 rounded-lg outline-0" type="text" >
                            </div>
                            <div  class="h-16">
                                <div :class="[ShowPostalCode==true?'!top-3 ':'top-9']" class="transition-all duration-300 relative w-fit px-2 top-10 right-3 rounded-lg text-gray-600 font-medium text-sm bg-first-page py-1" >
                                    <span>کد پستی :</span>
                                </div>
                                <input @focus="ShowPostalCode=true" @blur="addAddress.postalCode==''?ShowPostalCode=false:''" v-model="addAddress.postalCode" :class="[addAddress.postalCode!=''?'border-2 border-green-500':'border-2 border-red-500']" class="w-full border p-2 rounded-lg outline-0" type="text" maxlength="10">
                            </div>
                            <div class="h-16">
                                <div :class="[ShowPlaque==true?'!top-3 ':'top-9']" class="transition-all duration-300 relative w-fit px-2 top-10 right-3 rounded-lg text-gray-600 text-sm font-medium bg-first-page py-1" >
                                    <span>پلاک :</span>
                                </div>
                                <input @focus="ShowPlaque=true" @blur="addAddress.plaque==''?ShowPlaque=false:''" v-model="addAddress.plaque" :class="[addAddress.plaque!=''?'border-2 border-green-500':'border-2 border-red-500']" class="w-full border p-2 rounded-lg outline-0" type="text" maxlength="4">
                            </div>
                        </form>
                    </div>
                </div>
        </div>
        <button @click="level('+')" class="bg-rose-500 rounded-xl py-3 w-full max-w-96 z-40 shadow-[0px_9px_17px_0px_#F86F6F42]"">
            <span class="text-sm font-bold text-white">مرحله بعد</span>
        </button>
    </div>
</div>
</template>


<script setup>
import { reactive,ref,watch,computed,onBeforeMount } from 'vue'
import {useDataStore} from '@/stores/data'
import logoSvg from './logoSvg.vue';
import backSvg from './backSvg1.vue';
import { storeToRefs } from 'pinia';


const dataStore=useDataStore()
const {getprovinces}=storeToRefs(dataStore)
let ShowAddress=ref(false)
let ShowPostalCode=ref(false)
let ShowPlaque=ref(false)



const addAddress=reactive({
    address:'',
    postalCode:'',
    plaque:'',
    city:'',
    state:''
})

let validateLevel=ref(0)
let selectCity=ref(false)
watch(()=>[addAddress.address,addAddress.postalCode,addAddress.plaque,addAddress.city],(nVal)=>{
    if(!nVal.includes('')){
        validateLevel.value=1
    }
    else{
        validateLevel.value=0
    }
})



const emit=defineEmits(['levelPage'])

const level=(op)=>{
    var r=document.querySelector(':root').style
    if(op==='+'){
        r.setProperty('--fade-out1','100%')
        r.setProperty('--fade-in1','-100%')
        if(validateLevel.value==1){
            const {address,postalCode,plaque,city}=addAddress
            dataStore.addAddresses(address,postalCode,city.id)
            dataStore.Address()
            document.querySelector('form').classList.remove('fade-in1')
            document.querySelector('form').classList.add('fade-out1')
            setTimeout(()=>{
                document.querySelector('form').classList.remove('fade-out1')
                document.querySelector('form').classList.add('fade-in1')
                emit('levelPage',op)
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


const handleModal=()=>{
    selectCity.value=false
    counter.value=1
    cities.value=getprovinces.value
}
let state=ref(false)
let city=ref(false)
let states=ref(getprovinces.value)
let cities=ref(null)
const getState=computed(()=>states.value)
const getcities=computed(()=>cities.value)
const counter=ref(1)
const hanldleCities=(index)=>{
    if(state.value==true){
        addAddress.state=getprovinces.value[index]
        console.log(addAddress.state)
    }else{
        addAddress.city=cities.value[index]
    }
    if(counter.value==2){
        counter.value=1
        // cities.value=getprovinces.value
        selectCity.value=false
    }
    if(counter.value<2){
        cities.value=getprovinces.value[index].cities
        counter.value++
        selectCity.value=false
    }
}

const showSelectCity=(e)=>{
    if(e=='state'){
        state.value=true
        city.value=false
    }else{
        city.value=true
        state.value=false
    }
    selectCity.value=true
}

 
</script>


<style scoped>
.containerCity::-webkit-scrollbar{
    display: none;
}

.v-enter-from,.v-leave-to{
    scale:0;
}

.v-enter-to,.v-leave-from{
    scale: 1;
}

.v-enter-active,.v-leave-active{
    transition: scale 0.5s;
}
</style>