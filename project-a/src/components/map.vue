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
		    '乌鲁木齐': [87.9236,43.5883],
		    '美国':[91.08,30.27],
		    '埃及':[31.12,30.01]
        };
		let BJData = [
		    {name:'上海',value:30,color:'#c52c1e',num:'169',title:'google',detail:'描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',leixin:'高危'},
		    {name:'广州',value:30,color:'#3e8cd6',num:'800',title:'android',detail:'描述信息',leixin:'低危'},
		    {name:'乌鲁木齐',value:35,color:'#d06215',num:'900',title:'baidu',detail:'描述信息',leixin:'中危'},
		    {name:'美国',value:45,color:'#d06215',num:'900',title:'baidu',detail:'美国',leixin:'中危'},
		    {name:'埃及',value:15,color:'#3e8cd6',num:'900',title:'baidu',detail:'埃及',leixin:'中危'},
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
			rich: {
		        a: {
		            width:300
		        }
		    },
			tooltip : {
			    trigger : 'item',
			    backgroundColor:'rgba(58, 70, 86, 0.92)',//提示背景
			    borderColor:'#FFFFCC',
			    showDelay : 0,
			    hideDelay : 0,
			    enterable:true,
			    padding:[10,0,13,0],
			    transitionDuration : 0,
			    extraCssText:'z-index:100',
			    textStyle:{
                  width:300,
			    },
			    formatter : function(params, ticket, callback) {
			    	//debugger;

			        //根据业务自己拓展要显示的内容
			        let res = "";
			        let name = params.name;
			        let value = params.value;
			        let title = params.data.item.title;
			        let detail = params.data.item.detail;
                    let leixin = params.data.item.leixin
			        res = "<div class='titmins'><span class='titsan'>"+title+
			        "</span></div>"+
			        "<div class='magn numberdate'>更新数据数量&nbsp;-&nbsp;<i>"+value+"</i></div>"+
			        "<div class='magn curmgn'><span class='leixi'>情报类型&nbsp;-&nbsp;</span><em class='leixiem'>"+leixin+"</em><i class='leixitem2'>"+title+"</i><b class='leibstyle'>"+name+"</b></div>"+
			        "<div class='magn'><span class='detan'>"+detail+"</span></div>";
			        return res;
			    }
			    // textStyle:{
			    // 	color:'#000'
			    // }
			},
			geo: {
				map: 'world',
				label: {
					normal:{
						show:false,
						textStyle:{
							color:'#fff'
						}
					},
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