<template>
    <div class="modal-bg" v-show="show">
        <div class="modal-container">
            <div class="modal-header" v-if="title">
                <h4>{{ title }}</h4>
            </div>
            <div class="modal-main">
                <slot></slot>
            </div>
            <div class="modal-footer">
                <button class="button-gary" @click="hideModal">取消</button>
                <button class="button-tint" @click="submit">确认</button>
            </div>
        </div>
    </div>
</template>

<script>
/**
 *  类 modal-bg: 遮罩层
    类 modal-container: 内容层容器
    类 modal-header: 内容层头部
    类 modal-main: 内容层主体部分（用来展示内容）
    类 modal-footer: 内容层脚部
    属性 v-show: 控制弹窗的展示与关闭
    属性 title: 标题
    方法 hideModal: 点击取消的回调函数
    方法 submit: 点击确认的回调函数
    插槽 slot: 用来展示内容
 */
export default {
    name: 'modal',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: null
        },
    },
    methods: {
        hideModal() {
            this.$emit('hideModal')
        },

        submit() {
            this.$emit('submit')
        },
    }
}
</script>

<style lang="scss" scoped>

.modal-bg{
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, .4);
    touch-action: none;
	z-index:999;
}



.modal-container {

    display: flex;
    background: white;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    min-width: 50vw;
    max-width: 70vw;
    min-height: 20vh;
    max-height: 60vh;

    border-radius: .5rem !important;
    overflow: hidden;
    overflow-y: scroll;
    touch-action:pan-y;

    $modal-nav-height : 2.5rem;

    .modal-header {
        height: $modal-nav-height;
        width: 100%;
        background-color: var(--color-tint);
        color:white;

        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-around;
    }

    .modal-main {
        padding: .5rem 1rem;
    }

    .modal-footer {
        height: $modal-nav-height;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;


    }

}

.button-tint {
    background-color: var(--color-tint);
    border: none;
    color: white;
    width: 100%;
    height: 100%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    cursor: pointer;
}

.button-gary {
    background-color: #bcb8b8;
    border: none;
    color: white;
    width: 100%;
    height: 100%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    cursor: pointer;
}





</style>