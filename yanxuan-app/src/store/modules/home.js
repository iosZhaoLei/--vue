

import {fetchGet} from 'fetch'
import api from 'api'
const state = {
    total:undefined,
    menuList:[{id:-1,label:'推荐'}],
    bannerlist:[],
    policy:[],
    categoryBanner:'',
    categoryList:[],
    iconList:[],
    topcatelist:[]
}


const mutations = {
    setTotal(state,params) {
        state.total = params.total;
    },
    setMenuList(state,params) {
        state.menuList = [...state.menuList,...params];
    },
    setBannerData(state,params) {
        state.bannerlist = params;
    },
    setPolicyData(state,params){
        state.policy = params;
    },
    setCategoryData(state,params) {
        state.categoryBanner = params.bannerurl;
        state.categoryList = params.categoryList;
    },
    setIconListData(state,params){
        state.iconList = params;
    },
    setTopCateList(state,params){
        state.topcatelist = params
    }
}


const actions = {
    getGoodTotal (context){
        //请求严选的商品总数
        fetchGet(api.GOODS_TOTAL_URL).then((data)=>{
			context.commit('setTotal',data);  //调用mutations进行赋值
		})
    },
    //请求首页菜单栏的数据
    getMenuData (context){
        //请求菜单栏的数据
        fetchGet(api.CATE_LIST_URL).then((data)=>{
			//如果使用this.list 会有好多废数据（set方法，get方法等）
            let newdata = data.map(({id,name})=>({id,label:name}));   //处理数据
			context.commit('setMenuList',newdata);  //调用mutations进行赋值
		})
    },
    //请求首页的轮播图数据
    getBannerData(context) {
        fetchGet(api.HOME_BANNER_LIST_URL).then((data)=>{
            let newdata = data.map(({id,picUrl})=>({id,picUrl}))
            context.commit('setBannerData',newdata);
        })
    },
    //请求网易严选协议
    getpolicyData(context) {
        fetchGet(api.POLICY_LIST_URL).then((data)=>{
            let newdata = data.map(({desc,icon})=>({desc,icon}))
            context.commit('setPolicyData',newdata);
        })
    },
    //请求首页的分类菜单的列表数据
    getCategoryList(context,id) {
        fetchGet(api.HOME_CATE_ITEM_LIST_URL,{id}).then((data)=>{
            
            let bannerurl = data.currentCategory.bannerUrl;
            
            let categoryList = data.categoryItemList.map(({category,itemList})=>{
                
                let info = {
                    title:category.name,
                    subTitle:category.frontName
                }
                
                let items = itemList.map(item=>{
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
                return {
                    info,
                    items
                }
            })
            //提交数据
            context.commit('setCategoryData',{
                bannerurl,
                categoryList
            });
        })
    },

    //请求icon列表数据
    getIconListData(context) {
        fetchGet(api.HOME_CATE_LIST_URL).then(data=>{
            let newdata = data.kingKongList.map(({text,picUrl})=>({text,picUrl}))
            context.commit('setIconListData',newdata)
        })
    },
    getTopCateList(context) {
        fetchGet(api.HOME_TOP_CATELIST_URL).then(data=>{
            let newdata = data.map(itemData=>{
                let itemList = itemData.itemList.map(({id,name,listPicUrl,retailPrice,counterPrice,promTag})=>
                    ({id,name,listPicUrl,retailPrice,counterPrice,promTag})
                )
                return {
                    titlePicUrl : itemData.titlePicUrl,
                    itemList
                }
            })

            context.commit('setTopCateList',newdata);
        })
    }
}


export default {
    namespaced:true,
    state,
    mutations,
    actions
}