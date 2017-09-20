<template>
	<div class="echarts">
			<div id="line" :style="{width:'88px',height:'88px'}"></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				optionData:{
					series: [{
				        type: 'liquidFill',
				        data: [0.6, 0.5, 0.4, 0.3],
				        backgroundStyle: {
				            borderWidth: 5,
				            borderColor: 'red',
				            color: 'yellow'
				        }
				    }]
				}
			}
		},
		mounted:function(){
		 	this._vue_charts = echarts.init(document.getElementById('line'));
            this._vue_charts.setOption(this.optionData.series);
		}
	}
</script>
<style>
	
</style>