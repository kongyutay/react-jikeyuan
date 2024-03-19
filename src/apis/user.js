//封装用户相关的所有请求
import {request} from "@/utils"

//1. 登录请求
export function loginAPI(formData){
    //写完之后要返回出去和导出
    return request({
        url: '/authorizations',
        method: 'POST',
        data: formData
    })
}

//2. 获取用户信息
export function getProfileAPI(formData){
    //写完之后要返回出去和导出
    return request({
        url: '/user/profile',
        method: 'GET'
    })
}