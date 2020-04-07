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
                data: ["路由行业", "游戏行业","教育行业", "电商行业", "金融行业", "医疗行业", "社交行业"],
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
})();
