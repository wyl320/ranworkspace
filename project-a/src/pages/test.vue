<template>
	<div>
	    <Scroll id="transmitpersonauto" name="person" placeholder="qiwen"
	    url="baidu" param="cccc" limit="10" anchor="staffchname" model="transmit"></Scroll>
	</div>
</template>
<script>
import Scroll from '@/components/scroll'
	export default{
		components: {Scroll},
		 data(){
		 	return{
		 		transmitpersonauto:"01",
		 		person:"aaa",
		 		qiwen:"ccc"
		 	}
		 },
		 mounted:function(){
		 	 
		 	 $('#test3').jscrollbar();

		 }
	}
</script>
<style>
	.scrollbar-main{
		width: 400px;
		height:400px;

		margin: 0 auto;
        /*width: 630px;*/
        overflow: hidden;
        /*height: 443px;*/
        background: gray;

	}

	.item-li{
		width: 100%;
		height: 250px;
	}
	.li1{
		background: #ccc;
	}

	.li2{
		background: red;
	}

	.li3{
		background: yellow;
	}
</style>