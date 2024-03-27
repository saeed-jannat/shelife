<template>
  <section class="flex relative flex-col pt-8 sm:pt-12 lg:pt-16">
    <div
      class="flex justify-between items-center px-6 md:px-10 xl:px-16 2xl:px-28 sm:pb-4 xl:pb-6"
    >
      <div class="flex gap-4 2xl:gap-8 items-center">
        <figure
          class="flex justify-center items-center w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 rounded-full"
        >
          <img
            class="w-[4.5rem] h-[4.5rem] lg:w-[5.4rem] lg:h-[5.4rem] xl:w-24 xl:h-24 2xl:w-[7.3rem] 2xl:h-[7.3rem] rounded-full bg-gray-500"
            v-if="data"
            :src="data.media_showcase.user_profile[0].original_url"
            :alt="data.media_showcase.user_profile[0].id"
          />
          <div 
            class="loading w-[4.5rem] h-[4.5rem] lg:w-[5.4rem] lg:h-[5.4rem] xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 rounded-full bg-gray-500 relative overflow-hidden after:absolute after:bg-[#c7c7c7] after:blur-[6px] after:w-1/3 after:h-[150%] after:rotate-[19deg] after:right-[-50%] after:top-[-20%]"
            v-else
          ></div>
        </figure>
        <div
          :class="[data != true ? 'gap-1 2xl:gap-2' : '2xl:gap-3']"
          class="flex flex-col"
        >
          <p
            class="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium"
            v-if="data"
          >
            {{ data.first_name + " " + data.last_name }}
          </p>
          <p
            class="loading text-sm sm:text-base lg:text-lg xl:text-xl rounded-md text-[#999da5] bg-[#999da5] relative overflow-hidden after:absolute after:bg-[#c7c7c7] after:blur-[6px] after:w-1/3 after:h-[150%] after:rotate-[19deg] after:right-[-20%] after:top-[-20%]"
            v-else
          >
            سعید جنت آبادی
          </p>
          <p
            class="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-400"
            v-if="data"
          >
            {{ data.mobile }}
          </p>
          <p
            class="loading text-10 sm:text-xs lg:text-sm xl:text-base rounded-md text-[#999da5] bg-[#999da5] relative overflow-hidden after:absolute after:bg-[#c7c7c7] after:blur-[6px] after:w-1/3 after:h-[150%] after:rotate-[19deg] after:right-[-20%] after:top-[-20%]"
            v-else
          >
            09300352486
          </p>
        </div>
      </div>
      <button class="scale-[0.87] sm:scale-100" @click="router.go(-1)">
        <backSvg/>
      </button>
    </div>
    <button
      @click="router.push('/edit-profile')"
      class="w-full border-b border-[#ffa4a173] py-4 md:py-7 lg:py-6 flex justify-start px-6 md:px-10 xl:px-16 2xl:px-28"
    >
      <div class="flex items-center gap-2 2xl:gap-3">
        <profile-svg/>
        <span class="text-sm md:text-base xl:text-[17px] font-medium"
          >پروفایل کاربری</span
        >
      </div>
    </button>
    <button
      @click="router.push('/contact-us')"
      class="w-full border-b border-[#ffa4a173] py-4 md:py-7 lg:py-6 flex justify-start px-6 md:px-10 xl:px-16 2xl:px-28"
    >
      <div class="flex items-center gap-2 2xl:gap-3">
        <contact-svg/>
        <span class="text-sm md:text-base xl:text-[17px] font-medium"
          >راه های ارتباطی</span
        >
      </div>
    </button>
    <button
      @click="router.push('/about-us')"
      class="w-full border-b border-[#ffa4a173] py-4 md:py-7 lg:py-6 flex justify-start px-6 md:px-10 xl:px-16 2xl:px-28"
    >
      <div class="flex items-center gap-2 2xl:gap-3">
        <aboutShelife-svg/>
        <span class="text-sm md:text-base xl:text-[17px] font-medium"
          >درباره شی لایف</span
        >
      </div>
    </button>
    <button
    id="history"
    @click="homeStore.historyShow=!homeStore.historyShow"
      class="w-full border-b border-[#ffa4a173] py-4 md:py-7 lg:py-6 flex justify-start px-6 md:px-10 xl:px-16 2xl:px-28"
    >
      <div class="flex items-center gap-2 2xl:gap-3">
        <exprimenthistory-svg/>
        <span class="text-sm md:text-base xl:text-[17px] font-medium"
          >تاریخچه آزمایشات</span
        >
      </div>
    </button>
    <button
      @click="router.push('/terms-and-conditions')"
      class="w-full border-b border-[#ffa4a173] py-4 md:py-7 lg:py-6 flex justify-start px-6 md:px-10 xl:px-16 2xl:px-28"
    >
      <div class="flex items-center gap-2 2xl:gap-3">
        <termsandcondition-svg/>
        <span class="text-sm md:text-base xl:text-[17px] font-medium"
          >قوانین و شرایط</span
        >
      </div>
    </button>
    <button
      @click="router.push('/consultation-request')"
      class="w-full border-b border-[#ffa4a173] border-opa py-4 md:py-7 lg:py-6 flex justify-start px-6 md:px-10 xl:px-16 2xl:px-28"
    >
      <div class="flex items-center gap-2 2xl:gap-3">
        <support-svg/>
        <span class="text-sm md:text-base xl:text-[17px] font-medium"
          >پشتیبانی</span
        >
      </div>
    </button>
    <button
      @click="logoutModal=true"
      class="w-full border-b border-[#ffa4a173] border-opa py-4 md:py-7 lg:py-6 flex justify-start px-5 md:px-10 xl:px-16 2xl:px-28"
    >
      <div class="flex items-center gap-2 2xl:gap-3">
        <logout-svg/>
        <span class="text-sm md:text-base xl:text-[17px] font-medium"
          >خارج شدن از حساب</span
        >
      </div>
    </button>
    <transition>
      <div v-if="logoutModal" @click.self="logoutModal=false" class="flex items-center justify-center absolute w-full h-screen top-0 backdrop-blur-[4px] z-[1000] flex-col p-8">
        <div class="max-w-60 sm:max-w-80 w-full flex gap-4 flex-col items-center justify-center bg-white rounded-xl border p-8 shadow-2xl">
          <p class="text-xs sm:text-base text-center">آیا میخواهید از حساب کاربری خود خارج شوید؟</p>
          <div class="flex items-center justify-center gap-4 sm:gap-8  w-full">
            <button class="px-3 flex items-center rounded-lg bg-red-600 text-sm sm:text-base text-white py-0.5" @click="authorisation.logout"><span>بله </span>
              
            </button>
            <button class="px-3 flex items-center rounded-lg bg-green-600 text-sm sm:text-base text-white py-0.5" @click="logoutModal=false">خیر </button>
          </div>
        </div>
        
      </div>
    </transition>

  </section>
</template>

<script setup>
import { useAuthorisationStore } from '@/stores/authorisation'
import { useHomeStore } from '@/stores/home';
import { useRouter } from "vue-router";
import logoutSvg from "./logOutSvg.vue";
import backSvg from "./backSvg2.vue";
import supportSvg from './supportSvg.vue'
import termsandconditionSvg from './termsandconditionSvg.vue';
import exprimenthistorySvg from './exprimenthistorySvg.vue'
import aboutShelifeSvg from './aboutShelifeSvg.vue'
import contactSvg from './contactSvg.vue'
import profileSvg from './profileSvg.vue'
import { ref } from 'vue';

const homeStore=useHomeStore()
const authorisation=useAuthorisationStore()
const router = useRouter();
const props = defineProps(["data"]);
let logoutModal=ref(false)
</script>

<style scoped>
figure {
  background: linear-gradient(
    292.1deg,
    #2a70d9 25.25%,
    #d80037 55.65%,
    #ff7a00 91.72%
  );
}

.v-enter-from, .v-leave-to{
  opacity: 0;
}

.v-enter-to, .v-leave-from{
  opacity: 1;
}

.v-enter-active, .v-leave-active{
  transition: all .3s;
}

</style>
@/stores/authorization