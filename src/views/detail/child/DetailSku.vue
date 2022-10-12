<template>
    <div class="detail-sku">

        <div class="sku-info">

            <div>选择</div>

            <div>{{skuInfo}} {{reamark}}</div>
        </div>

        <div class="express-info" v-if="expressage && expressage.sendAddress ">
            <div>发货</div>

            <div>{{expressInfo}}</div>   
        </div>

    </div>
</template>

<script>
    export default {
        name: 'DetailSku',
        props: {
            skuProps:{
                type: Array,
                default() {
                    return null
                }
            },
            expressage: {
                type: Object,
                default() {
                    return null
                }
            }
        },
        computed: {
            skuInfo() {
                if(this.skuProps) {
                    return this.skuProps.map(s => s.label.replace(":","")).join(" / ")
                } else {
                    return ''
                }
              
            },
            reamark() {
                if(this.skuProps) {
                    let label = this.skuProps[0].label.replace(":","")
                    let num = this.skuProps[0].list.length
                    return `（共${num}种${label}可选）`
                } else {
                    return ''
                }
                
            },
            expressInfo() {
                if(this.expressage) {
                    return `${this.expressage.sendAddress} （${this.expressage.deliveryTime}小时内发货）`
                   
                } else {
                    return ''
                }
                
            }
        }
    }
</script>

<style lang="scss" scoped>

.detail-sku {

    $padding-left:.4rem;
    $padding-right:.4rem;
    border-bottom: 0.5rem solid rgb(242, 242, 242);

    .sku-info {

        display: flex;
        align-items: center;
        padding: .5rem $padding-right 1rem $padding-left;

        font-size: .9rem;
        height: 3rem;

        div:nth-child(2) {
            margin-left: 1rem;
        }
    }

    .express-info {
        display: flex;
        align-items: center;
        padding: .5rem $padding-right 1rem $padding-left;

        
        font-size: .9rem;
        height: 3rem;

        div:nth-child(2) {
            margin-left: 1rem;
        }
    }
}

</style>