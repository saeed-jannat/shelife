<template>
    <div class="section relative flex items-start w-full max-w-96  sm:items-center h-screen pb-36">
    <div class="rounded-xl gap-1 flex flex-col z-20 justify-start items-center w-full max-w-96 inset-0 mx-auto sm:px-0">
        <button @click="level('-')" class="flex justify-start w-full max-w-96">
            <back-svg/>
        </button>
        <div class="flex justify-center px-5">
            <logo-svg class="w-[197px]"/>
        </div>
        <div class="lg:py-2 lg:pb-4 flex flex-col z-20 justify-start items-center w-full max-w-96 inset-0 h-fit px-4 mx-auto gap-9 ">
            <div class="flex flex-col gap-6 w-full max-w-96 pb-2">
                    <div class="flex flex-col gap-1 w-full max-w-96">
                        <p class="text-base font-bold text-gray-800"> زمان ارسال کیت را مشخص کنید .</p>
                        <p class="flex gap-1 text-sm font-normal text-gray-500"><span class="text-black font-medium">روز:</span> {{ showRange }} </p>
                        <form class="flex flex-col gap-4 fade-in1">
                            <div class="flex justify-center">
                                <input type="text" class="custom-input1 hidden"/>
                                <Vue3PersianDatetimePicker v-model="timeRange" inline format="jYYYY-jMM-jDD HH:mm:ss" :min="moment().format('jYYYY-jMM-jDD HH:mm:ss')" :disable="['Friday',moment().format('jYYYY-jMM-jDD')]" custom-input=".custom-input1" color="rgb(244 63 94 )" />
                            </div>
                            <!-- <p id="hour" class="text-sm font-medium flex gap-1"><span class="font-semibold">ساعت:</span><span class="text-gray-600">{{ rangehour }}</span></p>
                            <div class="grid grid-cols-3 grid-rows-2 gap-x-6 gap-y-4 px-4">
                                <input v-model="rangehour" type="radio" id="hour1" name="hour" class="hidden peer/hour1" value="12 تا 14" />
                                <label class="text-sm font-semibold text-gray-800 flex justify-center items-center px-2 py-3 bg-white rounded-xl peer-checked/hour1:shadow-hourChecked peer-checked/hour1:border box-border peer-checked/hour1:border-rose-500 peer-checked/hour1:bg-hourColor duration-300" for="hour1"><span>12 تا 14</span></label>
                                
                                <input v-model="rangehour" type="radio" id="hour2" name="hour" class="hidden peer/hour2" value="10 تا 12" checked/>
                                <label class="text-sm font-semibold text-gray-800 flex justify-center items-center px-2 py-3 bg-white rounded-xl peer-checked/hour2:shadow-hourChecked peer-checked/hour2:border box-border peer-checked/hour2:border-rose-500 peer-checked/hour2:bg-hourColor duration-300" for="hour2"><span>10 تا 12</span></label>
                                
                                <input v-model="rangehour" type="radio" id="hour3" name="hour" class="hidden peer/hour3" value="8 تا 12"/>
                                <label class="text-sm font-semibold text-gray-800 flex justify-center items-center px-2 py-3 bg-white rounded-xl peer-checked/hour3:shadow-hourChecked peer-checked/hour3:border box-border peer-checked/hour3:border-rose-500 peer-checked/hour3:bg-hourColor duration-300" for="hour3"><span>8 تا 12</span></label>
                                
                                <input v-model="rangehour" type="radio" id="hour4" name="hour" class="hidden peer/hour4" value="14 تا 16"/>
                                <label class="text-sm font-semibold text-gray-800 flex justify-center items-center px-2 py-3 bg-white rounded-xl peer-checked/hour4:border box-border peer-checked/hour4:border-rose-500 peer-checked/hour4:bg-hourColor  peer-checked/hour4:shadow-hourChecked duration-300" for="hour4"><span>14 تا 16</span></label>
                            </div> -->
                        </form>
                        
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
import Vue3PersianDatetimePicker  from 'vue3-persian-datetime-picker'
import { ref,watch } from 'vue'
import logoSvg from './logoSvg.vue';
import backSvg from './backSvg1.vue';
import moment from 'moment-jalali';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router';
const route=useRoute()
// let rangehour=ref('10 تا 12')
let timeRange=ref(null)
const months = ref(["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"]);
let showRange=ref(`${moment().format('jDD')}  ${moment().format('jMMMM')}  ${moment().format('jYYYY')}`)
let year=ref(null)
watch(timeRange,()=>{
    showRange.value=timeRange.value.split(' ')[0].split('-')[2]
    showRange.value+=' '+months.value[+timeRange.value.split('-')[1]-1]
    showRange.value+=' '+timeRange.value.split('-')[0]
    year.value=moment(timeRange.value, 'jYYYY-jMM-jDD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss')
})
const props=defineProps(['detailsOfRequest','detailsSendRequest'])
const emit=defineEmits(['levelPage'])
const level=(op)=>{
    var r=document.querySelector(':root').style
    if(op==='+'){
        r.setProperty('--fade-out1','100%')
        r.setProperty('--fade-in1','-100%')
        if(year.value!=null){
            if(route.name=='request-kit')requestKit(props.detailsOfRequest.address,year.value,props.detailsOfRequest.product,props.detailsOfRequest.quantity)
            else sendKit(props.detailsSendRequest.serial,year.value,props.detailsSendRequest.address)
        }
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
const requestKit=(address,date,product,quantity,op='+')=>{
    const formData=new FormData()
    formData.append('address_id',address)
    formData.append('shipping_id',5)
    formData.append('pay_wallet',0)
    formData.append('has_cart',0)
    formData.append('payment_driver','virtual')
    formData.append('items[0][quantity]',quantity)
    formData.append('items[0][product_id]',product)
    formData.append('send_datetime',date)
    axios.post('/v1/user/orders',formData)
    .then(res=>{
        document.querySelector('form').classList.remove('fade-in1')
        document.querySelector('form').classList.add('fade-out1')
        setTimeout(()=>{
            document.querySelector('form').classList.remove('fade-out1')
            document.querySelector('form').classList.add('fade-in1')
            emit('levelPage',{op,res})
        },300)
    })
    .catch(err=>{
        if(err.response.data.message=="Validation errors:"){
            Toast.fire({
                title: err.response.data.errors[Object.keys(err.response.data.errors)[0]][0]
            })
        }else{
            Toast.fire({
                title: err.response.data.message
            })
        }
    })
}

const sendKit=(serial,receive_datetime,address_id,op='+')=>{
    const formData=new FormData()
    formData.append('serial',serial)
    formData.append('receive_datetime',receive_datetime)
    formData.append('address_id',address_id)
    axios.post('/v1/user/experiments',formData)
    .then(res=>{
        console.log(res)
        document.querySelector('form').classList.remove('fade-in1')
        document.querySelector('form').classList.add('fade-out1')
        setTimeout(()=>{
            document.querySelector('form').classList.remove('fade-out1')
            document.querySelector('form').classList.add('fade-in1')
            emit('levelPage',{op,res})
        },300)
    })
    .catch(err=>{
        if(err.response.data.message=="Validation errors:"){
            Toast.fire({
                title: err.response.data.errors[Object.keys(err.response.data.errors)[0]]
            })
        }else{
            Toast.fire({
                title: err.response.data.message
            })
        }
    })
}


const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});
</script>

<style scoped>
.my-swal-container {
  animation: slide-in-right 0.5s ease-in-out;
  width: 300px;
}

@keyframes slide-in-right {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

label{
    box-shadow: 0px 4px 18px 0px #0000001F;
}

.section{
    overflow-y: visible;
    overflow-x: hidden;
}
.section::-webkit-scrollbar{
    display: none;
}
</style>