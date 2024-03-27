import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

import { useRouter } from 'vue-router'

export const useDataStore = defineStore('Data', () => {
    const router=useRouter()


    const serviceCard=ref([
        {
            title:'درخواست کیت',
            // image: '',
            summary: 'ثبت سفارش کیت آزمایشگاهی',
            path:'request-kit',
        },
        {
            title:'ارسال نمونه',
            // image: '',
            summary: 'ارسال نمونه به آزمایشگاه باکتوژن',
            path: 'send-kit'
        },
        {
            title:'وبلاگ',
            // image: '',
            summary: 'مقالات و مطالب آموزشی',
            path: 'weblog'
        },
        {
            title: 'مشاوره',
            // image: '',
            summary: 'درخواست مشاوره با متخصصین تیم ما',
            path: 'consultation-request'
        }
    ])

    const educationCardData=ref([
        {
            image: '',
            title: 'مراحل استفاده از کیت HPV',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون',
            category: 'آموزشی',
            id:1,
            path: 'weblogDetils'
        },
        {
            image: '',
            title: 'مراحل استفاده از کیت HPV',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون',
            category: 'آموزشی',
            id:1,
            path: 'weblogDetils'
        },
        {
            image: '',
            title: 'مراحل استفاده از کیت HPV',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون',
            category: 'آموزشی',
            id:1,
            path: 'weblogDetils'
        },
        {
            image: '',
            title: 'مراحل استفاده از کیت HPV',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون',
            category: 'آموزشی',
            id:1,
            path: 'weblogDetils'
        }
    ])

    const weblogData=ref([
        {
            image: '',
            title: 'مراحل استفاده از کیت HPV',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون',
            category: 'آموزشی',
            id:1,
            path: 'weblogDetils'
        },
        {
            image: '',
            title: 'مراحل استفاده از کیت HPV',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون',
            category: 'آموزشی',
            id:1,
            path: 'weblogDetils'
        },
        {
            image: '',
            title: 'مراحل استفاده از کیت HPV',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون',
            category: 'آموزشی',
            id:1,
            path: 'weblogDetils'
        },
        {
            image: '',
            title: 'مراحل استفاده از کیت HPV',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون',
            category: 'آموزشی',
            id:1,
            path: 'weblogDetils'
        },
        {
            image: '',
            title: 'مراحل استفاده از کیت HPV',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون',
            category: 'آموزشی',
            id:1,
            path: 'weblogDetils'
        },
        {
            image: '',
            title: 'مراحل استفاده از کیت HPV',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون',
            category: 'آموزشی',
            id:1,
            path: 'weblogDetils'
        },
        {
            image: '',
            title: 'مراحل استفاده از کیت HPV',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون',
            category: 'آموزشی',
            id:1,
            path: 'weblogDetils'
        },
        {
            image: '',
            title: 'مراحل استفاده از کیت HPV',
            summary: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون',
            category: 'آموزشی',
            id:1,
            path: 'weblogDetils'
        },
    ])
    
    const experimentsData=ref([])


    const GetExperiments=()=>{
        axios.get('/v1/user/experiments')
        .then(res=>{
            experimentsData.value=res.data.data.experiments.data
        })
        .catch(err=>{
            experimentsData.value=2
        })
    }
    const getExperimentsData=computed(()=>experimentsData.value)

    const termsCondition=ref([
        '۱- شرکت: شرکت ایده گزین ارتباطات روماک که نسبت به ارائه خدمات اسنپ اقدام می‌کند.','۱- شرکت: شرکت ایده گزین ارتباطات روماک که نسبت به ارائه خدمات اسنپ اقدام می‌کند.',
        '۱- شرکت: شرکت ایده گزین ارتباطات روماک که نسبت به ارائه خدمات اسنپ اقدام می‌کند.','۱- طرف تجاری: اشخاص حقیقی و حقوقی که برابر قرارداد خصوصی از طریق ایجاد درگاه، حق بهره‌برداری موقت از اپلیکیشن را با نام تجاری خود یا مشترک با اسنپ دارند',
        '۱- حساب کاربری: حسابی است که اشخاص برای استفاده از خدمات اسنپ یا سوپر اپ اسنپ در اپلیکیشن ایجاد کرده‌اند.','۱- کد تخفیف: کد صادر و تامین اعتبار شده توسط اسنپ که برابر آن کاربر مسافر می تواند با وارد کردن در اپلیکیشن از پرداخت کل یا قسمتی از هزینه سفر معاف می شود. ',
        '۱- مدیر پنل سازمانی: شخص حقیقی یا حقوقی که حق استفاده از پنل سازمانی اسنپ، جهت انجام سفر را دارد.','۱- موجودی: مبلغی است که کاربران در حساب کاربری خود به منظور استفاده از خدمات اسنپ یا سوپر اپ اسنپ دارند. این مبلغ به صورت پرداخت از طریق سامانۀ بانکی و کارتهای عضو شبکۀ شتاب و یا با استفاده از اسنپ کارت یا کیف پول طرف های تجاری طبق شرایط و قوانین حاضر منظور و محاسبه خواهد شد.'
    ])
    const landingNav = ref([
        {
            title: 'قوانین و شیوه نامه',
            path: 'terms-and-conditions'
        },
        {
            title: 'وبلاگ',
            path: 'weblog'
        },
        {
            title: 'درباره ما',
            path: 'about-us'
        },
        {
            title: 'تماس با ما',
            path: 'contact-us'
        }

    ])

    const addresss=ref(null)
    const getAddress=computed(()=>addresss.value)
    const Address=()=>{
        axios.get('/v1/user/addresses')
        .then(res=>{
            addresss.value=res.data.data.addresses.data
        })
        .catch(err=>{
            console.error(err)
        })
    }

    const deleteAddress=(id)=>{
        axios.delete(`/v1/user/addresses/${id}`)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const addAddresses=(address,postal_code,city)=>{
        let formData=new FormData()
        formData.append('city',city)
        formData.append('first_name',getData.value.first_name)
        formData.append('last_name',getData.value.last_name)
        formData.append('address',address)
        formData.append('postal_code',postal_code)
        formData.append('mobile',getData.value.mobile)
        axios.post('/v1/user/addresses',formData)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }



    let provinces=ref(null)
    const getprovinces=computed(()=>provinces.value)
    const getProvinces=()=>{
        axios.get('/v1/front/area')
        .then(res=>{
            provinces.value=res.data.data.provinces
        }).catch(err=>{
            console.error(err)
        })
    }


    const footerList=ref([
        {
            title:'بلاگ',
            path: 'weblog'
        },
        {
            title:'شرایط و قوانین',
            path: 'terms-and-conditions'
        },
        {
            title:'سوالات متداول',
            path: 'home'
        },
        {
            title:'درباره ما',
            path: 'about-us'
        },
        {
            title:'تماس با ما',
            path: 'contact-us'
        }])

    let telNumber=ref(null)
    const getTelNumber=computed(()=>telNumber.value)
    let personalDetail=ref(null)
    const getPersonalDetail=computed(()=>personalDetail.value)

    const experiments=ref()
    const getExperiments=computed(()=>experiments.value)

    const getProduct=()=>{
        axios.get('/v1/front/products')
        .then(res=>{
            experiments.value=res.data.data.products.data
        })
        .catch(err=>{
            experiments.value=2
            console.log(err);
        })
    }


    const data=ref(null)
    const getData=computed(()=>data.value)
    
    const profile=()=>{
      axios.get('/v1/user/profile')
      .then(item=>{
        data.value=item.data.data.user
      })
      .catch(err=>{
        router.push('/register-login')
      })
    }


    let categoryList=ref(null)

    const getCategoryList=computed(()=>categoryList.value)
    const getCategory=()=>{
        axios.get('/v1/front/post-categories')
        .then(res=>{
            
            categoryList.value=res.data.data.postCategories
        })
        .catch(err=>{
            console.log(err);
        })
    }


    let blogs=ref(null)
    const getBlogs=computed(()=>blogs.value)

    const GetBlogs=()=>{
        axios.get('/v1/front/posts')
        .then(res=>{
           
            blogs.value=res.data.data.posts.data
        })
        .catch(err=>{
            console.log(err)
        })
    }



  return { GetBlogs,getBlogs,getProduct,serviceCard,educationCardData,footerList,weblogData,GetExperiments,getExperimentsData,getExperiments,telNumber,getTelNumber,getPersonalDetail,personalDetail,termsCondition,landingNav,Address,deleteAddress,addAddresses,getProvinces,getprovinces,getAddress,addresss,getData,data,profile,getCategory,getCategoryList }
})