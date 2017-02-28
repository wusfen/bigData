chartOption = {
    // title: {
    //     text: 'pv uv'
    // },
    tooltip: {
        trigger: 'axis',
        position: function(pt) {
            // console.log(arguments)
            return [pt[0] - 56, 'auto'];
        },
        confine: true,
        animation: false,
        axisPointer: {
            animation: false
        },
        extraCssText: 'transition:none;box-shadow:1px 1px 10px #aaa;background:rgba(0,0,0,.5);bottom:100%;top:auto;margin-bottom:-30px;pointer-events:none',
    },
    xlegend: {
        data: [{
            icon: 'circle',
            name: '今PV'
        }, {
            icon: 'circle',
            name: '今UV'
        }, {
            icon: 'circle',
            name: '昨PV'
        }, {
            icon: 'circle',
            name: '昨UV'
        }],
        selected: {
            '今PV': true,
            '今UV': false,
            '昨PV': true,
            '昨UV': false,
        }
    },
    grid: {
        // show: true,
        left: '45',
        left: '45',
        // left: 0,
        top: '30',
        bottom: '40',
        // bottom: '60',
        right: '20',
        // containLabel: true
    },
    xAxis: {
        // type: 'time',
        // data: dates,
        // splitLine: {
        //     show: false
        // },
        axisTick: {
            show: false,
            inside: true
        },
        axisLabel: {
            // inside: true
        }
    },
    yAxis: {
        axisLine: {
            show: false
        },
        splitLine: {
            // show: false
        },
        axisTick: {
            show: false,
            inside: true
        },
        axisLabel: {
            // inside: true,
            // rotate: 45,
            margin: 2,
            formatter: function(value, index) {
                return (value + '').split('').reverse().join('')
                    .replace(/\d{8}(?=\d)/g, '亿').replace(/\d{4}(?=\d)/g, '万')
                    .split('').reverse().join('')
            }
        },

    },
    xdataZoom: [{
        type: 'slider',
        show: false,
        start: 80,
        end: 100
    }],
    color: ['#0af', '#21D100', '#FFD013', '#FF6767'],
    series: [{
        name: '今PV',
        type: 'line',
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        // data: todayPvs
        data: []
    }, {
        name: '今UV',
        type: 'line',
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        // data: todayUvs
        data: []
    }, {
        name: '昨PV',
        type: 'line',
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        // data: yestodayPvs
        data: []
    }, {
        name: '昨UV',
        type: 'line',
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        // data: yestodayUvs
        data: []
    }]
};
