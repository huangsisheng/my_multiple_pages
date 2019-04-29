import { getToken } from './auth'
import { showLoading, showToast} from '@/utils/popup'
import axios from 'axios'

const http = axios.create({
    baseURL: '',
    timeout: 30000
  })
  

//添加请求拦截器
http.interceptors.request.use((request)=>{
    //给所有请求添加自定义header
    // request.headers["Authorization"] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaWNlbnNlIjoidmFzbXNfIiwidXNlcl9uYW1lIjoiMTE2NTkiLCJzY29wZSI6WyJzZXJ2ZXIiXSwiZXhwIjoxNTYwMDM2NDAyLCJ1c2VySWQiOjExNjU5LCJhdXRob3JpdGllcyI6WyJkZXYiLCJST0xFQURNSU4iLCJST0xFX1VTRVIiXSwianRpIjoiMTU4YTA2YzMtNWVmMi00ZjdhLWE3MzYtOTViNjM2YmQ0YTE4IiwiY2xpZW50X2lkIjoidmFzbXMiLCJ1c2VybmFtZSI6IjExNjU5In0.qpDcq1zv4Q7zr3r3zxbyoqZjG6EJvpumpY9fnZJ35PE'
    request.headers["Authorization"] = getToken()
      //打印出请求体
      //终止请求
      //var err=new Error("xxx")
      //err.request=request
      //return Promise.reject(new Error(""))

    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    showLoading('加载中...')
    return request
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
http.interceptors.response.use(
    (response) => {
        //只将请求结果的data字段返回
        showLoading()
        console.log(response)
        return response.data
    },
    (error) => {
        showLoading()
        if (error.response) {
            if (error.response.status === 401 || error.response.status === 403) {
                showToast(error.response.data.msg)
            }
            if (error.response.status === 500) {
                showToast('服务器异常，请稍后再试')
            }
            return Promise.reject(error)
        } else {
            return Promise.reject({
                response: {
                    data: {
                        code: -1000,
                        message: "连接超时，请稍后再试"
                    }
                }
            })
        }
        // console.log(response)
        // showLoading()
        // //发生网络错误后会走到这里
        // //return Promise.resolve("ssss")
    }
)

export default http