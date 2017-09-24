<template>
<div>
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
            <vueScrollbar classes="my-scrollbar" ref="Scrollbar">
       
    	            <div class="carvbar scroll-me">
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
                  </vueScrollbar>
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
</template>
<script>
  // import VueScrollbar from 'vue2-scrollbar';
  // import vue2scrollbar/style/vue2scrollbar.css;

    import axios from 'axios'; 
    //import vScrollbar from 'vue-scrollbar-custom'
	export default {
    components: {  vueScrollbar: Vue2Scrollbar },
		data(){
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
                          backgroundColor:'yellow',
                          show:false
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
                            data : ['六月','七月','八月']
                          }
                      ],
                      yAxis : [
                          {
                              type : 'value',
                              axisLabel : {
                                  formatter: '{value} 个'
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
 
			return {
           sebeiList:"",//设备
           newSebeiList:"",//新设备数据
           lineUptionDatas:lineoptionData,//图标三
           ishow_seacher:false,//是否显示搜索框
		       searchValue:"",//搜索框输入值
		       tubiao:[], //图标三的头部
		       installline:[], //图标三的初始值 
		       time:null
			}
		},
		methods:{
            //请求设备信息
            loadsebeiList:function(){
            	let _this = this;
            	axios.get('http://www.mocky.io/v2/59c79f8c1100006200c39ba0', {
                  params: {}
                })
                .then(function (response) {
                  if(response.data.code=="0"){
                      _this.sebeiList = response.data.data.sebeiList;
                      _this.newSebeiList = response.data.data.sebeiList;
                      _this.tubiao.push(response.data.data.sebeiList[0]);
                      // _this.mounthAdata.push(response.data.data.sebeiList[0].mounthA);
                      // _this.mounthBdata.push(response.data.data.sebeiList[0].mounthB);
                      // _this.mounthCdata.push(response.data.data.sebeiList[0].mounthC)
                       //console.log(_this.mounthAdata);
                       // $(this.$refs.test3).jscrollbar();
                  }else{
                      console.log(response.data.message);
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
                let _istData = [];
                for(var i=0;i<this.sebeiList.length;i++){
                  let da = this.sebeiList[i];
                  if(da.sebeiName.indexOf(this.searchValue) != -1){
                      _istData.push(da);
                  }
                }
                this.newSebeiList = _istData;
              }
            },
            //点击列表切换数据
            changeDatas(item){
              
              let mouth = [];
              let allAeriesY = [];
              let repairAeriesY = [];
              let otherAeriesY = [];

              item.charData.list.forEach(function(da,i){
                  console.log("   ===== "+da.month);
                  mouth.push(da.month);
                  allAeriesY.push(da.allNoudong);
                  repairAeriesY.push(da.allNoudong);
                  otherAeriesY.push(da.allNoudong-da.allNoudong);
              });
               
              console.log(this.lineUptionDatas.xAxis[0].data);
              this.lineUptionDatas.xAxis[0].data = mouth;
              console.log(" --------------------------- "); 
              console.log(this.lineUptionDatas.xAxis[0].data);
              
              this.lineUptionDatas.series[0].data = [];
              this.lineUptionDatas.series[1].data = [];
              this.lineUptionDatas.series[2].data = [];

              this.lineUptionDatas.series[0].data = allAeriesY;
              this.lineUptionDatas.series[1].data = repairAeriesY;
              this.lineUptionDatas.series[2].data = otherAeriesY;

              this.lineUptionDatas.series[0].name = item.charData.seriesType[0];
              this.lineUptionDatas.series[1].name = item.charData.seriesType[1];
              this.lineUptionDatas.series[2].name = item.charData.seriesType[2];

              this._vue_charts3.setOption(this.lineUptionDatas);
              // debugger;
              // console.log(this.lineUptionDatas);
                // let ALndata = item.mounthA;
                // let BLndata = item.mounthB;
                // let CLndata = item.mounthC;
                // this.tubiao = [];
                // this.tubiao.push(item);

                // this.mounthAdata = [];
                // this.mounthBdata = [];
                // this.mounthCdata = [];
                // this.mounthAdata.push(ALndata.allNoudong,ALndata.repairNoudong,ALndata.allNoudong-ALndata.repairNoudong);
                // this.mounthBdata.push(BLndata.allNoudong,BLndata.repairNoudong,BLndata.allNoudong-BLndata.repairNoudong);
                // this.mounthCdata.push(CLndata.allNoudong,CLndata.repairNoudong,CLndata.allNoudong-CLndata.repairNoudong);
            },
            lognt(item){
                 console.log("dddddss")
            },
            setRound(){
                  if((screen.width == 1680) && (screen.height == 1050)){
                     $("#line3 canvas").css({"width":"325px","height":"180px","marginLeft":"10px"});
                  }else if ((screen.width == 1280) && (screen.height == 800)){
                     console.log(screen.width)
                     $("#line3").css({"width":"300px","height":"180px"});
                     $("#line3 canvas").css({"width":"260px","height":"165px","top":"-13px","left":"3px"});
                  }else{
                      console.log(screen.height)
                  }
            }
		},
		created(){
            this.loadsebeiList();
		},
		mounted(){
			      echarts.registerTheme('customed', this.lineUptionDatas)
            this._vue_charts3 = echarts.init(document.getElementById('line3'));
            this._vue_charts3.setOption(this.lineUptionDatas);
            this.setRound();
		},
		watch:{
			sebeiList(){
		    	return this.sebeiList;
		  },
      lineUptionDatas(){
         return this.lineUptionDatas;
      }
		}
	}
</script>
<style scoped>
.searchTb a{vertical-align:middle;display:inline-block; width:0.12rem;height:0.12rem;background:url(../assets/images/det.png) top center;background-repeat: no-repeat;}
.searchTb button{width:0.21rem;height:0.21rem;background:url(../assets/images/seach.png) top center;background-repeat: no-repeat;}
.scrollbar-main{
    /*width: 200px;*/
    /*height:240px;*/
    margin: 0 auto;
        /*width: 630px;*/
        overflow: hidden;
        height: 243px;
        background: gray;
  }
.tuli{
  font-size: 10px;
}

  /*The Wrapper*/
.my-scrollbar{
  /*width: 35%;*/
  min-width: 300px;
  /*max-height: 150px;*/
   height: 243px;
}
.carvbar{
  height: auto;
}
/*The Content*/
.scroll-me{
  /*min-width: 300px;*/
  width: 100%;
}
.vue-scrollbar__wrapper{background:#2e3440;}
.vue-scrollbar__scrollbar-vertical .scrollbar{
  border-radius: 15px  !important;
  width:5px  !important;
}
.vue-scrollbar__scrollbar-vertical{
  width:5px  !important;
  background: #2e3440  !important;
}
</style>