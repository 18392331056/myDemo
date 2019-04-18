$(function(){
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据
option = {
    // color: ['#3398DB'],
    xAxis: {
        show: true,
        data: ['Feb11', 'Feb12', 'Feb13', 'Feb14', 'Feb17', 'Feb19', '2017-10-21', '2017-10-23', '2017-10-25',
            'Mar', 'Mar04', 'Mar07', 'Mar', 'Mar04', 'Mar07', 'Mar', 'Mar04', 'Mar07'
        ],
        name: "month",
        spliteNumber: 13,
        Interval: 3,
        logBase: 13,
        lineStyle: {
            color: "#f10909",
            width: 5
        },
        textStyle: {
            fontSize: 20,
            color: 'red'
        }



    },
    yAxis: {
        // data: [90, 100, 110, 120,130],
        show: true,
        name: "Value"
        // nameTextStyle :{color:"#f10909"}
    },
    series: [{
        type: 'k',
        data: [
            [20, 30, 10, 35],
            [40, 35, 30, 55],
            [33, 38, 33, 40],
            [33, 58, 33, 40],
            [40, 40, 32, 42],
            [40, 35, 30, 55],
            [33, 38, 33, 40],
            [40, 43, 32, 42],
            [20, 30, 10, 35],
            [40, 35, 30, 55],
            [33, 38, 33, 40],
            [40, 35, 30, 55],
            [40, 40, 32, 42],
            [20, 30, 25, 35],
            [40, 35, 30, 55],
            [33, 38, 33, 40],
            [40, 35, 30, 55],
            [40, 35, 30, 55],
            [33, 38, 40, 40],
            [40, 35, 30, 55],
            [33, 38, 33, 40]
        ],
        barMaxWidth: 20,
        itemStyle: {
            normal: {
                color: '#f7aa47', // 阳线填充颜色
                color0: '#68b828', // 阴线填充颜色
                lineStyle: {
                    width: 2,
                    color: 'orange', // 阳线边框颜色
                    color0: '#68b828' // 阴线边框颜色
                }
            },
            emphasis: {
                color: '#f7aa47', // 阳线填充颜色
                color0: '#68b828' // 阴线填充颜色
            }
        }

    }]


};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
$(window).resize(function(){
    myChart.resize();
})
})
