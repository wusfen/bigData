<template>
    <div class="container">
        <div class="section pd bg sh">
            <div class="form w12 sm24">
                <div v-if="!isNew" class="row">
                    <div class="cell">编号</div>
                    <div class="cell">
                        {{item.dsId}}
                    </div>
                </div>
                <div class="row">
                    <div class="cell">编码</div>
                    <div class="cell">
                        <input class="input" v-model="item.dsCode">
                    </div>
                </div>
                <div class="row">
                    <div class="cell">名称</div>
                    <div class="cell">
                        <input class="input" v-model="item.dsName">
                    </div>
                </div>
                <div class="row">
                    <div class="cell">表名</div>
                    <div class="cell">
                        <input class="input" v-model="item.tblName">
                    </div>
                </div>
                <div class="row">
                    <div class="cell">SCHEMA</div>
                    <div class="cell">
                        <input class="input" v-model="item.schemaName">
                    </div>
                </div>
                <div v-if="!isNew" class="row">
                    <div class="cell">权限码</div>
                    <div class="cell">
                        <input class="input" v-model="item.rightCode">
                    </div>
                </div>
                <div class="row">
                    <div class="cell">显示顺序</div>
                    <div class="cell">
                        <input class="input" v-model="item.displayOrder">
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
                dsId: '',
                displayOrder: '',
                dsCode: '',
                rightCode: '',
                dsName: '',
                tblName: '',
                schemaName: '',
                createTime: '',
            }
        }
    },
    methods: {
        add: function() {
            request({
                url: '/portal/dataExtract/addDataView',
                data: this.item,
                success: function(rsp) {
                    wu.toast('添加成功');
                }
            })
        },
        update: function() {
            request({
                url: '/portal/dataExtract/dataViewUpdate',
                data: this.item,
                success: function(rsp) {
                    wu.toast('修改成功');
                }
            })
        }
    },
    mounted: function() {
        window.vue = this;
        var vue = this;
        var $route = vue.$route;
        var params = $route.params;
        var id = params.id;

        // new
        if (id == 'new') {
            vue.isNew = true;
            return
        }

        request({
            url: '/portal/dataExtract/getDataViewData?dsId=' + id,
            success: function(rsp) {
                vue.item = rsp.tDataView
            }
        })
    }
}
</script>
