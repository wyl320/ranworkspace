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
	    		    	<div class="some_dt clearfix">
	    		    		<span></span>
	    		    		<em>百度</em>
                            <i>网络帐户数量- <b>354655</b></i>
	    		    	</div>
	    		    	<div class="some_dt clearfix">
	    		    		<span></span>
	    		    		<em>百度</em>
                            <i>网络帐户数量- <b>354655</b></i>
	    		    	</div>
	    		    	<div class="some_dt clearfix">
	    		    		<span></span>
	    		    		<em>百度</em>
                            <i>网络帐户数量- <b>354655</b></i>
	    		    	</div>
	    		    </div>
	    			<div class="lineSoft">
	    				<Histogram></Histogram>
	    			</div>
	    			<div class="newSoft">neirong3</div>
	    	</div>
	    </div>
    </div>
</template>
<script>
    import Amap from '@/components/map'
    import Histogram from '@/components/histogram'
	export default{
        components:{Amap,Histogram},
		data(){
			return{
		         boxTt:""    
			}
		},
		methods:{
           setboxHt:function() {
              let allHt = $(window).height();
              let c=document.documentElement.clientWidth*(100 / 1280);
           	  let cloudTop = (c*0.3)+(c*0.2);
           	  this.boxTt = allHt-cloudTop;
           } 
		},
		mounted(){
           this.setboxHt();
		}
	}
</script>
<style scoped>
</style>