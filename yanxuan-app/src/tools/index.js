import { Icon,Toast, Tabbar } from 'vant';
import TabBar from './components/Tabbar'
import Scroller from './components/Scroller'

export default {
    install(Vue){
        Vue.use(Icon);
        Vue.use(Toast);
        Vue.component('tab-bar',TabBar);
        Vue.component(Scroller.name,Scroller);
    }
}