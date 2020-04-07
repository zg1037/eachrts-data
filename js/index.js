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
})();

//模拟飞行路线，社区提供
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".map .chart"));
    // 2. 指定配置和数据
    // 2. 指定配置和数据
    var  geoCoordMap = {
        '上海': [121.4648,31.2891],
        '东莞': [113.8953,22.901],
        '东营': [118.7073,37.5513],
        '中山': [113.4229,22.478],
        '临汾': [111.4783,36.1615],
        '临沂': [118.3118,35.2936],
        '丹东': [124.541,40.4242],
        '丽水': [119.5642,28.1854],
        '乌鲁木齐': [87.9236,43.5883],
        '佛山': [112.8955,23.1097],
        '保定': [115.0488,39.0948],
        '兰州': [103.5901,36.3043],
        '包头': [110.3467,41.4899],
        '北京': [116.4551,40.2539],
        '北海': [109.314,21.6211],
        '南京': [118.8062,31.9208],
        '南宁': [108.479,23.1152],
        '南昌': [116.0046,28.6633],
        '南通': [121.1023,32.1625],
        '厦门': [118.1689,24.6478],
        '台州': [121.1353,28.6688],
        '合肥': [117.29,32.0581],
        '呼和浩特': [111.4124,40.4901],
        '咸阳': [108.4131,34.8706],
        '哈尔滨': [127.9688,45.368],
        '唐山': [118.4766,39.6826],
        '嘉兴': [120.9155,30.6354],
        '大同': [113.7854,39.8035],
        '大连': [122.2229,39.4409],
        '天津': [117.4219,39.4189],
        '太原': [112.3352,37.9413],
        '威海': [121.9482,37.1393],
        '宁波': [121.5967,29.6466],
        '宝鸡': [107.1826,34.3433],
        '宿迁': [118.5535,33.7775],
        '常州': [119.4543,31.5582],
        '广州': [113.5107,23.2196],
        '廊坊': [116.521,39.0509],
        '延安': [109.1052,36.4252],
        '张家口': [115.1477,40.8527],
        '徐州': [117.5208,34.3268],
        '德州': [116.6858,37.2107],
        '惠州': [114.6204,23.1647],
        '成都': [103.9526,30.7617],
        '扬州': [119.4653,32.8162],
        '承德': [117.5757,41.4075],
        '拉萨': [91.1865,30.1465],
        '无锡': [120.3442,31.5527],
        '日照': [119.2786,35.5023],
        '昆明': [102.9199,25.4663],
        '杭州': [119.5313,29.8773],
        '枣庄': [117.323,34.8926],
        '柳州': [109.3799,24.9774],
        '株洲': [113.5327,27.0319],
        '武汉': [114.3896,30.6628],
        '汕头': [117.1692,23.3405],
        '江门': [112.6318,22.1484],
        '沈阳': [123.1238,42.1216],
        '沧州': [116.8286,38.2104],
        '河源': [114.917,23.9722],
        '泉州': [118.3228,25.1147],
        '泰安': [117.0264,36.0516],
        '泰州': [120.0586,32.5525],
        '济南': [117.1582,36.8701],
        '济宁': [116.8286,35.3375],
        '海口': [110.3893,19.8516],
        '淄博': [118.0371,36.6064],
        '淮安': [118.927,33.4039],
        '深圳': [114.5435,22.5439],
        '清远': [112.9175,24.3292],
        '温州': [120.498,27.8119],
        '渭南': [109.7864,35.0299],
        '湖州': [119.8608,30.7782],
        '湘潭': [112.5439,27.7075],
        '滨州': [117.8174,37.4963],
        '潍坊': [119.0918,36.524],
        '烟台': [120.7397,37.5128],
        '玉溪': [101.9312,23.8898],
        '珠海': [113.7305,22.1155],
        '盐城': [120.2234,33.5577],
        '盘锦': [121.9482,41.0449],
        '石家庄': [114.4995,38.1006],
        '福州': [119.4543,25.9222],
        '秦皇岛': [119.2126,40.0232],
        '绍兴': [120.564,29.7565],
        '聊城': [115.9167,36.4032],
        '肇庆': [112.1265,23.5822],
        '舟山': [122.2559,30.2234],
        '苏州': [120.6519,31.3989],
        '莱芜': [117.6526,36.2714],
        '菏泽': [115.6201,35.2057],
        '营口': [122.4316,40.4297],
        '葫芦岛': [120.1575,40.578],
        '衡水': [115.8838,37.7161],
        '衢州': [118.6853,28.8666],
        '西宁': [101.4038,36.8207],
        '西安': [109.1162,34.2004],
        '贵阳': [106.6992,26.7682],
        '连云港': [119.1248,34.552],
        '邢台': [114.8071,37.2821],
        '邯郸': [114.4775,36.535],
        '郑州': [113.4668,34.6234],
        '鄂尔多斯': [108.9734,39.2487],
        '重庆': [107.7539,30.1904],
        '金华': [120.0037,29.1028],
        '铜川': [109.0393,35.1947],
        '银川': [106.3586,38.1775],
        '镇江': [119.4763,31.9702],
        '长春': [125.8154,44.2584],
        '长沙': [113.0823,28.2568],
        '长治': [112.8625,36.4746],
        '阳泉': [113.4778,38.0951],
        '青岛': [120.4651,36.3373],
        '韶关': [113.7964,24.7028]
    };

    var XAData = [
        [{name:'西安'}, {name:'北京',value:100}],
        [{name:'西安'}, {name:'上海',value:100}],
        [{name:'西安'}, {name:'广州',value:100}],
        [{name:'西安'}, {name:'西宁',value:100}],
        [{name:'西安'}, {name:'银川',value:100}]
    ];

    var XNData = [
        [{name:'西宁'}, {name:'北京',value:100}],
        [{name:'西宁'}, {name:'上海',value:100}],
        [{name:'西宁'}, {name:'广州',value:100}],
        [{name:'西宁'}, {name:'西安',value:100}],
        [{name:'西宁'}, {name:'银川',value:100}]
    ];

    var YCData = [
        [{name:'银川'}, {name:'北京',value:100}],
        [{name:'银川'}, {name:'广州',value:100}],
        [{name:'银川'}, {name:'上海',value:100}],
        [{name:'银川'}, {name:'西安',value:100}],
        [{name:'银川'}, {name:'西宁',value:100}],
    ];

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    //var planePath = 'arrow';
    var convertData = function (data) {

        var res = [];
        for (var i = 0; i < data.length; i++) {

            var dataItem = data[i];

            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;

    };

    var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
    var series = [];
    [['西安', XAData], ['西宁', XNData], ['银川', YCData]].forEach(function (item, i) {
        series.push({
                name: item[0] + ' Top3',
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: 'red',   //arrow箭头的颜色
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top3',
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top3',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i],
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
    });
    var option = {
        tooltip : {
            trigger: 'item',
            formatter:function(params, ticket, callback){
                if(params.seriesType=="effectScatter") {
                    return "线路："+params.data.name+""+params.data.value[2];
                }else if(params.seriesType=="lines"){
                    return params.data.fromName+">"+params.data.toName+"<br />"+params.data.value;
                }else{
                    return params.name;
                }
            }
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data:['西安 Top3', '西宁 Top3', '银川 Top3'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'multiple'
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: true,
                    color:'#fff'
                }
            },
            // 放大地图
            zoom: 1.2,
            roam: true,
            //省份背景颜色
            itemStyle: {
                normal: {
                    areaColor: 'rgba(20,41,87,.8)',
                    borderColor: '#195bb9',
                    borderWidth: 1,
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            }
        },
        series: series
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

