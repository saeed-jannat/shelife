<template>
    <section class="!font-medium px-8 py-9 pt-6 flex flex-col sm:grid sm:grid-cols-2  lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-8 lg:gap-y-6 lg:px-28 2xl:grid-cols-4 2xl:grid-rows-1 gap-4">
        <cards v-for="(card,i) in dataStore.serviceCard" :data="card" :index="i"/>
    </section>
</template>

<script setup>
import cards from './serviceCard.vue'
import { useDataStore } from '@/stores/data';
const dataStore=useDataStore()
</script>