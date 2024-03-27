<template>
    <article class="flex flex-col bg-white gap-2 sm:gap-6 border-2 border-rose-500 px-10 py-3 min-w-[330px] sm:min-w-150 md:min-w-[700px]">
        <div class="flex justify-between">
            <p class="text-xs 2xl:text-sm font-medium">تاریخ : <span class="font-normal">{{ receive_datetime }}</span></p>
            <p class="text-xs 2xl:text-sm font-medium">شناسه کیت : <span class="font-normal">{{ data.serial.serial }}</span></p>
        </div>
        <div class="flex justify-between">
            <p class="text-xs 2xl:text-sm font-medium">نتیجه : <span class="font-bold text-red-500">{{ data.result }}</span></p>
            <button class="flex justify-center items-center bg-red-500 text-white rounded-md py-1 2xl:py-2 px-3 z-50">
                <span class="text-8 sm:text-10 2xl:text-xs font-medium">دانلود نتیجه</span>
            </button>
        </div>
    </article>
</template>

<script setup>
import Moment from 'moment-jalali';
const props=defineProps(['data'])
const date=Moment(props.data.receive_datetime)
const receive_datetime=date.format('jYYYY/jMM/jDD')
</script>
