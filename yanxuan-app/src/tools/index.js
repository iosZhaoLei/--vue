import { Icon,Toast, Lazyload } from 'vant'
import TabBar from './components/Tabbar'
import Scroller from './components/Scroller'
import ItemList from './components/ItemList'

export default {
    install(Vue){
        Vue.use(Icon);
        Vue.use(Toast);
        Vue.component('tab-bar',TabBar);
        Vue.component(Scroller.name,Scroller);
        Vue.component(ItemList.name,ItemList);
        Vue.use(Lazyload);
    }
}