<template>
<div class="contHtion">
	<div id="Hisoption"></div>
	<div class="linkHbox"><span>年</span><em>/</em><span>月</span><em>/</em><span class="cur">周</span></div>
</div>
</template>
<script>
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
								    data : ['17日','18日','19日','19日','20日','21日','22日'],
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
								    data : ['17日','18日','19日','19日','20日','21日','22日'],
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
                Hisoption:Hisoption    
			}
		},
		methods:{

		},
		mounted(){
            this._vue_charts = echarts.init(document.getElementById('Hisoption'));
            this._vue_charts.setOption(this.Hisoption);
		}
	}
</script>
<style>
	#Hisoption{width:513px;height:338px;padding:20px;}
</style>