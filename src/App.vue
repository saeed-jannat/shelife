<template>
  <transition name='history'>
    <history class="z-[10000]" v-if="homeStore.getHistoryShow==true"/>
  </transition>
  <transition name='mainLoading'>
    <mainLoading v-if="showMainLoading" @fade="showMainLoading=false" class="!fixed h-screen overflow-hidden z-[10000]"/>
  </transition>
  <div :class="{'blur-[6px] pointer-events-none overflow-hidden h-screen':homeStore.getHistoryShow==true || showMainLoading}">
    <router-view></router-view>
  </div>
  
</template>

<script setup>
import history from '@/views/history.vue'
import { useHomeStore } from '@/stores/home';
import { useDataStore } from './stores/data';
import { storeToRefs } from 'pinia';
import { onBeforeMount, watch,ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthorisationStore } from './stores/authorisation';
import mainLoading from '@/components/register-login1.vue'
const authorisationStore=useAuthorisationStore()
const route=useRoute()
const dataStore=useDataStore()
const homeStore=useHomeStore()
onBeforeMount(()=>{
  if(dataStore.getExperimentsData=='')dataStore.GetExperiments()
})
const showMainLoading=ref(true)
let start;
let y;
window.ontouchstart=(e)=>{
  y=0
  y=e.changedTouches[0].clientY
  start=0
  if(route.name!='register-login'){
    if(e.changedTouches[0].clientY<window.screen.height/100*15)start=e.changedTouches[0].clientY
    if(e.changedTouches[0].clientY>window.screen.height-window.screen.height/100*15 && e.changedTouches[0].clientY<window.screen.height)start=e.changedTouches[0].clientY
  }
}
window.ontouchend=(e)=>{
  if(start>e.changedTouches[0].clientY && start-e.changedTouches[0].clientY>40)homeStore.historyShow=false
  else if(start<window.screen.height/100*15 && start<e.changedTouches[0].clientY&&y!=e.changedTouches[0].clientY && start>0 && e.changedTouches[0].clientY-start>40)homeStore.historyShow=true
}

window.onpopstate=()=>{
  if(homeStore.historyShow==true)homeStore.historyShow=false
}
watch(route,(n)=>{
  authorisationStore.pageRoute.push(n.name)
})
</script>


<style scoped>
.history-enter-from, .history-leave-to{
  transform: translateY(-100%);
}
.history-enter-to, .history-leave-from{
  transform: translateY(0%);
}

.history-enter-active, .history-leave-active{
  transition: all .3s;
}

.mainLoading-leave-from{
  opacity: 1;
}
.mainLoading-leave-to{
  opacity: 0;
}
.mainLoading-leave-active{
  transition: all 0.3s;
}
</style>
