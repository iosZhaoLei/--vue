
import api from 'api'
import {fetchPost} from 'fetch'

export default {
    loginAction(context,params){
        fetchPost(api.LOGIN_URL,params).then(data=>{
            console.log(data)
            context.commit('setUserInfo',data)

            //保存用户登录状态
            localStorage.setItem('userToken',data.token);
            return 0;
        })
    }
}