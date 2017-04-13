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
<template>
    <div class="container">
        <!-- menu -->
        <div class="tabs mgt">
            <div class="curp" :class="{active:curTable==1}" v-on:click="curTable=1">指标</div>
            <div class="curp" :class="{active:curTable==3}" v-on:click="curTable=3">维度</div>
            <div class="curp" :class="{active:curTable==2}" v-on:click="curTable=2">数据视图</div>
        </div>
        <!-- 指标 -->
        <div v-if="curTable==1" class="clf pdlr bg sh">
            <div class="section">
                <a is="router-link" to="/index/new" class="button">添加</a>
            </div>
            <div class="ova mg-lr">
                <table class="table">
                    <thead>
                        <tr>
                            <th>编号</th>
                            <th>编码</th>
                            <th>指标名称</th>
                            <th>字段名称</th>
                            <th>指标分类</th>
                            <th>指标周期</th>
                            <th>创建时间</th>
                            <th>指标口径</th>
                            <th class="tar">操作</th>
                        </tr>
                    </thead>
                    <tbody is="transition-group" name="tr">
                        <tr v-for="item in indexPage" v-bind:key="item.indexId">
                            <td> {{item.indexId}} </td>
                            <td> {{item.indexCode}} </td>
                            <td> {{item.indexName}} </td>
                            <td> {{item.fieldName}} </td>
                            <td> {{item.indexType}} </td>
                            <td> {{item.statCycle}} </td>
                            <td> {{item.createTime|date}} </td>
                            <td> {{item.indexFlag}} </td>
                            <td class="tar nowr">
                                <a is="router-link" :to="'/index/'+item.indexId">详情</a> |
                                <a v-on:click.prevent="indexDel(item)" href="">删除</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="section tac">
                <div class="pagination">
                    <a href="javascript:" v-on:click="pagePre(index.list)">←</a>
                    <a href="javascript:">1</a>
                    <input :value="indexPageIndex">
                    <a href="javascript:">{{indexPageCount}}</a>
                    <a href="javascript:" v-on:click="pageNext(index.list)">→</a>
                </div>
            </div>
        </div>
        <!-- 维度 -->
        <div v-if="curTable==3" class="clf pdlr bg sh">
            <div class="section">
                <span is="router-link" to="/dimension/new" class="button">添加</span>
            </div>
            <div class="ova mg-lr">
                <table class="table">
                    <thead>
                        <tr>
                            <th>编号</th>
                            <th>编码</th>
                            <th>名称</th>
                            <th>字段名称</th>
                            <th>是否用户关联</th>
                            <th>创建时间</th>
                            <th class="tar">操作</th>
                        </tr>
                    </thead>
                    <tbody is="transition-group" name="tr">
                        <tr v-if="dim.showAdd" v-bind:key="dim.showAdd">
                            <td>
                                #
                            </td>
                            <td>
                                <input v-model="dim.newObj.dimName" v-focus>
                            </td>
                            <td>
                                <input v-model="dim.newObj.dimColName">
                            </td>
                            <td>
                                --
                                <!-- <input v-model="dim.newObj.dimCreateTime"> -->
                            </td>
                            <td>
                                --
                                <!-- <input v-model="dim.newObj.dimStatus"> -->
                            </td>
                            <td>
                                --
                                <!-- <input v-model="dim.newObj.dimFlag"> -->
                            </td>
                            <td class="tar nowr">
                                <a v-on:click.prevent="dimAdd" href="">保存</a>
                            </td>
                        </tr>
                        <tr v-for="item in dim.list" v-bind:key="item.dimId">
                            <td> {{item.dimId}} </td>
                            <td> {{item.dimCode}} </td>
                            <td> {{item.dimName}} </td>
                            <td> {{item.fieldName}} </td>
                            <td> {{item.isUserRel}} </td>
                            <td> {{item.createTime|date}} </td>
                            <td class="tar nowr">
                                <a is="router-link" :to="'/dimension/'+item.dimId">详情</a>
                                <a v-on:click.prevent="dimDel(item)" href="">删除</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="section tac">
                <div class="pagination">
                    <a href="javascript:">←</a>
                    <a href="javascript:">1</a>
                    <input value="5">
                    <a href="javascript:">99</a>
                    <a href="javascript:">→</a>
                </div>
            </div>
            <!-- 添加 -->
            <div>
            </div>
        </div>
        <!-- 数据视图 -->
        <div v-if="curTable==2" class="clf pdlr bg sh">
            <div class="section">
                <span is="router-link" to="/dataview/new" class="button">添加</span>
            </div>
            <div class="ova mg-lr">
                <table class="table">
                    <thead>
                        <tr>
                            <th>编号</th>
                            <th>编码</th>
                            <th>名称</th>
                            <th>表名</th>
                            <th>SCHEMA</th>
                            <th>创建时间</th>
                            <th class="tar">操作</th>
                        </tr>
                    </thead>
                    <tbody is="transition-group" name="tr">
                        <tr v-if="dataView.showAdd" v-bind:key="dataView.showAdd">
                            <td>
                                #
                            </td>
                            <td>
                                <input v-model="dataView.newObj.dsName" v-focus>
                            </td>
                            <td>
                                <input v-model="dataView.newObj.dsTblName">
                            </td>
                            <td>
                                <input v-model="dataView.newObj.dsDbSchema">
                            </td>
                            <td>
                                --
                                <!-- <input v-model="dataView.newObj.dsStatus"> -->
                            </td>
                            <td>
                                --
                                <!-- <input v-model="dataView.newObj.dsFlag"> -->
                            </td>
                            <td>
                                --
                                <!-- <input v-model="dataView.newObj.dsCreateTime"> -->
                            </td>
                            <td class="tar nowr">
                                <a v-on:click.prevent="dataViewAdd" href="">保存</a>
                            </td>
                        </tr>
                        <tr v-for="item in dataView.list" v-bind:key="item.dsId">
                            <td> {{item.dsId}} </td>
                            <td> {{item.dsCode}} </td>
                            <td> {{item.dsName}} </td>
                            <td> {{item.tblName}} </td>
                            <td> {{item.schemaName}} </td>
                            <td> {{item.createTime|date}} </td>
                            <td class="tar nowr">
                                <a is="router-link" :to="'dataview/'+item.dsId">详情</a>
                                <a v-on:click.prevent="dataViewDel(item)" href="">删除</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="section tac">
                <div class="pagination">
                    <a href="javascript:">←</a>
                    <a href="javascript:">1</a>
                    <input value="5">
                    <a href="javascript:">99</a>
                    <a href="javascript:">→</a>
                </div>
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
            index: {
                list: null,
                newObj: {
                    indexId: '',
                    indexName: '',
                    fieldName: '',
                    indexType: '',
                    indexCycle: '',
                    indexCreateTime: '',
                    indexStatus: '',
                    indexFlag: '',
                    indexDef: '',
                }
            },
            dataView: {
                list: null,
                newObj: {
                    datasourceId: '',
                    datasourceCname: '',
                    datasourceEname: '',
                    datasourceAdddate: '',
                    datasourceStatus: '',
                }
            },
            dim: {
                list: null,
                newObj: {
                    dimName: '',
                    dimColName: '',
                    dimCreateTime: '',
                    dimStatus: '',
                    dimFlag: '',
                }
            }
        }
    },
    computed: {
        indexPage: function() {
            return this.page(this.index.list)
        },
        indexPageIndex: function () {
            return this.pageIndex(this.index.list)
        },
        indexPageCount: function () {
            return this.pageCount(this.index.list)
        },
        indexPageNext: function () {
            return this.pageNext(this.index.list)
        },
        indexPagePre: function () {
            return this.pagePre(this.index.list)
        }
    },
    methods: {
        page: function(list) {
            return list && list.page()
        },
        pageIndex: function(list) {
            return list && list.pageIndex()
        },
        pageCount: function(list) {
            return list && list.pageCount()
        },
        pageNext: function(list) {
            return list && list.pageIndex(list.pageIndex() + 1)
        },
        pagePre: function(list) {
            return list && list.pageIndex(list.pageIndex() - 1)
        },
        indexLoad: function() {
            var vue = this;
            request({
                url: '/portal/dataExtract/getIndexData',
                success: function(rsp) {
                    vue.index.list = rsp.indexList
                }
            })
        },
        indexAdd: function() {
            var list = this.index.list;
            var newObj = this.index.newObj;

            // add
            // list.push(Object.assign({}, newObj))
            request({
                url: '/portal/pages/addIndexData',
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
        indexDel: function(item) {
            var list = this.index.list;
            request({
                url: '/portal/dataExtract/IndexDelete',
                data: [item.indexId],
                success: function(rsp) {
                    list.splice(list.indexOf(item), 1);
                    wu.toast('删除成功!')
                }
            })
        },
        indexUpate: (function() {
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
                        url: '/portal/dataExtract/indexUpdate',
                        data: item,
                        success: function(rsp) {

                            wu.toast('更新成功!')

                        }
                    })


                }, 800)
            }
        })(),
        dataViewLoad: function() {
            var vue = this;
            request({
                url: '/portal/dataExtract/getDataViewData',
                success: function(rsp) {
                    vue.dataView.list = rsp.dataViewList
                }
            })
        },
        dataViewAdd: function() {
            var vue = this;
            var list = vue.dataView.list;
            var newObj = vue.dataView.newObj;

            request({
                url: '/portal/pages/addDatasourceData',
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
        dataViewDel: function(item) {
            var vue = this;
            var list = vue.dataView.list;

            request({
                url: '/portal/dataExtract/dataViewDelete',
                data: [item.dsId],
                success: function(rsp) {
                    list.splice(list.indexOf(item), 1);
                    wu.toast('删除成功')
                }
            });
        },
        dataViewUpate: (function() {
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
                        url: '/portal/dataExtract/datasourceUpdate',
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
        dimLoad: function() {
            var vue = this;
            request({
                url: '/portal/dataExtract/getdDimensionData',
                success: function(rsp) {
                    vue.dim.list = rsp.dimensionList
                }
            })
        },
        dimAdd: function() {
            var vue = this;
            var list = vue.dim.list;
            var newObj = vue.dim.newObj;

            request({
                url: '/portal/pages/addDimensionData',
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
        dimDel: function(item) {
            var vue = this;
            var list = vue.dim.list;

            request({
                url: '/portal/dataExtract/dimensionDelete',
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

        vue.indexLoad()
        vue.dataViewLoad()
        vue.dimLoad()
    }
})
</script>
