<template>
    <div id="profile">

        <profile-nav-bar/>

        <profile-login :userInfo='userInfo'/>

        <profile-quick-link :userInfo='userInfo'/>

        <profile-main @about="about"/>

        
        <Modal :show="showModal"  @hideModal="hideModal" @submit="submit">
			<div class="modal-about">
                
                <p>coderwhy老师的vue2课程还是很不错的，循序渐进，讲的很基础！</p>
                <p>总算是完成了这个项目，项目没有什么复杂的逻辑，还是比较好搞定的。</p>
                <p>附上接口文档:
                    <a href="https://www.apifox.cn/apidoc/shared-bc1061c9-d155-4efa-9c15-ce073d590740" target="_bank">地址</a></p>
                    <p>访问密码: 9KhuOEFe</p>   
            </div>
            
            
		</Modal>

    </div>
</template>

<script>
    // 顶部栏
    import ProfileNavBar from './child/ProfileNavBar.vue';
    // 登录和个人信息
    import ProfileLogin from './child/ProfileLogin.vue'
    // 瓷片区
    import ProfileQuickLink from './child/ProfileQuickLink.vue'
    // 主体内容
    import ProfileMain from './child/ProfileMain.vue'
    // 弹窗
    import { ModalMixin } from '@/common/mixin'

    export default {
        name:"Profile",
        components: {
            ProfileNavBar,
            ProfileLogin,
            ProfileQuickLink,
            ProfileMain,
        },
        mixins: [ModalMixin],
        data() {
            return {
                userInfo : {
                    phone: '166****1234',
                    logo: '',
                    username: '100010',
                    nickname: '法外狂徒',
                    cardCount: 2, // 银行卡数量
                    money: 100.58, // 余额
                    redpacket: 10.12, // 红包
                }
            }
        },
        methods: {
            about() {
                this.showModal = true
            },
            // 取消
            hideModal() {
                this.showModal = false
            },
            // 确认
            submit() {
                this.showModal = false
            }
        }

    } 
</script>

<style lang="scss" scoped>

@import "@/assets/css/theme.scss";

#profile {
    padding-top: $nav-bar-height;
    padding-bottom: $tab-bar-height;
    overflow-y: scroll;
    height: 100vh;

    .modal-about {
        // padding: .5rem;
        font-size: .9rem;

        a {
            color: rgb(23, 94, 139);
        }

        p {
            line-height: 1.1rem
        }
    }
}


</style>