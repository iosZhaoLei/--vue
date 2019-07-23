

import {fetchGet} from 'fetch'
import api from 'api'
const state = {
    total:undefined,
    menuList:[]
}


const mutations = {
    setTotal(state,params) {
        state.total = params.total;
    },
    setMenuList(state,params) {
        state.menuList = params;
    }
}


const actions = {
    getGoodTotal (context){
        //请求菜单栏的数据
        fetchGet(api.GOODS_TOTAL_URL).then((data)=>{
            
			context.commit('setTotal',data);  //调用mutations进行赋值
		})
    },
    //请求首页菜单栏的数据
    getMenuData (context){
        //请求菜单栏的数据
        fetchGet(api.CATE_LIST_URL).then((data)=>{
			//如果使用this.list 会有好多废数据（set方法，get方法等）
            let newdata = data.map(({id,name})=>({id,name}));   //处理数据
            // console.log(newdata);
			context.commit('setMenuList',newdata);  //调用mutations进行赋值
		})
    }
}


export default {
    namespaced:true,
    state,
    mutations,
    actions
}