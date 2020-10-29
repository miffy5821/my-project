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
            <el-collapse-item title="存款是否需要交纳手续费或其他费用？" name="3">
                <div class="text">澳门银河接收快速入款（包含支付宝转账、银行转账、银行存款、银行柜台存款、ATM机自动转账等）、在线支付、微信扫码、
                    支付宝扫码等方式。当您通过支付宝、微信、网银、ATM方式存款成功后，存款手续金额由澳门银河承担，让您存款无忧。
                    使用柜台存款的客户选择收款方支付将不享受存款手续费回馈。
                </div>
            </el-collapse-item>

            <el-collapse-item title="为什么在线支付成功后额度没有立即增加？" name="4">
                <div class="text">这是因为在线支付系统需要经过密锁切换及内部验证程序，而这也是我们的保安程序之一，
                    所以请您不必担心，款项一定不会丢失。如果您在在线支付超过30分钟后仍然还未收到您的款项，请与我们客服联系处理。
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>


</template>

<script>
export default {
name: "depositLive.vue",
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
    margin-left: 30px;
    text-align: left;
}
</style>
