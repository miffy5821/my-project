<template>
    <div>
       <el-collapse v-model="activeNames" activeNames="string">
        <el-collapse-item title="提款限额是多少？" name="1">
            <div class="text">单笔提款最低金额110元，最高500000元，每日提款上限200万。</div>
        </el-collapse-item>
        <el-collapse-item title="提款什么时候可以到账？" name="2">
            <div class="text">取款申请审核通过后，一般会在3-5分钟内为您进行线下转账。
                若逾时仍未收到款项，则可能是取款银行账号数据有误或银行账号小额管理费未缴等问题所造成的。
                财务人员在无法出款时都会及时进行通知，若玩家未填写有效的联络方式也会造成财务无法联系的情况发生，
                请您务必填写正确有效的联系信息。
            </div>
        </el-collapse-item>
        <el-collapse-item title="可否提款到其他人的银行卡？" name="3">
            <div class="text">银行账户持有人姓名必须与在澳门银河注册账号的姓名一致，否则无法申请提款。</div>
        </el-collapse-item>
        <el-collapse-item title="提款是否需要交纳手续费或其他费用？" name="4">
            <div class="text">每天前2笔提款（包含第2笔）免手续费，之后每笔提款收取提款金额1%+2元的手续费。</div>

        </el-collapse-item>
        <el-collapse-item title="当我在真人游戏赢了钱，我该如何提款？" name="5">
            <div class="text">将钱从游戏平台转入主账户后，请您点击“提款专区”输入您的取款密码，
                再按要求填写您要提取的金额，然后再点击确定，成功递交取款信息后，财务部将在3~5分钟内为您办理出款。
            </div>
        </el-collapse-item>
        <el-collapse-item title="可以取消提款申请吗？" name="6">
            <div class="text">提交申请未审核之前，若您想取消，请及时联系在线客服处理。</div>
        </el-collapse-item>
        <el-collapse-item title="提款申请为什么会不通过？" name="7">
            <div class="text">防止部分玩家利用我公司进行洗钱等非法资金操作，为避免部分玩家以套利为目的参与活动，
                我司对于所有的提款均会进行审核，申请不通过的主要因素考虑如下：</div>
            <ol>
                <li> 1、判断有效投注额是否达到存款，优惠的流水要求；（各游戏和局/未接受/取消注单，不纳入有效投注计算。）</li>
                <li> 2、取款信息是否符合取款者信息；</li>
                <li> 3、投注是否异常，存在恶意刷流水套利行为；</li>
                <li> 4、同一用户多账户行为。 </li>
            </ol>
        </el-collapse-item>
       </el-collapse>
    </div>

</template>

<script>
    export default {
        name: 'drawing.vue',
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
