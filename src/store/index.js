// 组合redux子模块和到处store实例
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user";

configureStore({
    reducer: {
        user:userReducer
    }
})