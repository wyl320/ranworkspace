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
		}
	}
</script>
<style>
	
</style>