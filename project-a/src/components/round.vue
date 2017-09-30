<template>
<div>
	<div id="relation" style="width:720px;height:500px;background:#fff;"></div>
</div>
</template>
<script>
export default {
	   data(){
			let option = {
			    series: [{
			            type: 'graph',
			            layout: 'force',
			            draggable: false,
			            roam: true,
			            nodeScaleRatio: 1,
			            // force: {
			            //     layoutAnimation: true,
			            //     repulsion: 200,
			            //     gravity: 0.3
			            // },
			            force : { //力引导图基本配置
		                        //initLayout: ,//力引导的初始化布局，默认使用xy轴的标点
		                        repulsion : 400,//节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
		                        gravity : 0.01,//节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
		                        edgeLength :20,//边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
		                        layoutAnimation : true
		                    //因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画，在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。                        
                        },
			            itemStyle : {//===============图形样式，有 normal 和 emphasis 两个状态。normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
	                        normal : { //默认样式
	                            label : {
	                                show : true
	                            },
	                            borderType : 'solid', //图形描边类型，默认为实线，支持 'solid'（实线）, 'dashed'(虚线), 'dotted'（点线）。
	                            borderColor : 'rgba(255,215,0,0.4)', //设置图形边框为淡金色,透明度为0.4
	                            borderWidth : 2, //图形的描边线宽。为 0 时无描边。
	                            opacity : 1
	                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5

	                        },
	                        emphasis : {//高亮状态

	                        }
                        },
                        lineStyle : { //==========关系边的公用线条样式。
	                        normal : {
	                            color : '#FFF',
	                            width : '3',
	                            type : 'dotted', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
	                            curveness : 0, //线条的曲线程度，从0到1
	                            opacity : 1
	                        // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
	                        },
	                        emphasis : {//高亮状态

	                        }
                        },
			            // label: {
			            //     normal: {
			            //         show: 'show',
			            //         position: 'right',
			            //         formatter: '{b}',
			            //         textStyle: {
			            //           fontSize: '12',
			            //           color: '#fff'
			            //         }
			            //     }
			            // },
			            label : { //=============图形上的文本标签
	                        normal : {
	                            show : true,//是否显示标签。
	                            position : 'inside',//标签的位置。['50%', '50%'] [x,y]
	                            textStyle : { //标签的字体样式
	                                color : '#cde6c7', //字体颜色
	                                fontStyle : 'normal',//文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
	                                fontWeight : 'bolder',//'normal'标准'bold'粗的'bolder'更粗的'lighter'更细的或100 | 200 | 300 | 400...
	                                fontFamily : 'sans-serif', //文字的字体系列
	                                fontSize : 12, //字体大小
	                            }
	                        },
	                        emphasis : {//高亮状态

	                        }
                        },
			            edgeLabel : {//==============线条的边缘标签 
	                        normal : {
	                            show : false
	                        },
	                        emphasis : {//高亮状态

	                        }
                        },
			            symbolSize: [12, 12],
			            data: [
			                {
			                    "id": 0, 
			                    "name": "安全盾0,0", 
			                    "symbol": "",
			                    "symbolSize" :100,
			                    "category" : 0,
			                     itemStyle: {
                                    normal: {
                                        color: '#2e3540',
                                        borderColor:'#fff'
                                    }
                                }

			                }, 
			                {
			                    "id": 1, 
			                    "name": "已联接", 
			                    "symbol": "",
			                    "symbolSize" :70,
			                    "category" : 0,
			                     itemStyle: {
                                    normal: {
                                        color: '#2e3540',
                                        borderColor:'#fff'
                                    }
                                }

			                }, 
			                {
			                    "id": 2, 
			                    "name": "未连接", 
			                    "symbol": "",
			                    "symbolSize" :70,
			                    "category" : 0,
			                     itemStyle: {
                                    normal: {
                                        color: '#2e3540',
                                        borderColor:'#fff'
                                    }
                                }

			                }, 
			                {
			                    "id": 3, 
			                    "name": "高危1,1", 
			                    "symbol": "roundRect",
			                    "symbolSize" : 60,
			                    "category" : 1,
			                    itemStyle: {
                                    normal: {
                                        color: '#2e3540',
                                        borderColor:'#ff6356'
                                    }
                                }
			                },
			                {
			                    "id": 4, 
			                    "name": "安全2,2", 
			                    "symbol": "roundRect",
			                    "symbolSize" :60,
			                    "category" : 1,
			                    itemStyle: {
                                    normal: {
                                        color: '#2e3540',
                                        borderColor:'#45a4ff'
                                    }
                                }
			                }, 
			                {
			                    "id": 5, 
			                    "name": "中危3,3", 
			                    "symbol": "roundRect",
			                    "symbolSize" : 60,
			                    "category" : 1,
			                     itemStyle: {
                                    normal: {
                                        color: '#2e3540',
                                        borderColor:'#f1da6f'
                                    }
                                }
			                },
			                {
			                    "id": 6, 
			                    "name": "低危4,4", 
			                    "symbol": "roundRect",
			                    "symbolSize" :60,
			                    "category" : 1,
			                    itemStyle: {
                                    normal: {
                                        color: '#2e3540',
                                        borderColor:'#ff954f'
                                    }
                                }
			                },
			                {
			                    "id": 7, 
			                    "name": "紧急5,5", 
			                    "symbol": "roundRect",
			                    "symbolSize" :60,
			                    "category" : 1,
			                    itemStyle: {
                                    normal: {
                                        color: '#2e3540',
                                        borderColor:'#b45cf8'
                                    }
                                }
			                },
			                {
			                    "id": 8, 
			                    "name": "失联6,6", 
			                    "symbol": "roundRect",
			                    "symbolSize" :60,
			                    "category" : 2,
			                    itemStyle: {
                                    normal: {
                                        color: '#2e3540',
                                        borderColor:'#f82454'
                                    }
                                }
			                },
			                {
			                    "id": 9, //source要指的num
			                    "name": "8,1", 
			                    "symbol": "",
			                    "symbolSize" :60,
			                    itemStyle: {
                                    normal: {
                                        color: '#2e3540',
                                        borderColor:'#505455'
                                    }
                                }
			                    //"category" : 1,//"target"要指的num
			                },
			                {
			                    "id": 10, //source要指的num
			                    "name": "9,1", 
			                    "symbol": "",
			                    "symbolSize" :40,
			                    itemStyle: {
                                    normal: {
                                        color: '#2e3540',
                                        borderColor:'#505455'
                                    }
                                }
			                    //"category" : 1,//"target"要指的num
			                },
			                {
			                    "id": 11, //source要指的num
			                    "name": "10,1", 
			                    "symbol": "",
			                    "symbolSize" :40,
			                    //"category" : 1,//"target"要指的num
			                    itemStyle: {
                                    normal: {
                                        color: '#2e3540',
                                        borderColor:'#f1da6f'
                                    }
                                }
			                },
			                {
			                    "id": 12, //source要指的num
			                    "name": "11,1", 
			                    "symbol": "",
			                    "symbolSize" :40,
			                    //"category" : 1,//"target"要指的num
			                    itemStyle: {
                                    normal: {
                                        color: '#2e3540',
                                        borderColor:'#ff6356'
                                    }
                                }
			                },
			                {
			                    "id": 13, //source要指的num
			                    "name": "12,1", 
			                    "symbol": "",
			                    "symbolSize" :40,
			                    //"category" : 1,//"target"要指的num
			                },
			                {
			                    "id": 14, //source要指的num
			                    "name": "13,1", 
			                    "symbol": "",
			                    "symbolSize" :40,
			                    //"category" : 1,//"target"要指的num
			                }
			            ],
			            links:[
			                {
			                    "source": 1, 
			                    "target": 0
			                }, 
			                {
			                    "source": 2, 
			                    "target": 0
			                }, 
			                {
			                    "source": 3, 
			                    "target": 1
			                },
			                {
			                    "source": 4, 
			                    "target": 1
			                },
			                {
			                    "source": 5, 
			                    "target": 1
			                },
			                {
			                    "source": 6, 
			                    "target": 1
			                },
			                {
			                    "source": 7, 
			                    "target": 1
			                },
			                {
			                    "source": 8, 
			                    "target": 1
			                },
			                {
			                    "source": 9, 
			                    "target": 2
			                },
			                {
			                    "source": 10, 
			                    "target": 2
			                },
			                {
			                    "source": 11, 
			                    "target": 5
			                },
			                {
			                    "source": 12, 
			                    "target": 6
			                }
			            ]
			        }]
            }; 
		 // let   option = {
			//     backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
			//         offset: 0,
			//         color: '#2e3540'
			//     }, {
			//         offset: 1,
			//         color: '#2e3540'
			//     }]),
			//     tooltip: {},
			// 	    animationDuration: 3000,
			// 	    animationEasingUpdate: 'quinticInOut',
			// 	    series: [{
			// 	        name: '安全盾',
			// 	        type: 'graph',
			// 	        layout: 'force',
			// 	        force: {
			// 	            repulsion: 300
			// 	        },
			// 	        data: [{
			// 	            "name": "安全盾",
			// 	            "symbolSize": 140,
			// 	            "draggable": "true",
			// 	            "value": 27,
			// 	             itemStyle: {
			// 	                normal: {
			// 	                    color: '#2e3540',
			// 	                    borderColor:'#fff'
			// 	                }
			// 	             }
			// 	        }, {
			// 	            "name": "安全001",
			// 	            "value": 15,
			// 	            "symbolSize": 60,
			// 	            "category": "安全001",
			// 	            "draggable": "true",
			// 		         itemStyle: {
			// 		            normal: {
			// 		                color: '#45a4ff',
			// 		                borderColor:'#fff'
			// 		            }
			// 		         }
			// 	        }, {
			// 	            "name": "安全设备01",
			// 	            "symbolSize":13,
			// 	            "category": "安全001",
			// 	            "draggable": "true",
			// 	            "value": 1,
			// 	            itemStyle: {
			// 		            normal: {
			// 		                color: '#45a4ff',
			// 		                borderColor:'#fff'
			// 		            }
			// 		         }
			// 	        }, {
			// 	            "name": "安全设备02",
			// 	            "symbolSize": 13,
			// 	            "category": "安全001",
			// 	            "draggable": "true",
			// 	            "value": 1,
			// 	            itemStyle: {
			// 		            normal: {
			// 		                color: '#45a4ff',
			// 		                borderColor:'#fff'
			// 		            }
			// 		         }
			// 	        }, {
			// 	            "name": "安全设备03",
			// 	            "symbolSize": 15,
			// 	            "category": "安全001",
			// 	            "draggable": "true",
			// 	            "value": 1,
			// 	            itemStyle: {
			// 		            normal: {
			// 		                color: '#45a4ff',
			// 		                borderColor:'#fff'
			// 		            }
			// 		         }
			// 	        }, {
			// 	            "name": "高危002",
			// 	            "value": 60,
			// 	            "symbolSize": 60,
			// 	            "category": "高危002",
			// 	            "draggable": "true",
			// 	            itemStyle: {
			// 		            normal: {
			// 		                color: '#ff6356',
			// 		                borderColor:'#fff'
			// 		            }
			// 		         }
			// 	        }, {
			// 	            "name": "高危01",
			// 	            "symbolSize": 13,
			// 	            "category": "高危002",
			// 	            "draggable": "true",
			// 	            "value": 1,
			// 	            itemStyle: {
			// 		            normal: {
			// 		                color: '#ff6356',
			// 		                borderColor:'#fff'
			// 		            }
			// 		         }
			// 	        }, {
			// 	            "name": "高危02",
			// 	            "symbolSize": 13,
			// 	            "category": "高危002",
			// 	            "draggable": "true",
			// 	            "value": 1,
			// 	            itemStyle: {
			// 		            normal: {
			// 		                color: '#ff6356',
			// 		                borderColor:'#fff'
			// 		            }
			// 		         }
			// 	        }, {
			// 	            "name": "中危003",
			// 	            "value": 5,
			// 	            "symbolSize": 60,
			// 	            "category": "中危003",
			// 	            "draggable": "true",
			// 	            itemStyle: {
			// 		            normal: {
			// 		                color: '#ff954f',
			// 		                borderColor:'#fff'
			// 		            }
			// 		         }
			// 	        }, {
			// 	            "name": "孟德29",
			// 	            "symbolSize": 3,
			// 	            "category": "中危003",
			// 	            "draggable": "true",
			// 	            "value": 1
			// 	        }, {
			// 	            "name": "曹公44",
			// 	            "symbolSize": 7,
			// 	            "category": "中危003",
			// 	            "draggable": "true",
			// 	            "value": 1
			// 	        }, {
			// 	            "name": "失联006",
			// 	            "value": 40,
			// 	            "symbolSize": 60,
			// 	            "category": "失联006",
			// 	            "draggable": "true",
			// 	            itemStyle: {
			// 		            normal: {
			// 		                color: '#505455',
			// 		                borderColor:'#fff'
			// 		            }
			// 		         }
			// 	        }, {
			// 	            "name": "云长431",
			// 	            "symbolSize": 20,
			// 	            "category": "失联006",
			// 	            "draggable": "true",
			// 	            "value": 1
			// 	        }, {
			// 	            "name": "关公508",
			// 	            "symbolSize": 25,
			// 	            "category": "失联006",
			// 	            "draggable": "true",
			// 	            "value": 1
			// 	        }, {
			// 	            "name": "低危004",
			// 	            "value": 30,
			// 	            "symbolSize": 60,
			// 	            "category": "低危004",
			// 	            "draggable": "true",
			// 	            itemStyle: {
			// 		            normal: {
			// 		                color: '#f1da6f',
			// 		               borderColor:'#fff'
			// 		            }
			// 		         }
			// 	        }, {
			// 	            "name": "仲谋10",
			// 	            "symbolSize": 3,
			// 	            "category": "低危004",
			// 	            "draggable": "true",
			// 	            "value": 1
			// 	        }, {
			// 	            "name": "吴侯72",
			// 	            "symbolSize": 10,
			// 	            "category": "低危004",
			// 	            "draggable": "true",
			// 	            "value": 1
			// 	        }, {
			// 	            "name": "紧急005",
			// 	            "value": 20,
			// 	            "symbolSize": 60,
			// 	            "category": "紧急005",
			// 	            "draggable": "true",
			// 	            itemStyle: {
			// 		            normal: {
			// 		                color: '#b45cf8',
			// 		               borderColor:'#fff'
			// 		            }
			// 		         }
			// 	        }, {
			// 	            "name": "奉先15",
			// 	            "symbolSize": 3,
			// 	            "category": "紧急005",
			// 	            "draggable": "true",
			// 	            "value": 1
			// 	        }, {
			// 	            "name": "温侯12",
			// 	            "symbolSize": 3,
			// 	            "category": "紧急005",
			// 	            "draggable": "true",
			// 	            "value": 1
			// 	        }],
			// 	        links: [{
			// 	            "source": "安全盾",
			// 	            "target": "安全001"
			// 	        }, {
			// 	            "source": "安全001",
			// 	            "target": "使君70"
			// 	        }, {
			// 	            "source": "安全001",
			// 	            "target": "安全设备02"
			// 	        }, {
			// 	            "source": "安全001",
			// 	            "target": "安全设备03"
			// 	        }, {
			// 	            "source": "安全盾",
			// 	            "target": "高危002"
			// 	        }, {
			// 	            "source": "高危002",
			// 	            "target": "高危01"
			// 	        }, {
			// 	            "source": "高危002",
			// 	            "target": "高危02"
			// 	        }, {
			// 	            "source": "安全盾",
			// 	            "target": "中危003"
			// 	        }, {
			// 	            "source": "中危003",
			// 	            "target": "孟德29"
			// 	        }, {
			// 	            "source": "中危003",
			// 	            "target": "曹公44"
			// 	        }, {
			// 	            "source": "安全盾",
			// 	            "target": "失联006"
			// 	        }, {
			// 	            "source": "失联006",
			// 	            "target": "云长431"
			// 	        }, {
			// 	            "source": "失联006",
			// 	            "target": "关公508"
			// 	        }, {
			// 	            "source": "安全盾",
			// 	            "target": "张飞408"
			// 	        }, {
			// 	            "source": "张飞408",
			// 	            "target": "翼德55"
			// 	        }, {
			// 	            "source": "安全盾",
			// 	            "target": "赵云393"
			// 	        }, {
			// 	            "source": "赵云393",
			// 	            "target": "子龙95"
			// 	        }, {
			// 	            "source": "安全盾",
			// 	            "target": "低危004"
			// 	        }, {
			// 	            "source": "低危004",
			// 	            "target": "仲谋10"
			// 	        }, {
			// 	            "source": "低危004",
			// 	            "target": "吴侯72"
			// 	        }, {
			// 	            "source": "安全盾",
			// 	            "target": "紧急005"
			// 	        }, {
			// 	            "source": "紧急005",
			// 	            "target": "奉先15"
			// 	        }, {
			// 	            "source": "紧急005",
			// 	            "target": "温侯12"
			// 	        }, {
			// 	            "source": "安全盾",
			// 	            "target": "周瑜328"
			// 	        }, {
			// 	            "source": "周瑜328",
			// 	            "target": "公瑾60"
			// 	        }, {
			// 	            "source": "周瑜328",
			// 	            "target": "周郎35"
			// 	        }, {
			// 	            "source": "安全盾",
			// 	            "target": "魏延327"
			// 	        }, {
			// 	            "source": "魏延327",
			// 	            "target": "文长12"
			// 	        }, {
			// 	            "source": "安全盾",
			// 	            "target": "法学院"

			// 	        }],
			// 	        categories: [{
			// 	            'name': '安全001'
			// 	        }, {
			// 	            'name': '高危002'
			// 	        }, {
			// 	            'name': '中危003'
			// 	        }, {
			// 	            'name': '失联006'
			// 	        }, {
			// 	            //'name': '张飞408'
			// 	        }, {
			// 	            //'name': '赵云393'
			// 	        }, {
			// 	            'name': '低危004'
			// 	        }, {
			// 	            'name': '紧急005'
			// 	        }, {
			// 	            //'name': '周瑜328'
			// 	        }, {
			// 	           // 'name': '魏延327'
			// 	        }, {

			// 	        }],
			// 	        focusNodeAdjacency: true,
			// 	        roam: true,
			// 	        label: {
			// 	            normal: {

			// 	                show: true,
			// 	                position: 'top',

			// 	            }
			// 	        },
			// 	        lineStyle: {
			// 	            normal: {
			// 	                //color: 'source',
			// 	                curveness: 0,
			// 	                type: "solid"
			// 	            }
			// 	        }
			// 	    }]
   //       };
 			return{
                relationOption:option,//图标一
			}
	   },
	   methods:{
   //          resizeChart () {
			//     var w = $('body').width();
			//     var h = $('body').height();
			//     myChart.resize({
			//         width: w,
			//         height: h
			//     });
			//     option.series = getSeries();
			//     myChart.setOption(option, true);
			// }
	   },
	   mounted(){
            this._vue_charts = echarts.init(document.getElementById('relation'));
            this._vue_charts.setOption(this.relationOption);
       }	
}
</script>
<style>
	
</style>