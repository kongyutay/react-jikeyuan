//封装和文章相关的接口函数
import {request} from "@/utils"

//1. 登录频道列表请求
export function getChannelAPI(){
    //写完之后要返回出去和导出
    return request({
        url: '/channels',
        method: 'GET'
    })
}

//提交文章表单
export function createArticleAPI(data){
    //写完之后要返回出去和导出
    return request({
        url: '/mp/articles?draft=false',
        method: 'POST',
        data
    })
}

//更新文章表单
export function updateArticleAPI(data){
    //写完之后要返回出去和导出
    return request({
        url: `/mp/articles/${data.id}?draft=false`,
        method: 'PUT',
        data
    })
}

//获取文章列表
export function getArticleListAPI(data){
    return request({
        url: '/mp/articles',
        method: 'GET',
        data
    })
}

//删除文章
export function delArticleListAPI(id){
    return request({
        url: `/mp/articles/${id}`,
        method: 'DELETE',
        
    })
}

//获取文章详情
export function getArticleById(id){
    return request({
        url: `/mp/articles/${id}`        
    })
}