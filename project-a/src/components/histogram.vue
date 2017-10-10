<template>
<div class="contHtion">
	<div id="Hisoption"></div>
	<div class="linkHbox">
		<!-- <span @click="setweekData(0)">年</span>
		<em>/</em>
		<span @click="setweekData(1)">月</span>
		<em>/</em>
		<span class="cur" @click="setweekData(2)">周</span> -->
		<template v-for="(item,index) in day">
			<span @click="setClick(index)" :class="{cur:index==noindex}">{{item}}</span>
		    <em>/</em>
		</template>
	</div>
</div>
</template>
<script>
import axios from 'axios'
	export default {
		data(){
			    let Hisoption = {
			    	        title: {
						        text: '数据更新趋势统计',
						        textStyle:{
						        	color:"#fff",
						        	fontSize:"14",
						        	fontWeight:"normal"
						        }
						    },
							tooltip : {
							  trigger: 'axis'
							},
                            grid: {x:30, y2:30, x2:3,borderColor:'#383e47'},
							calculable : true,
							xAxis : [
								{
								    type : 'category',
								    data : ['a','v','周三','周四','周五','周六','周日'],
								    //data:this.xAxisdata1,
								    axisLabel:{
			                                      show:true,
			                                      interval:'auto',
			                                      textStyle:{
			                                           color:'#66676b',
			                                           baseline:'top',
			                                           fontSize:12
			                                      }
	                                    },
	                                    axisLine:{
			                                      show:false,
			                                      onZero:true,
			                                      lineStyle:{
			                                         color:'#66676b',
			                                         type:'solid',
			                                         width:2
			                                      }
	                                  },

								},
								{
								    type : 'category',
								    axisLine: {show:false},
								    axisTick: {show:false},
								    axisLabel: {show:false},
								    splitArea: {show:false},
								    splitLine: {show:false},
								    data : ['s','v','周三','周四','周五','周六','周日'],
								    //data:this.xAxisdata1,
								}
							],
							yAxis : [
										{
										    //type : 'value',
										    //axisLabel:{formatter:'{value} ms'},
										      type : 'value',
		                                      splitNumber: 4,
		                                      axisLabel : {
		                                          formatter: '{value} 个'
		                                      },
		                                      axisTick:{
		                                         show:false, 
		                                      },
		                                      splitLine:{
		                                        show:true,
		                                        lineStyle: {
		                                            color: '#464c58',
		                                            type: 'solid',
		                                            width: 1
		                                        }
		                                      },
		                                      splitArea:{
		                                       show:false
		                                      },
		                                      axisLabel:{
		                                        show:true,
		                                        textStyle:{
		                                             color:'#65696a',
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
								    name:'存在漏洞数量',
								    type:'bar',
								    barWidth: '35%',
								    itemStyle: {normal: {color:'#fb6362', label:{show:false}}},
								    data:[96,224,164,124,100,100,150]
								    //data:this.yAxisloop,
								},
								{
								    name:'已修复漏洞数量',
								    type:'bar',
								    barWidth: '35%',
								    xAxisIndex:1,
								    itemStyle: {normal: {color:'#0ba9b2', label:{show:false}}},
								    data:[40,155,95,75, 50,20,50]
								    //data:this.yAxisloop,
								},
							]
				};
			return{
                Hisoption:Hisoption,
                // linegramData:[],
                // newlinegramData:[],
                day:['年','月','周'],
                noindex:2,
			}
		},
		methods:{
            //请求图表数据
            dataLoophole:function(url){
            	let self = this;
            	let promise = $.Deferred();
            	axios.get(url, {
                  params: {}
                })
                .then(function (response) {
                  if(response.data.code=="0"){
                      // self.linegramData = response.data.data.weekNumber[0].charData
                      promise.resolve(response);
                  }else{
                      // console.log(response.data.message);
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
            //设置周数据
            setClick:function(index){
            	 this.noindex = index;
            	if(index == 0 ){
            		this.setweekData("");
            	}else if(index == 1 ){ //
					this.setweekData("");
            	}else if(index == 2 ){
            		this.setweekData("http://www.mocky.io/v2/59dc87301000004b10ccd34c");
            	}
            },
            setweekData:function(url){
            	let self = this;
            	 let promise = this.dataLoophole(url);
            	 promise.done(function(res){
            	 	res = {
					    "code":"0",
					    "message":"",
					    "data":[
					        {"id":"7001","xlabel":"周一","loopholeNumber":"96","repaired":"40"},
					        {"id":"7002","xlabel":"周二","loopholeNumber":"224","repaired":"155"},
					        {"id":"7003","xlabel":"周三","loopholeNumber":"164","repaired":"95"},
					        {"id":"7004","xlabel":"周四","loopholeNumber":"124","repaired":"75"},
					        {"id":"7005","xlabel":"周五","loopholeNumber":"100","repaired":"50"},
					        {"id":"7006","xlabel":"周六","loopholeNumber":"100","repaired":"20"},
					        {"id":"7007","xlabel":"周日","loopholeNumber":"150","repaired":"50"}
					    ]
					};
            	 	let xAxisdata1=[];
		            let yAxisloop=[];
		            let yAxisrepaid=[];
              		res.data.forEach(function(da,i){
	                  xAxisdata1.push(da.xlabel);//x轴数据
	                  yAxisloop.push(da.loopholeNumber);//y漏洞数据
	                  yAxisrepaid.push(da.repaired);//y已修复数据
		             });

              		  self.Hisoption.xAxis[1].data = [];
		              self.Hisoption.xAxis[0].data = [];
		              self.Hisoption.series[0].data = [];
		              self.Hisoption.series[1].data = [];
		              self.Hisoption.xAxis[1].data = xAxisdata1;
		              self.Hisoption.xAxis[0].data = xAxisdata1;
		              self.Hisoption.series[0].data = yAxisloop;
		              self.Hisoption.series[1].data = yAxisrepaid;
		              self._vue_charts.setOption(self.Hisoption);        
            	 })
            },
           //  setweekData_back:function(ua,dataList,type){
           //  	this.noindex = ua;
           //  	let self = this;
           //      let promise = self.dataLoophole();
           //      let xAxisdata1=[];
	          //   let yAxisloop=[];
	          //   let yAxisrepaid=[];

		         // //  self.newlinegramData = self.linegramData.yearlist;
	      		  // // self.newlinegramData.forEach(function(da,i){
	          // //     xAxisdata1.push(da.year);//x轴数据
	          // //     yAxisloop.push(da.loopholeNumber);//y漏洞数据
	          // //     yAxisrepaid.push(da.repaired);//y已修复数据
 
           //        	if(ua==0){
           //        		  self.newlinegramData = self.linegramData.yearlist;
           //        		  self.newlinegramData.forEach(function(da,i){
		         //          xAxisdata1.push(da.year);//x轴数据
		         //          yAxisloop.push(da.loopholeNumber);//y漏洞数据
		         //          yAxisrepaid.push(da.repaired);//y已修复数据
		         //        });
           //        	}else if(ua==1){
           //                self.newlinegramData = self.linegramData.monthlist;
           //        		  self.newlinegramData.forEach(function(da,i){
		         //          xAxisdata1.push(da.month);//x轴数据
		         //          yAxisloop.push(da.loopholeNumber);//y漏洞数据
		         //          yAxisrepaid.push(da.repaired);//y已修复数据
		         //        }); 
           //        	}else{
           //                self.newlinegramData = self.linegramData.weeklist;
           //        		  self.newlinegramData.forEach(function(da,i){
		         //          xAxisdata1.push(da.day);//x轴数据
		         //          yAxisloop.push(da.loopholeNumber);//y漏洞数据
		         //          yAxisrepaid.push(da.repaired);//y已修复数据
		         //        }); 
           //        	}     
	          //     self.Hisoption.xAxis[1].data = [];
	          //     self.Hisoption.xAxis[0].data = [];
	          //     self.Hisoption.series[0].data = [];
	          //     self.Hisoption.series[1].data = [];
	          //     self.Hisoption.xAxis[1].data = xAxisdata1;
	          //     self.Hisoption.xAxis[0].data = xAxisdata1;
	          //     self.Hisoption.series[0].data = yAxisloop;
	          //     self.Hisoption.series[1].data = yAxisrepaid;
	          //     self._vue_charts.setOption(self.Hisoption);             	
           //  },
  //           setChartWeek:function(){
  //           	let self = this;
  //           	self.newlinegramData = self.linegramData.weeklist;
  //           	let xAxisdata1=[];
	 //            let yAxisloop=[];
	 //            let yAxisrepaid=[];
  //           	self.newlinegramData.forEach(function(da,i){
		//                   xAxisdata1.push(da.day);//x轴数据
		//                   yAxisloop.push(da.loopholeNumber);//y漏洞数据
		//                   yAxisrepaid.push(da.repaired);//y已修复数据
		//         }); 
		       
		//         self.Hisoption.xAxis[1].data = [];
	 //              self.Hisoption.xAxis[0].data = [];
	 //              self.Hisoption.series[0].data = [];
	 //              self.Hisoption.series[1].data = [];
	 //              self.Hisoption.xAxis[1].data = xAxisdata1;
	 //              self.Hisoption.xAxis[0].data = xAxisdata1;
	 //              self.Hisoption.series[0].data = yAxisloop;
	 //              self.Hisoption.series[1].data = yAxisrepaid;
	 //              self._vue_charts.setOption(self.Hisoption);      
  //              }
		},
		created(){
			this.setweekData("http://www.mocky.io/v2/59dc87301000004b10ccd34c");
			// let promise = this.dataLoophole();
   //          promise.done(function(res){
   //          	 self.setChartWeek();
   //          	//let softseach = res.data.data.list;
   //          });
		},
		mounted(){
            this._vue_charts = echarts.init(document.getElementById('Hisoption'));
            this._vue_charts.setOption(this.Hisoption);
            console.log("aaaa") 
		}
	}
</script>
<style>
	#Hisoption{width:513px;height:338px;padding:20px;}
</style>