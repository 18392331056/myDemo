var myChart2 = echarts.init(document.getElementById("bing"));


option = {
    color:["skyblue","greenyellow","pink"],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['用户评价','注册量','反馈']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '90%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:234, name:'用户评价'},
                {value:135, name:'注册量'},
                {value:1548, name:'反馈'}
            ]
        }
    ]
};
myChart2.setOption(option);

$(window).resize(function(){
    myChart2.resize();
})
