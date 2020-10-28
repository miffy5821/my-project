<template>
    <div>
        <el-collapse v-model="activeNames" activeNames="string">
            <el-collapse-item title="为什么在线支付成功后额度没有立即增加？" name="1">
                <div class="text">这是因为在线支付系统需要经过密锁切换及内部验证程序，而这也是我们的保安程序之一，所以请您不必担心，
                    款项一定不会丢失。如果您在在线支付超过30分钟后仍然还未收到您的款项，请与我们客服联系处理。
                </div>
            </el-collapse-item>
            <el-collapse-item title="快速入款存款未到账如何处理？" name="2">
                <div class="text">由于跨行汇款的到账时间是取决银方面办理速度，一般都是有1-8小时的到账时间，请您耐心等待。
                    如果已成功汇款，可能是由于第三方支付公司还没有收到您的款项，请麻烦发送小票的扫描件或是清晰照片
                    （如果是网银汇款请发送汇款回单的截图）给我们，我们会马上为您提交到第三方支付公司进行查询。
                </div>
            </el-collapse-item>
            <el-collapse-item title="提款什么时候可以到账？" name="3">
                <div class="text">取款申请审核通过后，一般会在3-5分钟内为您进行线下转账。若逾时仍未收到款项，
                    则可能是取款银行账号数据有误或银行账号小额管理费未缴等问题所造成的。
                    财务人员在无法出款时都会及时进行通知，若玩家未填写有效的联络方式也会造成财务无法联系的情况发生，
                    请您务必填写正确有效的联系信息。同时，您也可以随时联系在线客服询问进度。
                </div>
            </el-collapse-item>
            <el-collapse-item title="提款申请为什么会不通过？" name="4">
                <div class="text">防止部分玩家利用我公司进行洗钱等非法资金操作，为避免部分玩家以套利为目的参与活动，
                    我司对于所有的提款均会进行审核，申请不通过的主要因素考虑如下：
                </div>
                <div class="text">   1、判断有效投注额是否达到存款，优惠的流水要求；</div>
                <div class="text">   2、取款信息是否符合取款者信息；</div>
                <div class="text">   3、投注是否异常，存在恶意刷流水套利行为；</div>
                <div class="text">   4、同一用户多账户行为；</div>
            </el-collapse-item>
            <el-collapse-item title="为什么向游戏转账会失败？" name="5">
                <div class="text">向游戏转账失败可能存在以下几种原因：</div>
                <div class="text">(1)第三方游戏数据异常或正在升级维护中；</div>
                <div class="text">(2)数据对接异常，暂时无法进行资金操作；</div>
                <div class="text">(3)网络连接异常，导致订单超时。</div>
                <div class="text">温馨提示：</div>
                <div class="text">转账失败时，建议您重新发起请求，或稍等片刻后再进行操作！</div>
            </el-collapse-item>
            <el-collapse-item title="如何绑定银行卡？" name="6">
                <div class="text">具体操作流程如下：</div>
                <div class="text">(1)登录玩家中心后，依次点选 “账户管理->银行卡信息”；</div>
                <div class="text">(2)根据页面提示填写相关银行卡信息；</div>
            </el-collapse-item>
            <el-collapse-item title="所有类型的银行卡都可以绑定吗？" name="7">
                <div class="text">不可以！我公司目前仅支持绑定借记卡，信用卡暂不支持使用。</div>
            </el-collapse-item>
            <el-collapse-item title="可以绑定多张银行卡吗？" name="8">
                <div class="text">可以，一个玩家账户支持绑定最多五张银行卡，且绑定的银行卡账户名必须与玩家的真实姓名一致。</div>
            </el-collapse-item>
            <el-collapse-item title="如何更换已绑定的银行卡？" name="9">
                <div class="text">银行卡更换与绑定流程基本一致，具体操作步骤详见如何绑定银行卡？其中，仅支持更换为账户名与真实姓名
                    一致的银行卡，否则取款将失败！</div>
                <div class="text">温馨提示：</div>
                <div class="text">
                    若由于玩家绑定的银行卡账户名与您填写的真实姓名不一致，而导致出款失败或延迟，请玩家自行负责！
                </div>
            </el-collapse-item>
            <el-collapse-item title="为什么我要设置真实姓名？" name="10">
                <div class="text">真实姓名是证明您身份的重要凭证之一，且真实姓名将用于匹配收款银行账号，
                    银行卡账户名与玩家真实姓名一致时才可以取款成功！为确保您账户的安全，真实姓名一旦设置不可修改！
                </div>
            </el-collapse-item>
            <el-collapse-item title="真实姓名填错了怎么修改？" name="11">
                <div class="text">一经填写，玩家本人无法直接修改真实姓名！如有需要，请您在线客服服协助您做数据更改。</div>
            </el-collapse-item>
            <el-collapse-item title="我的真实姓名会被泄漏吗？" name="12">
                <div class="text">我公司网站绝对安全，我们决不泄漏玩家的真实姓名及其他个人资料给任何商业机构。</div>
            </el-collapse-item>
            <el-collapse-item title="你们的流水红利政策是怎么样的？" name="13">
                <div class="text">目前我们有以下红利：</div>
                <div class="text">新用户首存红利</div>
                <div class="text">澳门银娱场、钻石厅娱乐场有周返水红利</div>
                <div class="text">快乐彩周返水红利</div>
                <div class="text">体育周返水红利</div>
                <div class="text">银行转账存提款“报销”存款手续费优惠红利
                </div>
            </el-collapse-item>
            <el-collapse-item title="有效流水在每个平台是如何计算的？" name="14">
                <div class="text">有效流水计算：</div>
                <div class="text">1.百家乐项目，若单局输赢的绝对值大于75%本金，以本金作为有效投注额。</div>
                <div class="text">2.其他盘口按单局本金计算有效投注额。当投注净输时，按净输金额绝对值计算流水；</div>
                <div class="text">当投注净赢金额<75%，则按净赢金额计算流水，净赢金额>=75%，以全额投注金额计算流水。</div>
            </el-collapse-item>
            <el-collapse-item title="隐私信息是否安全？" name="15">
                <div class="text">澳门银河将尽全力保护客户提供给我们的个人资料，不会蓄意将该数据泄漏给外人，</div>
                <div class="text">除非此政策条款里有明文规定。所有澳门银河员工都被要求遵循该政策条款。</div>
                <div class="text">员工有义务严密的保守客户的个人信息，即使员工离开澳门银河后仍须坚守此义务。</div>
                <div class="text">阁下本人也须保护好您的个人信息。阁下应严守您的帐户密码，不应将此透露给其他人。
                </div>
            </el-collapse-item>
            <el-collapse-item title="我可以注册多个账号吗？" name="6">
                <div class="text">客户不可以同时拥有多个账号，如发现客户拥有多个户口，公司有权取消其户口以及投注，
                    本公司保留权利取消或关闭您的账户本公司有权限制客户只保留其中一个户口。
                </div>
            </el-collapse-item>
            <el-collapse-item title="请问各个游戏的注额为多少？" name="17">
                <div class="text">真人游戏-最低下注1RMB 最高限额30万RMB （可根据不同类型会员进行调高注码额度）</div>
                <div class="text"> 彩票游戏-最低下注1RMB最高限额依照游戏及玩法不同，最高可到10000RMB</div>
                <div class="text">电子机率-最低下注0.2RMB最高限额依照游戏及玩法不同</div>
                <div class="text"> 如有任何疑问请咨询24小时在线客服！</div>
            </el-collapse-item>
            <el-collapse-item title="最低的硬件系统要求是什么?" name="18">
                <div class="text">1.任何可以接上互联网的计算机。</div>
                <div class="text"> 2.SVGA显示适配器–最少要1204x768像素256色彩以上。</div>
                <div class="text"> 3.区域宽带。</div>
                <div class="text"> 4.Windows , Mac OS X , Linux作业系统</div>
                <div class="text"> 5.Internet Explorer浏览器v9 或以上 (版本10.0 或以上更好)，Mozilla Firefox (浏览器v3.0 或以上)，
                    Opera (浏览器v8.0 或以上)，Chrome(浏览器v6.0 或以上)，Safari (浏览器v4.0 或以上)
                </div>
                <div class="text"> 6.要浏览在线娱乐城，你可以在 Macromedia网站下载Macromedia Flash Player浏览器附加程序(8.0或以上版本)。</div>
            </el-collapse-item>
        </el-collapse>

    </div>
</template>

<script>
    export default {
        name: 'commonProblem',

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

</style>
