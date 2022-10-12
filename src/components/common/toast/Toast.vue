<template>
    <div v-show="isShow" class="toast">
        <div class="tips">{{message}}</div>
    </div>
</template>
  
<script>
export default {
    name: "Toast",
    data() {
        return {
            message: "",
            isShow: false
        }
    },
    methods: {
        show( res, time = 1500) {
            this.message = res
            this.isShow = true
            setTimeout(() => {
                this.message = ""
                this.isShow = false
            }, time);
        }
    }
}
</script>
  
<style lang="scss" scoped>
.toast {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: .6rem 1rem;
    color: #fff;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .7);
    z-index: 999;

    div.tips {
        font-size: .9rem;
    }
}
</style>