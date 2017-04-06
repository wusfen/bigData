<template>
    <div>
        <!-- sidebar -->
        <div class="sidebar">
            <div class="pd logo">DATA</div>
            <ul class="sidebar-menu">
                <li>
                    集群管理
                    <ul>
                        <li>
                            <a href="#">实时系统</a>
                        </li>
                        <li>
                            <a href="#">离线系统</a>
                        </li>
                        <li>
                            <a href="#">用户BI</a>
                        </li>
                    </ul>
                </li>
                <li>
                    报表管理
                    <ul>
                        <li>
                            <a is="router-link" to="/charts">实时报表</a>
                        </li>
                        <li>
                            <a href="#">离线报表</a>
                        </li>
                    </ul>
                </li>
                <li>
                    数据提取
                    <ul>
                        <li>
                            <a is="router-link" to="/tishu">指标配置</a>
                        </li>
                    </ul>
                </li>
                <li>
                    系统管理
                    <ul>
                        <li>
                            <a href="#">用户管理</a>
                        </li>
                        <li>
                            <a href="#">角色管理</a>
                        </li>
                        <li>
                            <a href="#">权限管理</a>
                        </li>
                    </ul>
                </li>
                <li>
                    开发
                    <ul>
                        <li>
                            <a href="css/ui.html" target="iframe">ui 组件</a>
                        </li>
                        <li>
                            <a is="router-link" to="/ajax">接口测试</a>
                        </li>
                        <li>
                            <a href="dev.cfg.html" target="iframe">调试配置</a>
                        </li>
                        <li>
                            <a href="http://baidu.com" target="iframe">iframe 模式</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- navbar -->
        <div class="navbar bg sh">
            <div class="w24 mw mglra">
                <div class="row">
                    <div class="cell pd sidebar-toggle">三</div>
                    <div class="cell">
                        <a class="inline block pdlr mgtb" href="javascript:history.back()">←</a>
                        <a class="inline block pdlr mgtb" is="router-link" to="/home">首页</a>
                        <!--  /
                            <a class="inline block pdlr mgtb" href="#">path</a>
                            /
                            <a class="inline block pdlr mgtb">-</a> -->
                    </div>
                    <div class="cell fr">
                        <div class="cell pd xsnone">admin</div>
                        <div class="cell pd">退出</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- layout main -->
        <div class="layout-main">
            <!-- main content -->
            <div class="pdlr">
                <transition name="fade" mode="out-in">
                    <router-view class="fade"></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
var $router = null;


$(function() {
    $('body').on('click', 'a', function(e) {

        if ($(this).is('[target=iframe]')) {
            e.preventDefault()

            $router.push('/iframe/' + $(this).attr('href'))
        }
    })
});

export default {
    mounted: function() {
        $router = this.$router
    }
}
</script>
<!-- iframe -->
<style type="text/css">
.layout-main {
    position: absolute;
    top: 50px;
    right: 0;
    bottom: 0;
    left: 0;
}

#iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
</style>
<style type="text/css">
.router-link-active {
    color: #0af !important;
}
</style>
<style type="text/css" scoped>
.fade {
    transition: .5s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
    transform: translateY(30px);
}

.fade-leave-active {
    /*position: absolute;*/
}
</style>
