$(function(){
    var myChart1 = echarts.init(document.getElementById('Points1'));

option = {
    xAxis: {},
    yAxis: {},
    series: [{
        symbolSize: 20,
        data: [
            [10.0, 8.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [4.0, 4.26],
            [12.0, 10.84],
            [7.0, 4.82],
            [5.0, 5.68]
        ],
        type: 'scatter'
    }]
};
myChart1.setOption(option);
$(window).resize(function(){
    myChart1.resize();
});


// 第二个图表
var myChart2 = echarts.init(document.getElementById('Points2'));
var upColor = '#ec0000';
var upBorderColor = '#8A0000';
var downColor = '#00da3c';
var downBorderColor = '#008F28';


// 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
var data0 = splitData([
    ['2013/1/24', 2320.26,2320.26,2287.3,2362.94],
    ['2013/1/25', 2300,2291.3,2288.26,2308.38],
    ['2013/1/28', 2295.35,2346.5,2295.35,2346.92],
    ['2013/1/29', 2347.22,2358.98,2337.35,2363.8],
    ['2013/1/30', 2360.75,2382.48,2347.89,2383.76],
    ['2013/1/31', 2383.43,2385.42,2371.23,2391.82],
    ['2013/2/1', 2377.41,2419.02,2369.57,2421.15],
    ['2013/2/4', 2425.92,2428.15,2417.58,2440.38],
    ['2013/2/5', 2411,2433.13,2403.3,2437.42],
    ['2013/2/6', 2432.68,2434.48,2427.7,2441.73],
    ['2013/2/7', 2430.69,2418.53,2394.22,2433.89],
    ['2013/2/8', 2416.62,2432.4,2414.4,2443.03],
    ['2013/2/18', 2441.91,2421.56,2415.43,2444.8],
    ['2013/2/19', 2420.26,2382.91,2373.53,2427.07],
    ['2013/2/20', 2383.49,2397.18,2370.61,2397.94],
    ['2013/2/21', 2378.82,2325.95,2309.17,2378.82],
    ['2013/2/22', 2322.94,2314.16,2308.76,2330.88],
    ['2013/2/25', 2320.62,2325.82,2315.01,2338.78],
    ['2013/2/26', 2313.74,2293.34,2289.89,2340.71],
    ['2013/2/27', 2297.77,2313.22,2292.03,2324.63],
    ['2013/2/28', 2322.32,2365.59,2308.92,2366.16],
    ['2013/3/1', 2364.54,2359.51,2330.86,2369.65],
    ['2013/3/4', 2332.08,2273.4,2259.25,2333.54],
    ['2013/3/5', 2274.81,2326.31,2270.1,2328.14],
    ['2013/3/6', 2333.61,2347.18,2321.6,2351.44],
    ['2013/3/7', 2340.44,2324.29,2304.27,2352.02],
    ['2013/3/8', 2326.42,2318.61,2314.59,2333.67],
    ['2013/3/11', 2314.68,2310.59,2296.58,2320.96],
    ['2013/3/12', 2309.16,2286.6,2264.83,2333.29],
    ['2013/3/13', 2282.17,2263.97,2253.25,2286.33],
    ['2013/3/14', 2255.77,2270.28,2253.31,2276.22],
    ['2013/3/15', 2269.31,2278.4,2250,2312.08],
    ['2013/3/18', 2267.29,2240.02,2239.21,2276.05],
    ['2013/3/19', 2244.26,2257.43,2232.02,2261.31],
    ['2013/3/20', 2257.74,2317.37,2257.42,2317.86],
    ['2013/3/21', 2318.21,2324.24,2311.6,2330.81],
    ['2013/3/22', 2321.4,2328.28,2314.97,2332],
    ['2013/3/25', 2334.74,2326.72,2319.91,2344.89],
    ['2013/3/26', 2318.58,2297.67,2281.12,2319.99],
    ['2013/3/27', 2299.38,2301.26,2289,2323.48],
    ['2013/3/28', 2273.55,2236.3,2232.91,2273.55],
    ['2013/3/29', 2238.49,2236.62,2228.81,2246.87],
    ['2013/4/1', 2229.46,2234.4,2227.31,2243.95]
   

]);


function splitData(rawData) {
    var categoryData = [];
    var values = []
    for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i])
    }
    return {
        categoryData: categoryData,
        values: values
    };
}

function calculateMA(dayCount) {
    var result = [];
    for (var i = 0, len = data0.values.length; i < len; i++) {
        if (i < dayCount) {
            result.push('-');
            continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
            sum += data0.values[i - j][1];
        }
        result.push(sum / dayCount);
    }
    return result;
}



option = {
    title: {
        text: '上证指数',
        left: 0
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '15%'
    },
    xAxis: {
        type: 'category',
        data: data0.categoryData,
        scale: true,
        boundaryGap : false,
        axisLine: {onZero: false},
        splitLine: {show: false},
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax'
    },
    yAxis: {
        scale: true,
        splitArea: {
            show: true
        }
    },
    dataZoom: [
        {
            type: 'inside',
            start: 50,
            end: 100
        },
        {
            show: true,
            type: 'slider',
            y: '90%',
            start: 50,
            end: 100
        }
    ],
    series: [
        {
            name: '日K',
            type: 'candlestick',
            data: data0.values,
            itemStyle: {
                normal: {
                    color: upColor,
                    color0: downColor,
                    borderColor: upBorderColor,
                    borderColor0: downBorderColor
                }
            },
            markPoint: {
                label: {
                    normal: {
                        formatter: function (param) {
                            return param != null ? Math.round(param.value) : '';
                        }
                    }
                },
                data: [
                    {
                        name: 'XX标点',
                        coord: ['2013/5/31', 2300],
                        value: 2300,
                        itemStyle: {
                            normal: {color: 'rgb(41,60,85)'}
                        }
                    },
                    {
                        name: 'highest value',
                        type: 'max',
                        valueDim: 'highest'
                    },
                    {
                        name: 'lowest value',
                        type: 'min',
                        valueDim: 'lowest'
                    },
                    {
                        name: 'average value on close',
                        type: 'average',
                        valueDim: 'close'
                    }
                ],
                tooltip: {
                    formatter: function (param) {
                        return param.name + '<br>' + (param.data.coord || '');
                    }
                }
            },
            markLine: {
                symbol: ['none', 'none'],
                data: [
                    [
                        {
                            name: 'from lowest to highest',
                            type: 'min',
                            valueDim: 'lowest',
                            symbol: 'circle',
                            symbolSize: 10,
                            label: {
                                normal: {show: false},
                                emphasis: {show: false}
                            }
                        },
                        {
                            type: 'max',
                            valueDim: 'highest',
                            symbol: 'circle',
                            symbolSize: 10,
                            label: {
                                normal: {show: false},
                                emphasis: {show: false}
                            }
                        }
                    ],
                    {
                        name: 'min line on close',
                        type: 'min',
                        valueDim: 'close'
                    },
                    {
                        name: 'max line on close',
                        type: 'max',
                        valueDim: 'close'
                    }
                ]
            }
        },
        {
            name: 'MA5',
            type: 'line',
            data: calculateMA(5),
            smooth: true,
            lineStyle: {
                normal: {opacity: 0.5}
            }
        },
        {
            name: 'MA10',
            type: 'line',
            data: calculateMA(10),
            smooth: true,
            lineStyle: {
                normal: {opacity: 0.5}
            }
        },
        {
            name: 'MA20',
            type: 'line',
            data: calculateMA(20),
            smooth: true,
            lineStyle: {
                normal: {opacity: 0.5}
            }
        },
        {
            name: 'MA30',
            type: 'line',
            data: calculateMA(30),
            smooth: true,
            lineStyle: {
                normal: {opacity: 0.5}
            }
        },

    ]
};
myChart2.setOption(option);
$(window).resize(function(){
    myChart2.resize();
})


// 第三个图表

var myChart3 = echarts.init(document.getElementById('Radar1'));

option = {
title: {
   text: '基础雷达图'
},
tooltip: {},
legend: {
   data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
},
radar: {
   // shape: 'circle',
   name: {
       textStyle: {
           color: '#fff',
           backgroundColor: '#999',
           borderRadius: 3,
           padding: [3, 5]
      }
   },
   indicator: [
      { name: '销售（sales）', max: 6500},
      { name: '管理（Administration）', max: 16000},
      { name: '信息技术（Information Techology）', max: 30000},
      { name: '客服（Customer Support）', max: 38000},
      { name: '研发（Development）', max: 52000},
      { name: '市场（Marketing）', max: 25000}
   ]
},
series: [{
   name: '预算 vs 开销（Budget vs spending）',
   type: 'radar',
   // areaStyle: {normal: {}},
   data : [
       {
           value : [4300, 10000, 28000, 35000, 50000, 19000],
           name : '预算分配（Allocated Budget）'
       },
        {
           value : [5000, 14000, 28000, 31000, 42000, 21000],
           name : '实际开销（Actual Spending）'
       }
   ]
}]
};
myChart3.setOption(option);
$(window).resize(function(){
myChart1.resize();
});



// 第四个图表
var myChart4 = echarts.init(document.getElementById('Radar2'));

option = {
title: {
  text: '浏览器占比变化',
  subtext: '纯属虚构',
  top: 10,
  left: 10
},
tooltip: {
  trigger: 'item',
  backgroundColor : 'rgba(0,0,250,0.2)'
},
legend: {
  type: 'scroll',
  bottom: 10,
  data: (function (){
      var list = [];
      for (var i = 1; i <=28; i++) {
          list.push(i + 2000 + '');
      }
      return list;
  })()
},
visualMap: {
  top: 'middle',
  right: 10,
  color: ['red', 'yellow'],
  calculable: true
},
radar: {
 indicator : [
     { text: 'IE8-', max: 400},
     { text: 'IE9+', max: 400},
     { text: 'Safari', max: 400},
     { text: 'Firefox', max: 400},
     { text: 'Chrome', max: 400}
  ]
},
series : (function (){
  var series = [];
  for (var i = 1; i <= 28; i++) {
      series.push({
          name:'浏览器（数据纯属虚构）',
          type: 'radar',
          symbol: 'none',
          lineStyle: {
              width: 1
          },
          emphasis: {
              areaStyle: {
                  color: 'rgba(0,250,0,0.3)'
              }
          },
          data:[
            {
              value:[
                  (40 - i) * 10,
                  (38 - i) * 4 + 60,
                  i * 5 + 10,
                  i * 9,
                  i * i /2
              ],
              name: i + 2000 + ''
            }
          ]
      });
  }
  return series;
})()
};
myChart4.setOption(option);
$(window).resize(function(){
myChart1.resize();
});
// 第五个图表
var myChart5 = echarts.init(document.getElementById('Mu1'));
option = {
tooltip: {
   trigger: 'axis',
   axisPointer: {
       type: 'cross',
       crossStyle: {
           color: '#999'
       }
   }
},
toolbox: {
   feature: {
       dataView: {show: true, readOnly: false},
       magicType: {show: true, type: ['line', 'bar']},
       restore: {show: true},
       saveAsImage: {show: true}
   }
},
legend: {
   data:['蒸发量','降水量','平均温度']
},
xAxis: [
   {
       type: 'category',
       data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
       axisPointer: {
           type: 'shadow'
       }
   }
],
yAxis: [
   {
       type: 'value',
       name: '水量',
       min: 0,
       max: 250,
       interval: 50,
       axisLabel: {
           formatter: '{value} ml'
       }
   },
   {
       type: 'value',
       name: '温度',
       min: 0,
       max: 25,
       interval: 5,
       axisLabel: {
           formatter: '{value} °C'
       }
   }
],
series: [
   {
       name:'蒸发量',
       type:'bar',
       data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
   },
   {
       name:'降水量',
       type:'bar',
       data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
   },
   {
       name:'平均温度',
       type:'line',
       yAxisIndex: 1,
       data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
   }
]
};
myChart5.setOption(option);
$(window).resize(function(){
myChart1.resize();
});
  
// 第六个图表
var myChart6 = echarts.init(document.getElementById('Mu2'));
option = {
    xAxis: {},
    yAxis: {},
    series: [{
        data: [[0, 4],[2, 16], [4, 10], [6, 14],[8, 18], [10, 12], [12, 16]],
        type: 'line'
    }]
};
myChart6.setOption(option);
$(window).resize(function(){
myChart1.resize();
})
})