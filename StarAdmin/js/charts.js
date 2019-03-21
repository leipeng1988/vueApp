
//折线图
function line() {
    var dom = document.getElementById("zhexian");
    var myChart = echarts.init(dom);
    option = {
        title : {
            text: 'Line Chart',
            x:'8%',
            y:'8%',
            textStyle: {
                fontWeight: 400,
                fontSize: 16,
                color: '#687284'
            }
        },
        tooltip : {
            trigger: 'axis',
            formatter: "{b0}<br/>{a0}",
            // show: data.tooltipShow === false ? false : true,
            textStyle:{
                fontFamily: 'Verdana, sans-serif',
                fontSize: 10,
                fontStyle: 'italic'
            }
        },
        grid: {
            left: '3%',
            top:'15%',
            containLabel: true
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['2013','2014','2015','2016','2017','2018'],
                axisTick:{
                    lineStyle:{
                        color:'#dadada',
                        width:2
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#676767'
                    }
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#dadada',
                        width:1,
                        type:'solid'
                    }
                }
            }
        ],
        yAxis : {
            type : 'value',
            min:0,
            max:20,
            interval:2,
            axisTick:{
                lineStyle:{
                    color:'#dadada',
                    width:2
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#676767'
                }
            },
        },
        series : [
            {
                name:'# of Votes：19',
                type:'line',
                // center:[],
                areaStyle: {
                    normal: {type: 'default',
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(255, 224, 230,0.2)'
                        }, {
                            offset: 1,
                            color: 'rgba(199, 37, 50,0.2)'
                        }], false)
                    }
                },
                smooth:true,
                symbolSize:4,
                symbol:'none',
                itemStyle: {
                    normal: {areaStyle: {type: 'default'}},
                    normal : {
                        color:'#000',  //圈圈的颜色
                        lineStyle:{
                            color:'#ff6384',//线的颜色
                            width:1
                        }
                    }
                },
                data:[10,19,3,5,2,3]
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
        window.onresize = myChart.resize;
    }
}

//柱状图
function bar() {
    var dom = document.getElementById("bar");
    var myChart = echarts.init(dom);
    option = {
        title : {
            text: 'Bar Chart',
            x:'8%',
            y:'8%',
            textStyle: {
                fontWeight: 400,
                fontSize: 16,
                color: '#687284'
            }
        },
        tooltip: {
            trigger: 'item',
            // show: data.tooltipShow === false ? false : true
            //   formatter: "{b}: {c} ({d}%)"
        },
        xAxis: {
            type: 'category',
            data: ['2013', '2014', '2015', '2016','2017','2018'],
            splitLine: {           // 分隔线
                show: true,        // 默认显示，属性show控制显示与否
                // onGap: null,
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: ['#ccc'],
                    width: 1,
                    type: 'solid'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#676767'
                }
            },
        },
        yAxis: {
            type: 'value',
            min:'0',
            max:'20',
            axisLine:{
                lineStyle:{
                    color:'#676767'
                }
            },
        },
    grid: {
            x: 80,
            y: 60,
            x2: 80,
            y2: 60,
            // width: {totalWidth} - x - x2,
            // height: {totalHeight} - y - y2,
            backgroundColor: 'rgba(0,0,0,0)',
            borderWidth: 1,
            borderColor: '#ccc'
},
        series: [{
            data: [10, 19, 3, 5,2,3],
            type: 'bar',
            //配置样式
            itemStyle: {
                //通常情况下：
                normal:{
                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function (params){
                        var colorList = ['rgb(255,224,230)','rgb(215,236,251)','rgb(255,245,221)','rgb(219,242,242)','rgb(235,224,255)','rgb(255,224,250)'];
                        return colorList[params.dataIndex];
                    }
                }
            },
        }]
    };
    // if (option && typeof option === "object") {
        myChart.setOption(option, true);
        window.onresize = myChart.resize;
    // }
}
//Area Chart
function area() {
        var dom = document.getElementById("area");
        var myChart = echarts.init(dom);
        option = {
            title : {
                text: 'Line Chart',
                x:'8%',
                y:'8%',
                textStyle: {
                    fontWeight: 400,
                    fontSize: 16,
                    color: '#687284'
                }
            },
            tooltip : {
                trigger: 'axis',
                formatter: "{b0}<br/>{a0}",
                // show: data.tooltipShow === false ? false : true,
                textStyle:{
                    fontFamily: 'Verdana, sans-serif',
                    fontSize: 10,
                    fontStyle: 'italic'
                }
            },
            grid: {
                left: '3%',
                top:'15%',
                containLabel: true
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['2013','2014','2015','2016','2017'],
                    axisTick:{
                        lineStyle:{
                            color:'#dadada',
                            width:1,
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#676767'
                        }
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:'#dadada',
                            width:1,
                            type:'solid'
                        }
                    }
                }
            ],
            yAxis : {
                type : 'value',
                min:0,
                max:20,
                interval:5,
                axisTick:{
                    lineStyle:{
                        color:'#dadada',
                        width:1
                    }
                }
                ,
                axisLine:{
                    lineStyle:{
                        color:'#676767'
                    }
                },
            },
            legend: {
                orient: 'horizontal',
                top: 55,
                selectedMode: false,
                itemWidth: 40,
                itemHeight: 16,
                borderRadius: 6,
                data:['# of Votes']
            },
            series : [
                {
                    name:'# of Votes：19',
                    type:'line',
                    smooth:true,
                    symbolSize:4,
                    symbol:'1',
                    itemStyle: {
                        normal: {areaStyle: {type: 'default'}},
                        normal : {
                            color:'#ff6384',  //圈圈的颜色
                            radius:'3',
                            lineStyle:{
                                color:'#ff6384',//线的颜色
                                width:1
                            }
                        }
                    },
                    data:[12,19,3,5,2]
                }
            ]
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
            window.onresize = myChart.resize;
        }
    }
//环形图
function doughnut() {
    var dom = document.getElementById("doughnut");
    var myChart = echarts.init(dom);
    /**
     * 图标所需数据
     */
    var data = {
        id: 'echartPie',
        value: [30, 30, 30],
        legend: ['pink', 'yellow', 'blue'],
        color: ['#ffe6aa', '#ffb1c1', '#9ad0f5'],
        // tooltipShow:false,    //设置悬浮提示显示              --默认显示true
        // hoverAnimation:false, //设置鼠标悬浮点击饼图动画效果  --默认开启动画true
        title: 'Doughnut Chart',
    }

////////////////////////////////////////

    /**
     * 数据处理
     */
    var seriesData = []
    data.value.forEach(function(item, index) {
        seriesData.push({
            value: item,
            name: data.legend[index]
        })
    })
////////////////////////////////////////

    var option = {
        backgroundColor: '#fff',
        title: {
            x: '8%',
            y: '8%',
            textStyle: {
                fontWeight: 400,
                fontSize: 16,
                color: '#687284'
            },
            text: data.title || ''
        },
        tooltip: {
            trigger: 'item',
            show: data.tooltipShow === false ? false : true
            //   formatter: "{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            top: 55,
            selectedMode: false,
            itemWidth: 40,
            itemHeight: 16,
            borderRadius: 6,
            data: data.legend
        },
        series: [{
            type: 'pie',
            // clickable:false,
            // selectedMode: 'single',//单点击设置
            hoverAnimation: data.hoverAnimation === false ? false : true,
            radius: ['20%', '50%'],
            color: data.color,
            labelLine: {
                normal: {
                    show: false,
                    width:1
                }
            },
            itemStyle:{
                normal:{
                  label:{
                      show:false,
                  },
                    borderWidth:1
                },
                // borderColor:'data.legend[index]',
            },
            data: seriesData
        }]
    };
    // if (option && typeof option === "object") {
        myChart.setOption(option, true);
        window.onresize = myChart.resize;
    // }
}

//饼状图
function pie() {
    var dom = document.getElementById("pie");
    var myChart = echarts.init(dom);
    /**
     * 图标所需数据
     */
    var data = {
        // id: 'echartPie',
        value: [30,30,30],
        legend:['yellow', 'pink', 'blue'],
        color: ['#ffe6aa', '#ffb1c1', '#9ad0f5'],
        // tooltipShow:false,    //设置悬浮提示显示              --默认显示true
        // hoverAnimation:false, //设置鼠标悬浮点击饼图动画效果  --默认开启动画true
        title: 'Pie Chart',
    }
    /**
     * 数据处理
     */
    var seriesData = []
    data.value.forEach(function(item, index) {
        seriesData.push({
            value: item,
            name: data.legend[index],
            color:data.color[index]
        })
    })

    var option = {
        backgroundColor: '#fff',
        title: {
            x: '8%',
            y: '8%',
            textStyle: {
                fontWeight: 400,
                fontSize: 16,
                color: '#687284'
            },
            text: data.title || ''
        },
        tooltip: {
            trigger: 'item',
            show: data.tooltipShow === false ? false : true
            //   formatter: "{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'horizontal',
            top: 50,
            // icon: 'circle',
            selectedMode: false,
            itemWidth: 35,
            itemHeight: 15,
            itemGap: 6,
            textStyle:{
                // x:'center',
                // y:'50%'
            },
            // borderRadius: 6,
            data: data.legend
        },
        series: [{
            type: 'pie',
            // clickable:false,
            // selectedMode: 'single',//单点击设置
            hoverAnimation: data.hoverAnimation === false ? false : true,
            radius: '50%',
            color: data.color,
            labelLine: {
                normal: {
                    show: false
                },
            },
            itemStyle:{
                normal:{
                    label:{
                        show:false,
                    },
                    // borderWidth:1,
                    // borderColor:'data.color'
                },
                // borderColor:
            },

            data: seriesData
        }]
    };
    // if (option && typeof option === "object") {
        myChart.setOption(option, true);
        window.onresize = myChart.resize;
    // }
}

//散点
function san() {
    var dom = document.getElementById("scatter");
    var myChart = echarts.init(dom);
    var sr=[-25, -10, 0,10,40];
    var zc=[-25, -10, 10, 20];
    var srtip=[];
    for (var i = 0; i < sr.length; i++) {
        srtip.push(sr[i]+3)
    }
    var data = {
        id: 'echartPie',
        value: [30, 30, 30],
        legend: ['pink', 'yellow', 'blue'],
        color: ['#ffe6aa', '#ffb1c1', '#9ad0f5'],
        // tooltipShow:false,    //设置悬浮提示显示              --默认显示true
        // hoverAnimation:false, //设置鼠标悬浮点击饼图动画效果  --默认开启动画true
        // title: 'Doughnut Chart',
    }

    option = {
        title: {
            x: '8%',
            y: '8%',
            textStyle: {
                fontWeight: 400,
                fontSize: 16,
                color: '#687284'
            },
            text:"Scatter Chart"
        },
        tooltip: {
            trigger: 'axis',

            // formatter: function(e) {
            //     var html = "";
            //     html += e[0].name + "月</br>";
            //     for (var i = 0; i < e.length; i++) {
            //         if (e[i].seriesType == "line") {
            //             html += e[i].marker + e[i].seriesName + ":" + e[i].data + "</br>"
            //         }
            //     }
            //     return html
            // }
        },
        legend: {
            // orient: 'horizontal',
            // tooltip:{
            //         show:true
            //     },
            // textStyle:{
            //     top: 55,
            //     selectedMode: false,
            //     itemWidth: 40,
            //     itemHeight: 16,
            //     borderRadius: 6,
            //     data: ['First Dataset', 'Second Dataset'],
            // },

        },
        xAxis: [{
            type: 'category',
            data: [-30, -20, -10, 0, 10, 20, 30, 40],
            axisPointer: {
                show: false,
                lineStyle: {
                    width: 0
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#676767'
                }
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#dadada',
                    width:1,
                    type:'solid'
                }
            }
        },
            {
                type: 'category',
                data: [-30, -20, -10, 0, 10, 20, 30, 40],
                show: false,
                axisPointer: {
                    show: false,
                    lineStyle: {
                        width: 0
                    }
                }
            },
        ],

        yAxis: {
            type: 'value',
            data:[-30,-20,-10,0,10,20,30],
            min:-30,
            max:20,
        axisLine:{
            lineStyle:{
                color:'#676767'
            }
        },
        splitLine:{
            show:true,
            lineStyle:{
                color:'#dadada',
                width:1,
                type:'solid'
            }
        }
        },
        series: [{
            id: "all",
            data: sr,
            type: 'line',
            // name: "收入",
            smooth: true,
            itemStyle: {
                show:false,
                color: "orange",
                opacity: 0
            }

        },
            {
                id: "count",
                data: zc,
                type: 'line',
                smooth: true,
            },
            {
                id: "all2",
                data: srtip,
                type: 'bar',
                // xAxisIndex: 1,
                barWidth: "60%",
                itemStyle: {
                    normal: {
                        opacity: 0
                    },
                }
            },
            {
                id: "count2",
                data: zc,
                type: 'bar',
                zlevel: 1,
                barWidth: '2px',
                itemStyle: {
                    normal: {
                        opacity: 0
                    },
                    // emphasis: {
                    //     opacity: 1,
                    //     color: "green"
                    // }
                }
            }
        ]
    };
    myChart.setOption(option, true);
    window.onresize = myChart.resize;
}














