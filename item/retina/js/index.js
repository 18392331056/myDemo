//echarts 
var myChart = echarts.init(document.getElementById("main"));
var option = {
    color:["#4a8af5","#f62955","#29f6cd"],
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['Page views','Visitors','Unique visitors']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'Page views',
            type:'line',
            stack: '总量',
            data:[110, 132, 130, 134, 90, 230, 210,200,400,450,500,520]
        },
        {
            name:'Visitors',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 400,450,480,500,550,582]
        },
        {
            name:'Unique visitors',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320,1230,1420,1550,1580,1600]
        }
    ]
};
myChart.setOption(option);

$(window).resize(function(){
    myChart.resize();
})
