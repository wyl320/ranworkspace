<template>
	<div>
		<h2><span>威协情报</span><router-link to="/">></router-link></h2>
		<ul>
		<li v-for="intem in mationList"><span><router-link to="/">{{intem.title}}</router-link></span><em>{{intem.currentTime}}</em></li>
		</ul> 
	</div>
</template>
<script>
    import axios from 'axios';
	export default{
		data(){
			return{
                mationList:"" ,//威胁情报模块数据变量
			}
		},
		methods:{
             //请求威协情报
            loadmationList:function(){
            	let _this = this;
            	axios.get(' http://www.mocky.io/v2/59c22b4a130000440bd29f8d', {
                  params: {}
                })
                .then(function (response) {
                  if(response.data.code=="0"){
                      _this.mationList = response.data.data.informationList;
                      //console.log(_this.mationList)
                  }else{
                      console.log(response.data.message) 
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            },
		},
		created(){
            this.loadmationList();
		},
		watch: {
			//监控威协情报数据
		    mationList:function(){
		    	return this.mationList;
		    },
		}
	}
</script>
<style>
	
</style>