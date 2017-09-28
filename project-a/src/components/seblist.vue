<template>
<div class="akme">
  <div class="toolBars clearfix" id="toolBars">
    <div class="leftwat">
      <span><i class="watch1">{{watchSebei}}</i>台设备已监测</span><em>|</em><span><i class="watch2">{{threaTen}}</i>受威胁</span><em>|</em><span><i class="watch3">{{urgentRepaired}}</i>紧急修复</span><em>|</em> 
    </div>
    <div class="midwat">
      <span class="choose" @click="upDown" :class="{hasborder:isdown}"><i>状态筛选</i><em></em></span>
      <ul v-show="isdown">
        <li v-for="(ite,index) in states" @click="choose_state(index)"><a href="javascript:;">{{ite.stge}}</a></li>
      </ul>
    </div>
    <div class="ritwat">
      <a href="javascript:;" class="zoom1"></a>
      <a href="javascript:;" class="zoom2"></a>
      <a href="javascript:;" class="zoom3"></a>
      <a href="javascript:;" class="zoom4"></a>
    </div>
  </div>
	<div class="faster-dy">
		<vueScrollbar class="my-scrollbar2">
		<div class="scroll-me2">
			<div class="cardItem" ref="cardItem" v-for="(item,index) in newCavalist" @mouseover="hoverStyle(item,$refs.cardItem,index)"  @mouseout="outStyle(item,$refs.cardItem,index)" :class="{gray:item.isconnect==false}">
				<h2>{{item.sebeiName}}</h2>
				<div class="ipname">
					<span class="blue" v-if="item.levl == 'anquan'"></span>
					<span class="yellow" v-else-if="item.levl == 'diwei'"></span>
					<span class="pers" v-else-if="item.levl == 'jingji'"></span>
					<span class="orange" v-else-if="item.levl == 'zhongwei'"></span>
					<span class="pink" v-else-if="item.levl == 'gaowei'"></span>
					<span v-else></span>
					<p>{{item.macAdress}}</p>
					<p>{{item.ip}}</p>
				</div>
			</div>
	    </div>
	    </vueScrollbar>
	</div>
</div>
</template>
<script>
	import axios from 'axios'
  import _ from 'lodash'
	export default{
		components: {  vueScrollbar: Vue2Scrollbar },
		data(){
			return{
                cavalist:[],
                newCavalist:[],
                showCardblue:false,
                watchSebei:"",//监测的设备
                threaTen:"",//受威胁的
                urgentRepaired:"",//紧急修复
                isdown:false,//显示下拉列表
                states:[
                  {"stge":"中危"},
                  {"stge":"低位"},
                  {"stge":"高危"},
                  {"stge":"紧急"},
                  {"stge":"安全"},
                  {"stge":"失联"},
                  {"stge":"全部"}
                ]
			}
		},
		methods:{
            setcardItem(){
            	var scrt = $(".listSbeict").height();
              var scrt2 = scrt*0.075;
              $(".akme").height(scrt)
            	$(".my-scrollbar2").css({"height":scrt-scrt2-18+"px"});
            },
             //请求设备信息
            loadcavaList:function(){
            	let self = this;
            	axios.get('http://www.mocky.io/v2/59cb15282d00003a068069b0', {
                  params: {}
                })
                .then(function (response) {
                  if(response.data.code=="0"){
                      self.cavalist = response.data.data.sebeiList;
                      self.newCavalist = response.data.data.sebeiList;
                      self.watchSebei = response.data.data.watchSebei;
                      self.threaTen = response.data.data.threaTen;
                      self.urgentRepaired = response.data.data.urgentRepaired
                  }else{
                      console.log(response.data.message);
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            },
            hoverStyle(item,a,index){
            	if(item.levl=='anquan'){
            		$(a[index]).css({"borderColor":"#45a4fe"});
            	}else if(item.levl=='diwei'){
                    $(a[index]).css({"borderColor":"#f4d874"});  
            	}else if(item.levl=='jingji'){
                    $(a[index]).css({"borderColor":"#b767d6"}); 
            	}else if(item.levl=='zhongwei'){
                    $(a[index]).css({"borderColor":"#fe954f"}); 
            	}else if(item.levl=='gaowei'){
            		$(a[index]).css({"borderColor":"#ff6354"}); 
            	}else{
            		$(a[index]).css({"borderColor":"#707475"}); 
            	}
            },
            outStyle(item,a,index){
            	$(a[index]).css({"borderColor":"#252c35"}); 
            },
            //choose
            choose_state(index){
               switch(index){
                   case 0:
                       this.newCavalist = this.cavalist.filter(function(item) { 
                          return  item.levl == 'zhongwei'; 
                       });
                   break;
                   case 1:
                       this.newCavalist = this.cavalist.filter(function(item) { 
                       return  item.levl=="diwei";
                       });
                   break;
                   case 2:
                       this.newCavalist = this.cavalist.filter(function(item) { 
                       return item.levl=="gaowei";
                       });
                   break;
                   case 3:
                       this.newCavalist = this.cavalist.filter(function(item) { 
                       return item.levl=="jingji";
                       });
                   break;
                   case 4:
                       this.newCavalist = this.cavalist.filter(function(item) { 
                       return item.levl=="anquan";
                       });
                   break;
                   case 5:
                       this.newCavalist = this.cavalist.filter(function(item) { 
                       return item.levl=="";
                       });
                   break;
                   default:
                       this.newCavalist = this.cavalist
               };
               this.isdown = !this.isdown;
               $(".my-scrollbar2 .vue-scrollbar__area").css({"marginTop":"0"})
            },
            upDown(){
              this.isdown = !this.isdown
            }
		},
		mounted(){
		   //加载高度
           this.setcardItem();
           this.loadcavaList()
		}
	}
</script>
<style scoped>
	.cardItem span{background:url(../assets/images/gray.png) no-repeat;width:0.18rem;height:0.3rem;display: block;}
	.cardItem span.yellow{background:url(../assets/images/yellow.png) no-repeat;width:0.18rem;height:0.3rem;display: block;}
	.cardItem span.pers{background:url(../assets/images/per.png) no-repeat;width:0.18rem;height:0.3rem;display: block;}
	.cardItem span.orange{background:url(../assets/images/orange.png) no-repeat;width:0.18rem;height:0.3rem;display: block;}
	.cardItem span.pink{background:url(../assets/images/pink.png) no-repeat;width:0.18rem;height:0.3rem;display: block;}
	.cardItem span.blue{background:url(../assets/images/blue.png) no-repeat;width:0.18rem;height:0.3rem;display: block;}
  .zoom1{display:inline-block;background:url(../assets/images/zom2.png) no-repeat;width:0.23rem;height:0.14rem;margin-top:0.05rem;}
  .zoom2{display:inline-block;background:url(../assets/images/zom4.png) no-repeat;width:0.22rem;height:0.22rem;margin-top:0.06rem;}
  .zoom3{display:inline-block;background:url(../assets/images/zom3.png) no-repeat;width:0.22rem;height:0.22rem;margin-top:0.05rem;}
  .zoom4{display:inline-block;background:url(../assets/images/zom1.png) no-repeat;width:0.2rem;height:0.2rem;margin-top:0.05rem;}
  .zoom1:hover{background:url(../assets/images/zom2a.png) no-repeat;}
  .zoom2:hover{background:url(../assets/images/zom4a.png) no-repeat;}
  .zoom3:hover{background:url(../assets/images/zom3a.png) no-repeat;}
  .zoom4:hover{background:url(../assets/images/zom1a.png) no-repeat;}
</style>