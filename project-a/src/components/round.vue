<template>
<div>
	<div id="relation" style="width:500px;height:500px;background:#fff;"></div>
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
			            force: {
			                layoutAnimation: true,
			                repulsion: 200,
			                gravity: 0.3
			            },
			            force : { //力引导图基本配置
		                        //initLayout: ,//力引导的初始化布局，默认使用xy轴的标点
		                        repulsion : 100,//节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
		                        gravity : 0.03,//节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
		                        edgeLength :80,//边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
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
	                            curveness : 0.3, //线条的曲线程度，从0到1
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
			                    "symbolSize" :40,
			                    "category" : 0,
			                }, 
			                {
			                    "id": 1, 
			                    "name": "高危1,1", 
			                    "symbol": "",
			                    "symbolSize" : 40,
			                    "category" : 1,
			                },
			                {
			                    "id": 2, 
			                    "name": "安全2,2", 
			                    "symbol": "",
			                    "symbolSize" :40,
			                    "category" : 2,
			                }, 
			                {
			                    "id": 3, 
			                    "name": "中危3,3", 
			                    "symbol": "",
			                    "symbolSize" : 40,
			                    "category" : 3,
			                },
			                {
			                    "id": 4, 
			                    "name": "低危4,4", 
			                    "symbol": "",
			                    "symbolSize" :40,
			                    "category" : 4,
			                },
			                {
			                    "id": 5, 
			                    "name": "紧急5,5", 
			                    "symbol": "",
			                    "symbolSize" :40,
			                    "category" : 5,
			                },
			                {
			                    "id": 6, 
			                    "name": "失联6,6", 
			                    "symbol": "",
			                    "symbolSize" :40,
			                    "category" : 6,
			                },
			                {
			                    "id": 7, //source要指的num
			                    "name": "8,1", 
			                    "symbol": "",
			                    "symbolSize" :40,
			                    //"category" : 1,//"target"要指的num
			                },
			                {
			                    "id": 8, //source要指的num
			                    "name": "9,1", 
			                    "symbol": "",
			                    "symbolSize" :40,
			                    //"category" : 1,//"target"要指的num
			                },
			                {
			                    "id": 9, //source要指的num
			                    "name": "10,1", 
			                    "symbol": "",
			                    "symbolSize" :40,
			                    //"category" : 1,//"target"要指的num
			                },
			                {
			                    "id": 10, //source要指的num
			                    "name": "11,1", 
			                    "symbol": "",
			                    "symbolSize" :40,
			                    //"category" : 1,//"target"要指的num
			                },
			                {
			                    "id": 11, //source要指的num
			                    "name": "12,1", 
			                    "symbol": "",
			                    "symbolSize" :40,
			                    //"category" : 1,//"target"要指的num
			                },
			                {
			                    "id": 12, //source要指的num
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
			                    "target": 0
			                },
			                {
			                    "source": 4, 
			                    "target": 0
			                },
			                {
			                    "source": 5, 
			                    "target": 0
			                },
			                {
			                    "source": 6, 
			                    "target": 0
			                },
			                {
			                    "source": 7, 
			                    "target": 1
			                },
			                {
			                    "source": 8, 
			                    "target": 2
			                },
			                {
			                    "source": 9, 
			                    "target": 3
			                },
			                {
			                    "source": 10, 
			                    "target": 4
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
      //    let option = {
				  //   title : {
				  //       text: '人物关系：乔布斯',
				  //       subtext: '数据来自人立方',
				  //       x:'right',
				  //       y:'bottom'
				  //   },
				  //   tooltip : {
				  //       trigger: 'item',
				  //       formatter: '{a} : {b}'
				  //   },
				  //   toolbox: {
				  //       show : true,
				  //       feature : {
				  //           restore : {show: true},
				  //           magicType: {show: true, type: ['force', 'chord']},
				  //           saveAsImage : {show: true}
				  //       }
				  //   },
				  //   legend: {
				  //       x: 'left',
				  //       data:['家人','朋友']
				  //   },
				  //   series : [{
				  //           type:'force',
				  //           name : "人物关系",
				  //           ribbonType: false,
				  //           categories : [
				  //               {
				  //                   name: '人物'
				  //               },
				  //               {
				  //                   name: '家人'
				  //               },
				  //               {
				  //                   name:'朋友'
				  //               }
				  //           ],
				  //           itemStyle: {
				  //               normal: {
				  //                   label: {
				  //                       show: true,
				  //                       textStyle: {
				  //                           color: '#333'
				  //                       }
				  //                   },
				  //                   nodeStyle : {
				  //                       brushType : 'both',
				  //                       borderColor : 'rgba(255,215,0,0.4)',
				  //                       borderWidth : 1
				  //                   },
				  //                   linkStyle: {
				  //                       type: 'curve'
				  //                   }
				  //               },
				  //               emphasis: {
				  //                   label: {
				  //                       show: false
				  //                       // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
				  //                   },
				  //                   nodeStyle : {
				  //                       //r: 30
				  //                   },
				  //                   linkStyle : {}
				  //               }
				  //           },
				  //           useWorker: false,
				  //           minRadius : 15,
				  //           maxRadius : 25,
				  //           gravity: 1.1,
				  //           scaling: 1.1,
				  //           roam: 'move',
				  //           nodes:[
				  //               {"category":0, "name": '乔布斯', "value" : 10, "label": '乔布斯\n（主要）'},
				  //               {"category":1, "name": '丽萨-乔布斯',"value" : 2},
				  //               {"category":1, "name": '保罗-乔布斯',"value" : 3},
				  //               {"category":1, "name": '克拉拉-乔布斯',"value" : 3},
				  //               {"category":1, "name": '劳伦-鲍威尔',"value" : 7},
				  //               {"category":2, "name": '史蒂夫-沃兹尼艾克',"value ": 5},
				  //               {"category":2, "name": '奥巴马',"value" : 8},
				  //               {"category":2, "name": '比尔-盖茨',"value" : 9},
				  //               {"category":2, "name": '乔纳森-艾夫',"value" : 4},
				  //               {"category":2, "name": '蒂姆-库克',"value" : 4},
				  //               {"category":2, "name": '龙-韦恩',"value" : 1},
				  //           ],
				  //           links : [
				  //               {"source" : '丽萨-乔布斯', "target" : '乔布斯', "weight" : 1, "name": '女儿'},
				  //               {"source" : '保罗-乔布斯', "target" : '乔布斯', "weight" : 2, "name": '父亲'},
				  //               {"source" : '克拉拉-乔布斯', "target" : '乔布斯', "weight" : 1, "name": '母亲'},
				  //               {"source" : '劳伦-鲍威尔', "target" : '乔布斯', "weight" : 2},
				  //               {"source" : '史蒂夫-沃兹尼艾克', "target" : '乔布斯', "weight" : 3, "name": '合伙人'},
				  //               {"source" : '奥巴马', "target" : '乔布斯', "weight" : 1},
				  //               {"source": '比尔-盖茨', "target" : '乔布斯', "weight" : 6, "name": '竞争对手'},
				  //               {"source" : '乔纳森-艾夫', "target" : '乔布斯', "weight" : 1, "name": '爱将'},
				  //               {"source" : '蒂姆-库克', "target" : '乔布斯', "weight" : 1},
				  //               {"source" : '龙-韦恩', "target" : '乔布斯', "weight" : 1},
				  //               {"source" : '克拉拉-乔布斯', "target" : '保罗-乔布斯', "weight" : 1},
				  //               {"source" : '奥巴马', "target" : '保罗-乔布斯', "weight" : 1},
				  //               {"source" : '奥巴马', "target" : '克拉拉-乔布斯', "weight" : 1},
				  //               {"source" : '奥巴马', "target" : '劳伦-鲍威尔', "weight" : 1},
				  //               {"source" : '奥巴马', "target" : '史蒂夫-沃兹尼艾克', "weight" : 1},
				  //               {"source" : '比尔-盖茨', "target" : '奥巴马', "weight" : 6},
				  //               {"source" : '比尔-盖茨', "target" : '克拉拉-乔布斯', "weight" : 1},
				  //               {"source" : '蒂姆-库克', "target" : '奥巴马', "weight" : 1}
				  //           ]
				  //   }]
		    // };
			return{
                relationOption:option,//图标一
			}
	   },
	   mounted(){
            this._vue_charts = echarts.init(document.getElementById('relation'));
            this._vue_charts.setOption(this.relationOption);
       }	
}
</script>
<style>
	
</style>