import axios from 'axios'

let AxiosService = axios.create({
    // baseURL:"http://localhost:8000/",
    baseURL:"https://password-rest-flow-l2fh.onrender.com/",
    headers:{
        "Content-Type":"application/json",
    }
})
AxiosService.interceptors.request.use((config)=>{
   
    let token = sessionStorage.getItem("token")
    if(config.authenticate && token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},(error)=>{
    return Promise.reject(error)
})



export default AxiosService