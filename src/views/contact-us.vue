<template>
    <section class="flex justify-center sm:items-center h-screen overflow-hidden p-4 ">
        <div class="flex flex-col justify-start sm:justify-center min-w-full sm:min-w-150 lg:min-w-[800px] 2xl:min-w-[1000px] gap-6">
            <div class="flex justify-start">
                <button @click="router.go(-1)" class="scale-[0.87] sm:scale-100">
                    <back-svg/>
                </button>
            </div>
            <div class="flex justify-center">
                <logo-svg class="scale-[0.8] sm:scale-100"/>
            </div>
            <div class="w-full flex flex-col gap-2 sm:gap-4">
                <h4 class="flex items-center justify-start gap-1">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 10.2856C0 4.60504 4.60504 0 10.2856 0C15.9662 0 20.5713 4.60504 20.5713 10.2856C20.5713 15.9662 15.9662 20.5713 10.2856 20.5713H2.93876C1.31573 20.5713 0 19.2556 0 17.6325V10.2856Z" fill="#FF4F62"/>
                        <path d="M14.287 13.678C14.287 13.8543 14.2478 14.0355 14.1646 14.2119C14.0813 14.3882 13.9736 14.5547 13.8315 14.7115C13.5915 14.976 13.327 15.167 13.0283 15.2894C12.7344 15.4119 12.416 15.4755 12.0732 15.4755C11.5736 15.4755 11.0397 15.358 10.4764 15.118C9.91317 14.878 9.34991 14.5547 8.79154 14.1482C8.22828 13.7368 7.69441 13.2813 7.18502 12.7768C6.68054 12.2674 6.22503 11.7335 5.8185 11.1752C5.41687 10.6168 5.09361 10.0584 4.85851 9.50497C4.62341 8.9466 4.50586 8.41273 4.50586 7.90335C4.50586 7.57029 4.56463 7.25192 4.68218 6.95805C4.79973 6.65927 4.98586 6.38499 5.24545 6.14009C5.55891 5.83152 5.90177 5.67969 6.26421 5.67969C6.40136 5.67969 6.5385 5.70908 6.66095 5.76785C6.78829 5.82663 6.90095 5.91479 6.98911 6.04213L8.12543 7.64376C8.21359 7.7662 8.27726 7.87886 8.32134 7.98661C8.36543 8.08947 8.38991 8.19232 8.38991 8.28538C8.38991 8.40293 8.35563 8.52048 8.28706 8.63314C8.22339 8.74579 8.13032 8.86334 8.01277 8.98089L7.64053 9.36783C7.58665 9.4217 7.56217 9.48538 7.56217 9.56374C7.56217 9.60293 7.56706 9.63721 7.57686 9.67639C7.59155 9.71558 7.60625 9.74497 7.61604 9.77435C7.70421 9.93598 7.85604 10.1466 8.07155 10.4013C8.29196 10.656 8.52706 10.9156 8.78175 11.1752C9.04624 11.4348 9.30093 11.6747 9.56052 11.8952C9.81521 12.1107 10.0258 12.2576 10.1924 12.3458C10.2168 12.3556 10.2462 12.3703 10.2805 12.3849C10.3197 12.3996 10.3589 12.4045 10.403 12.4045C10.4862 12.4045 10.5499 12.3752 10.6038 12.3213L10.976 11.9539C11.0985 11.8315 11.216 11.7384 11.3287 11.6796C11.4413 11.6111 11.554 11.5768 11.6764 11.5768C11.7695 11.5768 11.8674 11.5964 11.9752 11.6405C12.083 11.6845 12.1956 11.7482 12.3181 11.8315L13.9393 12.9825C14.0666 13.0707 14.1548 13.1735 14.2087 13.296C14.2576 13.4184 14.287 13.5409 14.287 13.678Z" stroke="white" stroke-width="0.881627" stroke-miterlimit="10"/>
                        <path d="M12.5873 9.10881C12.5873 8.81493 12.3571 8.36432 12.0143 7.99698C11.7008 7.65902 11.2845 7.39453 10.873 7.39453" stroke="white" stroke-width="0.881627" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.3016 9.10824C14.3016 7.21274 12.7685 5.67969 10.873 5.67969" stroke="white" stroke-width="0.881627" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="font-semibold text-lg min-[500px]:text-xl lg:text-[22px] text-rose-500">اطلاعات تماس:</span>
                </h4>
                <div class="flex flex-col gap-2 px-4 w-full">
                    <div class="flex justify-between items-center gap-2 sm:gap-3 text-xs min-[500px]:text-[13px] lg:text-base font-medium text-[#515151]"><span>پشتیبانی:</span> <span class="w-full h-[1px] border-t-2 sm:border-t-4 border-dotted"></span> <span> {{homeStore.getSittings?homeStore.getSittings.filter(item=>item.label=='موبایل')[0].value?homeStore.getSittings.filter(item=>item.label=='موبایل')[0].value:'۰۲۱۳۵۸۱۳۹۵۴':'۰۲۱۳۵۸۱۳۹۵۴'}}</span></div>
                    <div class="flex justify-between items-center gap-2 sm:gap-3 text-xs min-[500px]:text-[13px] lg:text-base font-medium text-[#515151]"><span>تلفن:</span> <span class="w-full h-[1px] border-t-2 sm:border-t-4 border-dotted"></span> <span>{{homeStore.getSittings?homeStore.getSittings.filter(item=>item.label=='شماره تماس')[0].value?homeStore.getSittings.filter(item=>item.label=='شماره تماس')[0].value:'۰۲۱۳۵۸۱۳۹۵۴':'۰۲۱۳۵۸۱۳۹۵۴'}}</span></div>
                    <div class="flex justify-between items-center gap-2 sm:gap-3 text-xs min-[500px]:text-[13px] lg:text-base font-medium text-[#515151]"><span>فکس:</span> <span class="w-full h-[1px] border-t-2 sm:border-t-4 border-dotted"></span>  <span>{{homeStore.getSittings?homeStore.getSittings.filter(item=>item.label=='شماره تماس')[0].value?homeStore.getSittings.filter(item=>item.label=='شماره تماس')[0].value:'۰۲۱۳۵۸۱۳۹۵۴':'۰۲۱۳۵۸۱۳۹۵۴'}}</span></div>
                    <div class="flex justify-between items-center gap-2 sm:gap-3 text-xs min-[500px]:text-[13px] lg:text-base font-medium text-[#515151]"><span>ایمیل:</span> <span class="w-full h-[1px] border-t-2 sm:border-t-4 border-dotted"></span>  <span>{{homeStore.getSittings?homeStore.getSittings.filter(item=>item.label=='ایمیل')[0].value?homeStore.getSittings.filter(item=>item.label=='ایمیل')[0].value:'hireme@gmail.com':'hireme@gmail.com'}}</span></div>
                </div>
            </div>
            <div class="w-full flex flex-col gap-2 sm:gap-4 2xl:gap-6 pb-20 sm:pb-0">
                <h4 class="flex items-center justify-start gap-1">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 10.3621C0 4.63925 4.63925 0 10.3621 0C16.0849 0 20.7241 4.63925 20.7241 10.3621C20.7241 16.0849 16.0849 20.7241 10.3621 20.7241H2.96059C1.3255 20.7241 0 19.3986 0 17.7635V10.3621Z" fill="#FF4F62"/>
                        <path d="M10.0664 11.3642C10.9166 11.3642 11.6059 10.6749 11.6059 9.82466C11.6059 8.97442 10.9166 8.28516 10.0664 8.28516C9.21612 8.28516 8.52686 8.97442 8.52686 9.82466C8.52686 10.6749 9.21612 11.3642 10.0664 11.3642Z" stroke="white" stroke-width="0.888177"/>
                        <path d="M5.93131 8.92503C6.90337 4.65191 13.2341 4.65685 14.2012 8.92996C14.7687 11.4366 13.2094 13.5583 11.8426 14.8709C10.8508 15.8281 9.28171 15.8281 8.28498 14.8709C6.9231 13.5583 5.36386 11.4317 5.93131 8.92503Z" stroke="white" stroke-width="0.888177"/>
                    </svg>
                    <span class="font-bold text-lg min-[500px]:text-xl lg:text-[22px] text-rose-500">آدرس:</span>
                </h4>
                <p class="text-xs min-[500px]:text-[13px] lg:text-base font-medium text-[#515151] text-justify px-5">{{ homeStore.getSittings?homeStore.getSittings.filter(item=>item.label=='آدرس')[0].value?homeStore.getSittings.filter(item=>item.label=='آدرس')[0].value:'ویلا شهر ,روبروی ویلا 14 ,مجتمع گیتی':'ویلا شهر ,روبروی ویلا 14 ,مجتمع گیتی' }}</p>
                <div class="flex justify-center overflow-hidden px-5 pb-7">
                    <iframe class="w-full rounded-lg border shadow-lg h-44 sm:h-64" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199.53412312481694!2d54.45961594519587!3d36.853348442936316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f83373e20d991f1%3A0xd3b4c7a32c8fb40a!2z2YfbjNix2qnYp9mG2Kc!5e0!3m2!1sfa!2s!4v1708087322655!5m2!1sfa!2s" width="full" height="auto" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import backSvg from '@/components/backSvg1.vue'
import logoSvg from '@/components/logoSvg.vue'
import { useRouter } from 'vue-router';
import { useHomeStore } from '@/stores/home';
import { onBeforeMount } from 'vue';
const homeStore=useHomeStore()
const router=useRouter()
onBeforeMount(()=>{
    if(homeStore.getSittings==null) homeStore.getSetting()
})
</script>