
import api from 'api'
import {fetchGet} from 'fetch'

const state = {
    categorydata:[],
    selectMenuIndex:0,
    menuList:[],
    groupData:[]
}

const getters = {
    //根据侧边栏选中的下标，计算id
    selectMenuId(state,getters) {
        if(state.categorydata.length <=0){
            return null;
        }
        let index = state.selectMenuIndex;
        let id = state.categorydata[index].id;
        return id;
    },
    selectMenuTitle(state) {
        if(state.categorydata.length <=0){
            return null;
        }
        let index = state.selectMenuIndex;
        let name = state.categorydata[index].name;
        return name;
    }
}

const mutations = {
    setCategoryData(state,params) {
        state.categorydata = params;
        state.selectMenuId = params[0].id;
    },
    setMenuIndex(state,params) {
        //分类页面侧边栏的点击事件触发的
        state.selectMenuIndex = params;
    },
    setcateMenuList(state,params) {
        state.menuList = params;
    },
    setCateGroupItems(state,params) {
        state.groupData = params;
    }
}

const actions = {
    //请求侧边栏分类数据
    getCateMenuData(context) {
        fetchGet(api.CATEGOEY_LIST_URL).then(data=>{
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
    },
    getCateGroupItems(context,params) {
        fetchGet(api.CATEGOEY_LIST_GROUP_ITEM_URL,params).then(data=>{
            let items = data.itemList.map(item=>{
                return {
                    id:item.id,
                    primaryPicUrl:item.primaryPicUrl,
                    simpleDesc:item.simpleDesc,
                    name:item.name,
                    retailPrice:item.retailPrice,
                    itemTagList:item.itemTagList.map(({name})=>name),
                    counterPrice:item.counterPrice
                }
            })
            context.commit('setCateGroupItems',items)
        })
    }
}

export default {
    namespaced : true,
    state,
    mutations,
    actions,
    getters
}