<template>
  <label ref="addressCard" @click="deleted==true?'':emits('address',data.id)" :class="[deleted==true?'bg-rose-700 shadow-xl bounce':'']" class="flex justify-between group border-2 border-rose-500 py-3 px-4 w-full rounded-xl items-center duration-300" :for="'address' + index" >
    <div class="flex gap-3 items-center">
      <input :name="[deleted==true?'':'address']" :id="`address${index}`"
       :class="[deleted == true?'scale-x-0 hidden':'input border-rose-500']" 
       class='inputaddress appearance-none z-50 w-[13px] h-[13px] duration-300 rounded-[2px] border border-rose-500 scale-125'
        type="radio"
      />
      <p :class="[deleted==true?'text-white':'']" class="text-sm font-medium">{{ data.address }}</p>
    </div>
    <button type="button" @click="emits('delete',data.id)" :class="{'hidden':deleted==false}" class="h-4 flex items-center justify-center">
      <delete-svg/>
    </button>
  </label>
</template>

<script setup>
import {watch,ref} from 'vue'
import deleteSvg from '@/components/deleteSvg.vue'
const props = defineProps(["data","index",'deleted']);
const emits=defineEmits(['address','delete'])

</script>


<style scoped>
.input:checked{
    background-color: rgb(244 63 94);
}

.delete:checked{
    background-color: #fff;
}

.input::before{
    content: '✓';
    color: #fff !important;
    height: 12px;
    display: block;
    scale: 0.6;
    transform: translateY(-5.5px) translateX(0.5px);
    font-weight: 700;
}

.delete::before{
    content: '✓';
    color: rgb(190 18 60) !important;
    height: 12px;
    display: block;
    scale: 0.8;
    transform: translateY(-7.5px) translateX(0.5px);
    font-weight: 900;
}
</style>
