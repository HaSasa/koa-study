import fetch from '@/utils/fetch'
export function getJson(){
    return fetch({
        url:"/json",
        method:"get",
        headers:{
            mode:"no-cors",
            'Access-Control-Allow-Origin':'*'
        }
    })
}
