<template>
  <div class="center">
    <div class="tg">
      <div class="tg-icon"><img class="iconTg" src="/static/personal/phone.png" alt=""></div>
      <p class="tgContent">尊敬的澳门银河贵宾，由于线上充值会员多通道拥挤，充值成功率降低，建议贵宾使用公司线下转卡方式充值，
        笔笔入款1.5%,感谢您对我司一直以来的支持，祝您游戏愉快~</p>
    </div>
    <div class="ym">
    </div>
    <div class="deposit">
      <div class="depositName">存款专区</div>
    </div>
    <div class="deposit-case">
      <div class="deposit-zone">
        <ul class="depositWay">
          <li class="active1"><img class="bankCard " src="https://line.txwl-888.com/group1/M00/00/2E/DsBDFV5LTK2AeX7BAAAKhUdmA1k245.png"/>快捷支付</li>
          <span class="cross-line">|</span>
          <li><img class="bankCard" src="https://line.jzs001.cn/group1/M00/00/7A/Z_QBx18Bp_SAE4gGAAADmClhtIo177.jpg"/>天下尊享支付</li>
          <span class="cross-line">|</span>
          <li><img class="bankCard" src="https://line.txwl-888.com/group1/M00/00/2F/ZxcuGF5Ki0aADrqAAAAJTOT7d78069.png"/>支付宝支付</li>
          <span class="cross-line">|</span>
          <li><img class="bankCard" src="https://line.txwl-888.com/group1/M00/00/2F/ZxcuGF5LTpSAE8irAAAJOek1zow633.png"/>云闪付</li>
          <span class="cross-line">|</span>
          <li><img class="bankCard" src="https://line.txwl-888.com/group1/M00/00/2F/ZxcuGF5LTqiAUiUzAAAKZqW6gnA420.png"/>比特币支付</li>
          <span class="cross-line">|</span>
          <li><img class="bankCard" src="https://line.txwl-888.com/group1/M00/00/2F/ZxcuGF5LTcqAWnY_AAAKw3rnSTE651.png"/>网银支付</li>
          <span class="cross-line">|</span>
          <li><img class="bankCard" src="/static/personal/bankCard.png"/>银联支付</li>
        </ul>
      </div>
      <div class="depositWay-content">
        <!--快捷支付-->
        <!--<div class="kj">-->
        <!--<div class="step">-->
          <!--<el-steps :active="active" finish-status="success">-->
            <!--<el-step title="输入金额"></el-step>-->
            <!--<el-step title="存款成功"></el-step>-->
          <!--</el-steps>-->
        <!--</div>-->
        <!--<div class="way">-->
          <!--<img class="bankCard" src="https://line.txwl-888.com/group1/M00/00/2E/DsBDFV5LTK2AeX7BAAAKhUdmA1k245.png"/>-->
          <!--<span class="tex">支付1</span>-->
        <!--</div>-->
        <!--<div class="amount-box">-->
          <!--<div class="amount-deposited">-->
            <!--<label>存款金额 ：</label>-->
            <!--<input type="number" class="Distribute"/>-->
            <!--<div class="ts">单笔限额20-50000(元)</div>-->
            <!--<el-button class="btn-next" @click="next">下一步</el-button>-->
          <!--</div>-->
        <!--</div>-->

        <!--<div class="tip">-->
          <!--<h2>温馨提示</h2>-->
          <!--<p>为确保您的款项及时到账，请您留意以下几点：</p>-->

          <!--<p> 1.在输入您的存款金额时确保您提交的金额在限额范围之内；</p>-->

          <!--<p> 2.若您支付过程中遇到问题未完成，请重新下单；</p>-->

          <!--<p> 3.支付遇到困难？点击“<a>联系客服</a>”人员获得帮助;</p>-->
        <!--</div>-->
      <!--</div>-->

        <!--天下尊享支付-->
        <!--<div class="tx">-->
          <!--<div class="tx-top">-->
            <!--<img class="tx-img" src="https://image.beike188.com/YHHB/user_img/excellent_banner.jpg">-->
            <!--<div class="tx-way-box">-->
            <!--<div class="tx-way tx-way-active">-->
             <!--<img src="https://line.jzs001.cn/group1/M00/00/7A/Z_QBx18Bp_SAE4gGAAADmClhtIo177.jpg"> <span>VIP支付</span>-->
            <!--</div>-->
            <!--<div class="tx-way">-->
              <!--<img src="https://line.jzs001.cn/group1/M00/00/7A/Z_QBx18Bp_SAE4gGAAADmClhtIo177.jpg"> <span>数字支付</span>-->
            <!--</div>-->
           <!--</div>-->
            <!--<div class="tx-button">-->
              <!--<button class="tx-btn11">去支付</button>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="tip">-->
            <!--<h2>温馨提示</h2>-->
            <!--<p>为确保您的款项及时到账，请您留意以下几点：</p>-->
            <!--<p> 1.在输入您的存款金额时确保您提交的金额在限额范围之内；</p>-->
            <!--<p> 2.若您支付过程中遇到问题未完成，请重新下单；</p>-->
            <!--<p> 3.支付遇到困难？点击“<a>联系客服</a>”人员获得帮助;</p>-->
          <!--</div>-->
        <!--</div>-->

        <!--&lt;!&ndash;支付宝支付&ndash;&gt;-->
        <!--<div class="treasure">-->
           <!--<div class="treasure-ways">-->
             <!--<div class="step">-->
             <!--<el-steps :active="active" finish-status="success">-->
             <!--<el-step title="输入金额"></el-step>-->
             <!--<el-step title="存款成功"></el-step>-->
             <!--</el-steps>-->
             <!--</div>-->
             <!--<div class="zfb-way-box">-->
               <!--<div class="zfb-way zfb-way-active">-->
                 <!--<img src="https://line.txwl-888.com/group1/M00/00/2F/ZxcuGF5Ki0aADrqAAAAJTOT7d78069.png">-->
                 <!--<span>支付1</span>-->
               <!--</div>-->
               <!--<div class="zfb-way">-->
                 <!--<img src="https://line.txwl-888.com/group1/M00/00/2F/ZxcuGF5Ki0aADrqAAAAJTOT7d78069.png">-->
                 <!--<span>支付2</span>-->
               <!--</div>-->
               <!--<div class="zfb-way">-->
                 <!--<img src="https://line.txwl-888.com/group1/M00/00/2F/ZxcuGF5Ki0aADrqAAAAJTOT7d78069.png">-->
                 <!--<span>支付3</span>-->
               <!--</div>-->
               <!--<div class="zfb-way">-->
                 <!--<img src="https://line.txwl-888.com/group1/M00/00/2F/ZxcuGF5Ki0aADrqAAAAJTOT7d78069.png">-->
                 <!--<span>支付4</span>-->
               <!--</div>-->
               <!--<div class="zfb-way">-->
                 <!--<img src="https://line.txwl-888.com/group1/M00/00/2F/ZxcuGF5Ki0aADrqAAAAJTOT7d78069.png">-->
                 <!--<span>支付5</span>-->
               <!--</div>-->
             <!--</div>-->
           <!--</div>-->
          <!--<div class="treasure-amount">-->
            <!--<div class="amount-treasure">-->
            <!--<label>存款金额 ：</label>-->
            <!--<input type="number" class="Distribute"/>-->
            <!--<div class="ts">单笔限额100-5000(元)</div>-->
            <!--<el-button class="btn-next" @click="next">下一步</el-button>-->
            <!--</div>-->

          <!--</div>-->
          <!--<div class="tip">-->
          <!--<h2>温馨提示</h2>-->
          <!--<p>为确保您的款项及时到账，请您留意以下几点：</p>-->
          <!--<p> 1.在输入您的存款金额时确保您提交的金额在限额范围之内；</p>-->
          <!--<p> 2.若您支付过程中遇到问题未完成，请重新下单；</p>-->
          <!--<p> 3.支付遇到困难？点击“<a>联系客服</a>”人员获得帮助;</p>-->
          <!--</div>-->
        <!--</div>-->

        <!--&lt;!&ndash;云支付&ndash;&gt;-->
        <!--<div class="treasure">-->
          <!--<div class="treasure-ways">-->
            <!--<div class="step">-->
              <!--<el-steps :active="active" finish-status="success">-->
                <!--<el-step title="输入金额"></el-step>-->
                <!--<el-step title="存款成功"></el-step>-->
              <!--</el-steps>-->
            <!--</div>-->
            <!--<div class="zfb-way-box">-->
              <!--<div class="zfb-way zfb-way-active">-->
                <!--<img src="https://line.txwl-888.com/group1/M00/00/2F/ZxcuGF5LTpSAE8irAAAJOek1zow633.png">-->
                <!--<span>支付1</span>-->
              <!--</div>-->

            <!--</div>-->
          <!--</div>-->
          <!--<div class="treasure-amount">-->
            <!--<div class="amount-treasure">-->
              <!--<label>存款金额 ：</label>-->
              <!--<input type="number" class="Distribute"/>-->
              <!--<div class="ts">单笔限额200-5000(元)</div>-->
              <!--<el-button class="btn-next" @click="next">下一步</el-button>-->
            <!--</div>-->

          <!--</div>-->
          <!--<div class="tip">-->
            <!--<h2>温馨提示</h2>-->
            <!--<p>为确保您的款项及时到账，请您留意以下几点：</p>-->
            <!--<p> 1.在输入您的存款金额时确保您提交的金额在限额范围之内；</p>-->
            <!--<p> 2.若您支付过程中遇到问题未完成，请重新下单；</p>-->
            <!--<p> 3.支付遇到困难？点击“<a>联系客服</a>”人员获得帮助;</p>-->
          <!--</div>-->
        <!--</div>-->


        <!--&lt;!&ndash;比特币支付 &ndash;&gt;-->
        <!--<div class="treasure">-->
          <!--<div class="treasure-ways">-->
            <!--<div class="step">-->
              <!--<el-steps :active="active" finish-status="success">-->
                <!--<el-step title="输入金额"></el-step>-->
                <!--<el-step title="存款成功"></el-step>-->
              <!--</el-steps>-->
            <!--</div>-->
            <!--<div class="zfb-way-box">-->
              <!--<div class="zfb-way zfb-way-active">-->
                <!--<img src="https://line.txwl-888.com/group1/M00/00/2F/ZxcuGF5LTqiAUiUzAAAKZqW6gnA420.png">-->
                <!--<span>支付1</span>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="treasure-amount">-->
            <!--<div class="amount-treasure">-->
              <!--<label>存款金额 ：</label>-->
              <!--<input type="number" class="Distribute"/>-->
              <!--<div class="ts">单笔限额50-5000(元)</div>-->
              <!--<el-button class="btn-next" @click="next">下一步</el-button>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="tip">-->
            <!--<h2>温馨提示</h2>-->
            <!--<p>为确保您的款项及时到账，请您留意以下几点：</p>-->
            <!--<p> 1.在输入您的存款金额时确保您提交的金额在限额范围之内；</p>-->
            <!--<p> 2.若您支付过程中遇到问题未完成，请重新下单；</p>-->
            <!--<p> 3.支付遇到困难？点击“<a>联系客服</a>”人员获得帮助;</p>-->
          <!--</div>-->
        <!--</div>-->

        <!--网银-->
        <!--<div class="treasure">-->
          <!--<div class="treasure-ways">-->
            <!--<div class="step">-->
              <!--<el-steps :active="active" finish-status="success">-->
                <!--<el-step title="输入金额"></el-step>-->
                <!--<el-step title="存款成功"></el-step>-->
              <!--</el-steps>-->
            <!--</div>-->
            <!--<div class="zfb-way-box">-->
              <!--<div class="zfb-way zfb-way-active">-->
                <!--<img src="https://line.txwl-888.com/group1/M00/00/2F/ZxcuGF5LTcqAWnY_AAAKw3rnSTE651.png">-->
                <!--<span>支付1</span>-->
              <!--</div>-->
              <!--<div class="zfb-way">-->
                <!--<img src="https://line.txwl-888.com/group1/M00/00/2F/ZxcuGF5LTcqAWnY_AAAKw3rnSTE651.png">-->
                <!--<span>支付2</span>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="treasure-amount">-->
            <!--<div class="amount-treasure">-->
              <!--<div style="display: none">-->
                <!--<label>选择银行 ：</label>-->
                <!--<img src="https://line.txwl-888.com/group1/M00/00/33/DsBDFV5OBPKALijyAAAJOg-rlEU387.png"/>-->
              <!--</div>-->
              <!--<label>存款金额 ：</label>-->
              <!--<input type="number" class="Distribute"/>-->
              <!--<div class="ts">单笔限额50-5000(元)</div>-->
              <!--<el-button class="btn-next" @click="next">下一步</el-button>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="tip">-->
            <!--<h2>温馨提示</h2>-->
            <!--<p>为确保您的款项及时到账，请您留意以下几点：</p>-->
            <!--<p> 1.在输入您的存款金额时确保您提交的金额在限额范围之内；</p>-->
            <!--<p> 2.若您支付过程中遇到问题未完成，请重新下单；</p>-->
            <!--<p> 3.支付遇到困难？点击“<a>联系客服</a>”人员获得帮助;</p>-->
          <!--</div>-->
        <!--</div>-->

        <!--银联卡-->
        <div class="treasure">
          <div class="treasure-ways">
            <div class="step">
              <el-steps :active="active" finish-status="success">
                <el-step title="输入金额"></el-step>
                <el-step title="存款成功"></el-step>
              </el-steps>
            </div>
            <div class="zfb-way-box">
              <div class="zfb-way zfb-way-active">
                <img src="/static/personal/bankCard.png">
                <span>支付1</span>
              </div>
              <div class="zfb-way">
                <img src="/static/personal/bankCard.png">
                <span>支付2</span>
              </div>
            </div>
          </div>
          <div class="treasure-amount">
            <div class="amount-treasure">
              <label>存款金额 ：</label>
              <input type="number" class="Distribute"/>
              <div class="ts">单笔限额300-10000(元)</div>
              <el-button class="btn-next" @click="next">下一步</el-button>
            </div>
          </div>
          <div class="tip">
            <h2>温馨提示</h2>
            <p>为确保您的款项及时到账，请您留意以下几点：</p>
            <p> 1.在输入您的存款金额时确保您提交的金额在限额范围之内；</p>
            <p> 2.若您支付过程中遇到问题未完成，请重新下单；</p>
            <p> 3.支付遇到困难？点击“<a>联系客服</a>”人员获得帮助;</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'deposit',
    data() {
      return {
        active: 1
      };
    },

    methods: {
      next() {
        if (this.active++ > 1) this.active = 2;
      }
    }
  }
</script>
<style>
  .center {
    width: 1000px;
    height: 1000px;
    background: white;
    border: 1px solid #eaeaea;
  }

  .tg {
    width: 960px;
    height: 25px;
    display: flex;
    justify-content: center;
    background: #eaeaea;
    padding: 20px 20px;
  }

  .tg-icon {
    width: 30px;
    height: 30px;
    background: #c8a675;
    border-radius: 50%;
  }

  .iconTg {
    width: 20px;
    height: 20px;
    text-align: center;
    padding-top: 5px;
  }

  .tgContent {
    width: 900px;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    margin-left: 20px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ym {
    width: 978px;
    height: 20px;
  }

  .deposit {
    width: 998px;
    height: 50px;
  }

  .depositName {
    height: 40px;
    background: linear-gradient(90deg, #f2f2f2, #fff);
    line-height: 40px;
    padding: 0 30px;
    width: 200px;
    text-align: left;
    font-size: 15px;
    font-weight: 700;
    color: #666;
  }

  .deposit-case {
    width: 1000px;
    height: 505px;
  }

  .deposit-zone {
    width: 1000px;
    height: 40px;
    border-bottom: 1px solid darkgray;
  }

  .depositWay {
    width: 932px;
    height: 40px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;
    margin-top: 10px;
    margin-right: 48px;
  }

  .depositWay li {
    width: auto;
    height: 38px;
    font-size: 14px;
    line-height: 36px;
    color: darkgray;
    text-align: center;
  }

  .active1 {
    color: goldenrod;
    border-bottom: 3px solid goldenrod;
  }

  .bankCard {
    width: 25px;
    height: 25px;
    margin-right: 8px;
  }

  .cross-line {
    height: 50px;
    width: auto;
    margin-top: 12px;
    color: darkgray;
    padding-left: 18px;
    padding-right: 18px;
  }

  .depositWay-content {
    width: 998px;
    height: 815px;
  }

  .kj{
    width: 998px;
    height: 815px;
  }

  .step {
    width: 750px;
    height: 20px;
    margin-left: auto;
    margin-right: auto;
    padding: 50px 80px;
    text-align: left;
  }

  .way {
    width: 145px;
    height: 43px;
    text-align: center;
    line-height: 43px;
    border: 1px solid red;
    margin-top: 20px;
    margin-bottom: 30px;
    margin-left: 80px;
  }

  .tex {
    font-size: 14px;
    color: darkgray;
  }

  .amount-box {
    width: 1000px;
    height: 245px;
    text-align: center;
    line-height: 245px;
    background: #eee;
  }

  .amount-deposited {
    width: 740px;
    height: 145px;
    text-align: left;
    font-size: 15px;
    position: relative;
    line-height: 145px;
    margin: auto auto;
    margin-top: 50px;
  }

  .Distribute {
    width: 280px;
    height: 35px;
    padding: 2px 5px 2px 8px;
    border: 1px solid gray;
    border-radius: 5px;
  }

  .ts {
    width: 230px;
    height: 35px;
    color: black;
    padding-left: 20px;
    font-size: 14px;
    line-height: 35px;
    background: goldenrod;
    border: 1px solid chocolate;
    position: absolute;
    left: 420px;
    top: 52px;
  }

  .btn-next {
    width: 200px;
    height: 35px;
    padding-top: 10px;
    font-size: 16px;
    color: white;
    background: goldenrod;
    border: 1px solid darkgray;
    border-radius: 5px;
    text-align: center;
    position: absolute;
    left: 85px;
    top: 140px;
  }

  .tip {
    width: 998px;
    height: 485px;
    padding: 35px;
    text-align: left;
  }

  .tip h2 {
    font-size: 20px;
    color: red;
    margin-bottom: 10px;
  }

  .tip p {
    font-size: 15px;
    color: black;
    margin-top: 10px;
  }

  .tip a {
    color: red;
  }

  .tx{
    width: 998px;
    height: 815px;
  }
  .tx-top{
    width: 100%;
    height: 500px;
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #eaeaea;
  }
  .tx-img{
    width: 97%;
    height: 300px;
    margin-right: auto;
    margin-left: auto;
  }

  .tx-way-box{
    width: 500px;
    height: 50px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 80px;
    margin-top: -35px;
  }

  .tx-way{
    width: 100px;
    height: 15px;
    padding: 15px;
    line-height: 15px;
    margin-right: 30px;
    border: 1px dashed #cacaca;
  }

  .tx-way img{
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }

  .tx-way span{
    font-size: 15px;
    color: grey;
  }

  .tx-way-active{
    border: 1px solid red;
  }

   .tx-button{
     width: 800px;
     height: 50px;
     margin-right: auto;
     margin-left: auto;
   }
  .tx-btn11{
    width: 200px;
    /* height: 10px; */
    color: #fff;
    background-color: #c2a77d;
    border: none;
    padding: 10px 0;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
  }



  .zfb-way-box{
    width: 770px;
    height: 50px;
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
  }

  .zfb-way{
    width: 100px;
    height: 15px;
    padding: 15px;
    line-height: 15px;
    margin-right: 20px;
    border: 1px dashed #cacaca;
  }

  .zfb-way img{
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }

  .zfb-way span {
    font-size: 15px;
    color: grey;
  }

  .zfb-way-active {
    border: 1px solid red;
  }

  .treasure-amount {
    width: 1000px;
    height: 245px;
    text-align: center;
    line-height: 245px;
    background: #eee;

  }
  .amount-treasure{
    width: 740px;
    height: 145px;
    text-align: left;
    font-size: 15px;
    position: relative;
    line-height: 145px;
    margin: auto auto;
    margin-top: 50px;
  }

</style>

