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
          <div class="echarts-cont">
              <div id="line"  style="width:180px;height:180px;"></div>
              <div id="line2" style="width:180px;height:180px;"></div>
              <template v-for="(item,index) in listArrysoce.numList">
              <span class="leftNm" :class="{'ln':index ==1}">{{item.text}}</span>
              <span class="rightNm":class="{'ln2':index ==1}">{{item.currentTime}}</span>
              </template>
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
  		 				   <input type="text" placeholder="请输入设备名称" v-show="ishow_seacher" v-model="searchValue" @keyup="key_up">
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
            </table>
            <div class="carvbar">
                  <table>
                          <template v-for="item in newSebeiList">
                            <tr @click="changeDatas(item)">
                              <td :style="{width:'25%'}" class="setLf">{{item.sebeiName}}</td>
                              <td :style="{width:'13%'}">{{item.freeSoftware}}</td>
                              <td :style="{width:'13%'}">{{item.loopholeNumber}}</td>
                              <td :style="{width:'20%'}">
                                <em :class="{blue:item.levl=='anquan'}"></em>
                                <em :class="{yellow:item.levl=='diwei'}"></em>
                                <em :class="{orange:item.levl=='zhongwei'}"></em>
                                <em :class="{red:item.levl=='gaowei'}"></em>
                                <em :class="{pers:item.levl=='jingji'}"></em>
                              </td>
                              <td :style="{width:'21%'}">{{item.timer}}</td>
                              </tr>
                          </template>
                  </table>
            </div>
		 			</div>
		 		</div>
		 		<!--图表-->
		 		<div class="cpmessage">
		 			<div class="mg_tab">
		 				<h2>主机名称</h2>
            <template v-for="item in tubiao">
		 				<div class="adress"><span>Mac地址 </span><em>{{item.macAdress}}</em></div>
		 				<div class="banben"><b>系统版本</b><em>{{item.system}} </em> <b class="N_heba">内核版本</b> <em>{{item.core}}</em></div>
		 				<div class="nomb">
		 					<strong class="nusofte_a">漏洞总数量</strong><span class="nusofte_sa">{{item.totaLoophol}}</span>
		 					<strong class="nusofte_b">监测开源软件</strong><span class="nusofte_sb">{{item.watchSoft}}</span>
		 				</div>
            </template>
		 			</div>
          <!--柱状图-->
          <div class="echarts">
              <div id="line3" :style="{width:'350px',height:'200px'}"></div>
          </div>
          <ul class="tuli">
            <li><em class="blue"></em>已修复漏洞数量的分布统计</li>
            <li><em class="yellow"></em>未修复漏洞数量的分布统计</li>
            <li><em class="pink"></em>存在漏洞数量的分布统计</li>
          </ul>
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
		 		<div class="cort_nums" v-for="(item,index) in repaireList">
		 			<div class="st_gn clearfix">
            <span class="soft_img"><img src="../assets/images/softlog.png" alt=""></span>
            <div class="soft_name" v-if="item.expanded"><i>{{item.softName}}</i></div>
            <!-- <div class="pulldown2" v-else>
               <autocomplate v-on:increment="lognt"></autocomplate>
            </div> -->
           <div class="pulldown" v-else> 
               <input type="text" value="" v-model="sofevalue" @blur="Hidepulldown(item)" @focus="Allpulldown(item)" @keyup="Softkey_up(item)">
               <ul v-show="item.ulexpanded">
                 <li @click="addItem(item)" v-for="its in newsoftseach">{{its.sofeName}}</li>
               </ul>
            </div>
            <em @click="modfined(item)">编辑</em>
          </div>
		 			<div class="ranges"><strong><b style="width:50%"></b></strong></div>
		 			<div class="result"><span>已修复 {{item.repaired}}</span><i>未修复 {{item.unrepaired}}</i></div>
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
  import Scroll from '@/components/scroll';
  import _ from 'lodash';
  import Autocomplate from '@/components/autocomplate'
  // import {liquidfillOption}  from '@/chart-data/chartData';

	export default {
		 components: {liquid,Scroll,Autocomplate},
		 data(){
       let liquidfillOption = {
        series: [{
            type: 'liquidFill',
            data: [{name: '28374'},0.6],
            color: ['#916f44'],
            center: ['45%', '35%','10%', '10%'],
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
            center: ['40%', '35%','10%', '10%'],
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
       let lineoptionData = {
                      tooltip : {
                          trigger: 'axis',
                          axisPointer:{
                            type:'none'
                          }
                      },
                      legend: {
                          orient:'vertical',
                          x:'left',
                          y:'bottom',
                          paddingBottom:'0px',
                          backgroundColor:'yellow'
                      },
                      toolbox: {
                          show : false,
                      },
                      calculable : true,
                      grid: {x:30, y2:30, x2:3},
                      xAxis : [
                          {
                              type : 'category',
                              boundaryGap : false,
                              axisTick:{
                                 show:false, 
                              },
                              splitLine:{
                               show:false
                              },
                              splitArea:{
                               show:false
                              },
                              axisLabel:{
                                show:true,
                                textStyle:{
                                     color:'#fff',
                                     baseline:'top',
                                     fontSize:12
                                }
                              },
                              axisLine:{
                                show:false,
                                onZero:true,
                                lineStyle:{
                                   color:'yellow',
                                   type:'solid',
                                   width:2
                                }
                            },
                             // data : ['六月','七月','八月','周四','周五','周六','周日']
                             data : ['六月','七月','八月']
                          }
                      ],
                      yAxis : [
                          {
                              type : 'value',
                              axisLabel : {
                                  formatter: '{value} °C'
                              },
                              axisTick:{
                                 show:false, 
                              },
                              splitLine:{
                               show:true
                              },
                              splitArea:{
                               show:false
                              },
                              axisLabel:{
                                show:true,
                                textStyle:{
                                     color:'#fff',
                                     baseline:'top',
                                     fontSize:12
                                }
                              },
                              axisLine:{
                                show:false,
                                onZero:true,
                                lineStyle:{
                                   color:'red',
                                   type:'solid',
                                   width:2
                                }
                            }
                          }
                      ],
                      series : [
                          {
                              name:'最高气温',
                              type:'line',
                              itemStyle : {  
                                  normal : {  
                                      color:'#fbb150',  
                                      lineStyle:{  
                                          color:'#fbb150'  
                                      }  
                                  }  
                              },
                              smooth:false,
                              markPoint : {
                                data : [
                                    {type : 'max', name: '最大值'}
                                ]
                              },
                              data:[0, 80, 15]
                          },
                          {
                              name:'最低气温',
                              type:'line',
                              itemStyle : {  
                                  normal : {  
                                      color:'#f92454',  
                                      lineStyle:{  
                                          color:'#f92454'  
                                      }  
                                  }  
                              },
                              smooth:false,
                              markPoint : {
                                data : [
                                    {type : 'max', name: '最大值'}
                                ]
                              },
                              data:[1, 40, 68]
                          },
                          {
                              name:'其他',
                              type:'line',
                              itemStyle : {  
                                  normal : {  
                                      color:'#4ec5f7',  
                                      lineStyle:{  
                                          color:'#4ec5f7'  
                                      }  
                                  }  
                              },
                              smooth:false,
                              markPoint : {
                                data : [
                                    {type : 'max', name: '最大值'}
                                ]
                              },
                              data:[14, 35, 2]
                          }
                      ]
       };
       let countData = {
          listArrysoce:"",//水球图模块数据变量
          mationList:"" ,//威胁情报模块数据变量
          loopholeList:"",//安全响应
          sebeiList:"",//设备
          newSebeiList:"",//新设备数据
          chartDataOption:liquidfillOption,//图标一
          chartUpdateOption2:liquidfillOption2,//图标二
          lineUptionDatas:lineoptionData,//图标三
          ishow_seacher:false,//是否显示搜索框
          searchValue:"",//搜索框输入值
          tubiao:[], //图标三的头部
          installline:[], //图标三的初始值 
          repaireList:"",//修复情况
          mounthAdata:[],//第一个月数据情况
          mounthBdata:[],//第二个月数据情况
          mounthCdata:[],//第三个月数据情况
          softseach:[
               // {"name":"jquery"},
               // {"name":"ps"},
               // {"name":"js"}
          ],
          newsoftseach:[
               // {"name":"jquery"},
               // {"name":"ps"},
               // {"name":"js"}
          ],
          sofevalue:""
       };//数据汇总数据源
		   return{
        ...countData,
        time:null
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
                axios.get('http://www.mocky.io/v2/59c4ec934000000601b25c22', {
                  params: {}
                })
                .then(function (response) {
                  if(response.data.code=="0"){
                      _this.listArrysoce = response.data.data;
                      //console.log(_this.listArrysoce)
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
                      //console.log(_this.mationList)
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
                      //console.log(_this.loopholeList)
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
            	axios.get(' http://www.mocky.io/v2/59c4773c110000960499cda5', {
                  params: {}
                })
                .then(function (response) {
                  if(response.data.code=="0"){
                      _this.sebeiList = response.data.data.sebeiList;
                      _this.newSebeiList = response.data.data.sebeiList;
                      _this.tubiao.push(response.data.data.sebeiList[0]);
                      _this.mounthAdata.push(response.data.data.sebeiList[0].mounthA);
                      _this.mounthBdata.push(response.data.data.sebeiList[0].mounthB);
                      _this.mounthCdata.push(response.data.data.sebeiList[0].mounthC)
                       //console.log(_this.mounthAdata);
                  }else{
                      console.log(response.data.message);
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            },
            //请求修复情况
            loadrepaireList:function(){
              let _this = this;
              axios.get(' http://www.mocky.io/v2/59c3a7d0110000080399cbe7', {
                  params: {}
                })
                .then(function (response) {
                  if(response.data.code=="0"){
                      _this.repaireList = response.data.data.repaireList;
                      //console.log(_this.repaireList)
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
            },
            scrollFn(e) {
              console.log(e.target.className)
              console.log(e.target.scrollTop)
            },
            //
            key_up(){
                let self = this;
                if(this.time != null ){
                  clearTimeout(this.time);
                  this.time = null;
                }
                this.time = setTimeout(function(){
                  self.getSearch();
                },1000);          
            },
            getSearch(){
              if(!this.sebeiList)return;
              this.newSebeiList = [];
              if(this.searchValue == ""){
                Object.assign(this.newSebeiList, this.sebeiList);
              }else{
                for(var i=0;i<this.sebeiList.length;i++){
                  let da = this.sebeiList[i];
                  if(da.sebeiName.indexOf(this.searchValue) != -1){
                      this.newSebeiList.push(da);
                  }
                }
              }
            },
            Softkey_up(){
                let self = this;
                if(this.time != null ){
                  clearTimeout(this.time);
                  this.time = null;
                }
                this.time = setTimeout(function(){
                  self.getSoft();
                },1000);          
            },
            //焦点取数据
            getlist(){
               let _this = this;
               let promise = $.Deferred();
               axios.get('http://www.mocky.io/v2/59c668ae4000008d02afe81f', {
                   params: {}
               })
               .then(function (response) {
                  if(response.data.code=="0"){
                     _this.softseach = response.data.data.softlist;
                    promise.resolve();
                  }else{
                      console.log(response.data.message);
                      promise.reject();
                  }
               })
               .catch(function (error) {
                 console.log(error);
                  promise.reject();
                });
               return promise;
            },
            getSoft(){
               let self = this;
               self.newsoftseach = [];
               if(self.sofevalue == ""){
                  Object.assign(self.newsoftseach, self.softseach);
                }else{
                  let promise = self.getlist();
                  promise.done(function(){
                      console.log(" --- ")
                      //console.log(self.softseach)
                      for(var i=0;i<self.softseach.length;i++){
                        let da = self.softseach[i];
                        if(da.sofeName.indexOf(self.sofevalue) != -1){
                            self.newsoftseach.push(da);
                        }
                      }
                      console.log(self.newsoftseach)
                  })
                }
            },
            modfined(item){
              item.expanded = !item.expanded
            },
            addItem(item){
              item.ulexpanded = false;
              item.expanded = true;
              this.sofevalue=item.name
            },
            Allpulldown(item){
                item.ulexpanded = true
            },
            Hidepulldown(item){
                item.ulexpanded = false;
                item.expanded = true;
            },
            //点击列表切换数据
            changeDatas(item){
                let ALndata = item.mounthA;
                let BLndata = item.mounthB;
                let CLndata = item.mounthC;
                this.tubiao = [];
                this.tubiao.push(item);

                this.mounthAdata = [];
                this.mounthBdata = [];
                this.mounthCdata = [];
                this.mounthAdata.push(ALndata.allNoudong,ALndata.repairNoudong,ALndata.allNoudong-ALndata.repairNoudong);
                this.mounthBdata.push(BLndata.allNoudong,BLndata.repairNoudong,BLndata.allNoudong-BLndata.repairNoudong);
                this.mounthCdata.push(CLndata.allNoudong,CLndata.repairNoudong,CLndata.allNoudong-CLndata.repairNoudong);
            },
            lognt(item){
                 console.log("dddddss")
            },
            setRound(){
                  if((screen.width == 1680) && (screen.height == 1050)){
                     $("#line canvas").css({"width":"190px","height":"190px"});
                     $("#line2 canvas").css({"width":"190px","height":"190px"});
                     $("#line3 canvas").css({"width":"325px","height":"180px","marginLeft":"10px"});
                  }else if ((screen.width == 1280) && (screen.height == 800)){
                     $("#line canvas").css({"top":"-16px"});
                     $("#line2 canvas").css({"left":"11px","top":"-16px"});
                     $("#line3").css({"width":"300px","height":"180px"});
                     $("#line3 canvas").css({"width":"260px","height":"165px","top":"-13px","left":"3px"});
                  }else{
                      console.log(screen.height)
                  }
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
		    },
        //修复情况
        repaireList:function(){
          return this.repaireList;
        },
        mounthAdata:function(){
          return this.mounthAdata;
        }
     },
		 created(){
            this.fullHeight();
            this.loadList();
            this.loadmationList();
            this.loadloopholeList();
            this.loadsebeiList();
            this.loadrepaireList()
		 },
     mounted:function(){
            this._vue_charts = echarts.init(document.getElementById('line'));
            this._vue_charts.setOption(this.chartDataOption);

            this._vue_charts2 = echarts.init(document.getElementById('line2'));
            this._vue_charts2.setOption(this.chartUpdateOption2);
            
      
            echarts.registerTheme('customed', this.lineUptionDatas)
            this._vue_charts3 = echarts.init(document.getElementById('line3'));
            this._vue_charts3.setOption(this.lineUptionDatas);
            this.setRound();

     },
     computed : {
          chartRound : function() {
              return document.documentElement.clientWidth * (100 / 1280)*2;
          }
     }
	}
</script>
<style scoped>
 .searchTb a{vertical-align:middle;display:inline-block; width:0.12rem;height:0.12rem;background:url(../assets/images/det.png) top center;background-repeat: no-repeat;}
.searchTb button{width:0.21rem;height:0.21rem;background:url(../assets/images/seach.png) top center;background-repeat: no-repeat;}
</style>