$(function(){
var myChart = echarts.init(document.getElementById('zhu_one'));

option = {
    color:["#7c38bc"],
    
    tooltip : {
        trigger: 'axis'
    },
    
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['Man','Tue','Wed月','Thu','Fri','Sat','Mon','Tue','wed','Tue']
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
            data:[20, 35, 40, 50,62, 48, 29, 18, 13,4]
           
        },
        {
            name:'降水量',
            type:'bar',
            data:[25, 40, 45, 55, 65, 45, 28, 17, 13,4]
        }
    ]
};
myChart.setOption(option);
$(window).resize(function(){
    myChart.resize();
});

})