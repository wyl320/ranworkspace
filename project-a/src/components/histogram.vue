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
			<span @click="setweekData(index)" :class="{cur:index==noindex}">{{item}}</span>
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
								    data : ['周一','周二','周三','周四','周五','周六','周日'],
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
								    data : ['周一','周二','周三','周四','周五','周六','周日'],
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
                linegramData:[],
                newlinegramData:[],
                day:['年','月','周'],
                noindex:2,
                xAxisdata1:[], 
                yAxisloop:[],
                yAxisrepaid:[],
			}
		},
		methods:{
            //请求图表数据
            dataLoophole:function(){
            	let self = this;
            	let promise = $.Deferred();
            	axios.get('http://www.mocky.io/v2/59dc87301000004b10ccd34c', {
                  params: {}
                })
                .then(function (response) {
                  if(response.data.code=="0"){
                      self.linegramData = response.data.data.weekNumber[0].charData
                      promise.resolve(response);
                  }else{
                      console.log(response.data.message);
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
            setweekData:function(ua){
            	this.noindex = ua;
            	let self = this;
                let promise = self.dataLoophole();
                self.xAxisdata1=[];
	              self.yAxisloop=[];
	              self.yAxisrepaid=[];
                //let xAxisdata1=[];
                //let yAxisloop =[];
                //let yAxisrepaid = [];
                  //promise.done(function(res){
                  	if(ua==0){
                  		  self.newlinegramData = self.linegramData.yearlist;
                  		  self.newlinegramData.forEach(function(da,i){
		                  self.xAxisdata1.push(da.year);//x轴数据
		                  self.yAxisloop.push(da.loopholeNumber);//y漏洞数据
		                  self.yAxisrepaid.push(da.repaired);//y已修复数据
		                });
                  	}else if(ua==1){
                          self.newlinegramData = self.linegramData.monthlist;
                  		  self.newlinegramData.forEach(function(da,i){
		                  self.xAxisdata1.push(da.month);//x轴数据
		                  self.yAxisloop.push(da.loopholeNumber);//y漏洞数据
		                  self.yAxisrepaid.push(da.repaired);//y已修复数据
		                }); 
                  	}else{
                          self.newlinegramData = self.linegramData.weeklist;
                  		  self.newlinegramData.forEach(function(da,i){
		                  self.xAxisdata1.push(da.day);//x轴数据
		                  self.yAxisloop.push(da.loopholeNumber);//y漏洞数据
		                  self.yAxisrepaid.push(da.repaired);//y已修复数据
		                }); 
                  	}     
                  //});
	              self.Hisoption.xAxis[1].data = [];
	              self.Hisoption.xAxis[0].data = [];
	              self.Hisoption.series[0].data = [];
	              self.Hisoption.series[1].data = [];
	              self.Hisoption.xAxis[1].data = self.xAxisdata1;
	              self.Hisoption.xAxis[0].data = self.xAxisdata1;
	              self.Hisoption.series[0].data = self.yAxisloop;
	              self.Hisoption.series[1].data = self.yAxisrepaid;
                  //console.log("yAxisrepaid")
	              //console.log(self.Hisoption.series[0].data);
	              self._vue_charts.setOption(self.Hisoption);             	
            },
            setchartDay:function(){
            	self.newlinegramData = self.linegramData.weeklist;
            	self.xAxisdata1=[];
	            self.yAxisloop=[];
	            self.yAxisrepaid=[];
            	self.newlinegramData.forEach(function(da,i){
		                  self.xAxisdata1.push(da.day);//x轴数据
		                  self.yAxisloop.push(da.loopholeNumber);//y漏洞数据
		                  self.yAxisrepaid.push(da.repaired);//y已修复数据
		        }); 
            }
		},
		created(){
            this.dataLoophole();
            //this.setweekData()
		},
		mounted(){
			//this.setchartDay();
            this._vue_charts = echarts.init(document.getElementById('Hisoption'));
            this._vue_charts.setOption(this.Hisoption);
            
		}
	}
</script>
<style>
	#Hisoption{width:513px;height:338px;padding:20px;}
</style>