<template>
    <div>
        <el-collapse v-model="activeNames" activeNames="string">
            <el-collapse-item title="有哪些存款途径？" name="1">
                <div class="text">公司目前提供四种方式入款:</div>
                <ol>
                    <li> 1.支付宝支付；</li>
                    <li>  2.快速入款；</li>
                    <li>  3.微信扫码；</li>
                    <li>  4.支付宝扫码。</li>
                </ol>
                <div class="text">注：选择快速入款的客户，请您在每次入款前务必与我们联络确认汇款账号，
                    如将款项存入已过期账号，导致公司无法查收，恕不负责，请您留意，谢谢！</div>
            </el-collapse-item>
            <el-collapse-item title="存款未到账如何处理？" name="2">
                <div class="text">由于跨行汇款的到账时间是取决银方面办理速度，一般都是有1-8小时的到账时间，请您耐心等待。如果已成功汇款，
                    可能是由于第三方支付公司还没有收到您的款项，请麻烦发送小票的扫描件或是清晰照片（如果是网银汇款请发送汇款回单的截图）给我们，
                    我们会马上为您提交到第三方支付公司进行查询。
                </div>
            </el-collapse-item>
            <el-collapse-item title="登录时密码提示错误，我该怎么办？" name="3">
                <div class="text">首先请您再次确认输入的密码是否正确，必须是6-12个字符（由大小写英文字母和数字组成）。若确认后仍提示错误，
                    建议您通过自助流程找回密码。或者，您也可以在线客服协助您找回密码。
                </div>
            </el-collapse-item>

            <el-collapse-item title="如何找回登录密码？" name="4">
                <div class="text">若忘记登录密码，请点击页面顶部登录区（或其他相关页面）的“忘记密码？”，然后根据页面提示进行操作即可。</div>

                <div class="text">具体操作步骤如下：</div>
                <ol>
                    <li> (1)输入您要找回登录密码的手机号／邮箱地址；</li>
                    <li> (2)根据页面提示，选择其中一种找回方式；</li>
                    <li> (3)核实身份后，重新设置新的登录密码；</li>
                    <li> (4)登录密码修改成功。</li>
                </ol>
            </el-collapse-item>
        </el-collapse>
    </div>


</template>

<script>
export default {
name: "depositLive.vue"
}
</script>

<style scoped>
.text{
    text-indent: 2em;
    text-align: left;
}
</style>
