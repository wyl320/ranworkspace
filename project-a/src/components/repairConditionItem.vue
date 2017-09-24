<template>
<div>
		 	<div class="st_gn clearfix">
            <span class="soft_img"><img :src="item.icon" alt=""></span>
            <div class="soft_name" v-if="item.expanded"><i>{{item.name}}</i></div>
            <div class="pulldown" v-else> 
               <input type="text" value="" v-model="sofevalue"  @focus="Allpulldown(item)" @keyup="Softkey_up(item,index)">
               <ul v-show="item.ulexpanded">
                 <li @click="addItem(item,its)" v-for="its in newsoftseach">{{its.name}}</li>
               </ul>
            </div>
            <em @click="modfined()">编辑</em>
      </div>
			<div class="ranges"><strong><b :style="{width:item.pcent}"></b></strong></div>
			<div class="result"><span>已修复 {{item.repaired}}</span><i>未修复 {{item.unrepaired}}</i></div>
</div>
</template>
<script>
  import axios from 'axios';
	export default{
    props:["data"],
		data(){
			return{ 
        item:this.data,  
        sofevalue:"",

        newsoftseach:{},
        
        time:null,
        url:{
           soft:"http://www.mocky.io/v2/59c76fb1400000a50bafe8cf",
           save:"http://www.mocky.io/v2/59c75452400000790aafe8ae"
        }
			}
		},
		methods:{
            Softkey_up(ev){
                let self = this;
                if(this.time != null ){
                  clearTimeout(this.time);
                  this.time = null;
                }
                this.time = setTimeout(function(){
                  self.getSoft();
                },1000);          
            },
             //焦点取数据 
            getlist({value = "" , pageSize = 0,url = ""}){
               let _this = this;
               let promise = $.Deferred();
               axios.get(url, {
                   params: {value,pageSize}
               })
               .then(function (response) {
                  if(response.data.code=="0"){
                    promise.resolve(response);
                  }else{
                      promise.resolve(response);
                      // console.log(response.data.message);
                      promise.reject();
                  }
               })
               .catch(function (error) {
                 console.log(error);
                  promise.reject();
                });
               return promise;
            },
            getSoft(){
               this.time = null;
               let self = this;
              if(self.newsoftseach.length != 0 ){
                  self.newsoftseach = [];
               }

               let value = this.sofevalue;
               if(self.sofevalue.length == 0){
                  Object.assign(self.newsoftseach, self.softseach);
                }else{
                  let promise = self.getlist({
                    value:value,
                    url:self.url.soft
                  });
                  promise.done(function(res){
                      let softseach = res.data.data.list;
                      let dataList = [];
                      for(var i=0;i<softseach.length;i++){
                        let da = softseach[i];
                        if(da.name.indexOf(self.sofevalue) != -1){
                            dataList.push(da);
                        }
                      }
                      self.newsoftseach = dataList;
                       console.log(index+" ================ ");
                      console.log(self.newsoftseach);
                  })
                }
            },
             
            modfined(){
               
               this.item.expanded = ! this.item.expanded;
               console.log(this.item.expanded)
            },
            addItem(item,its){
              item.ulexpanded = false;
              item.expanded = true;
              console.log(its.name);
              console.log(item.id);
              // this.updateRepaire(item.id,item.name);
            },
             //保存数据 
            updateRepaire(id,name){
               let self = this;
               let promise = $.Deferred();
               axios.get(self.url.save, {
                   params: {
                     id:id,
                     name:name
                   }
               })
               .then(function (response) {
                  if(response.data.code=="0"){
                      //通知父组件，刷新列表 调用 self.loadrepaireList(); 函数
                  }else{
                      //保存失败code
                  }
               })
               .catch(function (error) {
                    console.log(error); 
                }); 
            },
            Allpulldown(item){
                item.ulexpanded = true
            },
            Hidepulldown(item){
                item.ulexpanded = false;
                item.expanded = true;
            }
		},
		created(){
        console.log(this.softseach)
		},
		watch:{
          newsoftseach(){
            return this.newsoftseach;
          }
		},
    computed: {
          
    }
	}
</script>
<style>
	
</style>