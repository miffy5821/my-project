<template>
    <div class="payCountdown">
        <div class="remind">
            <p>尊敬用户您好，您的订单已生成！</p>
            <p>请记录以下官方账户信息及存款，在1小时内登录您的网上银行/手机银行进行转账，转账完成后，请保留银行回执，
                以便确定转账信息，<span class="text-color">请将【备注】中的信息填写在存款备注里，存款完成前请不要关闭本页。</span>
            </p>
            <p>
                <span class="text-color">注意：因审核订单大，系统对存款金额进行零钱调整，转账时请务必与调整后金额统一，否则造成订单丢失或无法核对，平台概不负责。</span>
            </p>
        </div>
        <div class="form">
            <table>
                <tr>
                    <th><p class="style-text">订单编号</p></th>
                    <th><p class="style-text">YHH651451513545151</p></th>
                </tr>
                <tr>
                    <th><p class="style-text">存款金额</p></th>
                    <th><p class="style-text">200元</p></th>
                </tr>
                <tr>
                    <p class="text-time">订单失效时间还剩58分52秒</p>
                </tr>
                <tr>
                    <th>
                        <p>银行</p>
                        <p>农业银行</p>
                        <button>复制</button>
                    </th>
                    <th>
                        <p>账户</p>
                        <p> 662845256465254652</p>
                        <button>复制</button>
                    </th>
                </tr>
                <tr>
                    <th>
                        <p>开户名</p>
                        <p>张飞</p>
                        <button>复制</button>
                    </th>
                    <th>
                    </th>
                </tr>
            </table>

        </div>
        <div class="submit">
            <button>取消订单</button>
            <button style="background: #c2a77d;color: white">完成存款，下一步</button>
        </div>
        <div class="tip">
            <h2>温馨提示</h2>
            <p>为了保证您的款项正常到账，请您留意以下几点：</p>
            <p> 1.提交的金额和支付的金额必须一致，否则无法到账，修改支付金额无法查实的，需自行承担资金损失。</p>
            <p> 2.下单后，请按照界面信息提示进行支付，重新支付无法到账，无法查实需自行承担资金损失。</p>
            <p> 3.支付过程中遇到问题未完成，请重新下单或更换支付进行支付。</p>
            <p> 4.支付遇到困难？点击“<span @click="jumpOnlineService()">联系客服</span>”人员获得帮助</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'payCountdown',
        methods: {
            jumpOnlineService () {
                window.open('https://chatlink.mstatik.com/widget/standalone.html?eid=76107099dd1ba17a94453359257851c8');
            },
        }
    }
</script>

<style lang="less" scoped>
    .payCountdown {
        width: 850px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
    }

    .remind {
        width: 928px;
        margin-bottom: 20px;
    }

    .remind p {
        font-size: 14px;
        line-height: 24px;
        color: black;
        text-align: left;
    }

    .text-color {
        color: red;
    }

    .form {
        width: 100%;
        height: 280px;
    }

    table {
        width: 100%;
        border: 2px solid grey;
        tr {
            width: 848px;
            display: flex;
            height: 50px;
        }
    }

    th {
        width: 424px;
        height: 50px;
        line-height: 50px;
        display: flex;
        align-items: center;
        border-top: 1px solid grey;
        p {
            min-width: 100px;
            line-height: 50px;
            text-align: left;
            font-size: 14px;
            color: grey;
            padding-left: 30px;

        }

        button {
            border: none;
            height: 25px;
            background: #c2a77d;
            color: white;
            border-radius: 3px;
            font-size: 14px;
            margin-left: 50px;

        }
    }
    .style-text{
        width: 424px;
        height: 50px;
        padding: 0;
        text-align: center;
        border-left: 1px solid grey;
    }
    .text-time{
        width: 848px;
        height: 50px;
        text-align: center;
        font-size: 16px;
        background: #c2a77d;
        line-height: 50px;
    }
    .submit {
        width: 100%;
        height: 45px;
        display: flex;
        justify-content: flex-end;
    }

    .submit button {
        width: auto;
        height: 35px;
        margin-left: 20px;
        color: grey;
        font-size: 14px;
        padding: 0 10px;
        border-radius: 3px;
        border:1px solid #e3e1e1;
    }

    .tip {
        width: 928px;
        padding: 15px 0;
        text-align: left;
    }

    .tip h2 {
        font-size: 20px;
        color: red;
        margin-bottom: 10px;
    }

    .tip p {
        font-size: 14px;
        color: black;
        margin-top: 10px;
    }

    .tip span {
        color: red;
    }

</style>
