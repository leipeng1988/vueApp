


//侧边栏
$(".side_click").click(function () {
    $(".list_menu").slideToggle();
    $(".side_list .icon1").removeClass("icon-mjiantou-copy1");
    $(".side_list .icon1").addClass("icon-mjiantou-copy1-copy");
})

$(".side_click2").click(function () {
    $(".list_menu2").slideToggle();
    $(".side_list .icon2").removeClass("icon-mjiantou-copy1");
    $(".side_list .icon2").addClass("icon-mjiantou-copy1-copy");
})

// <!--关闭-->
$(".icon-chenghao").click(function () {
    $(".center_close").remove();
})
//tic_right
// $(".click").hide();
// $(function () {
//     $(".tic_right").each(function () {
//         console.log($(".tic_right"));
//         $("this").on("click",function () {
//             console.log($(this));
//             $(".click").show()
//         })
//     })
// })
//点击出现侧边栏
$(".shezhi_a").click(function () {
    $(".aside").slideToggle();
})

//折线渐变
function jian() {
    var dom = document.getElementById("doughnut1");
    var myChart = echarts.init(dom);
    option = {
        backgroundColor: '#fff',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            show:false,
            type: 'category',
            boundaryGap: false,
            axisLine: {
                show:false
            },
            data: ['2014', '2014', '2015', '2016', '2017', '2018']
        }, {
            axisPointer: {
                show: false
            },
            axisLine: {
                show:false
            },
            // axisTick: {
            //     show: ture
            // }
        }],
        yAxis: [{
            show:false
        }],
        series: [{
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#b6f1ff'
                    }], false)
                }
            },
            itemStyle: {
                normal: {
                    color: '#3ea9db'

                }
            },
            data: [0, 14, 10, 14, 8, 0]
        }, {
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#6dc4ec'
                    }], false),
                }
            },
            itemStyle: {
                normal: {
                    color: '#3ea9db',

                }
            },
            data: [0, 11, 6, 8, 11, 0]
        }, {
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {

                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#6ed8fc'
                    }], false),
                }
            },
            itemStyle: {
                normal: {
                    color: '#3ea9db',
                }
            },
            data: [0, 7, 11, 10, 8, 0]
        }, ]
    };
    myChart.setOption(option, true);
    window.onresize = myChart.resize;
}