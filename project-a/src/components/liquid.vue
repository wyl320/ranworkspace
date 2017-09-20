<template>
	<div class="echarts">
			<div id="line" :style="{width:'88px',height:'88px'}"></div>
	</div>
</template>
<script>
	export default{
		props:{
			liquidsoure:this.liquidsoure
		},
		data(){
			return{
				option3 : {
				    series: [{
				        type: 'liquidFill',
				        data: [0.6],
				        name: 'Liquid Fill'
				    }],
				    tooltip: {
				        show: true
				    }
				},
				liquidsoure:""
			}
		},
		watch:{
            liquidsoure () {
		      return this.liquidsoure
		    }
		},
		mounted:function(){
		 	this._vue_charts = echarts.init(document.getElementById('line'));
            this._vue_charts.setOption(this.option3);
            console.log("eeeeee"+this.liquidsoure.maxNumber)
		}
	}
</script>
<style>
	
</style>