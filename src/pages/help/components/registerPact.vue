<template>
<div>
    <el-collapse v-model="activeNames" activeNames="string">
        <el-collapse-item title="如何注册？" name="1">
            <div class="text">打开我公司的网站后，点击登录区的注册，如实填写您的资料信息，确认送出后即可完成注册。
            </div>
        </el-collapse-item>
        <el-collapse-item title="如何登录会员中心？" name="2">
            <div class="text">在菜单底部点击登录，在登录页面输入正确的账号及密码后，即可登录。
            </div>
        </el-collapse-item>
        <el-collapse-item title="登录时密码提示错误，我该怎么办？" name="3">
            <div class="text">首先请您再次确认输入的密码是否正确，必须是6-12个字符（由大小写英文字母和数字组成）。若确认后仍提示错误，
                建议您通过自助流程找回密码。或者，您也可以在线客服协助您找回密码。
            </div>
        </el-collapse-item>
        <el-collapse-item title="我可以注册多个账号吗？" name="4">
            <div class="text">客户不可以同时拥有多个账号，如发现客户拥有多个账号，公司有权取消其账号以及投注，本公司保留权利取消或关闭您的账户本公司有权限制客户只保留其中一个账号。
            </div>

        </el-collapse-item>
        <el-collapse-item title="我想删除/注销我的账号可以吗？" name="5">
            <div class="text">我公司不会以任何理由注销玩家账号。您可在线客服申请停用账号，以停止其账号的使用。</div>
        </el-collapse-item>
        <el-collapse-item title="如何找回登录密码？" name="6">
            <div class="text">若忘记登录密码，请点击页面顶部登录区（或其他相关页面）的“忘记密码？”，然后根据页面提示进行操作即可。</div>

                <div class="text">     具体操作步骤如下：</div>
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
name: "registerPact.vue"
}
</script>

<style scoped>
.text{
    text-indent: 2em;
    text-align: left;
}
</style>
