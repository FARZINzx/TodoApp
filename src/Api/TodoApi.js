import axios from "axios";

const todoApi = axios.create({
    baseURL : `https://todoapp-d6638-default-rtdb.firebaseio.com`,
 })

todoApi.interceptors.request.use(function (config){
    console.log('config')
    return config;
},function (error){
    return Promise.reject(error)
})  

todoApi.interceptors.response.use(function (response){
    return response
    } , function (error){
   return Promise.reject(error)
})

export default todoApi