<template>
<div class="page subpage" id="login">
    <div class="handle">
        <input type="text" placeholder="用户名" ref="user" />
        <input type="password" placeholder="密码" ref="psd" />
        <div class="confirm" @click="handleLogin">登录</div>
    </div>
</div>
</template>

<script>
import {Toast} from 'vant'
import {mapActions} from 'vuex'
export default {
    created(){
        
    },
    methods:{
        ...mapActions(['loginAction']),
        handleLogin(){
            let params = {
                username:this.$refs.user.value,
                pwd:this.$refs.psd.value
            }
            if(params.username && params.pwd){
                //登录
                let result = this.loginAction(params);
            }else {
                Toast('请输入正确的格式');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#login {
    .handle {
        position: absolute;
        width: 70%;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        input {
            border: none;
            outline: none;
            border-radius: 0;
            border: 1px solid #333;
            width: 100%;
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            margin: 10px 0;
        }
    }
    .confirm {
        width: 100%;
        height: 40px;
        background: #b4282d;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 16px;
    }
}
</style>

