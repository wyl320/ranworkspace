<template>
	<div id="main"></div>
</template>
<script>
import axios from 'axios'
export default {
	data(){
		let geoCoordMap = {
		    '上海': [121.4648,31.2891],
		    '广州': [113.5107,23.2196],
		    '乌鲁木齐': [87.9236,43.5883]
        };
		let BJData = [
		    {name:'上海',value:30,color:'#c52c1e',num:'169',title:'ccc'},
		    {name:'广州',value:30,color:'#3e8cd6',num:'800',title:'ee'},
		    {name:'乌鲁木齐',value:35,color:'#d06215',num:'900',title:'ggg'}
		];
		let color = ['#fff', '#fff', '#fff'];
        let series = [];
        for(var i=0;i<BJData.length;i++){
				    var item = BJData[i];
				    series.push(
						       {
						        type: 'effectScatter',
						        coordinateSystem: 'geo',
						        zlevel: 2,
						        rippleEffect: {//涟漪特效
						            period:4,//动画时间，值越小速度越快
						            brushType: 'stroke', //波纹绘制方式 stroke, fill
						            scale:3 //波纹圆环最大限制，值越大波纹越大
						        },
						        label: {
						            normal: {
						                show: true,
						                // position: ['50%', '50%'],
						                // offset:[10, 0], //偏移设置
						                // formatter: '{b}' //圆环显示文字
						                formatter: function (obj) {
                                             return obj.data.item.num; //圆环大小
                                        },
						            },
						            emphasis: {
						                show: true
						            }
						        },
						        symbol: 'circle',
						        symbolSize: item.value,
						        itemStyle: {
						            normal: {
						                // show: true,
						                color: item.color
						            }
						        },
						        data:[{
						            name: item.name,
						            value: geoCoordMap[item.name].concat([item.value]),
						            item:item
						        }]
						    }
				    );
        };
		let relationOption = {
			backgroundColor: '#000',
			tooltip : {
			    trigger : 'item',
			    backgroundColor:'rgba(58, 70, 86, 0.92)',//提示背景
			    borderColor:'#FFFFCC',
			    showDelay : 0,
			    hideDelay : 0,
			    enterable:true,
			    transitionDuration : 0,
			    extraCssText:'z-index:100',
			    formatter : function(params, ticket, callback) {
			    	//debugger;

			        //根据业务自己拓展要显示的内容
			        var res = "";
			        var name = params.name;
			        var value = params.value;
			        var title = params.data.item.title;

			        res = "<span style='color:red;'>"+title+
			        "</span><br/>坐标："+value+
			        "<div>更新数据数量—<i>"+value+"</i></div>"+
			        "<div><span>情报类型—</span><em>"+title+"</em><i></i><b>"+title+"</b></div>"+
			        "<div>"+value+"</div>";
			        return res;
			    }
			    // textStyle:{
			    // 	color:'#000'
			    // }
			},
			geo: {
				map: 'world',
				label: {
					emphasis: {
					    show: false
					}
			    },
			roam: true, //是否允许缩放
			layoutCenter: ['50%', '53%'], //地图位置
			layoutSize:"160%",
				itemStyle: {
					normal: {
					    color: '#232323', //地图背景色
					    borderColor: '#232323' //省市边界线
					},
					emphasis: {
					    color: 'rgba(37, 43, 61, .5)'//悬浮背景
					}
				}
			},
			series:series		
		};
		return{
			relationOption:relationOption,//图标一
		}
	},
	methods:{
        setMapwt:function() {
        	  let allHt = $(window).height();
        	  let allWt = $(window).width();
              let c=document.documentElement.clientWidth*(100 / 1280);
           	  let cloudTop = (c*0.3)+(c*0.2);
           	  let cloudwt=c*0.2
           	  let Mapht = parseInt((allHt-cloudTop)*0.715);
           	  let Mapwt = parseInt((allWt-cloudwt)*0.658);
           	  $("#main").css({"width":Mapwt+"px","height":Mapht+"px"});
           	  $("#main div").css({"width":Mapwt+"px","height":Mapht+"px"});
           	  console.log("/////")
        } 
	},
	created(){
    },
	mounted(){
		    this.setMapwt();
            this._vue_charts = echarts.init(document.getElementById('main'));
            this._vue_charts.setOption(this.relationOption);
    }
}
</script>
<style scoped>

</style>