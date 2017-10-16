<template>
	<div>
        <div class="login-wrap" v-show="showLogin">
            <h3>登录</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="username">
            <input type="password" placeholder="请输入密码" v-model="password">
            <button v-on:click="login">登录</button>
            <!-- <span v-on:click="ToRegister">没有账号？马上注册</span> -->
        </div>

        <!-- <div class="register-wrap" v-show="showRegister">
            <h3>注册</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="newUsername">
            <input type="password" placeholder="请输入密码" v-model="newPassword">
            <button v-on:click="register">注册</button>
            <span v-on:click="ToLogin">已有账号？马上登录</span>
        </div> -->
    </div>
</template>
<script>
    import axios from 'axios'
    import {setCookie,getCookie} from '../assets/js/cookie.js'
	export default{
        data(){
            return{
                showLogin: true,
                showRegister: false,
                showTishi: false,
                tishi: '',
                username: '',
                password: '',
                newUsername: '',
                newPassword: ''
            }
        },
        methods:{
                login(){
			        if(this.testname(this.username)&&this.testword(this.password)){
                        let data = {'username':this.username,'password':this.password};
                        let self = this;
                        /*接口请求*/
                        // this.$http.post('http://localhost/vueapi/index.php/Home/user/login',data).then((res)=>{
                        //     console.log(res)
                        //  /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
                        //   if(res.data == -1){
                        //       this.tishi = "该用户不存在"
                        //       this.showTishi = true
                        //   }else if(res.data == 0){
                        //       this.tishi = "密码输入错误"
                        //       this.showTishi = true
                        //   }else if(res.data == 'admin'){
                        //   /*路由跳转this.$router.push*/
                        //       this.$router.push('/main')
                        //   }else{
                        //       this.tishi = "登录成功"
                        //       this.showTishi = true
                        //       setCookie('username',this.username,1000*60)
                        //       setTimeout(function(){
                        //           this.$router.push('/home')
                        //       }.bind(this),1000)
                        //   }
                        // })
                        axios.get('/api/listdata',{ params:{data:data}
                        })
                        .then(function(res){
                              self.tishi = "登录成功";
                              self.showTishi = true;
                              setCookie('username',self.username,1000*60);
                              setTimeout(function(){
                                  self.$router.push('/index');
                              }.bind(this),1000)
                        })
                        .catch(function(error){
                            console.log(error);
                        })
			        }
			    },
                //验证用户名
                testname(a){
                   let testrool = /^.{6,}$/;
                   let nameflag = false;
                   if(a==""){
                       this.showTishi=true;
                       this.tishi = "请输入用户名";
                       nameflag = false;
                   }else if(!testrool.test(a)){
                       this.showTishi=true;
                       this.tishi = "请输正确的用户名"; 
                       nameflag = false;  
                   }else{
                       this.showTishi=false;
                       this.tishi = ""; 
                       nameflag = true;  
                   }
                   return nameflag
                },
                //验证密码
                testword(a){
                   let testrool = /^.{6,}$/; 
                   let wordflag = false;
                   if(a==""){
                       this.showTishi=true;
                       this.tishi = "请输入密码";
                       wordflag = false;
                   }else if(!testrool.test(a)){
                       this.showTishi=true;
                       this.tishi = "请输正确的密码"; 
                       wordflag = false;  
                   }else{
                       this.showTishi=false;
                       this.tishi = ""; 
                       wordflag = true; 
                   }
                   return wordflag
                }
        }
    }
</script>
<style scoped>
	.login-wrap{text-align:center;}
    input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
    p{color:red;}
    button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
    span{cursor:pointer;}
    span:hover{color:#41b883;}
</style>