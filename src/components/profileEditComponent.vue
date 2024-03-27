<template>
    <section class=" relative px-4 pt-4 pb-20 flex flex-col justify-start sm:justify-center items-center w-full h-fit gap-8 lg:gap-6 bg-first-page">
        <div class="w-full flex justify-start max-w-96">
            <button @click="router.go(-1)" class="flex flex-col items-center justify-center z-10" >
                <back-svg/>
            </button>
        </div>
        <logo-svg/>
    <div class="z-50 flex flex-col w-full max-w-96">
        <div class="z-50 flex flex-col w-full max-w-96">
            <div class="z-50 flex flex-col w-full max-w-96 lg:pb-0">
            <div class="flex flex-col gap-1">
                <div class="flex flex-col gap-2">
                    <p class="text-base text-gray-800 font-bold">ویرایش و مدیریت پروفایل کاربری</p>
                    <p class="text-sm text-gray-600 font-normal">اطلاعات و تاریخچه ازمایشات شما محرمانه میماند ! </p>
                </div>
                <div class="flex flex-col gap-11 lg:gap-0">
                    <form class=" relative telform h-fit flex flex-col justify-center gap-1">
                        <div class="h-16 px-0.5">
                            <div :class="[personalDetail.fName!=''?'top-3':'top-10']" class="z-50 transition-all duration-300 relative w-fit px-2  right-3 rounded-lg text-gray-600  text-sm bg-first-page py-2" >
                                <span>*نام :</span>
                            </div>
                                <input v-model="personalDetail.fName" :class="[personalDetail.fName!=''&&personalDetail.fName.length>1 ?'ring-2 ring-green-500':'ring-2 ring-red-500']" class="w-full border p-2 rounded-lg outline-0" id="telInput"  type="text" minlength="10">
                            </div>
                            <div class="h-16 px-0.5">
                                <div :class="[personalDetail.lName!=''?'top-3':'top-10']" class="z-50 transition-all duration-300 relative w-fit px-2  right-3 rounded-lg text-gray-600  text-sm bg-first-page py-2" >
                                    <span>  *نام خانوادگی :</span>
                                </div>
                                <input  v-model="personalDetail.lName" :class="[personalDetail.lName!=''&&personalDetail.lName.length>2 ?'ring-2 ring-green-500':'ring-2 ring-red-500']" class="w-full border p-2 rounded-lg outline-0" id="telInput"  type="text" minlength="10">
                            </div>
                        <div class="h-16">
                            <div :class="[personalDetail.birth!=''?'top-3':'top-10']" class="transition-all duration-300 relative w-fit px-2  right-3 rounded-lg text-gray-600 z-50 text-sm bg-first-page py-2" >
                                <span>*تاریخ تولد :</span>
                            </div>
                                    <input
                                    type="text"
                                    
                                    :class="[personalDetail.birth==''?'border-red-500':'border-green-500']"
                                    class="birth-input w-full border-2 p-2 rounded-lg outline-0 pr-4"
                                    />
                                    <date-picker
                                    v-model="personalDetail.birth"
                                    format="YYYY-MM-DD"
                                    display-format="jYYYY-jMM-jDD"
                                    custom-input=".birth-input"
                                    color="#FF4F62"
                                    />
                        </div>
                        <div class="h-16 z-50">
                            <div :class="[nationalId!=null?'top-3':'top-10']" class="transition-all duration-300 relative w-fit px-2  right-3 rounded-lg text-gray-600 text-sm bg-first-page py-2" >
                                <span>کد ملی :</span>
                            </div>
                            <input v-model="nationalId" :class="[nationalId!=null?'border-2 border-green-500':'border-2 border-red-500']" class="inputNationalId w-full border p-2 rounded-lg outline-0" type="text" maxlength="10">
                        </div>
                        <div class="pt-8 pb-4 px-1 flex flex-col gap-3">
                            <p class="text-sm text-gray-600 font-medium">*جنسیت خود را انتحاب کنید</p>
                            <div class="flex justify-center gap-4">
                                <input v-model="gender" name="gender" class="hidden peer/female" id="female" type="radio" value="female">
                                <label class="inputSadow w-12 text-sm font-medium flex justify-center items-center px-2 py-3 bg-white rounded-xl peer-checked/female:border box-border peer-checked/female:border-rose-500 peer-checked/female:bg-hourColor  peer-checked/female:shadow-hourChecked duration-300" for="female">خانم</label>
                                <input v-model="gender" name="gender" class="hidden peer/male" id="male" type="radio" value="male">
                                <label class="inputSadow w-12 text-sm font-medium flex justify-center items-center px-2 py-3 bg-white rounded-xl peer-checked/male:border box-border peer-checked/male:border-rose-500 peer-checked/male:bg-hourColor peer-checked/male:shadow-hourChecked duration-300" for="male" >اقا</label>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2">
                            <p class="text-sm text-gray-600 font-medium">عکس خود را بارگذاری کنید*</p>
                            <div class="flex justify-center items-center py-2">
                                <label :class="[image!=null?'border-rose-500 bg-hourColor shadow-hourChecked':'inputSadow ']" for="image" class="px-2 py-3 rounded-xl border font-medium text-sm text-gray-800 text-left cursor-pointer">{{ image==null?'برای بارگذاری عکس کلیک کنید ':image.name }}</label>
                                <input type="file" ref="file" accept=".png,.jpeg" @change="handleImage" class="hidden" id="image">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>
        <div class="flex flex-col gap-3 w-full max-w-96">
        <button type="button" @click="authorisationStore.update(personalDetail.fName,personalDetail.lName,image,personalDetail.birth,gender,nationalId)" class="flex justify-center items-center gap-2 w-full max-w-96 z-10 py-3 font-medium rounded-lg bg-rose-500">
            <span  class="text-sm text-white">تایید</span>
        </button>
    </div>
</section>
</template>

<script setup>
import datePicker from 'vue3-persian-datetime-picker'
import { useRouter } from 'vue-router';
import { reactive,ref,watch,onBeforeMount } from 'vue'
import backSvg from '@/components/backSvg1.vue'
import logoSvg from '@/components/logoSvg.vue'
import { useDataStore } from '@/stores/data'
import { useAuthorisationStore } from '@/stores/authorisation'
import { storeToRefs } from 'pinia'


const authorisationStore=useAuthorisationStore()

const dataStore=useDataStore()
const {getData}=storeToRefs(dataStore)
const router=useRouter()
let image=ref(null)
const file=ref()

const handleImage=()=>{
    image.value=file.value.files[0]
}

let nationalId=ref(null)
let gender=ref(null)

const personalDetail=reactive({
    birth:'',
    fName:'',
    lName:''
})


const props=defineProps(['data'])

onBeforeMount(()=>{
    if(props.data!=null){
        personalDetail.birth=props.data.birth_date
        personalDetail.fName=props.data.first_name
        personalDetail.lName=props.data.last_name
        nationalId.value=props.data.national_code
        gender.value=props.data.gender
    }
})

watch(getData,()=>{
    if(props.data!=null){
        personalDetail.birth=props.data.birth_date
        personalDetail.fName=props.data.first_name
        personalDetail.lName=props.data.last_name
        nationalId.value=props.data.national_code
        gender.value=props.data.gender
    }

})



</script>


<style>
.inputSadow{
    box-shadow: 0px 4px 18px 0px #0000001F;
}
</style>@/stores/authorization