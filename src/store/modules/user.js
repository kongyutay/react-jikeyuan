import { createSlice } from "@reduxjs/toolkit";
import { removeToken, request } from '@/utils';
import {setToken as _setToken, getToken} from '@/utils'
import { loginAPI, getProfileAPI } from '@/apis/user'

const userStore = createSlice({
    name: "user",
    // 数据状态
    initialState: {
        token: getToken() || '',
        userInfo: {}
    },
    //同步修改方法
    reducers: {
        setToken(state, action) {
            //保存token进入store
            state.token = action.payload;
            //保存token入localstorage
            _setToken(action.payload)
        },
        setUserInfo(state, action){
            state.userInfo = action.payload;
        },
        clearUserInfo(state){
            state.token = ''
            state.userInfo = {}
            removeToken()
        }
    }
})

//结构actionCreater
const { setToken, setUserInfo, clearUserInfo } = userStore.actions

//获取reducer函数
const userReducer = userStore.reducer

//异步方法 完成登录获取token
const fetchLogin = (loginForm)=>{
    return async (dispatch)=>{
        //发送异步请求
        const res = await loginAPI(loginForm)
        //提交同步方法
        dispatch(setToken(res.data.token))
    }
}

//获取个人用户信息异步方法
const fetchUserInfo = ()=>{
    return async (dispatch)=>{
        //获取信息的接口调用
        const res = await getProfileAPI()
        dispatch(setUserInfo(res.data))
    }
}

export { fetchLogin, fetchUserInfo, setToken, clearUserInfo }
export default userReducer