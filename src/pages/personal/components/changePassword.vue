<template>
  <div>
    <div class="ym">
    </div>
    <div class="change">
      <div class="changeName">登录密码</div>
    </div>
    <div class="change-case">
      <div class="cw-step">
        <el-steps :active="active" finish-status="success">
          <el-step title="重置密码"></el-step>
          <el-step title="设定成功"></el-step>
        </el-steps>
      </div>
      <div class="pw">
        <div class="changeWord-item">
          <label>旧密码:</label>
            <el-input
                v-model="input"
                type="text"
                class="width"
                placeholder="请输入6-12位数字或字母组合">
            </el-input>
        </div>
        <div class="changeWord-item">
          <label>新密码:</label>
            <el-input
                v-model="input"
                type="text"
                class="width"
                placeholder="12位数字或字母组合">
            </el-input>
        </div>
        <div class="changeWord-item">
          <label>确认密码:</label>
            <el-input
                v-model="input"
                type="text"
                class="width"
                placeholder="请再次输入密码">
            </el-input>
        </div>

        <el-button class="cw-btn" @click="next">下一步</el-button>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'changePassord',
    data() {
      return {
        active: 1,
        input:''
      }
    },
    methods: {
      next() {
        this.active = 2;
      }
    }
  }
</script>
<style scoped>

  .ym {
    width: 978px;
    height: 20px;
  }


  .change {
    width: 998px;
    height: 50px;
  }

  .changeName {
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

  .change-case {
    width: 1000px;
    height:505px;

  }

 .cw-step{
   width:600px;
   height: 20px;
   margin-left: auto;
   margin-right: auto;
   padding: 50px 80px;
   text-align: left;
 }

  .pw{
    width:840px;
    height: 300px;
    padding: 80px;
    text-align: center;
  }

  .changeWord-item{
    width: calc(100% - 400px);
    height:40px ;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .changeWord-item label{
    font-size: 14px;
    color: #222222;
    margin-right: 15px;
    line-height: 40px;
    width: 80px;
    text-align: right;
  }
  .changeWord-item input{
    width: 250px;
    height: 25px;
    border-radius: 3px;
    border: 1px solid #d9d9d9;
    color:  #d9d9d9;
    font-size: 14px;
    padding: 6px 11px 6px 15px;
  }

  .width{
      width: 250px;
  }

  .cw-btn{
    width: 100px;
    padding: 5px;
    line-height: 25px;
    color: #fff;
    margin-top: 20px;
    margin-left: -60px;
    background-color: #c2a77d;
    border-color: #c2a77d;
  }
</style>

