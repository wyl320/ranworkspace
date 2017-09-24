<template>
<div>
  <h2><span>安全响应</span><router-link to="/">></router-link></h2>
	<div class="lister clearfix"  v-for="item in loopholeList">
                   <div class="sebei">
                   	<router-link to="/">
                   		<p>安全漏洞</p>
                   		<p>{{item.loopholeNumber}}</p>
                   	</router-link>
                   </div>
                   <div class="curver">
	                   	<p>
	                   		<em :class="{yellow:item.levl=='diwei'}"></em>
	                   		<em :class="{orange:item.levl=='zhongwei'}"></em>
	                   		<em :class="{pink:item.levl=='gaowei'}"></em>
	                   		<em :class="{pers:item.levl=='jingji'}"></em>
	                   	</p>
	                   	<p>{{item.currentTime}}</p>
                   </div>     
	</div>
</div>
</template>
<script>
    import axios from 'axios';
	export default{
		data(){
			return{
                 loopholeList:"",//安全响应
			}
		},
		methods:{
             //请求安全响应数据
            loadloopholeList:function(){
            	let _this = this;
            	axios.get(' http://www.mocky.io/v2/59c2334d1200008a009c0a0b', {
                  params: {}
                })
                .then(function (response) {
                  if(response.data.code=="0"){
                      _this.loopholeList = response.data.data.loopholeList;
                  }else{
                      console.log(response.data.message) 
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            },
		},
		watch:{
             //监控安全响应数据
		    loopholeList:function(){
		    	return this.loopholeList;
		    },
		},
		created(){
            this.loadloopholeList();
		}
	}
</script>
<style>
	
</style>