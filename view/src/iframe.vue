<template>
    <div id="iframeW">iframe</div>
</template>
<script>
function show(src) {
    var $iframeW = $('#iframeW')
    var $iframe = $('<iframe id="iframe"></iframe>')
    $iframeW.html($iframe)

    $iframe.attr('src', src)
}
export default {
    watch: {
        '$route': function(to, from) {
            show(to.params.src)
        }
    },
    mounted: function() {
        show(this.$route.params.src)
    }
}
</script>
<style type="text/css">
#iframe {}
</style>
