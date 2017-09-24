# project-a

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

标准lin chart 图表[没有x，y轴的线条，以及文字颜色，比较通用]

``` javascript

option = {
    title : {
        text: '未来一周气温变化',
        subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['最高气温','最低气温']
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisTick:{
               show:false, 
            },
            axisLabel:{
			    show:true,
				textStyle:{
			       color:'red',
			       baseline:'top',
			       fontSize:12
				}
			},
            axisLine:{
              show:false,
              onZero:true,
              lineStyle:{
                 color:'yellow',
                 type:'solid',
                 width:2
              }
          },
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} °C'
            },
            axisTick:{
               show:false, 
            },
            axisLabel:{
			    show:true,
				textStyle:{
			       color:'red',
			       baseline:'top',
			       fontSize:12
				}
			},
            axisLine:{
              show:false,
              onZero:true,
              lineStyle:{
                 color:'red',
                 type:'solid',
                 width:2
              }
          }
        }
    ],
    series : [
        {
            name:'最高气温',
            type:'line',
            data:[11, 11, 15, 13, 12, 13, 10],
            
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'最低气温',
            type:'line',
            data:[1, -2, 2, 5, 3, 2, 0],
             
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};

``` 

插件列表

http://www.jianshu.com/p/011d308d7dd7

滚动条组件
https://github.com/BosNaufal/vue-scrollbar