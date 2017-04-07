<template>
    <div class="row mg">
        <a class="cell flex aic xs24 bg sh ra case" href="#/charts/chart1">
            <span class="cell w12 tar fs8">门户</span>
            <div class="cell w12 tar pdr muted">
                <div>{{pub.pv}}pv</div>
                <div>{{pub.uv}}uv</div>
            </div>
        </a>
        <a class="cell flex aic xs24 bg sh ra case" href="#/charts/chart1#gslb">
            <span class="cell w12 tar fs8">gslb</span>
            <div class="cell w12 tar pdr muted">
                <div>{{gslb.pv}}pv</div>
                <div>{{gslb.uv}}uv</div>
            </div>
        </a>
        <a class="cell flex aic xs24 bg sh ra case" href="auth.html" target="iframe">
            <span class="cell w12 tar fs8">鉴权</span>
            <div class="cell w12 tar pdr muted">
                <div>{{jianquan.pv}}pv</div>
                <!-- <div>{{jianquan.uv}}uv</div> -->
            </div>
        </a>
    </div>
</template>
<script>
import request from './js/request.js'

export default {
    data: function() {
        return {
            pub: {},
            gslb: {},
            jianquan: {},
        }
    },
    created: function() {
        this.loadData();
    },
    methods: {
        loadData: function() {
            var vue = this;
            request({
                url: '/monitor/qryHomeOverallData',
                success(rsp) {
                    // console.log(rsp)
                    vue.pub = rsp.pub
                    vue.gslb = rsp.gslb
                    vue.jianquan = rsp.jianquan
                }
            })
        }
    },
}
</script>
<style type="text/css" scoped>
.case {
    min-width: 14em;
    height: 7em;
    margin: 0 1em 1em 0
}
</style>
