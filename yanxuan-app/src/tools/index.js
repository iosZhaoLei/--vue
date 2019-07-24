import { Icon,Toast, Tabbar } from 'vant';
import TabBar from './components/Tabbar'

export default {
    install(Vue){
        Vue.use(Icon);
        Vue.use(Toast);
        Vue.component('tab-bar',TabBar);
    }
}