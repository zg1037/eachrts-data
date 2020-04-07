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
                data: [120, 232, 101, 434, 90, 230, 210, 234, 555, 456, 873, 990]
            },
            {
                smooth: true,
                name: '季度销售额',
                type: 'line',
                stack: '总量',
                data: [220, 82, 191, 334, 190, 330, 310, 434, 90, 230, 210, 234]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();
// 第二个折线图
(function () {
    var myChart = echarts.init(document.querySelector(".line2 .chart"));
    var option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        grid: {
            left: '10',
            top: "30",
            right: '10',
            bottom: '10',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['01', "02", "03", '04', "05", "06", '07', "08", "09", '10', "11", "12", '13', "14", "15"],
                //修改刻度标签
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                },
                //不显示x坐标轴样式
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                },
                axisTick: {
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
                //不显示x坐标轴样式
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }

            }
        ],
        series: [
            {
                smooth: true,
                name: '隐藏风险',
                type: 'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(1, 132, 213, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(1, 132, 213, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                //线上圆点 拐点配置
                symbol: "circle",
                symbolSize: 7,
                showSymbol: false,
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                data: [120, 132, 101, 134, 90, 230, 210, 220, 182, 191, 234, 290, 330, 310, 123],
                //单独修改线的颜色
                lineStyle: {
                    color: "#0184d5",
                }
            },
            {
                smooth: true,
                name: '实时风险',
                type: 'line',
                stack: '总量',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                symbol: "circle",
                symbolSize: 7,
                showSymbol: false,
                itemStyle: {
                    normal: {
                        color: "#00d887",
                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
                data: [220, 182, 191, 234, 290, 330, 310, 120, 132, 101, 134, 90, 230, 210, 220, 123],

            }

        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();
//第一个饼图
(function () {
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    var option = {
        color:["#065aab","#066eab","#0682ab","#0696ab","#06afab"],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            bottom: "0%",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            },
            data: ['安徽', '湖北', '湖南', '浙江',"上海"]
        },
        series: [
            {
                name: '定点投入',
                type: 'pie',
                //修改内圆半径和外园半径，百度比是相对于容器的
                radius: ['40%', '60%'],
                //设置饼图的位置
                center: ["50%", "40%"],

                avoidLabelOverlap: false,
                label: {
                    show: true,
                },
                labelLine: {
                    show: true
                },
                data: [
                    {value: 335, name: '安徽'},
                    {value: 310, name: '湖北'},
                    {value: 234, name: '湖南'},
                    {value: 135, name: '浙江'},
                    {value: 935, name: '上海'}
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();
//第二个饼型图
(function () {
    var myChart = echarts.init(document.querySelector(".pie2 .chart"));
    option = {
        // 注意颜色写的位置
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            top:"92%",
            itemWidth: 9,
            itemHeight: 9,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "10"
            }
        },
        // 修饰饼形图文字相关的样式 label对象
        label: {
            fontSize: 10
        },
        // 修饰引导线样式
        labelLine: {
            // 连接到图形的线长度
            length: 10,
            // 连接到文字的线长度
            length2: 10
        },
        series: [
            {
                name: '地区分布',
                type: 'pie',
                radius: ["10%", "70%"],
                //设置饼图的位置
                center: ["50%", "49%"],
                roseType: 'radius',
                data: [
                    { value: 20, name: "云南" },
                    { value: 26, name: "北京" },
                    { value: 24, name: "山东" },
                    { value: 25, name: "河北" },
                    { value: 20, name: "江苏" },
                    { value: 25, name: "浙江" },
                    { value: 30, name: "深圳" },
                    { value: 42, name: "广东" }
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})()
