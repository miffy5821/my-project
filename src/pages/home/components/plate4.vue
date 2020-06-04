<template>
  <div class="plate4">
    <div class="about">
      <div class="plate4-line"></div>
      <p class="plate4-title"> 关于澳门银河 </p>
    </div>
    <div class="about-content">
      <div class="about-text">
        <h3 class="about-title">澳门博彩委员会推荐</h3>
        <p class="about-presentation">「澳门银河」是世界级亚洲特色的五星级综合渡假城. 第一期于2011年5月15日正式开业，投资额达165亿港元，
          渡假城内提供超过2,200间客房及套房。 第二期于2015年5月27日，「澳门银河」「澳门百老汇™」的开幕，
          将原来版图双倍扩展至超过110万平方米，总投资额超过430亿港元，并进一步向集团的1,000亿港元投资承诺迈进。
          澳门银河全资线上责任博彩888Y.COM，持澳门合法线上责任博彩牌照，受澳门博彩监察协调局监督。</p>
        <img class="about-img" src="../../../assets/home-img/button-img.jpg">
      </div>
      <div class="dashed"></div>
      <div class="member"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePlate4'
}
</script>

<style scoped>
  .plate4{
    width: 1200px;
    height: 380px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
  }
  .about{
    width: 1200px;
    height:18px;
  }
  .plate4-line{
    width: 3px;
    height:18px;
    background-color: orange;
  }
  .plate4-title{
    width:120px;
    height:18px;
    font-size:17px;
    margin-left:10px;
    margin-top:-18px;
  }
  .about-content{
    width: 1196px;
    height:  405px;
    margin-top:15px;
    border: 1px solid gainsboro;
  }
  .about-text{
    width: 700px;
    height: 230px;
    margin: 30px 20px 50px 30px;
  }
  .about-title{
    font-size: 22px;
    color: #6b471b;
    margin-top:50px;
    margin-left:35px;
    margin-bottom:15px;
  }
  .about-presentation{
    font-size: 14px;
    padding:10px;
    line-height:25px;
    margin-left:30px;
    color: #6c6c6c;
    vertical-align: baseline;
  }
  .about-img{
    width: 340px;
    height: 220px;
    margin:-195px 30px auto 780px ;
  }
  .dashed{
    width: 1098px;
    height: 2px;
    margin-top:-35px;
    margin-left: auto;
    margin-right: auto;
    border-bottom:1px dotted gainsboro ;
  }
  .member{
    width: 1098px;
    height:43px;
    margin-top:20px;
    margin-right: auto;
    margin-left: auto;
    background-image: url("../../../assets/home-img/button-img2.jpg");
  }
</style>
