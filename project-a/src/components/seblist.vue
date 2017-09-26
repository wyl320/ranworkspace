<template>
	<div class="faster-dy">
		<vueScrollbar class="my-scrollbar2">
		<div class="scroll-me2">
			<div class="cardItem" ref="cardItem" v-for="(item,index) in newCavalist" @mouseover="hoverStyle(item,$refs.cardItem,index)"  @mouseout="outStyle(item,$refs.cardItem,index)">
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
</template>
<script>
	import axios from 'axios'; 
	export default{
		components: {  vueScrollbar: Vue2Scrollbar },
		data(){
			return{
                cavalist:[],
                newCavalist:[],
                showCardblue:false,
                colorAy:['blue','pers','pink']
			}
		},
		methods:{
            setcardItem(){
            	var scrt = $(".cavemove").height()-$(".toolBars").height();
            	$(".my-scrollbar2").css({"height":scrt-18+"px"})
            },
             //请求设备信息
            loadcavaList:function(){
            	let self = this;
            	axios.get(' http://www.mocky.io/v2/59c9cd293f0000210583f824', {
                  params: {}
                })
                .then(function (response) {
                  if(response.data.code=="0"){
                      self.cavalist = response.data.data.sebeiList;
                      self.newCavalist = response.data.data.sebeiList;
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
</style>