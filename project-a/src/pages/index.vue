<template>
	<div class="home clearfix">
		 <!--左侧-->
		 <div class="leftCt" :style="{height:setHeight+'px'}">
		 	 <div class="user">
		 	 	<span class="userlg"><img src="../assets/images/admin.png"></span>
		 	 	<span class="userame"><i>admin</i><em></em></span>
		 	 </div>
		 	 <div class="mation">图表</div>
		 	 <div class="numlist">
		 	 	<ul>
		 	 		<li><span>数据源总量 - </span><em>{{numSource}}</em></li>
		 	 		<li><span>更新总量 - </span><em>{{numUp}}</em></li>
		 	 		<li><span>维护开源软件总量 - </span><em>{{numFree}}</em></li>
		 	 	</ul>
		 	 </div>
		 	 <!--威协情报-->
		 	 <div class="dangerlist">
		 	 	<h2><span>威协情报</span><router-link to="/">></router-link></h2>
		 	 	<ul>
		 	 		<li><span>最新发布按全漏洞</span><em>2017-08-24</em></li>
		 	 		<li><span>最新发布按全漏洞</span><em>2017-08-24</em></li>
		 	 		<li><span>最新发布按全漏洞</span><em>2017-08-24</em></li>
		 	 	</ul>
		 	 </div>
		 	 <!--安全响应-->
		 	 <div class="safelist">
		 	 	安全响应
		 	 </div>
		 </div>
		 <!--中间-->
		 <div class="centerCt" :style="{height:setHeight+'px'}">
		 	<div class="cavemove">
		 		cave
		 	</div>
		 	<div class="severcont">
		 		sss
		 	</div>
		 </div>
		 <!--左侧-->
		 <div class="rightCt" :style="{height:setHeight+'px'}">
		 	<div class="codeing">代码检测</div>
		 	<div class="sofeset">修复情况</div>
		 	<div class="sofelist">自定义</div>
		 </div>
	</div>
</template>
<script>
	export default {
		 components: {
		 },
		 data(){
		 	return{
                 setHeight : "800px",
                 numSource:354655,
                 numUp:43455,
                 numFree:34
		 	}
		 },
		 methods:{
            fullHeight:function (){
            	this.setHeight = $(window).height();
            }
		 },
		 watch: {
		    setHeight: function () {
		        return this.setHeight
		    }
         },
		 created(){
            this.fullHeight();
		 }
	}
</script>
<style scoped>
    /*框架样式*/
	.home{width:100%;}
	.leftCt{width:22%;float:left;}
	.rightCt{width:22%;float:left;}
	.centerCt{width:56%;float:left;border:1px solid #424851;border-top:none;border-bottom:none;
	 box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; }
    .user{height:6.6rem;border:1px solid #424851;}
    .mation{height:17.6%;/*height:15rem;*/}
    .numlist{height:12.7%;/*height:10.8rem;*/background:#2e3440;margin:3.3% 3.3% 0 3.3%;}
    .cavemove{height:53.5%;}
    .dangerlist{height:19%;/*height:16rem;*/background:#2e3440;margin:3.3% 3.3% 0 3.3%;}
    .safelist{height:37.5%;/*height:30rem;*/background:#2e3440;margin:3.3% 3.3% 0 3.3%;}
    .severcont{height:42.9%;border-top:1px solid #424851;}
    .codeing{height:27%;background:#2e3540;margin:0 3.3% 3.3% 3.3%;}
    .sofeset{height:41.8%;background:#2e3540;margin:0 3.3% 3.3% 3.3%;}
    .sofelist{height:26.9%;background:#2e3540;margin:0 3.3% 0 3.3%;}
    .userlg{display:inline-block;width:4rem;height:4rem;background:#2e3440;border-radius:3rem;-webkit-border-radius:2rem;-moz-border-radius:2rem;text-align:center;margin:1rem 1.8rem 0rem 2.5rem;}
    .userlg img{margin-top:0.9rem;}
    .userame{padding-right:1.2rem;position:relative;}
    .userame em{position: absolute;top:0.7rem;right:0px;display:inline-block;width:0px; height:0px; border-color:#0ba9b2 transparent transparent transparent;border-style:solid; border-width:5px;}
    .userame i{padding-right:1.3rem;}

    /*数据总量*/
    /*.numlist ul{padding:0 1.6rem;}
    .numlist ul li{padding-top:1.2rem;}
    .numlist ul li em{color:#10aaac;font-size: 1.8rem;}*/
    /*威胁情报*/
   /* .dangerlist h2 {height:4rem;border-bottom:1px solid #424851;}
    .dangerlist h2 span{padding-left:1.6rem;display:inline-block;line-height: 4rem;color:#0ba9b2;width:86%;}
    .dangerlist h2 a{color:#fff;}*/
</style>