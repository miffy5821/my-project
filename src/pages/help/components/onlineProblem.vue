<template>
    <div>
        <el-collapse v-model="activeNames" activeNames="string">
            <el-collapse-item title="兼容性（操作系统及浏览器）" name="1">
                <div class="text">1.Windows 7 </div>
                <ol>
                    <li>Internet Explorer 9 或以上版本</li>
                    <li> Mozilla Firefox 2.0.0.20 或以上版本</li>
                    <li> Opera 9.01 或以上版本</li>
                </ol>
                <div class="text">2.Windows XP </div>
                <ol>
                    <li> Internet Explorer 8 或以上版本</li>
                    <li> Mozilla Firefox 2.0.0.20 或以上版本</li>
                    <li> Opera 9.01 或以上版本</li>
                </ol>
                    <div class="text">3.Windows 2000 </div>
                    <ol>
                        <li>Internet Explorer 8 或以上版本</li>
                        <li>Mozilla Firefox 2.0.0.20 或以上版本</li>
                        <li>Opera 9.01 或以上版本</li>
                    </ol>
                        <div class="text">4.Mac OS X 10.4 或以上版本 </div>
                        <ol>
                            <li> Safari 2.03</li>
                            <li> Mozilla Firefox 2.0.0.20 或以上版本</li>
                            <li> Opera 9.01 或以上版本</li>
                        </ol>
                            <div class="text">  5.Mac OS X 10.3 或以下版本 </div>
                            <ol>
                                <li>Mozilla Firefox 2.0.0.20 或以上版本</li>
                            </ol>
            </el-collapse-item>
            <el-collapse-item title="浏览器不正常出错和网页刷新慢" name="2">
                <div class="text">亲爱的客户，当您浏览互联网，是否曾经遇到以下问题？ </div>
                  <ol>
                      <li>- 浏览器显示不正常</li>
                      <li>- 网络连接没有响应</li>
                      <li>- 网页运行速度极慢</li>
                      <li>- 当打开或保存文件的时候，计算机反应很慢</li>
                      <li>- 没有意料／不正常的错误信息</li>
                      <li>- 在浏览器里出现新的工具栏</li>
                      <li>- 很难连接网页</li>
                </ol>
                <div class="text">若出现上述情形，您的计算机可能受到了病毒影响。
                    病毒程序在运行时，容易导致计算机出现此问题；这情况很普遍。很多客户都没有意识到自己的计算机上已经安装病毒程序，
                    很多时候病毒程序是伴随着一些软件同时安装的。
                </div>
            </el-collapse-item>
            <el-collapse-item title="是否需要启动cookies？" name="3">
                <div class="text">
                    尊敬的用戶，在登陆澳门银河之前，您需要启动Cookies！ </div>

                    <div class="text">   允许Cookies详细指南： </div>
                   <ol>
                       <li> - InternetExplorer</li>
                       <li> - MozillaFirefox</li>
                       <li> - Opera</li>
                       <li> - Safari</li>
                   </ol>
                       <div class="text">具备以下信息，能让我们能更快速的为您解决问题！</div>
                       <ol>
                       <li>  - 请问您所使用的网络供货商？</li>
                       <li>  - 请问您是否安装了任何安全软件或者防火墙。v
                       <li> - 工具栏</li>
                   </ol>
                <div class="text"> 贴心小提醒：您下载的（不论有意无意）某些工具栏会引起问题。有的插入式工具栏有缺陷，可能会阻止弹出窗口、
                    令您的计算机速度减慢、或强制关闭浏览器。
                </div>
            </el-collapse-item>

        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: 'onlineProblem.vue',
        data () {
            return {
                activeNames: ['1']
            };
        }
    }
</script>

<style scoped>
    .text{
        text-indent: 2em;
        text-align: left;
    }
    ol{
        width: auto;
        margin-left: 50px;
        text-align: left;
    }
</style>
