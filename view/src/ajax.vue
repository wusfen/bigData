<template>
    <div class="bg pd mgtb">
        <div class="mgb">接口测试</div>
        <div class="row">
            <div class="row cellpdlr mg-lr">
                <div class="cell w12 sm24 pdb">
                    <input class="input w24" v-model="url" v-on:input="request" placeholder="url">
                </div>
                <div class="cell w12 sm24 pdb">
                    <input class="input w24" v-model="data" v-on:input="request" placeholder="data">
                </div>
            </div>
            <div class="row">
                <div class="cell">
                    <pre class="">{{rsp}}</pre>
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
            url: '',
            rsp: ''
        }
    },
    methods: {
        request: (function() {
            var t;

            return function() {
                var vue = this;
                clearTimeout(t)

                t = setTimeout(function() {
                    request({
                        url: vue.url,
                        data: vue.data,
                        success: function(rsp) {
                            vue.rsp = rsp
                        }
                    })
                }, 800)
            }

        })()
    },
    mounted: function() {

    }
}
</script>
