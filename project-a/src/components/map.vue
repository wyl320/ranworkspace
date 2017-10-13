<template>
	<div class="mainbox" ref="main"><div id="main" ref="mainchart"></div></div>
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
        let BJData=[
             {name:'上2海',num:'169',up_num:'354655',title:'agoogle',detail:'描',leixin:'类型',levl:'gaowei',degXdata:'121.4648',degYdata:'31.2891',size:30}      
        ];
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
			        let res = "";
			        let name = params.name;
			        let up_num = params.data.item.up_num;
			        //console.log(params);
			        let title = params.data.item.title;
			        let detail = params.data.item.detail;
                    let leixin = params.data.item.leixin;
			        res = "<div class='titmins'><span class='titsan'>"+title+
			        "</span></div>"+
			        "<div class='magn numberdate'>更新数据数量&nbsp;-&nbsp;<i>"+up_num+"</i></div>"+
			        "<div class='magn curmgn'><span class='leixi'>情报类型&nbsp;-&nbsp;</span><em class='leixiem'>"+leixin+"</em><i class='leixitem2'></i><b class='leibstyle'>"+name+"</b></div>"+
			        "<div class='magn'><span class='detan'>"+detail+"</span></div>";
			        return res;
			    }
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
			series:this.getSeries(BJData)
		};
		return{
			relationOption:relationOption//图标一
		}
	},
	methods:{
		//设置mainbox的宽度
        setMapwt:function() {
        	  let allHt = $(window).height();
        	  let allWt = $(window).width();
              let c=document.documentElement.clientWidth*(100 / 1280);
           	  let cloudTop = (c*0.3)+(c*0.2);
           	  let cloudwt=c*0.2
           	  let Mapht = parseInt((allHt-cloudTop)*0.715);
           	  let Mapwt = parseInt((allWt-cloudwt)*0.658);
           	  $(".mainbox").css({"width":Mapwt+"px","height":Mapht+"px"});
        },
        //渲染图表
        setMapsize:function(){
            	 let self = this;
            	 let wt = $(".mainbox").width();
                 let ht = $(".mainbox").height();
                 self.$refs.mainchart.style.width = wt + 'px';
                 self.$refs.mainchart.style.height = ht + 'px';               
        },
        //请求地图数据
        loadMap:function(){
        	let self = this;
        	let promise = $.Deferred();
        	axios.get("http://www.mocky.io/v2/59ded9dd0f00002c031739bb", {
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
        //循环series
        getSeries:function(Data){
        	let series = [];
	        for(let i=0;i<Data.length;i++){
					    let item = Data[i];
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
							        symbolSize: item.size,
							        itemStyle: {
							            normal: {
							                color: item.color
							            }
							        },
							        data:[{
							            name: item.name,
							            // value: geoCoordMap[item.name].concat([item.size]),
							            value:[item.degYdata,item.degXdata,item.size],
							            item:item
							        }]
							    }
					    );
	        };
	        return series;
        },
        setDataColor:function(data){ 
        	data.forEach(function(da,i){
                if(da.levl =="gaowei"){
                 da.color = "#f82454";
                }else if(da.levl =="zhongwei"){
                    da.color = "#ff7214";
                }else if(da.levl =="diwei"){
                 da.color = "#ffe60f";
                }else if(da.levl =="anquan"){
                    da.color = "#3f8fce";
                }else if(da.levl =="jingji"){
                    da.color = "#de00ff";
                }else{}
        	});
        	return data;
        },
        //set数据
        setMaption:function(){
        	let self = this;
        	let promise = self.loadMap();
        	promise.done(function(res){
        		let _data = res.data.data;
		        self.setDataColor(_data);
        		let _series = self.getSeries(_data);
        		self.relationOption.series = _series;
        		self._vue_charts2.setOption(self.relationOption);
        	});
        }
	},
	created(){
		this.setMaption();
    },
	mounted(){
		    this.setMapwt(); 
		    this.setMapsize(); 
		    let self = this;
		    self._vue_charts2 = echarts.init(document.getElementById('main'));
            self._vue_charts2.setOption(self.relationOption);
		    window.onresize = function temp() { //兼听窗口resize
                 self.setMapwt();
		         self.setMapsize();
		         self._vue_charts2.resize();
            };
    }
}
</script>
<style scoped>
</style>