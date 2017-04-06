<style type="text/css" scoped>
td {
    position: relative;
}

td>input {
    position: absolute;
    left: 1px;
    right: 1px;
    top: 1px;
    bottom: 1px;
    padding-left: .75em;
    width: 100%;
    border: none;
    background: transparent;
}

td>span {
    color: transparent;
    white-space: nowrap;
}

td>input:focus {
    border: solid 1px #ddd;
    border-width: 0;
    box-shadow: none !important
}
</style>
<style type="text/css" scoped>
/* transition */

tr {
    transition: .5s;
}

.tr-enter,
.tr-leave-active {
    opacity: 0;
    transform: translateY(20px);
}

.tr-leave-active>td {
    position: absolute;
    height: 0;
    padding: 0;
    line-height: 0;
    z-index: -1;
    opacity: 0;
}


/*  */

.fade {
    transition: .5s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
    transform: translateY(20px);
}

.fade-leave-active {
    position: absolute;
}
</style>
<style type="text/css" scoped>
.active {
    /*border-bottom: solid 1px #0af;*/
    color: #0af;
}
</style>
<template>
    <div class="pdlr mgtb bg sh">
        <div class="pdtb pdlr bdb mg-lr">指标详情</div>
        <div class="ova mg-lr">
            <table class="table">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>指标名称</th>
                        <th>字段名称</th>
                        <th>指标分类</th>
                        <th>指标周期</th>
                        <th>创建时间</th>
                        <th>指标状态</th>
                        <th>指标标识</th>
                        <th>指标口径</th>
                        <th class="tar">
                        </th>
                    </tr>
                </thead>
                <tr>
                    <td>
                        <span>{{item.indexId}}</span>
                        <input v-model="item.indexId" v-on:input="table1Upate(item)">
                    </td>
                    <td>
                        <span>{{item.indexName}}</span>
                        <input v-model="item.indexName" v-on:input="table1Upate(item)">
                    </td>
                    <td>
                        <span>{{item.indexEName}}</span>
                        <input v-model="item.indexEName" v-on:input="table1Upate(item)">
                    </td>
                    <td>
                        <span>{{item.indexType}}</span>
                        <input v-model="item.indexType" v-on:input="table1Upate(item)">
                    </td>
                    <td>
                        <span>{{item.indexCycle}}</span>
                        <input v-model="item.indexCycle" v-on:input="table1Upate(item)">
                    </td>
                    <td>
                        <span>{{item.indexCreateTime}}</span>
                        <input v-model="item.indexCreateTime" v-on:input="table1Upate(item)">
                    </td>
                    <td>
                        <span>{{item.indexStatus}}</span>
                        <input v-model="item.indexStatus" v-on:input="table1Upate(item)">
                    </td>
                    <td>
                        <span>{{item.indexFlag}}</span>
                        <input v-model="item.indexFlag" v-on:input="table1Upate(item)">
                    </td>
                    <td>
                        <span>{{item.indexDef}}</span>
                        <input v-model="item.indexDef" v-on:input="table1Upate(item)">
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <!-- 数据视图 -->
        <div class="row mgtb">
            <div class="pdtb pdlr bdb mg-lr">数据视图</div>
            <div class="ova mg-lr">
                <table class="table">
                    <thead>
                        <tr>
                            <th>编号</th>
                            <th>数据视图名称</th>
                            <th>数据源名称</th>
                            <th>数据源SCHEMA</th>
                            <th>数据视图状态</th>
                            <th>数据视图标记</th>
                            <th>创建时间</th>
                            <th class="tar">
                            </th>
                        </tr>
                    </thead>
                    <tr v-for="item in table2.list" v-bind:key="item.dsId">
                        <td>
                            <span>{{item.dsId}}</span>
                            <input v-model="item.dsId" v-on:input="table2Upate(item)">
                        </td>
                        <td>
                            <span>{{item.dsName}}</span>
                            <input v-model="item.dsName" v-on:input="table2Upate(item)">
                        </td>
                        <td>
                            <span>{{item.dsTblName}}</span>
                            <input v-model="item.dsTblName" v-on:input="table2Upate(item)">
                        </td>
                        <td>
                            <span>{{item.dsDbSchema}}</span>
                            <input v-model="item.dsDbSchema" v-on:input="table2Upate(item)">
                        </td>
                        <td>
                            <span>{{item.dsStatus}}</span>
                            <input v-model="item.dsStatus" v-on:input="table2Upate(item)">
                        </td>
                        <td>
                            <span>{{item.dsFlag}}</span>
                            <input v-model="item.dsFlag" v-on:input="table2Upate(item)">
                        </td>
                        <td>
                            <span>{{item.dsCreateTime}}</span>
                            <input v-model="item.dsCreateTime" v-on:input="table2Upate(item)">
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- 维度 -->
        <div class="row mgtb">
            <div class="pdtb pdlr bdb mg-lr">维度</div>
            <div class="ova mg-lr">
                <table class="table">
                    <thead>
                        <tr>
                            <th>编号</th>
                            <th>维度名称</th>
                            <th>字段名称</th>
                            <th>创建时间</th>
                            <th>维度状态</th>
                            <th>维度标识</th>
                            <th class="tar">
                            </th>
                        </tr>
                    </thead>
                    <tbody is="transition-group" name="tr">
                        <tr v-for="item in table3.list" v-bind:key="item.dimId">
                            <td>
                                <span>{{item.dimId}}</span>
                                <input v-model="item.dimId" v-on:input="table3Upate(item)">
                            </td>
                            <td>
                                <span>{{item.dimName}}</span>
                                <input v-model="item.dimName" v-on:input="table3Upate(item)">
                            </td>
                            <td>
                                <span>{{item.dimColName}}</span>
                                <input v-model="item.dimColName" v-on:input="table3Upate(item)">
                            </td>
                            <td>
                                <span>{{item.dimCreateTime}}</span>
                                <input v-model="item.dimCreateTime" v-on:input="table3Upate(item)">
                            </td>
                            <td>
                                <span>{{item.dimStatus}}</span>
                                <input v-model="item.dimStatus" v-on:input="table3Upate(item)">
                            </td>
                            <td>
                                <span>{{item.dimFlag}}</span>
                                <input v-model="item.dimFlag" v-on:input="table3Upate(item)">
                            </td>
                            <td class="tar nowr">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="mgtb tac">
            </div>
            <!-- 添加 -->
            <div>
            </div>
        </div>
    </div>
</template>
<script>
import request from './js/request'

export default {
    data: function() {
        return {
            item: {},
            table2: {
                newObj: {},
                list: null
            },
            table3: {
                newObj: {},
                list: null
            }
        }
    },
    methods: {
        loadData: function() {
            var vue = this;
            var $route = vue.$route;
            var params = $route.params;

            request({
                url: 'http://192.168.1.118:8080/portal/dataExtract/selectIndexDetail',
                data: params.id,
                success: function(rsp) {
                    vue.item = rsp.indIndexDetail
                    vue.table2.list = rsp.datasourcesList
                    vue.table3.list = rsp.dimensionIdList
                }
            })
        },
        table1Upate: (function() {
            var t;
            var obj;
            return function(item) {
                if (item == obj) {
                    clearTimeout(t);
                }
                obj = item;
                t = setTimeout(function() {
                    // update

                    request({
                        url: 'http://192.168.1.118:8080/portal/dataExtract/indexUpdate',
                        data: item,
                        success: function(rsp) {

                            wu.toast('更新成功!')

                        }
                    })


                }, 800)
            }
        })(),
    },
    mounted: function() {
        this.loadData()
    }
}
</script>
