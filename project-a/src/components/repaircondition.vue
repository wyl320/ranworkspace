<template>
<div>
  <h2><span>修复情况</span><router-link to="/">></router-link></h2>
	<div class="cort_nums" v-for="(item,index) in repaireList">
		 	 <RepairConditionItem :data="repaireList[index]"></RepairConditionItem>
  </div>
</div>
</template>
<script>
  import axios from 'axios';
  import RepairConditionItem from './repairConditionItem';

	export default{
    components:{RepairConditionItem},
		data(){
			return{ 
        repaireList:[],
        softseach:[],
        newsoftseach:{},
        sofevalue:"",
        softvalue:[],
        time:null,
        url:{
           repaire:"http://www.mocky.io/v2/59c76fb1400000a50bafe8cf",
           soft:"http://www.mocky.io/v2/59c76fb1400000a50bafe8cf",
           save:"http://www.mocky.io/v2/59c75452400000790aafe8ae",
           // soft:"http://www.mocky.io/v2/59c74e11400000490aafe8ab"
              // soft:"http://www.mocky.io/v2/59c668ae4000008d02afe81f"
        }
			}
		},
		methods:{
            Softkey_up(ev,index){
                let self = this;
                if(this.time != null ){
                  clearTimeout(this.time);
                  this.time = null;
                }
                this.time = setTimeout(function(){
                  self.getSoft(index);
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
            getSoft(index){
               console.log("index:------------------ "+index);
               this.time = null;
               let self = this;
               if(self.newsoftseach[index].length != 0 ){
                  self.newsoftseach[index] = [];
               }

               let value = this.softvalue[index].value;
               if(self.softvalue.length == 0){
                  Object.assign(self.newsoftseach[index], self.softseach);
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
                        if(da.name.indexOf(self.softvalue[index].value) != -1){
                            dataList.push(da);
                        }
                      }
                      self.newsoftseach[index] = dataList;
                       console.log(index+" ================ ");
                      console.log(self.newsoftseach);
                  })
                }
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
                      self.loadrepaireList();
                  }else{
                      //保存失败code
                  }
               })
               .catch(function (error) {
                    console.log(error); 
                }); 
            },
            modfined(item){
              item.expanded = !item.expanded
            },
            addItem(item,its){
              item.ulexpanded = false;
              item.expanded = true;
              console.log(its.name);
              console.log(item.id);
              // this.updateRepaire(item.id,item.name);
            },
            Allpulldown(item){
                item.ulexpanded = true
            },
            Hidepulldown(item){
                item.ulexpanded = false;
                item.expanded = true;
            },
            //请求修复情况
            loadrepaireList(){
              let self = this;
              let promise = self.getlist({
                pageSize:3,
                url:self.url.repaire
              });
              promise.done(function(res){
                // self.softseach = res.data.data.softlist;
                let dataList = [];
                Object.assign(dataList,res.data.data.list);
                dataList.forEach(function(da,i){
                  if(i < 3){
                    self.newsoftseach[i] = [];
                    self.softvalue.push({value:da.name});
                    self.repaireList.push(da);
                  }
                })
              }); 
            }
		},
		created(){
      this.loadrepaireList(); 
		},
		watch:{
			//修复情况
	        repaireList(){
	          return this.repaireList;
	        },
          // newsoftseach(){
          //   return this.newsoftseach;
          // }
		},
    computed: {
          
    }
	}
</script>
<style>
	
</style>