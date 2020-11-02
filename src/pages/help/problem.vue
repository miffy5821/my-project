<template>
    <div class="content">
        <div class="problem">
            <div class="nav">
                <div class="title">帮助中心</div>
                <ul class="title-menu">

                    <li class="title-menu-li"
                        v-for="(item,index) of sliderMenu"
                        :class="activeClass == index ? 'active':''">

                        <router-link class="title-menu-li-link" :to="item.path"
                                     @click.native="toggleSubmenu(item.path,index)">
                            {{item.name}}
                        </router-link>
                        <!--子菜单-->
                        <ul class="sub-menu" :class="{submenuactive: (item.children && isSubMenu)}">
                            <li class="sub-menu-li"
                                v-for="(subItem,index) of item.children"
                                :class="activeSubmune == index ? 'active':' '"
                                @click="getItem(index)"
                            >
                                <router-link :to="subItem.path">
                                    {{subItem.name}}
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="content-right">
                <router-view/>
            </div>

        </div>
    </div>
</template>

<script>
    import commonProblem from './components/commonProblem'
    import loginRegister from './components/loginRegister.vue'
    import termsConditions from './components/termsConditions.vue'
    import privacyInfo from './components/privacyInfo.vue'
    import registerPact from './components/registerPact.vue'
    import depositLive from './components/depositLive.vue'
    import drawing from './components/drawing.vue'
    import transfer from './components/transfer.vue'
    import betRules from './components/betRules.vue'
    import privacyAgreement from './components/privacyAgreement.vue'
    import onlineProblem from './components/onlineProblem.vue'

    export default {
        name: 'problem',
        components: {
            commonProblem: commonProblem,
            loginRegister: loginRegister,
            termsConditions: termsConditions,
            privacyInfo: privacyInfo,
            registerPact: registerPact,
            depositLive: depositLive,
            drawing: drawing,
            transfer: transfer,
            betRules: betRules,
            privacyAgreement: privacyAgreement,
            onlineProblem: onlineProblem
        },
        data () {
            return {
                activeClass: 2, // 0为默认选择第一个，-1为不选择
                activeSubmune: -1,
                sliderMenu: [
                    {name: '常见问题', path: '/problem/commonProblem'},
                    {name: '登录注册', path: '/problem/registerPact'},
                    {name: '注册协议', path: '/problem/loginRegister'},
                    {name: '存款帮助', path: '/problem/depositLive'},
                    {name: '取款帮助', path: '/problem/drawing'},
                    {name: '转账帮助', path: '/problem/transfer'},
                    {
                        name: '账户安全', path: '###',
                        children: [
                            {name: '隐私保护规则', path: '/problem/privacyInfo'},
                            {name: '投注规则和规定', path: '/problem/betRules'},
                            {name: '博彩责任', path: '/problem/gamingDuty'},
                            {name: '规则与条款', path: '/problem/termsConditions'},
                            {name: '用户隐私协议', path: '/problem/privacyAgreement'},
                        ]
                    },
                    {name: '联机问题', path: '/problem/onlineProblem'},
                    {name: '代理规则', path: '../vip'},

                ],
                isSubMenu: true
            }
        },
        methods: {
            toggleSubmenu (path, index) {
                console.log(path, index)

                if (path !== '###') {
                    this.activeClass = index;  // 把当前点击元素的index，赋值给activeClass
                    this.activeSubmune = -1;
                } else {
                    this.activeClass = -1;
                    this.isSubMenu = !this.isSubMenu;
                }

            },
            getItem (subItem) {
                this.activeClass = -1;
                this.activeSubmune = subItem;  // 把当前点击元素的index，赋值给activeClass
            },
        }
    }
</script>

<style scoped>
    .content {
        width: 100%;
        height: auto;
        padding: 30px 0;
        background: #f9f9f9;
    }

    .problem {
        width: 1000px;
        height: auto;
        margin: 0 auto;
        border: 1px solid #e8e8e8;
        display: flex;
    }

    .nav {
        width: 258px;
        background: white;
        /*border:1px solid gainsboro;*/
    }

    .title {
        font-size: 18px;
        font-weight: 700;
        text-align: left;
        color: #4f4e4b;
        padding: 26px 25px 20px 45px;
        border-bottom: 1px solid #e8e8e8;
    }

    .title-menu {
        /*padding-left: 21px;*/
        width: 100%;
    }

    .title-menu-li {
        min-height: 40px;
        margin-top: 4px;
        margin-bottom: 4px;
        text-align: left;
        padding: 0 0 0 45px;
        overflow: hidden;
        font-size: 14px;
        line-height: 40px;
        text-overflow: ellipsis;
    }

    /*.title-menu-li:active {*/
    /*color: #c8a675;*/
    /*border-right: 2px solid #e8e8e8;*/
    /*}*/

    /*.title-menu-li:hover {*/
    /*color: #c8a675;*/
    /*}*/

    .sub-menu {
        width: 80%;
        padding-left: 30px;
        height: 0;
        opacity: 0;
        transition: all .5s;
    }



    /*.sub-menu:hover {*/
    /*height: 1600px;*/
    /*}*/

    .submenuactive {
        height: 216px;
        opacity: 1;
    }

    .sub-menu-li {
        height: 40px;
        width: 154px;
        margin-top: 4px;
        margin-bottom: 4px;
        text-align: left;
        /*padding: 0 0 0 45px;*/
        overflow: hidden;
        font-size: 14px;
        line-height: 40px;
        text-overflow: ellipsis;
        color: #2c3e50;
    }

    .sub-menu-li:hover {
        color: #c8a675;
    }

    /*.sub-menu-li:hover {*/
    /*color: #c8a675;*/
    /*}*/
    .title-menu-li-link:hover {
        color: #c8a675;
    }

    /*.sub-menu-li:active {*/
    /*color: #c8a675;*/
    /*border-right: 1px solid #e8e8e8;*/
    /*}*/

    .active {
        color: #c8a675;
        border-right: 2px solid #e8e8e8;
    }

    .content-right {
        border-left: 1px solid #e8e8e8;
        width: 735px;
        min-height: 516px;
        background: white;
        padding: 30px 56px 38px;
    }
</style>
