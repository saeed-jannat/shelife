export const Cookie=(cookieName)=> {
    var res=false
    if(document.cookie!=''){
        var r=document.cookie.split('; ').map(item=>{
            return item.split('=')
        })
        r.forEach(item=>{
            var save=null
            item.forEach((item1,i)=>{
                if(item1==cookieName){
                    if(i==0){
                        save=item1
                    }
                }else if(i==1){
                    if(save==cookieName){
                        res=item1
                    }
                }
            })
        })
    }
    return res
}

export function doLogin(token=1,day=-1){
    var expires = new Date()
    expires.setTime(expires.getTime()+1000*day*24*60*60)
    document.cookie = `token=${token} ;expires=${expires}`
}