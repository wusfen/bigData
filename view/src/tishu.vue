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
    <div id="app" class="mw mglra">
        <!-- menu -->
        <div class="row mgtb">
            <div class="cell pdlr pdtb2 curp" :class="{active:curTable==1}" v-on:click="curTable=1">指标</div>
            <div class="cell pdlr pdtb2 curp" :class="{active:curTable==2}" v-on:click="curTable=2">数据视图</div>
            <div class="cell pdlr pdtb2 curp" :class="{active:curTable==3}" v-on:click="curTable=3">维度</div>
        </div>
        <!-- 指标 -->
        <div v-if="curTable==1" class="row pdlr bg ra sh mgtb">
            <div class="pdtb pdlr bdb mg-lr">指标</div>
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
                                <transition name="fade">
                                    <a class="fade" v-bind:key="table1.showAdd" v-on:click.prevent="table1.showAdd=!table1.showAdd" href="">
                                        {{ table1.showAdd ? '取消' : '添加' }}
                                    </a>
                                </transition>
                            </th>
                        </tr>
                    </thead>
                    <tbody is="transition-group" name="tr">
                        <tr v-if="table1.showAdd" v-bind:key="table1.showAdd">
                            <td>
                                #
                            </td>
                            <td>
                                <input v-model="table1.newObj.indexName" v-focus="table1.showAdd" placeholder="">
                            </td>
                            <td>
                                <input v-model="table1.newObj.indexEName" placeholder="">
                            </td>
                            <td>
                                <input v-model="table1.newObj.indexType" placeholder="">
                            </td>
                            <td>
                                <input v-model="table1.newObj.indexCycle" placeholder="">
                            </td>
                            <td>
                                <input v-model="table1.newObj.indexCreateTime" placeholder="">
                            </td>
                            <td>
                                <input v-model="table1.newObj.indexStatus" placeholder="">
                            </td>
                            <td>
                                <input v-model="table1.newObj.indexFlag" placeholder="">
                            </td>
                            <td>
                                <input v-model="table1.newObj.indexDef" placeholder="">
                            </td>
                            <td class="tar nowr">
                                <a v-on:click.prevent="table1Add" href="">保存</a>
                                <!-- <a href="">取消</a> -->
                            </td>
                        </tr>
                        <tr v-for="item in table1ListPage" v-bind:key="item.indexId">
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
                            <td class="tar nowr">
                                <a class="info" is="router-link" :to="'/tishu/index/'+item.indexId">详情</a> |
                                <a class="danger" v-on:click.prevent="table1Del(item)" href="">删除</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="mgtb tac">
                <a v-if="table1.page.cur>1" v-on:click.prevent="table1.page.cur--" href="">←</a>
                <span>
                    <!-- <input value="1"> -->
                    {{table1.page.cur}}/{{99}}
                </span>
                <a v-on:click.prevent="table1.page.cur++" href="">→</a>
            </div>
        </div>
        <!-- 数据视图 -->
        <div v-if="curTable==2" class="row pdlr bg ra sh mgtb">
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
                                <transition name="fade">
                                    <a class="fade" v-bind:key="table2.showAdd" v-on:click.prevent="table2.showAdd=!table2.showAdd" href="">
                                        {{ table2.showAdd ? '取消' : '添加' }}
                                    </a>
                                </transition>
                            </th>
                        </tr>
                    </thead>
                    <tbody is="transition-group" name="tr">
                        <tr v-if="table2.showAdd" v-bind:key="table2.showAdd">
                            <td>
                                #
                            </td>
                            <td>
                                <input v-model="table2.newObj.dsName" v-focus>
                            </td>
                            <td>
                                <input v-model="table2.newObj.dsTblName">
                            </td>
                            <td>
                                <input v-model="table2.newObj.dsDbSchema">
                            </td>
                            <td>
                                --
                                <!-- <input v-model="table2.newObj.dsStatus"> -->
                            </td>
                            <td>
                                --
                                <!-- <input v-model="table2.newObj.dsFlag"> -->
                            </td>
                            <td>
                                --
                                <!-- <input v-model="table2.newObj.dsCreateTime"> -->
                            </td>
                            <td class="tar nowr">
                                <a v-on:click.prevent="table2Add" href="">保存</a>
                            </td>
                        </tr>
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
                            <td class="tar nowr">
                                <a v-on:click.prevent="table2Del(item)" href="">删除</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="mgtb tac">
            </div>
        </div>
        <!-- 维度 -->
        <div v-if="curTable==3" class="row pdlr bg ra sh mgtb">
            <div class="pdtb pdlr bdb mg-lr">维度</div>
            <!-- <div class="mgtb">
                <button class="button sz3">添加</button>
            </div> -->
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
                                <transition name="fade">
                                    <a class="fade" v-bind:key="table3.showAdd" v-on:click.prevent="table3.showAdd=!table3.showAdd" href="">
                                        {{ table3.showAdd ? '取消' : '添加' }}
                                    </a>
                                </transition>
                            </th>
                        </tr>
                    </thead>
                    <tbody is="transition-group" name="tr">
                        <tr v-if="table3.showAdd" v-bind:key="table3.showAdd">
                            <td>
                                #
                            </td>
                            <td>
                                <input v-model="table3.newObj.dimName" v-focus>
                            </td>
                            <td>
                                <input v-model="table3.newObj.dimColName">
                            </td>
                            <td>
                                --
                                <!-- <input v-model="table3.newObj.dimCreateTime"> -->
                            </td>
                            <td>
                                --
                                <!-- <input v-model="table3.newObj.dimStatus"> -->
                            </td>
                            <td>
                                --
                                <!-- <input v-model="table3.newObj.dimFlag"> -->
                            </td>
                            <td class="tar nowr">
                                <a v-on:click.prevent="table3Add" href="">保存</a>
                            </td>
                        </tr>
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
                                <a v-on:click.prevent="table3Del(item)" href="">删除</a>
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
console.log(request)


export default ({
    data: function() {
        return {
            curTable: 1,
            table1: {
                showAdd: false,
                list: null,
                newObj: {
                    indexId: '',
                    indexName: '',
                    indexEName: '',
                    indexType: '',
                    indexCycle: '',
                    indexCreateTime: '',
                    indexStatus: '',
                    indexFlag: '',
                    indexDef: '',
                },
                page: {
                    cur: 1,
                    count: null
                }
            },
            table2: {
                showAdd: false,
                list: null,
                newObj: {
                    datasourceId: '',
                    datasourceCname: '',
                    datasourceEname: '',
                    datasourceAdddate: '',
                    datasourceStatus: '',
                },
                page: {
                    cur: 1,
                    count: null
                }
            },
            table3: {
                showAdd: false,
                list: null,
                newObj: {
                    dimName: '',
                    dimColName: '',
                    dimCreateTime: '',
                    dimStatus: '',
                    dimFlag: '',
                },
                page: {
                    cur: 1,
                    count: null
                }
            }
        }
    },
    computed: {
        table1ListPage: function() {
            var start = (this.table1.page.cur - 1) * 10
            return (this.table1.list || []).slice(start, start + 10)
        }
    },
    methods: {
        table1Load: function() {
            var vue = this;
            request({
                url: 'http://192.168.1.118:8080/portal/dataExtract/getIndexData',
                success: function(rsp) {
                    vue.table1.list = rsp
                }
            })
        },
        table1Add: function() {
            var list = this.table1.list;
            var newObj = this.table1.newObj;

            // add
            // list.push(Object.assign({}, newObj))
            request({
                url: 'http://192.168.1.118:8080/portal/pages/addIndexData',
                data: newObj,
                success: function(rsp) {
                    list.unshift(rsp)
                    wu.toast('添加成功!')
                }
            })

            // clear input
            for (var key in newObj) {
                newObj[key] = '';
            }

            this.showAdd = false
        },
        table1Del: function(item) {
            var list = this.table1.list;
            request({
                url: 'http://192.168.1.118:8080/portal/dataExtract/IndexDelete',
                data: [item.indexId],
                success: function(rsp) {
                    list.splice(list.indexOf(item), 1);
                    wu.toast('删除成功!')
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
        table2Load: function() {
            var vue = this;
            request({
                url: 'http://192.168.1.118:8080/portal/dataExtract/getDatasourceData',
                success: function(rsp) {
                    vue.table2.list = rsp
                }
            })
        },
        table2Add: function() {
            var vue = this;
            var list = vue.table2.list;
            var newObj = vue.table2.newObj;

            request({
                url: 'http://192.168.1.118:8080/portal/pages/addDatasourceData',
                data: newObj,
                success: function(rsp) {
                    list.unshift(rsp)
                    wu.toast('添加成功')
                },
                error: function() {
                    wu.toast('添加失败')
                }
            });
        },
        table2Del: function(item) {
            var vue = this;
            var list = vue.table2.list;

            request({
                url: 'http://192.168.1.118:8080/portal/dataExtract/datasourceDelete',
                data: [item.dsId],
                success: function(rsp) {
                    list.splice(list.indexOf(item), 1);
                    wu.toast('删除成功')
                }
            });
        },
        table2Upate: (function() {
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
                        url: 'http://192.168.1.118:8080/portal/dataExtract/datasourceUpdate',
                        data: item,
                        success: function(rsp) {
                            wu.toast('更新成功!')
                        },
                        error: function() {

                        }
                    })


                }, 800)
            }
        })(),
        table3Load: function() {
            var vue = this;
            request({
                url: 'http://192.168.1.118:8080/portal/dataExtract/getdDimensionData',
                success: function(rsp) {
                    if (rsp.error) {
                        wu.toast('error')
                        return
                    }
                    vue.table3.list = rsp
                }
            })
        },
        table3Add: function() {
            var vue = this;
            var list = vue.table3.list;
            var newObj = vue.table3.newObj;

            request({
                url: 'http://192.168.1.118:8080/portal/pages/addDimensionData',
                data: newObj,
                success: function(rsp) {
                    list.unshift(rsp)
                    wu.toast('添加成功')
                },
                error: function() {
                    wu.toast('添加失败')
                }
            });
        },
        table3Del: function(item) {
            var vue = this;
            var list = vue.table3.list;

            request({
                url: 'http://192.168.1.118:8080/portal/dataExtract/dimensionDelete',
                data: [item.dimId],
                success: function(rsp) {
                    list.splice(list.indexOf(item), 1);
                    wu.toast('删除成功')
                }
            });
        }
    },
    directives: {
        focus: {
            inserted: function(el) {
                el.focus()
            }
        }
    },
    mounted: function() {
        var vue = this;
        window.vue = vue; // test

        vue.table1Load()
        vue.table2Load()
        vue.table3Load()
    }
})
</script>
