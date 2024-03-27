<template>
    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_493_1227)">
                        <rect x="2.03809" y="0.230713" width="38.7692" height="38.7692" rx="9.65" fill="white"/>
                        <rect  x="2.53809" y="0.730713" width="37.7692" height="37.7692" rx="9.15" stroke="url(#paint0_linear_493_1227)"/>
                        <path   d="M14.333 22.4044H13.8171H14.333ZM16.6104 25.0696L16.5396 25.5806L16.6104 25.0696ZM25.0991 25.0696L25.1699 25.5806L25.0991 25.0696ZM26.9878 20.9895L26.5447 21.2537L26.9878 20.9895ZM14.7217 20.9894L14.2787 20.7252L14.7217 20.9894ZM16.2982 16.7392C16.2982 14.2227 18.3383 12.1826 20.8548 12.1826V11.1509C17.7685 11.1509 15.2665 13.6529 15.2665 16.7392H16.2982ZM16.2982 18.4829V16.7392H15.2665V18.4829H16.2982ZM14.8489 22.4044C14.8489 21.9829 14.9642 21.59 15.1648 21.2537L14.2787 20.7252C13.9855 21.2169 13.8171 21.7917 13.8171 22.4044H14.8489ZM16.6813 24.5586C15.6251 24.4122 14.8489 23.4947 14.8489 22.4044H13.8171C13.8171 23.9855 14.9496 25.3601 16.5396 25.5806L16.6813 24.5586ZM20.8547 24.9192C19.6035 24.9192 17.991 24.7402 16.6813 24.5586L16.5396 25.5806C17.8577 25.7634 19.5287 25.9509 20.8547 25.9509V24.9192ZM25.0282 24.5586C23.7185 24.7402 22.106 24.9192 20.8547 24.9192V25.9509C22.1808 25.9509 23.8518 25.7634 25.1699 25.5806L25.0282 24.5586ZM26.8606 22.4044C26.8606 23.4947 26.0844 24.4122 25.0282 24.5586L25.1699 25.5806C26.7599 25.3601 27.8924 23.9855 27.8924 22.4044H26.8606ZM26.5447 21.2537C26.7453 21.59 26.8606 21.9829 26.8606 22.4044H27.8924C27.8924 21.7918 27.7241 21.2169 27.4309 20.7252L26.5447 21.2537ZM25.4114 16.7392V18.4831H26.4432V16.7392H25.4114ZM20.8548 12.1826C23.3714 12.1826 25.4114 14.2227 25.4114 16.7392H26.4432C26.4432 13.6529 23.9412 11.1509 20.8548 11.1509V12.1826ZM27.4309 20.7252C27.1774 20.3002 26.9381 19.9454 26.743 19.5544C26.5546 19.177 26.4432 18.8296 26.4432 18.4831H25.4114C25.4114 19.0534 25.5954 19.5655 25.8198 20.0152C26.0375 20.4513 26.3285 20.8912 26.5447 21.2537L27.4309 20.7252ZM15.2665 18.4829C15.2665 18.8295 15.155 19.1768 14.9666 19.5543C14.7714 19.9453 14.5322 20.3001 14.2787 20.7252L15.1648 21.2537C15.381 20.8911 15.672 20.4512 15.8897 20.0151C16.1142 19.5654 16.2982 19.0533 16.2982 18.4829H15.2665Z" fill="#4D4D4D"/>
                        <path  d="M22.6665 27.3616C22.277 27.9473 21.6111 28.3334 20.8549 28.3334C20.0988 28.3334 19.4328 27.9473 19.0433 27.3616" stroke="#4D4D4D" stroke-width="1.03175" stroke-linecap="round"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_493_1227" x="0.0380859" y="0.230713" width="44.769" height="44.7693" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_493_1227"/>
                        <feOffset dx="1" dy="3"/>
                        <feGaussianBlur stdDeviation="2.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_493_1227"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_493_1227" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_493_1227" x1="40.8073" y1="3.41323" x2="0.925053" y2="4.90509" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF4F62"/>
                        <stop offset="0.5" stop-color="#FFAAA9"/>
                        <stop offset="1" stop-color="#FF4F62"/>
                        </linearGradient>
                        </defs>
                    </svg>
</template>

<script setup>
import { useDataStore } from '@/stores/data.js'
import { storeToRefs } from 'pinia';
const dataStore=useDataStore()
const { getExperimentsData }=storeToRefs(dataStore)
</script>

<style scoped>

</style>