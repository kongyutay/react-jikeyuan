import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
    name: "user",
    // 数据状态
    initialState: {
        token: ''
    },
    //同步修改方法
    reducers: {
        setToken(state, action) {
            state.token = action.payload
        }
    }
})

//结构actionCreater
const { setToken } = userStore.actions

//获取reducer函数
const userReducer = userStore.reducer

export {setToken}
export default userReducer