$(function(){


var myChart = echarts.init(document.getElementById('yuan3'));

// app.title = '环形图';

  option = {
    color:["#0e62c7","#eeeeee"],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:[]
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['55%', '70%'],
            // avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '50',
                        fontWeight: '900'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:700,name:'75%'},
                 {value:310}
                
            ]
        }
    ]
};
myChart.setOption(option);
$(window).resize(function(){
    myChart.resize();
})
})