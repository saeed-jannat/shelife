<template>
    <Suspense>
      <template #default>
        <profile :data="getData"/>
      </template>
      <template #fallback>
        <lodaer/>
      </template>
    </Suspense>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { useDataStore } from '@/stores/data'
import { storeToRefs } from 'pinia';
const profile = defineAsyncComponent(() => import('@/components/profileComponent.vue'))
const lodaer = defineAsyncComponent(() => import('@/components/lodear.vue'))

const dataStore=useDataStore()
const {getData}=storeToRefs(dataStore)
if(getData.value==null)dataStore.profile()


</script>

<style >

</style>