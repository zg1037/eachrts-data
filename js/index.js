//使用自执行函数，可以防止变了污染，减少命名冲突
//柱状图1
(function () {
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '4%',
            top: "10px",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ["路由行业", "游戏行业", "教育行业", "电商行业", "金融行业", "医疗行业", "社交行业"],
                axisTick: {
                    alignWithLabel: true
                },
                //修改刻度标签
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                },
                //不显示x坐标轴样式
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                //修改刻度标签
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                // y轴分割线颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '35%',
                data: [10, 52, 200, 334, 390, 330, 220],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();
// 柱形图2
(function () {
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    var option = {
        grid: {
            top: "10%",
            left: '22%',
            bottom: '10%',
            containLabel: false
        },
        //不显示x轴
        xAxis: {
            show: false
        },
        //两组y轴
        yAxis: [{
            type: 'category',
            inverse: true,
            data: ['在线设备', '离线设备', '维修设备', '行驶设备', '失效设备'],
            // 不显示y轴和刻度
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            //文字颜色
            axisLabel: {
                color: "#fff"
            }
        },
            {
                type: 'category',
                inverse: true,
                data: ['123', '478', '134', '797', '475'],
                // 不显示y轴和刻度
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false
                },
                //文字颜色
                axisLabel: {
                    color: "#fff"
                }
            }
        ],
        //思路，用第一组柱子包裹第二组柱子
        series: [
            {
                yAxisIndex: 0,  //设置柱子层级
                name: '条',
                type: 'bar',
                data: [70, 54, 60, 78, 29],
                //柱子改为圆角
                itemStyle: {
                    barBorderRadius: 20,
                    color: function (params) {
                        return myColor[params.dataIndex]
                    }
                },
                //柱子间距和宽度
                barCategoryGap: 50,
                barWidth: 10,
                //设置第一组显示数字百分比
                label: {
                    show: true,
                    position: 'inside',
                    formatter: "{c}%"   //自动把data解析为数据，
                }
            },
            {
                yAxisIndex: 1,
                name: '框',
                type: 'bar',
                data: [100, 100, 100, 100, 100],
                //柱子间距和宽度
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                },

            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();
//折线图1
(function () {
    var myChart = echarts.init(document.querySelector(".line .chart"));
    var option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                color: "#4c9bfb",
            },
            right: "10%"
        },
        grid: {
            top: "20%",
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,  //去除轴间距
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月',
                '8月', '9月', '10月', '11月', '12月'],
            //修改刻度标签
            axisLabel: {
                color: "#4c9bfb",
                fontSize: 12
            },
            //不显示x坐标轴样式
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            //修改刻度标签
            axisLabel: {
                color: "#4c9bfb",
                fontSize: 12
            },
            //不显示x坐标轴样式
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            // y轴分割线颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [
            {
                smooth: true,
                name: '月销售额',
                type: 'line',
                stack: '总量',
                data: [120, 232, 101, 434, 90, 230, 210,234,555,456,873,990]
            },
            {
                smooth: true,
                name: '季度销售额',
                type: 'line',
                stack: '总量',
                data: [220, 82, 191, 334, 190, 330, 310,434, 90, 230, 210,234]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();
