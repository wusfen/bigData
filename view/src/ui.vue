<template>
    <div id="ui" class="container mg pd sh">
        <h1>UI</h1>
        <p>css doc</p>
        <!-- ## -->
        <h2>布局</h2>
        <!-- ### -->
        <h3>栅格系统</h3>
        <code>.container>.row>.cell[.w1.md2.sm3.xs4]</code>
        <div class="section">
            <div class="row pdbox">
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>1</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>2</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>3</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>4</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>5</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>6</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>7</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>8</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>9</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>10</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>11</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>12</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>13</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>14</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>15</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>16</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>17</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>18</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>19</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>20</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>21</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>22</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>23</div>
                </div>
                <div class="cell w1 md2 sm3 xs4  pdbox">
                    <div>24</div>
                </div>
            </div>
        </div>
        <code>.container</code>
        <p>大容器，一般一个页面用一个。左右有填充，最宽100%。加上宽度会居中。</p>
        <div class="section">
            <div class="container pdbox">
                <div>.container</div>
            </div>
        </div>
        <div class="section mgbox">
            <div class="container w960 pdbox">
                <div>.container.w960</div>
            </div>
        </div>
        <code>.section</code>
        <p>内容区块。上下有间距，相邻间距合并。</p>
        <div class="section mgbox">
            <div class="section">.section</div>
            <div class="section">.section</div>
        </div>
        <code>.row</code>
        <p>一行，须与<code>.cell</code>结合用。抵消了父左右填充。</p>
        <div class="section">
            <div class="mgbox">
                <div class="row pdbox">
                    <div>.row</div>
                </div>
                <div class="row pdbox">
                    <div>.row</div>
                </div>
            </div>
        </div>
        <code>.cell</code>
        <p>一格，放于<code>.row</code>内。加<code>.fr</code>可拉到右边。<code>.row</code><code>.cell</code>左右各带一半填充。加起来刚好每个格子内容间的距离都是一样的。</p>
        <div class="section">
            <div class="row pdbox">
                <div class="cell pdbox">
                    <div>.cell</div>
                </div>
                <div class="cell fr pdbox">
                    <div>.cell.fr</div>
                </div>
                <div class="cell pdbox">
                    <div>.cell</div>
                </div>
                <div class="ovh mgbox">
                    &nbsp;
                </div>
            </div>
        </div>
        <div class="section">
            <div class="row">
                <div class="cell w12 pdbox">
                    <div>.cell.w12</div>
                </div>
                <div class="cell w12 pdbox">
                    <div>.cell.w12</div>
                </div>
            </div>
        </div>
        <code>.w(0-24)</code>
        <p>用于控制<code>.cell</code>的宽度，没有则按内容宽度靠左排。</p>
        <p>一行分24格。</p>
        <div class="section">
            <div class="row pdbox">
                <div class="cell w4 pdbox">
                    <div>.cell.w4</div>
                </div>
                <div class="cell w20 pdbox">
                    <div>.cell.w20</div>
                </div>
            </div>
        </div>
        <code>.md(0-24)</code>
        <p>控制<code>.cell</code>在中等设备（中等桌面）及以下的宽度。</p>
        <p>改变浏览器宽度可以看到效果。</p>
        <div class="section">
            <div class="row pdbox">
                <div class="cell w12 md24 pdbox">
                    <div>.cell.w12.md24</div>
                </div>
                <div class="cell w12 md24 pdbox">
                    <div>.cell.w12.md24</div>
                </div>
            </div>
        </div>
        <code>.sm(0-24)</code>
        <p>控制<code>.cell</code>在小设备（平板）及以下的宽度。</p>
        <div class="section">
            <div class="row pdbox">
                <div class="cell w12 sm24 pdbox">
                    <div>.cell.w12.sm24</div>
                </div>
                <div class="cell w12 sm24 pdbox">
                    <div>.cell.w12.sm24</div>
                </div>
            </div>
        </div>
        <code>.xs(0-24)</code>
        <p>控制<code>.cell</code>在极小设备（手机）及以下的宽度。<code>.xs0</code>则表示在手机上不显示，以上类推。</p>
        <div class="section">
            <div class="row pdbox">
                <div class="cell w12 xs24 pdbox">
                    <div>.cell.w12.xs24</div>
                </div>
                <div class="cell w12 xs24 pdbox">
                    <div>.cell.w12.xs24</div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="row pdbox">
                <div class="cell w6 md0 pdbox">
                    <div>.cell.w6.md0</div>
                </div>
                <div class="cell w6 sm0 pdbox">
                    <div>.cell.w6.sm0</div>
                </div>
                <div class="cell w6 xs0 pdbox">
                    <div>.cell.w6.xs0</div>
                </div>
                <div class="cell w6 xs24 pdbox">
                    <div>.cell.w6.xs24</div>
                </div>
            </div>
        </div>
        <!-- ### -->
        <h3>间距</h3>
        <code>.mg[tblr][01234a]</code>
        <p>与其它元素的距离。tblr 表示上下左右，01234 表示大小，a 表示 auto。如<code>.mgtb</code>表示与上下的元素保持一点距离。<code>.mga</code>让有宽度的块级元素居中。</p>
        <div class="section">
            <div class="row">
                <div class="cell">
                    <div class="mgbox">
                        <div class="mg">.mg</div>
                    </div>
                </div>
                <div class="cell">
                    <div class="mgbox">
                        <div class="mgt">.mgt</div>
                    </div>
                </div>
                <div class="cell">
                    <div class="mgbox">
                        <div class="mgb">.mgb</div>
                    </div>
                </div>
                <div class="cell">
                    <div class="mgbox">
                        <div class="mgl">.mgl</div>
                    </div>
                </div>
                <div class="cell">
                    <div class="mgbox">
                        <div class="mgr">.mgr</div>
                    </div>
                </div>
                <div class="cell">
                    <div class="mgbox">
                        <div class="mgtb">.mgtb</div>
                    </div>
                </div>
                <div class="cell">
                    <div class="mgbox">
                        <div class="mglr">.mglr</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section mgbox">
            <div class="mga w320">.w320.mga</div>
        </div>
        <code>.pd[tblr][01234]</code>
        <p>填充给元素的内容留白。</p>
        <div class="row mgtb">
            <div class="cell">
                <div class="pdbox pd">
                    <div>.pd</div>
                </div>
            </div>
            <div class="cell">
                <div class="pdbox pdt">
                    <div>.pdt</div>
                </div>
            </div>
            <div class="cell">
                <div class="pdbox pdb">
                    <div>.pdb</div>
                </div>
            </div>
            <div class="cell">
                <div class="pdbox pdl">
                    <div>.pdl</div>
                </div>
            </div>
            <div class="cell">
                <div class="pdbox pdr">
                    <div>.pdr</div>
                </div>
            </div>
            <div class="cell">
                <div class="pdbox pdtb">
                    <div>.pdtb</div>
                </div>
            </div>
            <div class="cell">
                <div class="pdbox pdlr">
                    <div>.pdlr</div>
                </div>
            </div>
        </div>
        <!-- <code>.row.cellpdlr</code>
        <p>给每个格子左右填充。*可简写成<code>.row</code></p>
        <div class="row pdbox mgtb">
            <div class="cell w6 pdbox">
                <div>.cell</div>
            </div>
            <div class="cell w6 pdbox">
                <div>.cell</div>
            </div>
            <div class="cell w6 pdbox">
                <div>.cell</div>
            </div>
            <div class="cell w6 pdbox">
                <div>.cell</div>
            </div>
        </div> -->
        <code>.row.pd0</code>
        <p>取消所有格子的填充。</p>
        <div class="section">
            <div class="row pd0 pdbox">
                <div class="cell w6 pdbox">
                    <div>.cell</div>
                </div>
                <div class="cell w6 pdbox">
                    <div>.cell</div>
                </div>
                <div class="cell w6 pdbox">
                    <div>.cell</div>
                </div>
                <div class="cell w6 pdbox">
                    <div>.cell</div>
                </div>
            </div>
        </div>
        <code>.cell.pd</code>
        <p>左右仍只留一半，保持四周空白一致。</p>
        <div class="section">
            <div class="row pdbox w12 xs24">
                <div class="cell w12 pd pdbox">
                    <div>.cell.pd</div>
                </div>
                <div class="cell w12 pd pdbox">
                    <div>.cell.pd</div>
                </div>
            </div>
        </div>
        <code>.mg-lr</code>
        <p>抵消父元素的左右填充。</p>
        <div class="section mg-lr">
            <div class="container pdbox">
                <div class="mgbox">
                    <div class="section mg-lr">.section.mg-lr</div>
                </div>
            </div>
        </div>
        <!-- ## -->
        <h2>表单</h2>
        <!-- ### -->
        <h3>输入</h3>
        <code>.input</code>
        <p>控制输入框的样式，用于<code>&lt;input&gt;</code> <code>&lt;textarea&gt;</code> <code>&lt;select&gt;</code>。可与颜色类结合使用。</p>
        <div class="section row">
            <div class="cell">
                <input class="input" placeholder="input.input">
            </div>
            <div class="cell">
                <textarea class="input" placeholder="textarea.input"></textarea>
            </div>
            <div class="cell">
                <select class="input">
                    <option>select.input</option>
                </select>
            </div>
            <div class="cell">
                <select class="input" multiple="">
                    <option>select[multiple].input</option>
                    <option>option</option>
                    <option>option</option>
                    <option>option</option>
                </select>
            </div>
        </div>
        <h3>单选复选</h3>
        <div class="section">
            webkit浏览器支持更改外观
            <input type="checkbox">
            <input type="checkbox">
            <input type="radio" name="373">
            <input type="radio" name="373">
        </div>
        <!-- ### -->
        <h3>按钮</h3>
        <code>.button</code>
        <p>控制按钮的样式，一般用于<code>&lt;button&gt;</code> <code>&lt;a&gt;</code>，也可以让其它任何元素表现像按钮一样。可与颜色类结合使用。</p>
        <div class="section row">
            <div class="cell">
                <button class="button">button.button</button>
            </div>
            <div class="cell">
                <a class="button">a.button</a>
            </div>
            <div class="cell">
                <span class="button">span.button</span>
            </div>
        </div>
        <!-- ### -->
        <h3>大小</h3>
        <code>.sz(1-9)</code>
        <div class="section">
            <input class="input vab  sz" style="width:5em" placeholder=".input">
            <input class="input vab  sz1" style="width:3em" placeholder=".sz1">
            <input class="input vab  sz2" style="width:3em" placeholder=".sz2">
            <input class="input vab  sz3" style="width:3em" placeholder=".sz3">
            <input class="input vab  sz4" style="width:4em" placeholder=".sz4">
            <input class="input vab  sz5" style="width:4em" placeholder=".sz5">
            <input class="input vab  sz6" style="width:4em" placeholder=".sz6">
            <input class="input vab  sz7" style="width:5em" placeholder=".sz7">
            <input class="input vab  sz8" style="width:5em" placeholder=".sz8">
            <input class="input vab  sz9" style="width:5em" placeholder=".sz9">
        </div>
        <div class="section">
            <button class="button vab  sz">button</button>
            <button class="button vab  sz1">.sz1</button>
            <button class="button vab  sz2">.sz2</button>
            <button class="button vab  sz3">.sz3</button>
            <button class="button vab  sz4">.sz4</button>
            <button class="button vab  sz5">.sz5</button>
            <button class="button vab  sz6">.sz6</button>
            <button class="button vab  sz7">.sz7</button>
            <button class="button vab  sz8">.sz8</button>
            <button class="button vab  sz9">.sz9</button>
        </div>
        <!-- ### -->
        <h3>布局</h3>
        <code>.form>.row>.cell + .cell</code>
        <p>一般情况下为左右布局，在手机上自动变为上下布局。</p>
        <p>可结合<code>.w*</code> <code>.xs*</code>等控制宽度。</p>
        <p>左边宽度自动根据文字长度变化。</p>
        <!-- <p>给第一个<code>.cell</code>加上<code>.tar</code>让 label 靠右对齐，加上<code>.pdb*</code>让其在手机上时与下边控件留点距离。</p> -->
        <!-- <p>给第二个<code>.cell</code>加上<code>.pdb*</code>控制上下间距。</p> -->
        <div class="form mgtb w12 sm24">
            <div class="row">
                <div class="cell">.cell</div>
                <div class="cell">.cell</div>
            </div>
            <div class="row">
                <div class="cell">label</div>
                <div class="cell">
                    <input class="input" placeholder=".input">
                    <div class="pdtb1">helper text</div>
                </div>
            </div>
            <div class="row">
                <div class="cell">looooooong label</div>
                <div class="cell">
                    <textarea class="input" placeholder="textarea.input"></textarea>
                    <div class="pdtb1">helper text</div>
                </div>
            </div>
            <div class="row">
                <div class="cell">select.input</div>
                <div class="cell">
                    <select class="input" name="province">
                        <option>省</option>
                    </select>
                    <select class="input" name="city">
                        <option>市</option>
                    </select>
                    <select class="input" name="district">
                        <option>区</option>
                    </select>
                    <textarea class="input block mgt2" placeholder="详细地址"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="cell"></div>
                <div class="cell">
                    <button class="button">.button</button>
                </div>
            </div>
        </div>
        <!-- ### -->
        <h3>控件组</h3>
        <code>.group</code>
        <p>将<code>.button</code><code>.input</code><code>&lt;span&gt;</code>包含可将其合并成一组。只保留两端的圆角。</p>
        <div class="warning">*注意：为了更好的兼容性，此时最好不用<code>button.button</code>，不能保证其宽度正常。可用<code>span.button</code>代替，或用其包含起来<code>span.button>button</code>。</div>
        <p>可给<code>.button</code>加上<code>.active</code>表示选中的状态。</p>
        <p>可结合<code>.w*</code> <code>.xs*</code>等控制宽度。</p>
        <p>可结合<code>.sz*</code>控制大小。</p>
        <div class="section">
            <div class="group w24">
                <input class="input xs0" placeholder="input.input">
                <span>span</span>
                <input class="input" placeholder="input.input">
                <span class="button">
                    <button>span.button</button>
                </span>
            </div>
        </div>
        <div class="section">
            <div class="group">
                <span class="button ra9">.button.ra9</span>
                <span class="button ra9 active">.button.ra9.active</span>
                <span class="button ra9">.button.ra9</span>
            </div>
        </div>
        <div class="section">
            <div class="group ra9">
                <span class="button">parent.group.ra9</span>
                <span class="button">.button</span>
                <span class="button">.button</span>
            </div>
        </div>
        <!-- ## -->
        <h2>组件</h2>
        <!-- ### -->
        <h3>表格</h3>
        <code>table.table</code>
        <p>可用<code>.ova</code>将其包含起来，在手机上超长可让其左右滑动。</p>
        <div class="section ova mg-lr">
            <table class="table">
                <tbody>
                    <tr>
                        <th>员工姓名</th>
                        <th>性别</th>
                        <th>联系方式</th>
                        <th class="tac">角色</th>
                        <th class="tac">入职时间</th>
                        <th class="tac">订单量</th>
                        <th class="tac">项目量</th>
                        <th>登录账号</th>
                        <th class="tac">操作</th>
                    </tr>
                    <tr>
                        <td>xxx</td>
                        <td>x</td>
                        <td>xxxxxxxxxxx</td>
                        <td class="tac">xxx</td>
                        <td class="tac">xxxx.xx.xx</td>
                        <td class="tac">
                            <span class="x-tag bg-green">xx</span>
                        </td>
                        <td class="tac">
                            <span class="x-tag bg-blue">xx</span>
                        </td>
                        <td>xxxxxxx</td>
                        <td class="tac">
                            <a class="x-edit" href="">
                                <i class="fa fa-edit fa-fw"></i>
                            </a>
                            <a class="x-del" href="">
                                <i class="fa fa-remove fa-fw"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>xxx</td>
                        <td>x</td>
                        <td>xxxxxxxxxxx</td>
                        <td class="tac">xxx</td>
                        <td class="tac">xxxx.xx.xx</td>
                        <td class="tac">
                            <span class="x-tag bg-green">xx</span>
                        </td>
                        <td class="tac">
                            <span class="x-tag bg-blue">xx</span>
                        </td>
                        <td>xxxxxxx</td>
                        <td class="tac">
                            <a class="x-edit" href="">
                                <i class="fa fa-edit fa-fw"></i>
                            </a>
                            <a class="x-del" href="">
                                <i class="fa fa-remove fa-fw"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>xxx</td>
                        <td>x</td>
                        <td>xxxxxxxxxxx</td>
                        <td class="tac">xxx</td>
                        <td class="tac">xxxx.xx.xx</td>
                        <td class="tac">
                            <span class="x-tag bg-green">xx</span>
                        </td>
                        <td class="tac">
                            <span class="x-tag bg-blue">xx</span>
                        </td>
                        <td>xxxxxxx</td>
                        <td class="tac">
                            <a class="x-edit" href="">
                                <i class="fa fa-edit fa-fw"></i>
                            </a>
                            <a class="x-del" href="">
                                <i class="fa fa-remove fa-fw"></i>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- ### -->
        <h3>分页</h3>
        <code>.pagination>a</code>
        <p><code>.active</code>表示当前页</p>
        <div class="section">
            <div class="pagination">
                <a href="javascript:">←</a>
                <a href="javascript:">1</a>
                <input value="5">
                <a href="javascript:">99</a>
                <a href="javascript:">→</a>
            </div>
        </div>
        <!-- ### -->
        <h3>路径</h3>
        <code>.path>a + span</code>
        <p>自动加上分隔符</p>
        <div class="section">
            <div class="path">
                <a href="">首页</a>
                <a href="">父页</a>
                <span>当前页</span>
            </div>
        </div>
        <!-- ### -->
        <h3>标签页</h3>
        <code>.tabs>a</code>
        <p><code>.active</code>表示当前页</p>
        <div class="section">
            <div class="tabs">
                <a class="active" href="javascript:">视频</a>
                <a href="javascript:">影院</a>
                <a href="javascript:">直播</a>
            </div>
        </div>
        <!-- ### -->
        <h3>小气泡</h3>
        <code>.badge</code>
        <p>可与颜色类结合使用。没有文字自动不显示。</p>
        <div class="section">
            <span class="badge">9</span>
            <a class="button">
                .button
                <span class="badge">99+</span>
            </a>
        </div>
        <!-- ### -->
        <h3>进度条</h3>
        <code>.progress>div[style="width:n%"]</code>
        <div class="section">
            <div class="progress">
                <div style="width:20%">n%</div>
            </div>
        </div>
        <div class="section">
            <div class="progress">
                <div style="width:20%"></div>
            </div>
        </div>
        <!-- ## -->
        <h2>修饰类</h2>
        <!-- ### -->
        <h3>字体大小</h3>
        <div class="section">
            <span class="vab mgr  fs">.fs</span>
            <span class="vab mgr  fs1">.fs1</span>
            <span class="vab mgr  fs2">.fs2</span>
            <span class="vab mgr  fs3">.fs3</span>
            <span class="vab mgr  fs4">.fs4</span>
            <span class="vab mgr  fs5">.fs5</span>
            <span class="vab mgr  fs6">.fs6</span>
            <span class="vab mgr  fs7">.fs7</span>
            <span class="vab mgr  fs8">.fs8</span>
        </div>
        <!-- ### -->
        <h3>颜色</h3>
        <div class="section">
            <button class="button  white" title=".white">.white</button>
            <button class="button  muted">.muted</button>
            <button class="button  success">.success</button>
            <button class="button  info">.info</button>
            <button class="button  warning">.warning</button>
            <button class="button  danger">.danger</button>
            <button class="button  error">.error</button>
            <button class="button  showy">.showy</button>
            <button class="button  primary">.primary</button>
        </div>
        <!-- ### -->
        <h3>背景颜色</h3>
        <div class="section">
            <button class="button  bgmuted white">.bgmuted.white</button>
            <button class="button  bgsuccess white">.bgsuccess</button>
            <button class="button  bginfo white">.bginfo</button>
            <button class="button  bgwarning white">.bgwarning</button>
            <button class="button  bgdanger white">.bgdanger</button>
            <button class="button  bgerror white">.bgerror</button>
            <button class="button  bgshowy white">.bgshowy</button>
            <button class="button  bgprimary white">.bgprimary</button>
        </div>
        <!-- ### -->
        <h3>圆角</h3>
        <code>.ra([tblr]|[123459])</code>
        <div class="section">
            <button class="button  ra">.ra</button>
            <button class="button  ra1">.ra1</button>
            <button class="button  ra2">.ra2</button>
            <button class="button  ra3">.ra3</button>
            <button class="button  ra4">.ra4</button>
            <button class="button  ra5">.ra5</button>
            <button class="button  ra9">9</button>
            <button class="button  ra9" style="width: 6em">.ra9</button>
        </div>
        <!-- ### -->
        <h3>阴影</h3>
        <code>.sh</code>
        <div class="section bg pd ra sh mgtb">.pd.bg.ra.sh</div>
        <!-- ### -->
        <h3>边框</h3>
        <code>.bd[0tblr]</code>
        <div class="section row">
            <div class="cell">
                <div class="bd">.bd</div>
            </div>
            <div class="cell">
                <div class="bdt">.bdt</div>
            </div>
            <div class="cell">
                <div class="bdb">.bdb</div>
            </div>
            <div class="cell">
                <div class="bdl">.bdl</div>
            </div>
            <div class="cell">
                <div class="bdr">.bdr</div>
            </div>
        </div>
        <div class="section">
            <div class="pdtb bdb">.pdtb.bdb</div>
        </div>
        <!-- ### -->
        <h3>定位</h3>
        <div class="section">
            <code>.rel</code>
            <code>.abs</code>
            <code>.l0</code>
            <code>.r0</code>
            <code>.t0</code>
            <code>.b0</code>
        </div>
        <!-- ### -->
        <h3>显示</h3>
        <div class="section">
            <code>.none</code>
            <code>.inline</code>
            <code>.block</code>
            <code>.table</code>
            <code>.inline.block</code>
            <code>.inline.table</code>
        </div>
        <!-- ### -->
        <h3>溢出</h3>
        <div class="section">
            <code>.ov[xy][ah]</code>
        </div>
        <!-- ### -->
        <h3>对齐</h3>
        <div class="section">
            <code>.ta[lcr]</code>
        </div>
        <!-- ### -->
        <h3>垂直对齐</h3>
        <div class="section">
            <code>.va[tmb(bl)]</code>
        </div>
        <!-- ### -->
        <h3>不换行</h3>
        <div class="section">
            <code>.nowr</code>
        </div>
        <!-- ### -->
        <h3>文字溢出省略号</h3>
        <div class="section">
            <code>.ellps</code>
        </div>
        <!-- ### -->
        <h3>粗体</h3>
        <div class="section">
            <code>.bold</code>
        </div>
        <!-- ### -->
        <h3>浮动</h3>
        <div class="section">
            <code>.f[lr]</code>
            <code>.cl</code>
            <code>.clf</code>
        </div>
        <!-- ### -->
        <h3>宽</h3>
        <div class="section">
            <code>.w(0-24)</code>
            <code>.wf</code>
            <code>.wa</code>
            <code>.w320</code>
            <code>.w960</code>
            <code>.mw</code>
            <code>.mw320</code>
            <code>.mw960</code>
            <code>.fill</code>
        </div>
        <!-- ### -->
        <h3>高</h3>
        <code>.h[1234]</code>
        <!-- ### -->
        <h3>行高</h3>
        <code>.lh[1234]</code>
        <!-- ### -->
        <h3>指针</h3>
        <code>.curp</code>
        <!-- ## -->
        <h2>综合</h2>
        <p>以上所有类都可以随意组合，以达到各种不同的效果。</p>
        <div class="section bg bd ra sh">
            <div class="pd bdb">标题</div>
            <div class="section pdlr">
                <div class="tabs">
                    <a class="active" href="javascript:">标签</a>
                    <a href="javascript:">标签</a>
                    <a href="javascript:">标签</a>
                </div>
                <div class="section">
                    <div class="group">
                        <span class="button">全选</span>
                        <span class="button">删除</span>
                        <span class="button">添加</span>
                    </div>
                    <div class="group fr">
                        <input class="input">
                        <span class="button">搜索</span>
                    </div>
                </div>
                <div class="section mg-lr ova">
                    <table class="table">
                        <tbody>
                            <tr>
                                <th>员工姓名</th>
                                <th>性别</th>
                                <th>联系方式</th>
                                <th class="tac">角色</th>
                                <th class="tac">入职时间</th>
                                <th class="tac">订单量</th>
                                <th class="tac">项目量</th>
                                <th>登录账号</th>
                                <th class="tac">操作</th>
                            </tr>
                            <tr>
                                <td>xxx</td>
                                <td>x</td>
                                <td>xxxxxxxxxxx</td>
                                <td class="tac">xxx</td>
                                <td class="tac">xxxx.xx.xx</td>
                                <td class="tac">
                                    <span class="x-tag bg-green">xx</span>
                                </td>
                                <td class="tac">
                                    <span class="x-tag bg-blue">xx</span>
                                </td>
                                <td>xxxxxxx</td>
                                <td class="tac">
                                    <a class="x-edit" href="">
                                        <i class="fa fa-edit fa-fw"></i>
                                    </a>
                                    <a class="x-del" href="">
                                        <i class="fa fa-remove fa-fw"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>xxx</td>
                                <td>x</td>
                                <td>xxxxxxxxxxx</td>
                                <td class="tac">xxx</td>
                                <td class="tac">xxxx.xx.xx</td>
                                <td class="tac">
                                    <span class="x-tag bg-green">xx</span>
                                </td>
                                <td class="tac">
                                    <span class="x-tag bg-blue">xx</span>
                                </td>
                                <td>xxxxxxx</td>
                                <td class="tac">
                                    <a class="x-edit" href="">
                                        <i class="fa fa-edit fa-fw"></i>
                                    </a>
                                    <a class="x-del" href="">
                                        <i class="fa fa-remove fa-fw"></i>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>xxx</td>
                                <td>x</td>
                                <td>xxxxxxxxxxx</td>
                                <td class="tac">xxx</td>
                                <td class="tac">xxxx.xx.xx</td>
                                <td class="tac">
                                    <span class="x-tag bg-green">xx</span>
                                </td>
                                <td class="tac">
                                    <span class="x-tag bg-blue">xx</span>
                                </td>
                                <td>xxxxxxx</td>
                                <td class="tac">
                                    <a class="x-edit" href="">
                                        <i class="fa fa-edit fa-fw"></i>
                                    </a>
                                    <a class="x-del" href="">
                                        <i class="fa fa-remove fa-fw"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="section tac">
                    <div class="pagination">
                        <a href="javascript:">←</a>
                        <a href="javascript:">1</a>
                        <a class="active" href="javascript:">5</a>
                        <a href="javascript:">99</a>
                        <a href="javascript:">→</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="pd bd ra9">
                <div class="pd bd ra">
                    <span class="bd">span</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style type="text/css">
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: normal;
    margin: 16px 0;
    color: #000;
}

h2 {
    margin-top: 4em;
}

h3 {
    border-left: solid 3px #0af;
    line-height: 1;
    padding-left: .5em;
    margin-top: 2em;
}

p {
    margin: 1em 0;
    color: #555;
}

#ui {
    background: #fff;
}
</style>
