import axios from "axios";
// import { clearCookie } from "./Auth";

const axiosSecure = axios.create({
    baseURL : 'https://social-media-app-53zv.onrender.com/api/v1/',
    withCredentials: true 
})


//interceptor
// axiosSecure.interceptors.response.use(response=>response, async(error)=>
// {
//     console.log('error in the interceptor')
//     if(error.response && 
//         (error.response.status === 401 || error.response.status === 403))
//         {
//             await clearCookie();
//             window.location.replace('/login');
//         }

//         return Promise.reject(error)
// })


export default axiosSecure