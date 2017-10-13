<template>
	<div class="home clearfix" >
		 <!--左侧-->
		 <div class="leftCt" :style="{height:setHeight+'px'}">
		 	 <div class="user">
		 	 	<span class="userlg"><img src="../../static/images/admin.png"></span>
		 	 	<span class="userame"><i>admin</i></span>
		 	 	<span class="rightname"><em></em></span>
		 	 </div>
       <!--水球图,数据总量-->
       <!-- <div class="liquid">
		 	   <Liquid></Liquid>
       </div> -->
      <div class="mation">
          <div class="echarts-cont">
              <router-link to="/cloudetail" class="roundline"><div id="line" ref="roundline" style="width:180px;height:180px;"></div></router-link>
              <router-link to="/cloudetail" class="roundline2"><div id="line2" ref="roundline2" style="width:180px;height:180px;"></div></router-link>
              <div class="text_curtdy" v-for="(item,index) in listArrysoce.numList" :class="{'ln':index ==1}"> 
                <router-link to="/cloudetail"><span class="leftNm">{{item.text}}</span></router-link>
                <router-link to="/cloudetail"><span class="rightNm">{{item.currentTime}}</span></router-link>
              </div>
           </div>
      </div>
      <div class="numlist">
         <ul>
            <li><span>数据源总量 - </span><em>{{listArrysoce.totalDatas}}</em></li>
            <li><span>更新总量 - </span><em>{{listArrysoce.updatDatas}}</em></li>
            <li><span>维护开源软件总量 - </span><em>{{listArrysoce.freeSoftware}}</em></li>
           </ul>
      </div>
		 	 <!--威协情报-->
		 	 <div class="dangerlist">
        <Dangerlist></Dangerlist>
		 	 </div>
		 	 <!--安全响应-->
		 	 <div class="safelist">
		 	 	 <Safelist></Safelist>
		 	 </div>
		 </div>
		 <!--中间-->
		 <div class="centerCt" :style="{height:setHeight+'px'}">
		 	<div class="cavemove">
        <div class="listSbeict">
            <Seblist></Seblist>
        </div>
		 	</div>
		 	<div class="severcont clearfix">
		 		<!--设备监测情况-->
		 		<Tablelist></Tablelist>
		 	</div>
		 </div>
		 <!--左侧-->
		 <div class="rightCt" :style="{height:setHeight+'px'}">
		 	<!--代码检测-->
		 	<div class="codeing">
		 		<h2><span>开源代码检测</span><router-link to="/">></router-link></h2>
        <div class="solerg">
    		 		<input type="text" class="titlePut" placeholder="请输入标题">
            <textarea class="areas" placeholder="请输入内容信息"></textarea>
    		 		<div class="code_up"><span>提交</span><!-- <input type="file"> --><button>重置</button></div>
        </div>
		 	</div>
		 	<!--修复情况-->
		 	<div class="sofeset">
		 		<Repaircondition></Repaircondition>
		 	</div>
		 	<!--自定义-->
		 	<div class="sofelist">
		 		<a href="javascript:;"><img src="../../static/images/qq.png" alt=""></a>
		 		<a href="javascript:;"><img src="../../static/images/qq.png" alt=""></a>
		 		<a href="javascript:;"><img src="../../static/images/qq.png" alt=""></a>
		 		<a href="javascript:;"><img src="../../static/images/qq.png" alt=""></a>
		 		<a href="javascript:;"><img src="../../static/images/qq.png" alt=""></a>
		 		<a href="javascript:;"><img src="../../static/images/qq.png" alt=""></a>
		 		<a href="javascript:;"><img src="../../static/images/qq.png" alt=""></a>
		 		<a href="javascript:;"><img src="../../static/images/qq.png" alt=""></a>
		 		<a href="javascript:;"><img src="../../static/images/qq.png" alt=""></a>
		 	</div>
		 </div>
	</div>
</template>
<script>

  import axios from 'axios'
  import _ from 'lodash'
  import Repaircondition from '@/components/repaircondition'
  import Tablelist from '@/components/tablelist'
  import Safelist from '@/components/safelist'
  import Dangerlist from '@/components/dangerlist'
  import Liquid from '@/components/liquid'
  import Seblist from '@/components/seblist'
  // import {liquidfillOption}  from '@/chart-data/chartData';

	export default {
		 components: {Repaircondition,Tablelist,Safelist,Dangerlist,Liquid,Seblist},
		 data(){
       let liquidfillOption = {
        series: [{
            type: 'liquidFill',
            data: [{name: '123'},0.6],
            color: ['#916f44'],
            center:['50%','75'],
            //center: ['45%', '35%','10%', '10%'],
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
            center:['50%','75'],
            //center:['50%','40%'],
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
       // let countData = {
       //    listArrysoce:"",//水球图模块数据变量
       //    chartDataOption:liquidfillOption,//图标一
       //    chartUpdateOption2:liquidfillOption2,//图标二
       // };
		   return{
        //...countData,
        time:null,
        listArrysoce:"",//水球图模块数据变量
        chartDataOption:liquidfillOption,//图标一
        chartUpdateOption2:liquidfillOption2,//图标二
        userMation:[]
		 	 }
		 },
		 methods:{
		 	//设置窗口高度
            fullHeight(){
            	this.setHeight = $(window).height();
            },
            //请求水球图数据
            loadList(){
                let self = this;
                let promise = $.Deferred();
                axios.get("http://www.mocky.io/v2/59c8b8f3110000fe0bc39ced", {
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
            //setoptions
            setWaterlist(){
                  let self = this;
                  let promise = self.loadList();
                  promise.done(function(res){
                      self.listArrysoce = res.data.data;
                      console.log(res);
                      let newArrysocenumList = self.listArrysoce.numList;
                      self.chartDataOption.series[0].data[0].name = self.listArrysoce.numList[0].currentNumber;
                      self.chartDataOption.series[0].data[1] = self.listArrysoce.numList[0].currentNumber/self.listArrysoce.numList[0].maxNumber;
                      self.chartUpdateOption2.series[0].data[0].name = self.listArrysoce.numList[1].currentNumber;
                      self.chartUpdateOption2.series[0].data[1] = self.listArrysoce.numList[1].currentNumber/self.listArrysoce.numList[1].maxNumber;
                      //重新渲染
                      self._vue_charts.setOption(self.chartDataOption);
                      self._vue_charts2.setOption(self.chartUpdateOption2);
                  });           
            },
            // loadList() {
            //     console.log("初始化加载数据开始...");
            //     let self = this;
            //     axios.get('http://www.mocky.io/v2/59c8b8f3110000fe0bc39ced', {
            //       params: {}
            //     })
            //     .then(function (response) {
            //       if(response.data.code=="0"){
            //           self.listArrysoce = response.data.data;
            //           console.log(response);
            //           let newArrysocenumList = self.listArrysoce.numList;
            //           self.chartDataOption.series[0].data[0].name = self.listArrysoce.numList[0].currentNumber;
            //           self.chartDataOption.series[0].data[1] = self.listArrysoce.numList[0].currentNumber/self.listArrysoce.numList[0].maxNumber;
            //           self.chartUpdateOption2.series[0].data[0].name = self.listArrysoce.numList[1].currentNumber;
            //           self.chartUpdateOption2.series[0].data[1] = self.listArrysoce.numList[1].currentNumber/self.listArrysoce.numList[1].maxNumber;
            //           //重新渲染
            //           self._vue_charts.setOption(self.chartDataOption);
            //           self._vue_charts2.setOption(self.chartUpdateOption2);
            //       }else{
            //           console.log(response.data.message) 
            //       }
            //     })
            //     .catch(function (error) {
            //       console.log(error);
            //     });
            // },
            setRound(){
                  let self = this;
                  let minws = $(window).width()*0.22-10;
                  let hegts = $(window).height()*0.176;
                  self.$refs.roundline.style.width = minws/2 + 'px';
                  self.$refs.roundline.style.height = hegts + 'px';
                  self.$refs.roundline2.style.width = minws/2 + 'px';
                  self.$refs.roundline2.style.height = hegts + 'px';
                  $("#line canvas").css({"width":minws/2-10,"height":hegts});
                  $("#line2 canvas").css({"width":minws/2-10,"height":hegts});
            }
		 },
		 watch: {
		 	//监控页面高度
		    setHeight() {
		        return this.setHeight;
		    },
		    //监控水球图数据
		    listArrysoce(){
		    	return this.listArrysoce;
		    },
        mounthAdata(){
          return this.mounthAdata;
        }
     },
		 created(){
            this.fullHeight();
            this.setWaterlist();
		 },
     mounted(){
            this._vue_charts = echarts.init(document.getElementById('line'));
            this._vue_charts.setOption(this.chartDataOption);
            this._vue_charts2 = echarts.init(document.getElementById('line2'));
            this._vue_charts2.setOption(this.chartUpdateOption2);
            this.setRound()
     }
	}
</script>
<style scoped>

</style>