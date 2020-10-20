<template>
    <div class="news">
        <div class="banner"></div>
        <div class="content">
            <div class="title"> 公告中心</div>
            <div class="center">
                <div class="content-box" v-for="item in newsList" :key="item.id">
                    <div class="content-title">重要通知</div>
                    <div class="content-text">{{item.data}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'news',
        newsList: [],
        methods:{
            getNews(){
                this.axios.get('/api/config', {
                    params: {id: 0, terminal: 0}
                })
                    .then((response) => {
                        const data = response.data;
                        if (data.status === 10000) {

                            const configs = response.data.data[3].configs;// 储存所有公告
                            console.log('configs',this.configs)
                            this.newsList = configs;
                            console.log('newsList', this.newsList);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
        },
        mounted(){
            this.getNews();
        }
    }
</script>

<style scoped>
    .news {
        width: 100%;
        height: auto;
    }

    .banner {
        width: 100%;
        height: 450px;
        background: url(//image.beike188.com/YHHB/images/free/pro_banner02.jpg) 50% 50%;
    }

    .content{
        width: 1200px;
        z-index: 999;
        margin: 0 auto;
    }

    .title {
        height: 80px;
        margin-top: -80px;
        text-align: center;
        background: #fff;
        line-height: 56px;
        box-shadow: 1px 3px 5px #eaeaea;
        position: relative;
        padding-top: 10px;
    }

    .center {
        min-height: 500px;
        margin: 10px 0;
        border: 1px solid #eee;
        box-shadow: 1px 1px 5px #757575;
        padding: 10px 30px;
        background: #fff;
    }

    .content-box{
        background: #f2f2f2;
        margin: 20px 0;
    }

    .content-title{
        padding: 0 20px;
        height: 31px;
        text-align: left;
        line-height: 31px;
        font-size: 16px;
        color: #666;
    }

    .content-text{
        max-height: 600px;
        /*padding: 0 20px;*/
        background: #f9f9f9;
        text-align: left;
        padding: 10px 0 20px 20px;
        border-top: 1px solid #eee;
        line-height: 1.4;
        color: #666;
    }
</style>
