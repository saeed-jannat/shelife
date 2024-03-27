import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const useHomeStore = defineStore('home', ()=>{
    let blogs=ref()
    const getBlogs=computed(()=>blogs.value)
    const setting=ref(null)
    const getSittings=computed(()=>setting.value)
    const getSetting=()=>{
        axios.get('/v1/front/home')
        .then(res=>{
            blogs.value=res.data.data.response.blogs
            setting.value=res.data.data.response.settings
        })
        .catch(err=>{
            console.log(err);
        })
    }
    let historyShow=ref(false)
    const getHistoryShow=computed(()=>historyShow.value)
    return {getSetting,getBlogs,getSittings,historyShow,getHistoryShow}
})