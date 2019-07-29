
import api from 'api'
import {fetchGet} from 'fetch'

const state = {
    categorydata:[],
    selectMenuId:null,
    menuList:[]
}

const mutations = {
    setCategoryData(state,params) {
        state.categorydata = params;
        state.selectMenuId = params[0].id;
    },
    setMenuId(state,params) {
        //分类页面侧边栏的点击事件触发的
        state.selectMenuId = params;
    },
    setcateMenuList(state,params) {
        console.log(params);
        state.menuList = params;
    }
}

const actions = {
    //请求侧边栏分类数据
    getCateMenuData(context) {
        fetchGet(api.CATEGOEY_LIST_URL).then(data=>{
            console.log(data);
            let newdata = data.map(({id,name})=>({id,name}));
            context.commit('setCategoryData',newdata)
        })
    },
    getCategoryMenuList(context,id) {
        fetchGet(api.CATEGOEY_LIST_GROUP_URL,{
            categoryId:id
        }).then(data=>{
            // let newdata = data.map(({id,name})=>({id,name}));
            // context.commit('setCategoryData',newdata)
            let bannerUrl = data.currentCategory.wapBannerUrl;
            let categoryGroupList = data.categoryGroupList.map(group=>{
                return {
                    id:group.id,
                    name:group.name,
                    categoryList:group.categoryList.map(({id,name,wapBannerUrl})=>({id,name,bannerUrl:wapBannerUrl}))
                }
            })
            context.commit('setcateMenuList',{
                bannerUrl,
                categoryGroupList
            });
        })
    }
}

export default {
    namespaced : true,
    state,
    mutations,
    actions
}