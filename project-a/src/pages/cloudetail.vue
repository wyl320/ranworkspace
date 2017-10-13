<template>
	<div class="makbox">
	    <div class="cloudTop" id="cloudTop" style="color:#ffff"><router-link to="/" class="lgCn">主控制台</router-link>&gt;<span>漏洞情报中心</span></div>
	    <div class="middlesMak clearfix">
	    	<div class="midMakLf" :style="{height:boxTt+'px'}">
	    		<div class="map">
	    			<Amap></Amap>
	    		</div>
	    		<div class="tabsg">
	    			tab
	    		</div>
	    	</div>
	    	<div class="midMakRt" :style="{height:boxTt+'px'}">
	    		    <div class="chatSoft">
	    		    	<div class="some_dt clearfix" v-for="item in Anewsoftlist">
	    		    		<span></span>
	    		    		<em>{{item.text}}</em>
                  <i>网络帐户数量- <b>{{item.accent}}</b></i>
	    		    	</div>
	    		    </div>
	    			<div class="lineSoft">
	    				<Histogram></Histogram>
	    			</div>
	    			<div class="newSoft">
	    				<ul>
	    					<li v-for="item in Bnewsoftlist"><router-link to="">{{item.text}}</router-link><span>{{item.time}}</span></li>
	    				</ul>
	    			</div>
	    	</div>
	    </div>
    </div>
</template>
<script>
    import Amap from '@/components/map'
    import Histogram from '@/components/histogram'
    import axios from 'axios'
	export default{
        components:{Amap,Histogram},
		data(){
			return{
		         boxTt:"",
		         Anewsoftlist:[],
		         Bnewsoftlist:[],
			}
		},
		methods:{
           setboxHt:function() {
              let allHt = $(window).height();
              let c=document.documentElement.clientWidth*(100 / 1280);
           	  let cloudTop = (c*0.3)+(c*0.2);
           	  this.boxTt = allHt-cloudTop;
           },
           loadNumlist:function(url){
              let self = this;
              let promise = $.Deferred();
              axios.get(url,{
                        params: {}
              })
              .then(function (response) {
                  if(response.data.code=="0"){
                    promise.resolve(response);
                  }else{
                    promise.resolve(response);
                    promise.reject();
                  }
              })
              .catch(function (error) {
                  console.log(error);
                  promise.reject();
              });
              return promise;
           },
           getAlist:function(){
           	 let self = this;
           	 let promise = self.loadNumlist("http://www.mocky.io/v2/59df73dd0f0000aa0b173c6f");
           	 promise.done(function(res){
                  self.Anewsoftlist = res.data.data;
           	 });
            },
            getBlist:function(){
           	 let self = this;
           	 let promise = self.loadNumlist("http://www.mocky.io/v2/59df76bf0f0000cb0c173c74");
           	 promise.done(function(res){
                  self.Bnewsoftlist = res.data.data;
           	 })
            },
		},
		created(){
             this.getAlist();
             this.getBlist();
		},
		mounted(){
           this.setboxHt();
		}
	}
</script>
<style scoped>
</style>