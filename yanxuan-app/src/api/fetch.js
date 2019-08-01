import axios from 'axios';
import { Toast } from 'vant';
import Vue from 'vue';

Vue.use(Toast);
// import { resolve } from 'url';
// import { reject } from 'q';

export function fetchGet(url,params = {}) {
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params:params,
            headers: {
    
            },
            // baseURL:'http://localhost:8080'
        }).then(response=>{
            if(response.status == 200 && response.data.status == 0){
                //后台数据可以使用
                resolve(response.data.data);
            }else {
                console.log(response)
                //后台数据无效
                Toast({
                    message:'请求错误',
                    duration:1000
                });
            }
        }).catch(error=>{
            Toast('请求失败');
        })
    })
}

export function fetchPost(url,params={}) {
    console.log(params)
    return new Promise((resolve,reject) => {
        axios.post(url,params).then(response=>{
            if(response.status == 200 && response.data.status == 0){
                //后台数据可以使用
                resolve(response.data.data);
            }else {
                //后台数据无效
                Toast({
                    message:'请求错误',
                    duration:1000
                });
                console.log(response)
            }
        }).catch(error=>{
            Toast('请求失败');
        })
    })
}