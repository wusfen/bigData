<template>
    <div class="container">
        <div class="section pd bg sh">
            <div class="form w12 sm24">
                <div v-if="!isNew" class="row">
                    <div class="cell">编号</div>
                    <div class="cell">
                        {{item.dimId}}
                    </div>
                </div>
                <div class="row">
                    <div class="cell">编码</div>
                    <div class="cell">
                        <input class="input" v-model="item.dimCode">
                    </div>
                </div>
                <div class="row">
                    <div class="cell">名称</div>
                    <div class="cell">
                        <input class="input" v-model="item.dimName">
                    </div>
                </div>
                <div class="row">
                    <div class="cell">字段名称</div>
                    <div class="cell">
                        <input class="input" v-model="item.fieldName">
                    </div>
                </div>
                <div class="row">
                    <div class="cell">数据类型</div>
                    <div class="cell">
                        <select class="input" v-model="item.dataType">
                            <option value="">选择</option>
                            <option :value="1">字符串</option>
                            <option :value="2">数值</option>
                            <option :value="3">浮点</option>
                            <option :value="4">日期</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">显示顺序</div>
                    <div class="cell">
                        <input class="input" v-model="item.displayOrder">
                    </div>
                </div>
                <div class="row">
                    <div class="cell">是否用户关联</div>
                    <div class="cell">
                        <label class="button">
                            <input type="checkbox" v-model="item.isUserRel" true-value="Y" false-value="N">
                        </label>
                        {{item.isUserRel}}
                    </div>
                </div>
                <div v-if="!isNew" class="row">
                    <div class="cell">创建时间</div>
                    <div class="cell">
                        {{item.createTime|date('yyyy-MM-dd')}}
                        <small class="muted">{{item.createTime|date('HH:mm:ss')}}</small>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">数据视图</div>
                    <div class="cell">
                        <div class="group">
                            <select class="input" v-model="dataView">
                                <option :value="undefined">选择</option>
                                <option v-for="item in dataViewList" :value="item">{{item.dsName}}</option>
                            </select>
                            <span v-if="dataView" is="router-link" class="button" :to="'/dataview/'+dataView.dsId">详情</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="cell"></div>
                    <div class="cell">
                        <span v-if="isNew" class="button primary" v-on:click="add">添加</span>
                        <span v-if="!isNew" class="button primary" v-on:click="update">修改</span>
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
                dataType: '',
                displayOrder: '',
                dimName: '',
                fieldName: '',
                isUserRel: '',
                createTime: '',
            },
            dataView: undefined,
            dataViewList: undefined
        }
    },
    methods: {
        load: function() {
            var vue = this;

            request({
                url: '/portal/dataExtract/getDataViewData',
                success: function(rsp) {
                    vue.dataViewList = rsp.dataViewList
                        // 如果此请求较慢，会导致 select 已变空
                        // 再把它设回正确的
                    vue.dataView = dataView
                }
            })

            var dataView;
            !vue.isNew && request({
                url: '/portal/dataExtract/getdDimensionData?dimId=' + vue.$route.params.id,
                success: function(rsp) {
                    vue.item = rsp.tDimension
                    vue.dataView = rsp.dataViewList[0]
                    dataView = vue.dataView
                }
            })
        },
        add: function() {
        	var vue = this
            request({
                url: '/portal/dataExtract/addDimensionData',
                data: {
                    tDimension: this.item,
                    tDataView: this.dataView
                },
                success: function(rsp) {
                    wu.toast('添加成功');
                }
            })
        },
        update: function() {
            request({
                url: '/portal/dataExtract/dimensionUpdate',
                data: this.item,
                success: function(rsp) {
                    wu.toast('修改成功');
                }
            })
        }
    },
    mounted: function() {
        window.vue = this;

        this.isNew = vue.$route.params.id == 'new'
        this.load()
    }
}
</script>
