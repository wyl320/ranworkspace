<template>
	<div class="home clearfix" >
		 <!--左侧-->
		 <div class="leftCt" :style="{height:setHeight+'px'}">
		 	 <div class="user">
		 	 	<span class="userlg"><img src="../assets/images/admin.png"></span>
		 	 	<span class="userame"><i>admin</i></span>
		 	 	<span class="rightname"><em></em></span>
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
		 	 <div class="dangerlist" >
		 	 	<h2><span>威协情报</span><router-link to="/">></router-link></h2>
		 	 	<ul>
		 	 		<li><span><router-link to="/">最新发布按全漏洞</router-link></span><em>2017-08-24</em></li>
		 	 		<li><span><router-link to="/">最新发布按全漏洞</router-link></span><em>2017-08-24</em></li>
		 	 		<li><span><router-link to="/">最新发布按全漏洞</router-link></span><em>2017-08-24</em></li>
		 	 		<li><span><router-link to="/">最新发布按全漏洞</router-link></span><em>2017-08-24</em></li>
		 	 	</ul>
		 	 </div>
		 	 <!--安全响应-->
		 	 <div class="safelist">
		 	 	<h2><span>安全响应</span><router-link to="/">></router-link></h2>
		 	 	<div class="lister clearfix">
                   <div class="sebei">
                   	<router-link to="/">
                   		<p>安全漏洞</p>
                   		<p>CNNVD-201708-983</p>
                   	</router-link>
                   </div>
                   <div class="curver">
	                   	<p><em></em><em></em><em></em><em class="pink"></em></p>
	                   	<p>2017-08-24</p>
                   </div>       
		 	 	</div>
		 	 	<div class="lister clearfix">
                   <div class="sebei">
                   	<router-link to="/">
                   		<p>安全漏洞</p>
                   		<p>CNNVD-201708-983</p>
                   	</router-link>
                   </div>
                   <div class="curver">
	                   	<p><em class="blue"></em><em></em><em></em><em></em></p>
	                   	<p>2017-08-24</p>
                   </div>       
		 	 	</div>
		 	 	<div class="lister clearfix">
                   <div class="sebei">
                   	<router-link to="/">
                   		<p>安全漏洞</p>
                   		<p>CNNVD-201708-983</p>
                   	</router-link>
                   </div>
                   <div class="curver">
	                   	<p><em></em><em class="yellow"></em><em></em><em></em></p>
	                   	<p>2017-08-24</p>
                   </div>       
		 	 	</div>
		 	 	<div class="lister clearfix">
                   <div class="sebei">
                   	<router-link to="/">
                   		<p>安全漏洞</p>
                   		<p>CNNVD-201708-983</p>
                   	</router-link>
                   </div>
                   <div class="curver">
	                   	<p><em></em><em></em><em class="orange"></em><em></em></p>
	                   	<p>2017-08-24</p>
                   </div>       
		 	 	</div>
		 	 </div>
		 </div>
		 <!--中间-->
		 <div class="centerCt" :style="{height:setHeight+'px'}">
		 	<div class="cavemove">
		 		cave
		 	</div>
		 	<div class="severcont clearfix">
		 		<!--设备监测情况-->
		 		<div class="sebeilist">
		 			<!--列表-->
		 			<div class="searchTb">
		 				<span>设备监测情况</span>
		 				<a href="javascript:;"></a>
		 				<input type="text">
		 				<button></button>
		 			</div>
		 			<div class="tabelist">
		 				<table>
		 					<tr>
		 						<th>设备名称</th>
			 					<th>开源软件</th>
			 					<th>漏洞</th>
			 					<th>安全状态</th>
			 					<th>时间</th>
		 					</tr>
		 					<tr>
		 						<td>SB-01-101主机 </td>
		 						<td>16</td>
		 						<td>49</td>
		 						<td><em></em><em></em><em></em><em class="pink"></em></td>
		 						<td>2017-08-24</td>
		 					</tr>
		 					<tr>
		 						<td>SB-01-101主机 </td>
		 						<td>16</td>
		 						<td>49</td>
		 						<td><em class="blue"></em><em></em><em></em><em></em></td>
		 						<td>2017-08-24</td>
		 					</tr>
		 					<tr>
		 						<td>SB-01-101主机 </td>
		 						<td>16</td>
		 						<td>49</td>
		 						<td><em class="blue"></em><em></em><em></em><em></em></td>
		 						<td>2017-08-24</td>
		 					</tr>
		 					<tr>
		 						<td>SB-01-101主机 </td>
		 						<td>16</td>
		 						<td>49</td>
		 						<td><em></em><em></em><em class="orange"></em><em></em></td>
		 						<td>2017-08-24</td>
		 					</tr>
		 					<tr>
		 						<td>SB-01-101主机 </td>
		 						<td>16</td>
		 						<td>49</td>
		 						<td><em></em><em></em><em></em><em class="pers"></em></td>
		 						<td>2017-08-24</td>
		 					</tr>
		 					<tr>
		 						<td>SB-01-101主机 </td>
		 						<td>16</td>
		 						<td>49</td>
		 						<td><em></em><em class="yellow"></em><em></em><em></em></td>
		 						<td>2017-08-24</td>
		 					</tr>
		 				</table>
		 			</div>
		 		</div>
		 		<!--图表-->
		 		<div class="cpmessage">
		 			<div class="mg_tab">
		 				<h2>主机名称</h2>
		 				<div class="adress"><span>Mac地址 </span><em>00-01-6C-06-A6-29</em></div>
		 				<div class="banben"><b>系统版本</b><em>win10 </em> <b class="N_heba">内核版本</b> <em>3.10.49</em></div>
		 				<div class="nomb">
		 					<strong class="nusofte_a">漏洞总数量</strong><span class="nusofte_sa">14</span>
		 					<strong class="nusofte_b">监测开源软件</strong><span class="nusofte_sb">6</span>
		 				</div>
		 			</div>
		 		</div>
		 	</div>
		 </div>
		 <!--左侧-->
		 <div class="rightCt" :style="{height:setHeight+'px'}">
		 	<!--代码检测-->
		 	<div class="codeing">
		 		<h2><span>代码检测</span><router-link to="/">></router-link></h2>
		 		<div class="code_area">
		 			<em class="cort2"></em>
		 			<em class="cort1"></em>
		 			<textarea name="" id="" cols="30" rows="10"></textarea>
		 		</div>
		 	</div>
		 	<!--修复情况-->
		 	<div class="sofeset">
		 		<h2><span>修复情况</span><router-link to="/">></router-link></h2>
		 		<div class="cort_nums">
		 			<p><span class="soft_img"></span><span class="soft_name"><i>gogle</i></span><em>编辑</em></p>
		 			<div class="ranges"><strong><b style="width:50%"></b></strong></div>
		 			<div class="result"><span>已修复 62</span><i>未修复 30</i></div>
		 		</div>
		 		<div class="cort_nums">
		 			<p><span class="soft_img"></span><span class="soft_name"><i>gogle</i></span><em>编辑</em></p>
		 			<div class="ranges"><strong><b style="width:50%"></b></strong></div>
		 			<div class="result"><span>已修复 62</span><i>未修复 30</i></div>
		 		</div>
		 		<div class="cort_nums">
		 			<p><span class="soft_img"></span><span class="soft_name"><i>gogle</i></span><em>编辑</em></p>
		 			<div class="ranges"><strong><b style="width:50%"></b></strong></div>
		 			<div class="result"><span>已修复 62</span><i>未修复 30</i></div>
		 		</div>
		 	</div>
		 	<!--自定义-->
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
    .user{/*height:6.6rem;*/height:7.7%;width:100%;/*height:4.28rem;*/border:1px solid #424851;border-left:none;}
    .mation{height:17.6%;/*height:15rem;*//*height:9.28rem;*/}
    .numlist{height:12.7%;/*height:10.8rem;*//*height:6.57rem;*/background:#2e3440;margin:3.3% 3.3% 0 3.3%;}
    .cavemove{height:56.5%;}
    .dangerlist{height:19%;/*height:16rem;*//*height:9.71rem;*/background:#2e3440;margin:3.3% 3.3% 0 3.3%;}
    .safelist{height:38.5%;/*height:30rem;*//*height:18.28rem;*/background:#2e3440;margin:3.3% 3.3% 0 3.3%;}
    .severcont{height:43.1%;border-top:1px solid #424851;}
    .codeing{height:27%;background:#2e3540;margin:0 3.3% 3.3% 3.3%;}
    .sofeset{height:41.8%;background:#2e3540;margin:0 3.3% 3.3% 3.3%;}
    .sofelist{height:28.3%;background:#2e3540;margin:0 3.3% 0 3.3%;}

     /*用户名*/
    .userlg{display:inline-block;width:12.5%;height:63%;background:red;border-radius:2rem;-webkit-border-radius:2rem;-moz-border-radius:2rem;text-align:center;margin-top:3%;margin-left:8.5%;position: relative;}
    .userlg img{position:absolute;top:0.06rem;left:0.08rem;width:0.2rem;height:0.2rem;}
    .user span{display:inline-block;height:63%;float:left;}
    .userame{position:relative;}
    .userame i{display:inline-block;margin-top:0.2rem;padding-left:0.18rem;padding-right:0.05rem;}
    .userame em{position: absolute;top:0.12rem;right:0;}
    .rightname em{display:inline-block;width:0px; height:0px; border-color:#0ba9b2 transparent transparent transparent;border-style:solid; border-width:0.05rem;margin-top:0.24rem;}
    /*数据总量*/
    .numlist ul{padding:0 0.14rem;}
    .numlist ul li{padding-top:0.06rem;}
    .numlist ul li em{color:#10aaac;font-size:0.18rem;  margin: 0rem 0.04rem;}
    /*威胁情报*/
    .dangerlist h2 {height:0.26rem;border-bottom:1px solid #424851;}
    .dangerlist h2 span{display:inline-block;color:#0ba9b2;width:86%;    padding-left: 0.14rem;line-height: 0.26rem;}
    .dangerlist h2 a{color:#65758d;}
    .dangerlist ul{padding:0rem 0.14rem;}
    .dangerlist ul li{padding-top:0.09rem;font-size: 0.1rem;}
    .dangerlist ul li span{display:inline-block;width:1.66rem;padding-right:0.02rem;}
    .dangerlist ul li em{color:#92969b;font-size: 0.01rem;}
    .dangerlist ul li a{color:#fff;}
    /*安全响应*/
    .safelist h2 {height:0.26rem;border-bottom:1px solid #424851;}
    .safelist h2 span{display:inline-block;color:#0ba9b2;width:86%;    padding-left: 0.14rem;line-height: 0.26rem;}
    .safelist h2 a{color:#65758d;}
    .lister {border-bottom: 1px solid #424851;padding: 0.12rem 0.01rem 0.11rem 0.14rem;}
    .lister div{float:left;}
    .sebei{padding-right:0.01rem;line-height: 0.24rem;line-height: 0.18rem;width:63%;}
    .curver{color:#7e848c;font-size: 0.01rem;text-align:right;}
    .sebei a{color:#fff;}
    .curver em{display:inline-block;width:0.1rem;height:0.1rem;margin-left:0.08rem;border:0.01rem solid #424852;margin-bottom:0.05rem;}
    .curver em.blue{background:#0f9ec7;border:0.01rem solid #0f9ec7;}
    .curver em.yellow{background:#ffe60f;border:0.01rem solid #ffe60f;}
    .curver em.orange{background:#ff7214;border:0.01rem solid #ff7214;}
    .curver em.pink{background:#f82454;border:0.01rem solid #f82454;}
    /*设备监测情况*/
    .sebeilist{width:4.42rem;border-right:0.01rem solid #424851;height:100%;background:#2e3540;float:left;}
    .cpmessage{float:left;}
     /*搜索框*/
    .searchTb{height:0.21rem;padding:0.07rem 0.14rem;border-bottom:0.01rem solid #424851;}
    .searchTb input {border:none;width:2.0rem;margin-right:0.1rem;margin-left:0.1rem;background:#2e3540;}
    .searchTb span{display:inline-block;width:1.4rem;}
    .searchTb a{display:inline-block; width:0.12rem;height:0.12rem;background:url(../assets/images/det.png) top center;background-repeat: no-repeat;}
    .searchTb button{width:0.21rem;height:0.21rem;background:url(../assets/images/seach.png) top center;background-repeat: no-repeat;}
    /*table*/
    .tabelist table{width:100%;}
    .tabelist td{padding:0.08rem  0rem 0.08rem 0.14rem;border-bottom:0.01rem solid #424851;}
    .tabelist th{padding:0.08rem 0rem 0.08rem 0.14rem;background:#3a4350;}
    .tabelist table em{display:inline-block;width:0.1rem;height:0.1rem;margin-left:0.08rem;border:0.01rem solid #666666;margin-bottom:0.05rem;background:#666666;}
    .tabelist table em.blue{background:#0f9ec7;border:0.01rem solid #0f9ec7;}
    .tabelist table em.yellow{background:#ffe60f;border:0.01rem solid #ffe60f;}
    .tabelist table em.orange{background:#ff7214;border:0.01rem solid #ff7214;}
    .tabelist table em.pink{background:#f82454;border:0.01rem solid #f82454;}
    .tabelist table em.pers{background:#de00ff;border:0.01rem solid #f82454;}
    /*message*/
    .mg_tab h2{color:#fff;font-size: 0.14rem;padding:0.1rem 0.14rem 0.1rem 0.14rem;}
    .adress,.nomb,.banben,.nomb,.nusofte{padding:0rem 0.14rem 0rem 0.14rem;}
    .adress em{color:#0ba9b2;font-size:0.16rem;}
    .adress span{font-size:0.15rem;}
    .banben em{color:#0ba9b2;margin-left:0.05rem;}
    .banben span{font-size:0.14rem;}
    .banben{margin-bottom:0.08rem;padding-top:0.05rem;}
    .N_heba {display:inline-block;margin-left:0.26rem;}
    .nusofte_a,.nusofte_sa{color:#fbb150;}
    .nusofte_b,.nusofte_sb{color:#0ba9b2;}
    .nusofte_sa,.nusofte_sb{font-size:0.2rem;}
    .nusofte_b{margin-left:0.2rem;}
    /*代码检测*/
    .codeing h2 {height:0.32rem;border-bottom:1px solid #424851;}
    .codeing h2 span{display:inline-block;color:#0ba9b2;width:86%;    padding-left: 0.14rem;line-height: 0.32rem;}
    .codeing h2 a{color:#65758d;}
    .code_area{width:2.2rem; height:0.96rem;border:0.01rem solid #3a4350;margin:0.14rem auto 0.1rem;position:relative;background:#21262d;}
    .code_area em{position:absolute;display:inline-block; width:0.12rem; height:0.09rem;border:0.01rem solid #1f848b;border-right:none;border-bottom:none;}
    .code_area em.cort1{top:0;left:0;}
    .code_area em.cort2{bottom:0;right:0;border-top:none;border-left:none;border-bottom:0.01rem solid #1f848b; border-right:0.01rem solid #1f848b;}
    .code_area textarea{background:#21262d;border:none;width:100%;height:100%;}
    /*修复情况*/
    .sofeset h2 {height:0.32rem;border-bottom:1px solid #424851;}
    .sofeset h2 span{display:inline-block;color:#0ba9b2;width:86%;    padding-left: 0.14rem;line-height: 0.32rem;}
    .sofeset h2 a{color:#65758d;}
    .cort_nums{padding:0.1rem 0.12rem;border-bottom:1px solid #424851;}
    .soft_img img{display:inline-block;width:0.3rem; height:0.3rem;}
    .soft_img{margin-right:0.1rem;}
    .soft_name{width:1.5rem;display:inline-block;}
    .ranges{margin:0.11rem 0;    height: 0.06rem;}
    .ranges strong{display:inline-block;width:100%; height:0.06rem;background: #ff7214;border-radius: 0.1rem;}
    .ranges b{display:inline-block;height:100%;background: #0ba9b2;vertical-align: top;border-radius: 0.1rem;}
</style>