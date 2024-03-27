<template>
    <Suspense>
      <template #default>
        <requestKit />
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
const requestKit = defineAsyncComponent(() => import('@/components/sendkitComponent.vue'))
const lodaer = defineAsyncComponent(() => import('@/components/lodear.vue'))

const dataStore=useDataStore()
const {getData}=storeToRefs(dataStore)
if(getData.value==null)dataStore.profile()

</script>
