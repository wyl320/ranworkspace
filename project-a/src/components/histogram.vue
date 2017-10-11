<template>
<div class="contHtion">
	<div class="Hisoption" ref="chartbox"><div id="Hisoption" ref="maychart"></div></div>
	<div class="linkHbox">
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
						        left: '15',
						        top:'15',
						        textStyle:{
						        	color:"#fff",
						        	fontSize:"14",
						        	fontWeight:"normal"
						        }
						    },
							tooltip : {
							  trigger: 'axis'
							},
                            grid: {x:30, y2:30, x2:3,borderColor:'#383e47',left: '50',bottom:'25'},
							calculable : true,
							xAxis : [
								{
								    type : 'category',
								    data : ['周一','周二','周三','周四','周五','周六','周日'],
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
								},
								{
								    name:'已修复漏洞数量',
								    type:'bar',
								    barWidth: '35%',
								    xAxisIndex:1,
								    itemStyle: {normal: {color:'#0ba9b2', label:{show:false}}},
								    data:[40,155,95,75, 50,20,50]
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
            //设置周数据
            setClick:function(index){
            	 this.noindex = index;
            	if(index == 0 ){
            		this.setweekData("http://www.mocky.io/v2/59dd7294100000ef04a84d6d");
            	}else if(index == 1 ){ //
					this.setweekData("http://www.mocky.io/v2/59dd7249100000e004a84d6b");
            	}else if(index == 2 ){
            		this.setweekData("http://www.mocky.io/v2/59dd71a6100000e304a84d6a");
            	}
            },
            setweekData:function(url){
            	 let self = this;
            	 let promise = this.dataLoophole(url);
            	 promise.done(function(res){      	 	
					res=res.data;
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
            //根据分变率设置box高和宽
            setMapwt:function() { 
        	  let allHt = $(window).height()*0.431-40;//动态设置box的高
        	  let allWt = $(window).width()*0.3345-40;//动态设置box的宽
           	  $(".Hisoption").css({"width":allWt+"px","height":allHt+"px"});
            },
            //渲染图表
            setCartsize:function(){
            	 let self = this;
            	 let wt = $(".Hisoption").width();
                 let ht = $(".Hisoption").height();
                 self.$refs.maychart.style.width = wt + 'px';
                 self.$refs.maychart.style.height = ht + 'px';
            }
		},
		created(){
			this.setweekData("http://www.mocky.io/v2/59dd71a6100000e304a84d6a");
		},
		mounted(){
            this.setMapwt();
            this.setCartsize();             
            this._vue_charts = echarts.init(document.getElementById('Hisoption'));
            this._vue_charts.setOption(this.Hisoption);  
		}
	}
</script>
<style>
</style>