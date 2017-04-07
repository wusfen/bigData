<template>
    <div class="w24 mw pdlr mglra">
        <!-- 产品 -->
        <div class="mgtb">
            <div class="w24 mw mglra">
                <div class="row">
                    <div class="cell xs24 none">
                        <a href="#js" class="cell pdlr pdtb2 curp" :class="{nav_at:nav==0}" v-on:click.prevent="nav=0">门户</a>
                        <a href="#js" class="cell pdlr pdtb2 curp" :class="{nav_at:nav==1}" v-on:click.prevent="nav=1">gslb</a>
                        <a href="#js" class="cell pdlr pdtb2">|</a>
                    </div>
                    <div class="cell xs24">
                        <a href="#js" class="cell pdlr pdtb2 curp" :class="{menu_at:productId==3}" v-on:click.prevent="productId=3">总览</a>
                        <a href="#js" class="cell pdlr pdtb2 curp" :class="{menu_at:productId==0}" v-on:click.prevent="productId=0">视频</a>
                        <a href="#js" class="cell pdlr pdtb2 curp" :class="{menu_at:productId==1}" v-on:click.prevent="productId=1">影院</a>
                        <a href="#js" class="cell pdlr pdtb2 curp" :class="{menu_at:productId==2}" v-on:click.prevent="productId=2">直播</a>
                    </div>
                    <!-- select -->
                    <div class="cell xs24 fr">
                        <div class="group inline mgtb1 mgr">
                            <label class="button sz3 ra9">
                                <input type="checkbox" v-model="hasUser" change="loadData()"> 用户
                            </label>
                            <label class="button sz3 ra9 ">
                                <input type="checkbox" v-model="hasTourist" change="loadData()"> 游客
                            </label>
                        </div>
                        <input class="input wa sz3 mgtb1 ra9" type="date" v-model="dateInput">
                    </div>
                </div>
            </div>
        </div>
        <!-- 今日流量 -->
        <div class="pd mgtb bg sh animate fadeInUp-enter">
            <table class="wf mgtbw tblf">
                <tr class="muted">
                    <td class="pd1 pdl tr "></td>
                    <td class="pd1 pdl tr ">PV</td>
                    <td class="pd1 pdl tr ">UV</td>
                </tr>
                <tr>
                    <td class="pd1  ">今日
                        <span class="success">↑</span>
                    </td>
                    <td class="pd1 pdl tr  bold" v-text="pv.today"></td>
                    <td class="pd1 pdl tr  bold" v-text="uv.today"></td>
                </tr>
                <tr>
                    <td class="pd1  ">昨日</td>
                    <td class="pd1 pdl tr muted" v-text="pv.yesterday"></td>
                    <td class="pd1 pdl tr muted" v-text="uv.yesterday"></td>
                </tr>
            </table>
        </div>
        <!-- 峰值top -->
        <div class="pd mgtb bg sh animate fadeInUp-enter ova" style="animation-delay:.15s">
            <div class="table w24">
                <div class="row">
                    <div class="cell vab pdlr2 muted" style="height:3em">
                        PV Top5
                    </div>
                    <div v-for="item in pv.tops" class="cell vab pdlr2">
                        <div class="fs2 muted">{{item.time}}时</div>
                        {{item.pv}}
                    </div>
                </div>
                <div class="row">
                    <div class="cell vab pdlr2 muted" style="height:3em">
                        UV Top5
                    </div>
                    <div v-for="item in uv.tops" class="cell vab pdlr2">
                        <div class="fs2 muted">{{item.time}}时</div>
                        {{item.uv}}
                    </div>
                </div>
            </div>
        </div>
        <!-- 图表 -->
        <div class="row cellpdlr mg-lr mgtb">
            <div class="cell w12 xs24">
                <div class="pdtb mgb bg sh animate fadeInUp-enter" style="animation-delay:.3s">
                    <div id="pvChart" class="" style="height:20em;"></div>
                    <div class="pdlr tac">
                        <div class="group inline">
                            <a href="#js" class="button sz3 ra9" style="width:4em" :class="{btn_at:pvTimeLong==24*60*60*1000}" v-on:click.prevent="chartZoom('pvChart',pvTimeLong=24*60*60*1000)">1 天</a>
                            <a href="#js" class="button sz3 ra9" style="width:4em" :class="{btn_at:pvTimeLong==12*60*60*1000}" v-on:click.prevent="chartZoom('pvChart',pvTimeLong=12*60*60*1000)">12小时</a>
                            <a href="#js" class="button sz3 ra9" style="width:4em" :class="{btn_at:pvTimeLong==6*60*60*1000}" v-on:click.prevent="chartZoom('pvChart',pvTimeLong=6*60*60*1000)">6小时</a>
                            <a href="#js" class="button sz3 ra9" style="width:4em" :class="{btn_at:pvTimeLong==3*60*60*1000}" v-on:click.prevent="chartZoom('pvChart',pvTimeLong=3*60*60*1000)">3小时</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cell w12 xs24">
                <div class="pdtb mgb bg sh animate fadeInUp-enter" style="animation-delay:.3s">
                    <div id="uvChart" class="" style="height:20em;"></div>
                    <div class="pdlr tac">
                        <div class="group inline">
                            <a href="#js" class="button sz3 ra9" style="width:4em" :class="{btn_at:uvTimeLong==24*60*60*1000}" v-on:click.prevent="chartZoom('uvChart',uvTimeLong=24*60*60*1000)">1 天</a>
                            <a href="#js" class="button sz3 ra9" style="width:4em" :class="{btn_at:uvTimeLong==12*60*60*1000}" v-on:click.prevent="chartZoom('uvChart',uvTimeLong=12*60*60*1000)">12小时</a>
                            <a href="#js" class="button sz3 ra9" style="width:4em" :class="{btn_at:uvTimeLong==6*60*60*1000}" v-on:click.prevent="chartZoom('uvChart',uvTimeLong=6*60*60*1000)">6小时</a>
                            <a href="#js" class="button sz3 ra9" style="width:4em" :class="{btn_at:uvTimeLong==3*60*60*1000}" v-on:click.prevent="chartZoom('uvChart',uvTimeLong=3*60*60*1000)">3小时</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import request from './js/request.js'


export default {
    data: function() {
        return {
            loading: true,
            nav: location.hash.match('gslb') ? 1 : 0, // 0:protal, 1:gslb
            productId: 3, // 3总览 0视频 1影院 2直播
            hasUser: true,
            hasTourist: true,
            dateInput: new Date().format('yyyy-MM-dd'),
            uvTimeLong: 24 * 60 * 60 * 1000, // uv 线时长
            pvTimeLong: 24 * 60 * 60 * 1000, // pv线时长
            pageData: null,
            pvChart: null,
            uvChart: null,
        }
    },
    computed: {
        userType: function() {
            var vue = this;

            // 0：用户
            // 1：游客
            // 2：用户+游客
            var userType = 2;
            if (!vue.hasUser) {
                userType = 1;
            }
            if (!vue.hasTourist) {
                userType = 0
            }
            if (!vue.hasUser && !vue.hasTourist) {
                vue.hasUser = true;
            }

            return userType
        },
        date: function() {
            var vue = this;
            return new Date(vue.dateInput.replace(/-/g, '/') + ' 00:00:00');
        },
        preDate: function() {
            var vue = this;
            var date = vue.date;
            return new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
        },
        nextDate: function() {
            var vue = this;
            var date = vue.date;
            return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
        },
        pv: function() {
            var vue = this;
            var pageData = vue.pageData;
            if (pageData == null) {
                return {}
            }

            return pageData[vue.nav == 0 ? 'pub' : 'gslb'][vue.productId].pv
        },
        uv: function() {
            var vue = this;
            var pageData = vue.pageData;
            if (pageData == null) {
                return {}
            }

            return pageData[vue.nav == 0 ? 'pub' : 'gslb'][vue.productId].uv
        }
    },
    watch: {
        nav: function() {
            this.loadData()
        },
        productId: function() {
            this.loadData()
        },
        userType: function() {
            this.loadData()
        },
        date: function() {
            this.loadData()
        },
    },
    methods: {
        initChart: function() {
            var vue = this;

            // chart
            var pvChart = vue.pvChart = echarts.init(document.getElementById('pvChart'), 'dark');
            var uvChart = vue.uvChart = echarts.init(document.getElementById('uvChart'), 'dark');

            // dates
            var dates = [];
            var date = vue.date;
            var preDate = vue.preDate;
            var dateGap = 1000 * 60 * 5;
            for (var i = 0; true; i++) {
                var d = preDate.getTime() + dateGap * i;
                d = new Date(d);
                if (d >= date) break;
                dates.push(d.format('HH:mm'));
            }

            $.extend(chartOption, {
                xAxis: {
                    data: dates
                }
            });


            pvChart.setOption($.extend({}, chartOption, {
                color: ['#0af', '#FFD013'],
                legend: {
                    data: [{
                        icon: 'circle',
                        name: '今PV'
                    }, {
                        icon: 'circle',
                        name: '昨PV'
                    }]
                },
                series: [{
                    name: '今PV',
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
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
                    data: []
                }]
            }));
            uvChart.setOption($.extend({}, chartOption, {
                color: ['#21D100', '#FF6767'],
                color: ['#0af', '#FFD013'],
                legend: {
                    data: [{
                        icon: 'circle',
                        name: '今UV'
                    }, {
                        icon: 'circle',
                        name: '昨UV'
                    }]
                },
                series: [{
                    name: '今UV',
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
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
                    data: []
                }]
            }));

            addEventListener('resize', function() {
                setTimeout(pvChart.resize, 600)
            });
            addEventListener('resize', function() {
                setTimeout(uvChart.resize, 600)
            });

        },
        loadData: function() {
            var vue = this;
            var date = vue.date;
            var preDate = vue.preDate;
            var nextDate = vue.nextDate;
            var pvChart = vue.pvChart;
            var uvChart = vue.uvChart;

            // 页面数据
            vue.loadPageData()

            // 今天 pv
            vue.loadPvData({
                startDate: date,
                endDate: nextDate,
                success: function(rsp) {
                    // chart
                    var datas = rsp.datas;
                    pvChart.setOption({
                        series: [{
                            name: '今PV',
                            data: datas.map(function(item) {
                                return [item.time, item.pv]
                            })
                        }]
                    });
                }
            });

            // 昨天 pv
            vue.loadPvData({
                startDate: preDate,
                endDate: date,
                success: function(rsp) {
                    // chart
                    var datas = rsp.datas;
                    pvChart.setOption({
                        series: [{
                            name: '昨PV',
                            data: datas.map(function(item) {
                                return [item.time, item.pv]
                            })
                        }]
                    });
                }
            });

            // 今天 uv
            vue.loadUvData({
                startDate: date,
                endDate: nextDate,
                success: function(rsp) {
                    // chart
                    var datas = rsp.datas;
                    uvChart.setOption({
                        series: [{
                            name: '今UV',
                            data: datas.map(function(item) {
                                return [item.time, item.uv]
                            })
                        }]
                    });
                }
            });

            // 昨天 uv
            vue.loadUvData({
                startDate: preDate,
                endDate: date,
                success: function(rsp) {
                    // chart
                    var datas = rsp.datas;
                    uvChart.setOption({
                        series: [{
                            name: '昨UV',
                            data: datas.map(function(item) {
                                return [item.time, item.uv]
                            })
                        }]
                    });
                }
            });
        },
        // 加载页面数据
        loadPageData: function() {
            var vue = this;
            var date = vue.date;
            var nextDate = vue.nextDate;
            var userType = vue.userType;

            request({
                url: '/monitor/qryVisitBrief',
                data: {
                    "startDate": date.format('yyyyMMddHHmmss'),
                    "endDate": nextDate.format('yyyyMMddHHmmss'),
                    "userType": userType
                },
                success: function(rsp) {
                    /*
                    pub|gslb > 产品id > pu|uv > today|yesterday|tops
                     */
                    vue.pageData = rsp;
                }
            })

        },
        // 加载pv线
        loadPvData: function(options) {
            var vue = this;
            var date = vue.date;
            var nextDate = vue.nextDate;
            var userType = vue.userType;

            request({
                url: ['/monitor/qryVisitPvInfo', '/monitor/qryGslbPvInfo'][vue.nav],
                data: {
                    "productId": vue.productId,
                    "startDate": options.startDate.format('yyyyMMddHHmmss'),
                    "endDate": options.endDate.format('yyyyMMddHHmmss'),
                    "statType": "1",
                    "userType": userType
                },
                success: function(rsp) {
                    options.success(rsp);
                }
            });
        },
        // 加载uv线
        loadUvData: function(options) {
            var vue = this;
            var date = vue.date;
            var nextDate = vue.nextDate;
            var userType = vue.userType;

            request({
                url: ['/monitor/qryVisitUvInfo', '/monitor/qryGslbUvInfo'][vue.nav],
                data: {
                    "productId": vue.productId,
                    "startDate": options.startDate.format('yyyyMMddHHmmss'),
                    "endDate": options.endDate.format('yyyyMMddHHmmss'),
                    "statType": "1",
                    "userType": userType
                },
                success: function(rsp) {
                    options.success(rsp);
                }
            });
        },
        // 图表缩放
        chartZoom: function(name, long) {
            var vue = this;
            var now = new Date;
            var date = vue.date;

            var cur = (now.getTime() - date.getTime()) / (24 * 60 * 60 * 1000);
            var long = long / (24 * 60 * 60 * 1000);
            var half = long / 2;
            var leftLong = half;
            var rightLong = half;
            if (cur - half < 0) {
                leftLong = cur;
                rightLong += half - cur;
            }
            if (cur + half > 1) {
                rightLong = 1 - cur;
                leftLong += cur + half - 1;
            }

            var chart = vue[name];
            chart.dispatchAction({
                type: 'dataZoom',
                start: (cur - leftLong) * 100,
                end: (cur + rightLong) * 100
            });
        }

    },
    mounted: function() {
        var vue = this;
        window.vue = this; // test

        vue.initChart()
        vue.loadData()

    }
}
</script>
