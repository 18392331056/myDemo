$(function(){
var myChart = echarts.init(document.getElementById('zhu_two'));

option = {
    color:["#f7aa47","#0e62c7"],
    
    tooltip : {
        trigger: 'axis'
    },
    
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['Man','Tue','Wed','Thu','Fri','Sat','Mon']
        }
    ],
    yAxis : [
        {
            type : 'value',
            data : [5,10,15,20,25,30,35,40,45,50,55,60,65,70]
        }
    ],
    series : [
        {
            // name:'蒸发量',
            type:'bar',
            data:[66, 58, 90, 80,56, 54, 40]
           
        },
        {
            name:'降水量',
            type:'bar',
            data:[25, 45, 38, 18, 96, 28, 100]
        }
    ]
};
myChart.setOption(option);
$(window).resize(function(){
    myChart.resize();
})
})