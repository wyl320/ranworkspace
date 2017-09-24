<template>
	<div>
		  <div class="mation">
          <div class="echarts-cont">
              <div id="line"  style="width:180px;height:180px;"></div>
              <div id="line2" style="width:180px;height:180px;"></div>
              <template v-for="(item,index) in listArrysoce.numList">
              <span class="leftNm" :class="{'ln':index ==1}">{{item.text}}</span>
              <span class="rightNm":class="{'ln2':index ==1}">{{item.currentTime}}</span>
              </template>
           </div>
		  </div>
		  <div class="numlist">
	  	 	   <ul>
	            <li><span>数据源总量 - </span><em>{{listArrysoce.totalDatas}}</em></li>
	            <li><span>更新总量 - </span><em>{{listArrysoce.updatDatas}}</em></li>
	            <li><span>维护开源软件总量 - </span><em>{{listArrysoce.freeSoftware}}</em></li>
	           </ul>
		 </div>
	</div>
</template>
<script>
    import axios from 'axios';
	export default{
		data(){
			let liquidfillOption = {
		        series: [{
		            type: 'liquidFill',
		            data: [{name: '28374'},0.6],
		            color: ['#916f44'],
		            center: ['45%', '35%','10%', '10%'],
		            label: {
		                normal: {
		                    color: '#ffffff',
		                    insideColor: '#ffffff',
		                    fontSize: 15,
		                    formatter: '{b}'
		                }
		            },
		            outline: {
		                borderDistance: 6,
		                itemStyle: {
		                    borderWidth: 2,
		                    borderColor: '#383e47'
		                }
		            },
		            backgroundStyle: {
		              borderWidth: 3,
		              borderColor: '#fbb150',
		              color: '#262d37'
		           }
		        }]
	        };
	        let liquidfillOption2 = {
		        series: [{
		            type: 'liquidFill',
		            data: [{name: '315'},0.4],
		            color: ['#10a8ab'],
		            center: ['40%', '35%','10%', '10%'],
		            label: {
		                normal: {
		                    color: '#ffffff',
		                    insideColor: '#ffffff',
		                    fontSize: 15,
		                    formatter: '{b}'
		                }
		            },
		            outline: {
		                borderDistance: 6,
		                itemStyle: {
		                    borderWidth: 2,
		                    borderColor: '#383e47'
		                }
		            },
		            backgroundStyle: {
		              borderWidth: 3,
		              borderColor: '#10a8ab',
		              color: '#262d37'
		           }
		        }]
	        };
			return{
				listArrysoce:"",//水球图模块数据变量
		        chartDataOption:liquidfillOption,//图标一
		        chartUpdateOption2:liquidfillOption2,//图标二	
			}
		},
		methods:{
            //请求水球图数据
            loadList: function() {
                console.log("初始化加载数据开始...");
                let _this = this;
                axios.get('http://www.mocky.io/v2/59c4ec934000000601b25c22', {
                  params: {}
                })
                .then(function (response) {
                  if(response.data.code=="0"){
                      _this.listArrysoce = response.data.data;
                      //console.log(_this.listArrysoce)
                  }else{
                      console.log(response.data.message) 
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            },
            setRound(){
                  if((screen.width == 1680) && (screen.height == 1050)){
                     $("#line canvas").css({"width":"190px","height":"190px"});
                     $("#line2 canvas").css({"width":"190px","height":"190px"});
                  }else if ((screen.width == 1280) && (screen.height == 800)){
                     $("#line canvas").css({"top":"-16px"});
                     $("#line2 canvas").css({"left":"11px","top":"-16px"});
                  }else{
                      console.log(screen.height)
                  }
            }
		},
		watch:{
             //监控水球图数据
		    listArrysoce(){
		    	return this.listArrysoce;
		    },
		},
		created(){
            this.loadList();
            this.setRound()
		},
		mounted:function(){
		 	this._vue_charts = echarts.init(document.getElementById('line'));
            this._vue_charts.setOption(this.chartDataOption);
            this._vue_charts2 = echarts.init(document.getElementById('line2'));
            this._vue_charts2.setOption(this.chartUpdateOption2);
		}
	}
</script>
<style>
	
</style>