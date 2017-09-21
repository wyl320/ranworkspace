<template>
	<div class="home clearfix" >
		 <!--左侧-->
		 <div class="leftCt" :style="{height:setHeight+'px'}">
		 	 <div class="user">
		 	 	<span class="userlg"><img src="../assets/images/admin.png"></span>
		 	 	<span class="userame"><i>admin</i></span>
		 	 	<span class="rightname"><em></em></span>
		 	 </div>
		 	 <div class="mation">
		 	    <!--<liquid v-for="item in listArrysoce.numList" :liquidsoure="item"></liquid>-->
          <div class="echarts-cont">
              <div id="line" :style="{width:'180px',height:'180px'}"></div>
              <div id="line2" :style="{width:'180px',height:'180px'}"></div>
           </div>
		 	 </div>
		 	 <div class="numlist">
		 	 	<ul>
		 	 		<li><span>数据源总量 - </span><em>{{listArrysoce.totalDatas}}</em></li>
		 	 		<li><span>更新总量 - </span><em>{{listArrysoce.updatDatas}}</em></li>
		 	 		<li><span>维护开源软件总量 - </span><em>{{listArrysoce.freeSoftware}}</em></li>
		 	 	</ul>
		 	 </div>
		 	 <!--威协情报-->
		 	 <div class="dangerlist" >
		 	 	<h2><span>威协情报</span><router-link to="/">></router-link></h2>
		 	 	<ul>
		 	 		<li v-for="intem in mationList"><span><router-link to="/">{{intem.title}}</router-link></span><em>{{intem.currentTime}}</em></li>
		 	 	</ul>
		 	 </div>
		 	 <!--安全响应-->
		 	 <div class="safelist">
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
            <em class="emlg">
              <transition name="fade">
  		 			     <a href="javascript:;" v-show="ishow_seacher" @click="cleanValue"></a>
              </transition>
              <transition name="lider">
  		 				   <input type="text" placeholder="请输入设备名称" v-show="ishow_seacher" v-model="searchValue">
              </transition>
            </em>
		 				<button @click="search_list"></button>
		 			</div>
		 			<div class="tabelist">
		 				<table>
		 					<tr>
		 						<th :style="{width:'27%'}" class="setLf">设备名称</th>
			 					<th :style="{width:'15%'}">开源软件</th>
			 					<th :style="{width:'12%'}">漏洞</th>
			 					<th :style="{width:'26%'}">安全状态</th>
			 					<th :style="{width:'16%'}">时间</th>
		 					</tr>
		 					<template v-for="item in sebeiList">
		 						<tr>
			 						<td class="setLf">{{item.sebeiName}}</td>
			 						<td>{{item.freeSoftware}}</td>
			 						<td>{{item.loopholeNumber}}</td>
			 						<td>
			 							<em :class="{blue:item.levl=='anquan'}"></em>
			 							<em :class="{yellow:item.levl=='diwei'}"></em>
			 							<em :class="{orange:item.levl=='zhongwei'}"></em>
			 							<em :class="{red:item.levl=='gaowei'}"></em>
			 							<em :class="{pers:item.levl=='jingji'}"></em>
			 						</td>
			 						<td>{{item.timer}}</td>
		 					    </tr>
		 					</template>
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
		 		<h2><span>开源代码检测</span><router-link to="/">></router-link></h2>
		 		<div class="code_area">
		 			<em class="cort2"></em>
		 			<em class="cort1"></em>
		 			<textarea name="" id="" cols="30" rows="10"></textarea>
		 			<div class="code_up"><span>源代码上传</span><input type="file"><button>检测源代码</button></div>
		 		</div>
		 	</div>
		 	<!--修复情况-->
		 	<div class="sofeset">
		 		<h2><span>修复情况</span><router-link to="/">></router-link></h2>
		 		<div class="cort_nums">
		 			<div class="st_gn clearfix"><span class="soft_img"><img src="../assets/images/softlog.png" alt=""></span><span class="soft_name"><i>gogle</i></span><em>编辑</em></div>
		 			<div class="ranges"><strong><b style="width:50%"></b></strong></div>
		 			<div class="result"><span>已修复 62</span><i>未修复 30</i></div>
		 		</div>
		 		<div class="cort_nums">
		 			<div class="st_gn clearfix"><span class="soft_img"><img src="../assets/images/softlog.png" alt=""></span><span class="soft_name"><i>gogle</i></span><em>编辑</em></div>
		 			<div class="ranges"><strong><b style="width:50%"></b></strong></div>
		 			<div class="result"><span>已修复 62</span><i>未修复 30</i></div>
		 		</div>
		 		<div class="cort_nums">
		 			<div class="st_gn clearfix"><span class="soft_img"><img src="../assets/images/softlog.png" alt=""></span><span class="soft_name"><i>gogle</i></span><em>编辑</em></div>
		 			<div class="ranges"><strong><b style="width:50%"></b></strong></div>
		 			<div class="result"><span>已修复 62</span><i>未修复 30</i></div>
		 		</div>
		 	</div>
		 	<!--自定义-->
		 	<div class="sofelist">
		 		<a href="javascript:;"><img src="../assets/images/qq.png" alt=""></a>
		 		<a href="javascript:;"><img src="../assets/images/qq.png" alt=""></a>
		 		<a href="javascript:;"><img src="../assets/images/qq.png" alt=""></a>
		 		<a href="javascript:;"><img src="../assets/images/qq.png" alt=""></a>
		 		<a href="javascript:;"><img src="../assets/images/qq.png" alt=""></a>
		 		<a href="javascript:;"><img src="../assets/images/qq.png" alt=""></a>
		 		<a href="javascript:;"><img src="../assets/images/qq.png" alt=""></a>
		 		<a href="javascript:;"><img src="../assets/images/qq.png" alt=""></a>
		 		<a href="javascript:;"><img src="../assets/images/qq.png" alt=""></a>
		 	</div>
		 </div>
	</div>
</template>
<script>

  import liquid from '@/components/liquid';
  import axios from 'axios';
  // import {liquidfillOption}  from '@/chart-data/chartData';

	export default {
		 components: {liquid},
		 data(){
       let liquidfillOption = {
        series: [{
            type: 'liquidFill',
            data: [{name: '28374'},0.6],
            color: ['#916f44'],
            label: {
                normal: {
                    color: '#ffffff',
                    insideColor: '#ffffff',
                    fontSize: 15,
                    formatter: '{b}'
                }
            },
            outline: {
                borderDistance: 6,
                itemStyle: {
                    borderWidth: 2,
                    borderColor: '#383e47'
                }
            },
            backgroundStyle: {
              borderWidth: 3,
              borderColor: '#fbb150',
              color: '#262d37'
           }
        }]
      };
      let liquidfillOption2 = {
        series: [{
            type: 'liquidFill',
            data: [{name: '315'},0.4],
            color: ['#10a8ab'],
            label: {
                normal: {
                    color: '#ffffff',
                    insideColor: '#ffffff',
                    fontSize: 15,
                    formatter: '{b}'
                }
            },
            outline: {
                borderDistance: 6,
                itemStyle: {
                    borderWidth: 2,
                    borderColor: '#383e47'
                }
            },
            backgroundStyle: {
              borderWidth: 3,
              borderColor: '#10a8ab',
              color: '#262d37'
           }
        }]
      };
      let countData = {
          listArrysoce:"",//水球图模块数据变量
          mationList:"" ,//威胁情报模块数据变量
          loopholeList:"",//安全响应
          sebeiList:"",//设备
          chartDataOption:liquidfillOption,//图标一
          chartUpdateOption2:liquidfillOption2,//图标二
          ishow_seacher:false,
          searchValue:""
      };//数据汇总数据源

		 	return{
        ...countData
		 	}

		 },
		 methods:{
		 	//设置窗口高度
            fullHeight:function (){
            	this.setHeight = $(window).height();
            },
            //请求水球图数据
            loadList: function() {
                console.log("初始化加载数据开始...");
                let _this = this;
                axios.get('http://www.mocky.io/v2/59c2206a130000880ad29f70', {
                  params: {}
                })
                .then(function (response) {
                  if(response.data.code=="0"){
                      _this.listArrysoce = response.data.data;
                      console.log(_this.listArrysoce)
                  }else{
                      console.log(response.data.message) 
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            },
            //请求威协情报
            loadmationList:function(){
            	let _this = this;
            	axios.get(' http://www.mocky.io/v2/59c22b4a130000440bd29f8d', {
                  params: {}
                })
                .then(function (response) {
                  if(response.data.code=="0"){
                      _this.mationList = response.data.data.informationList;
                      console.log(_this.mationList)
                  }else{
                      console.log(response.data.message) 
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            },
            //请求安全响应数据
            loadloopholeList:function(){
            	let _this = this;
            	axios.get(' http://www.mocky.io/v2/59c2334d1200008a009c0a0b', {
                  params: {}
                })
                .then(function (response) {
                  if(response.data.code=="0"){
                      _this.loopholeList = response.data.data.loopholeList;
                      console.log(_this.loopholeList)
                  }else{
                      console.log(response.data.message) 
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            },
            //请求设备信息
            loadsebeiList:function(){
            	let _this = this;
            	axios.get(' http://www.mocky.io/v2/59c23e47120000b9009c0a42', {
                  params: {}
                })
                .then(function (response) {
                  if(response.data.code=="0"){
                      _this.sebeiList = response.data.data.sebeiList;
                      console.log(_this.sebeiList)
                  }else{
                      console.log(response.data.message) 
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            },
            //搜索框
            search_list:function(){
                 this.ishow_seacher = !this.ishow_seacher;
                 $(".emlg input").focus();
            },
            //清除值
            cleanValue:function(){
               this.searchValue =""
            }
		},
		watch: {
		 	//监控页面高度
		    setHeight: function () {
		        return this.setHeight;
		    },
		    //监控水球图数据
		    listArrysoce:function(){
		    	return this.listArrysoce;
		    },
		    //监控威协情报数据
		    mationList:function(){
		    	return this.mationList;
		    },
		    //监控安全响应数据
		    loopholeList:function(){
		    	return this.loopholeList;
		    },
		    sebeiList:function(){
		    	return this.sebeiList;
		    }
     },
		 created(){
            this.fullHeight();
            this.loadList();
            this.loadmationList();
            this.loadloopholeList();
            this.loadsebeiList()
		 },
     mounted:function(){
            this._vue_charts = echarts.init(document.getElementById('line'));
            this._vue_charts.setOption(this.chartDataOption);

            this._vue_charts2 = echarts.init(document.getElementById('line2'));
            this._vue_charts2.setOption(this.chartUpdateOption2);
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
    .sofelist{height:28.3%;background:#2e3540;margin:0 3.3% 0 3.3%;padding-left:0.1rem;}

     /*用户名*/
    .userlg{display:inline-block;width:12.5%;height:63%;background:#2e3440;border-radius:2rem;-webkit-border-radius:2rem;-moz-border-radius:2rem;text-align:center;margin-top:3%;margin-left:8.5%;position: relative;}
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
    .curver em{display:inline-block;width:0.1rem;height:0.1rem;margin-left:0.05rem;border:0.01rem solid #424852;margin-bottom:0.05rem;}
    .curver em.blue{background:#0f9ec7;border:0.01rem solid #0f9ec7;}
    .curver em.yellow{background:#ffe60f;border:0.01rem solid #ffe60f;}
    .curver em.orange{background:#ff7214;border:0.01rem solid #ff7214;}
    .curver em.pink{background:#f82454;border:0.01rem solid #f82454;}
    .curver em.pers{background:#de00ff;border:0.01rem solid #f82454;}
    /*设备监测情况*/
    .sebeilist{width:4.4rem;border-right:0.01rem solid #424851;height:100%;background:#2e3540;float:left;}
    .cpmessage{float:left;}
     /*搜索框*/
    .searchTb{height:0.21rem;padding:0.07rem 0.14rem;border-bottom:0.01rem solid #424851;}
    .searchTb input {border:none;width:2.0rem;margin-right:0.1rem;margin-left:0.1rem;background:#2e3540;}
    .searchTb span{display:inline-block;width:1.4rem;}
    .searchTb a{vertical-align:middle;display:inline-block; width:0.12rem;height:0.12rem;background:url(../assets/images/det.png) top center;background-repeat: no-repeat;}
    .searchTb button{width:0.21rem;height:0.21rem;background:url(../assets/images/seach.png) top center;background-repeat: no-repeat;}
    .emlg{display:inline-block;width:2.4rem;}
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-to {
      opacity: 0
    }
    .lider-enter-active, .lider-leave-active {
      transition: width .3s
    }
    .lider-enter, .lider-leave-to {
      width: 0
    }
    /*table*/
    .tabelist table{width:100%;}
    .tabelist td{padding:0.08rem  0rem 0.08rem 0rem;border-bottom:0.01rem solid #424851;text-align: center;}
    .tabelist th{padding:0.08rem 0rem 0.08rem 0rem;background:#3a4350;text-align: center;}
    .tabelist table em{display:inline-block;width:0.1rem;height:0.1rem;margin-left:0.03rem;border:0.01rem solid #666666;margin-top:0.05rem;background:#666666;}
    .tabelist table em.blue{background:#0f9ec7;border:0.01rem solid #0f9ec7;}
    .tabelist table em.yellow{background:#ffe60f;border:0.01rem solid #ffe60f;}
    .tabelist table em.orange{background:#ff7214;border:0.01rem solid #ff7214;}
    .tabelist table em.pink{background:#f82454;border:0.01rem solid #f82454;}
    .tabelist table em.pers{background:#de00ff;border:0.01rem solid #f82454;}
    .tabelist td.setLf,.tabelist th.setLf{padding-left:0.12rem;text-align: left;}
    /*message*/
    .mg_tab h2{color:#fff;font-size: 0.14rem;padding:0.1rem 0.12rem 0.1rem 0.12rem;}
    .adress,.nomb,.banben,.nomb,.nusofte{padding:0rem 0.12rem 0rem 0.12rem;}
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
    .code_up {position:relative;}
    .code_up input{width:0.90rem; height:0.25rem;border:none;padding:0;position:absolute;top:0.05rem;left:0.05rem;opacity: 0}
    .code_up span {display:inline-block;width:0.90rem; height:0.25rem;background:#495566;color:#fff;text-align: center;line-height: 0.25rem;border-radius: 0.03rem;vertical-align: middle;cursor: pointer;margin-top:0.07rem;margin-left:0.05rem;}
    .code_up button{width:0.90rem; height:0.25rem;border-radius: 0.03rem;line-height: 0.25rem;background:#3a4350;color:#757c85;vertical-align: middle;margin-top:0.07rem;margin-left:0.23rem;}
    /*修复情况*/
    .sofeset h2 {height:0.32rem;border-bottom:1px solid #424851;}
    .sofeset h2 span{display:inline-block;color:#0ba9b2;width:86%;    padding-left: 0.14rem;line-height: 0.32rem;}
    .sofeset h2 a{color:#65758d;}
    .cort_nums{padding:0.1rem 0.12rem;border-bottom:1px solid #424851;}
    .ranges{margin:0.05rem 0;    height: 0.06rem;}
    .ranges strong{display:inline-block;width:100%; height:0.06rem;background: #ff7214;border-radius: 0.1rem;}
    .ranges b{display:inline-block;height:100%;background: #0ba9b2;vertical-align: top;border-radius: 0.1rem;}
    .result span{display:inline-block;width:1.2rem;color:#0ba9b2;margin-left:0.05rem;}
    .result i{display:inline-block;width:1.1rem;text-align: right;color:#f8924e;}
    
    .soft_img{display:block;width:0.3rem; height:0.3rem;float:left;margin-right:0.1rem;}
    .soft_img img{display:inline-block;width:0.3rem; height:0.3rem;}
    .soft_name{width:1.6rem;display:block;float:left;margin-top:0.05rem;}
    .st_gn i{float:left;}
    .st_gn em{margin-top:0.05rem;display:block;float:left;}
    .st_gn{height:0.3rem;}
    /*自定义*/
    .sofelist a{display:inline-block;width:0.38rem;height:0.38rem;margin:0.24rem 0.2rem 0rem 0.2rem;}
    .echarts-cont{display:-webkit-box;}
    .echarts-cont>div{ -webkit-box-flex:1; box-flex:1;}
</style>