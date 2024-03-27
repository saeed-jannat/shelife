import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { Cookie,doLogin } from '../library/tools'
import { useRouter } from 'vue-router' 
import { useDataStore } from './data.js'
import Swal from 'sweetalert2'

export const useAuthorisationStore = defineStore('Authorisation', () => {
  const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
  toast.onmouseenter = Swal.stopTimer;
  toast.onmouseleave = Swal.resumeTimer;
  }
  });
  const dataStore=useDataStore()
  const router=useRouter()
  const statusAuthorisation=ref(Cookie('token'))
  let registerCode=ref('1111')
  const getStatusAuthorisation=computed(()=>statusAuthorisation.value)
  const registered=ref(false)
  const getRegistered=computed(()=>registered.value)


  let tel=ref(null)
  const registerLogin=(telNumber=tel.value)=>{
    let formdata=new FormData()
    formdata.append('mobile',telNumber)
    tel.value=telNumber
    axios.post('/v1/user/register-login',formdata)
    .then((item)=>{
      statusOfregister.value=item.data.data.status
    })
    .catch((err)=>{
      if(err.response.data.message=="Validation errors:"){
        Toast.fire({
            title: err.response.data.errors[Object.keys(err.response.data.errors)[0]][0]
        })
      }else{
          Toast.fire({
              title: err.response.data.message
          })
      }
    })
  }
  let statusOfregister=ref(null)
  const getStatusOfregister=computed(()=>statusOfregister.value)

  let verified=ref(false)
  
  const verify=(sms_token)=>{
    let formdata=new FormData()
    formdata.append('sms_token',sms_token)
    formdata.append('type',getStatusOfregister.value)
    formdata.append('mobile',tel.value)
    axios.post('/v1/user/verify',formdata)
    .then(item=>{
      verified.value=item.data.success
    })
    .catch(err=>{
      if(err.response.data.message=="Validation errors:"){
        Toast.fire({
            title: err.response.data.errors[Object.keys(err.response.data.errors)[0]][0]
        })
      }else{
          Toast.fire({
              title: err.response.data.message
          })
      }
      verified.value=false
    })
  }
  const getVerified=computed(()=>verified.value)

  let pageRoute=ref([])

  const register=(fName,lName)=>{
      let formdata=new FormData()
      formdata.append('first_name',fName)
      formdata.append('last_name',lName)
      formdata.append('mobile',tel.value)
      axios.post('/v1/user/register',formdata)
      .then(item=>{
        doLogin(item.data.data.data.access_token,30)
        if(item.data.data.data.access_token){
          axios.defaults.headers.common['Authorization'] = `Bearer ${Cookie('token')}`
          pageRoute.value.length!=1?router.go(-1):router.push('/')
        }
      })
      .catch(err=>{
        if(err.response.data.message=="Validation errors:"){
          Toast.fire({
              title: err.response.data.errors[Object.keys(err.response.data.errors)[0]][0]
          })
        }else{
            Toast.fire({
                title: err.response.data.message
            })
        }
      })
  }

  var loged=ref(false)
  const login=(authCode)=>{
    let formdata=new FormData()
    formdata.append('mobile',tel.value)
    formdata.append('auth_code',authCode)
    axios.post('/v1/user/login_with_code',formdata)
    .then(item=>{
      doLogin(item.data.data.data.access_token,30)
      loged.value=item.data.success
      axios.defaults.headers.common['Authorization'] = `Bearer ${Cookie('token')}`
      pageRoute.value!='register-login'?router.go(-1):router.push('/')
    })
    .catch(err=>{
      if(err.response.data.message=="Validation errors:"){
        Toast.fire({
            title: err.response.data.errors[Object.keys(err.response.data.errors)[0]][0]
        })
      }else{
          Toast.fire({
              title: err.response.data.message
          })
      }
    })
  }


  const update=(fName,lName,image,birth,gender,nationalCode)=>{
    var formData=new FormData()
    formData.append('_method','PATCH')
    if(fName!='')formData.append('first_name',fName)
    if(lName!='')formData.append('last_name',lName)
    if(gender!=null)formData.append('gender',gender)
    if(nationalCode!='')formData.append('national_code',nationalCode)
    if(image!=null)formData.append('profile_image',image)
    formData.append('birth_date',birth)
    axios.post('/v1/user/profile',formData)
    .then(item=>{
      dataStore.data=item.data.data.user
      Toast.fire({
        title: item.data.message
      })
      // if(item.status==200)dataStore.profile()
    })
    .catch(err=>{
      if(err.response.data.message=="Validation errors:"){
        Toast.fire({
            title: err.response.data.errors[Object.keys(err.response.data.errors)[0]][0]
        })
      }else{
          Toast.fire({
              title: err.response.data.message
          })
      }
    })
  }

  const logout=()=>{
    axios.post('/v1/user/logout').then(res=>{
      doLogin()
      router.push('/')
    })
    .carch(err=>{
      if(err.response.data.message=="Validation errors:"){
        Toast.fire({
            title: err.response.data.errors[Object.keys(err.response.data.errors)[0]][0]
        })
      }else{
          Toast.fire({
              title: err.response.data.message
          })
      }
    })
  }



  return { pageRoute,statusAuthorisation,getStatusAuthorisation,registerCode,registered,getRegistered,registerLogin,getStatusOfregister,register,login,logout,verify,getVerified,update}
})
