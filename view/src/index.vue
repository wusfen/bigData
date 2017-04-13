<template>
    <div class="container">
        <div class="section pd bg sh">
            <div class="section w768 mw mglra">
                <div class="form w480 mw">
                    <div v-if="!isNew" class="row">
                        <span class="cell">编号</span>
                        <div class="cell">
                            {{item.indexId}}
                        </div>
                    </div>
                    <div class="row">
                        <span class="cell">编码</span>
                        <div class="cell">
                            <input class="input" v-model="item.indexCode">
                        </div>
                    </div>
                    <div class="row">
                        <span class="cell">指标名称</span>
                        <div class="cell">
                            <input class="input" v-model="item.indexName">
                        </div>
                    </div>
                    <div class="row">
                        <span class="cell">字段名称</span>
                        <div class="cell">
                            <input class="input" v-model="item.fieldName">
                        </div>
                    </div>
                    <div class="row">
                        <span class="cell">指标分类</span>
                        <div class="cell">
                            <input class="input" v-model="item.indexType">
                        </div>
                    </div>
                    <div class="row">
                        <span class="cell">指标周期</span>
                        <div class="cell">
                            <input class="input" v-model="item.statCycle">
                        </div>
                    </div>
                    <div class="row">
                        <span class="cell">指标口径</span>
                        <div class="cell">
                            <input class="input" v-model="item.indexFlag">
                        </div>
                    </div>
                    <div v-if="!isNew" class="row">
                        <span class="cell">创建时间</span>
                        <div class="cell">
                            {{item.createTime|date('yyyy-MM-dd')}}
                            <small class="muted">{{item.createTime|date('HH:mm:ss')}}</small>
                        </div>
                    </div>
                    <div class="row">
                        <span class="cell">维度</span>
                        <div class="cell">
                            <div class="group mgb2 mgr2">
                                <select class="input" v-model="selected.dataView">
                                    <option :value="null">数据视图</option>
                                    <option :value="item" v-for="item in dataViewList">{{item.dsName}}</option>
                                </select>
                                <select class="input" v-model="selected.dimension">
                                    <option :value="null">维度</option>
                                    <option :value="item" v-for="item in selected.dimensionList">{{item.dimName}}</option>
                                </select>
                                <span class="button" v-on:click="addDimension">+</span>
                            </div>
                            <div class="group mgb2 mgr2" v-for="item in item.dimensionList">
                                <span is="router-link" class="button" title="详情" :to="'/dimension/'+item.dimId">{{item.dimName}}</span>
                                <span class="button muted" title="删除" v-on:click="deleteDimension(item)">x</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="cell"></div>
                        <div class="cell">
                            <span v-if="isNew" class="button primary" v-on:click="add">添加</span>
                            <span v-else class="button primary" v-on:click="update">修改</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import request from './js/request'

export default {
    data: function() {
        return {
            isNew: false,
            item: {
                dimId: '',
                dimCode: '',
                rightCode: '',
                displayOrder: '',
                dimName: '',
                fieldName: '',
                isUserRel: '',
                createTime: '',
                dimensionList: []
            },
            dimensionList: null,
            dataViewList: null,
            selected: {
                dataView: null,
                dimensionList: null,
                dimension: null
            }
        }
    },
    watch: {
        'selected.dataView': function() {
            var vue = this
            this.selected.dimensionList = this.dimensionList.select({
                dsId: this.selected.dataView.dsId
            })
            this.selected.dimension = null
        },
        'item.dimensionList': function() {
            console.log('uuu')
        }
    },
    methods: {
        load: function() {
            var vue = this

            this.isNew || request({
                url: '/portal/dataExtract/getIndexData?indexId=' + this.$route.params.id,
                success: function(rsp) {
                    vue.item = rsp.tIndex
                    vue.$set(vue.item, 'dimensionList', rsp.dimensionList || []) // ***
                }
            })
            request({
                url: '/portal/dataExtract/getDataViewData',
                success: function(rsp) {
                    vue.dataViewList = rsp.dataViewList
                }
            })
            request({
                url: '/portal/dataExtract/getdDimensionData',
                success: function(rsp) {
                    vue.dimensionList = rsp.dimensionList
                }
            })
        },
        add: function() {
            request({
                url: '/portal/dataExtract/addIndexData',
                data: {
                    tIndex: this.item,
                    tDimension: this.item.dimensionList,
                },
                success: function(rsp) {
                    wu.toast('添加成功');
                    vue.$router.replace('/index/' + rsp.index.indexId)
                }
            })
        },
        update: function() {
            request({
                url: '/portal/dataExtract/indexUpdate',
                data: {
                    tIndex: this.item,
                    tDimension: this.item.dimensionList
                },
                success: function(rsp) {
                    wu.toast('修改成功');
                }
            })
        },
        addDimension: function() {
            var item = this.selected.dimension
            var list = this.item.dimensionList

            item && !list.get({
                dimId: item.dimId
            }) && list.push(this.selected.dimension)
        },
        deleteDimension: function(item) {
            this.item.dimensionList.remove(item)
        }
    },
    mounted: function() {
        window.vue = this
        this.isNew = this.$route.params.id == 'new'

        this.load()
    }
}
</script>
