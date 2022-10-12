<template>
    <div class="detail-params">
        <!-- 尺寸大小信息 -->
        <div class="size_info" v-if="paramsInfo && paramsInfo.rule">
            <div class="infoKey">{{paramsInfo.rule.key}}</div>
            

            <ul>
                <!-- li每行数据 使用Map中的每个元素 -->
                <li v-for="(k,ki) in sizeMap.keys()" :key="ki">
                    <span >{{k}}</span>
                    <!-- span每列数据 -->
                    <span v-for="(v,vi) in sizeMap.get(k)" :key="vi">{{v}}</span>
                </li>
            </ul>

            <div class="info-remark" v-if="paramsInfo.rule.disclaimer">{{paramsInfo.rule.disclaimer}}</div>
        </div>

        <!-- 产品信息 -->
        <div class="product_info" v-if="paramsInfo && paramsInfo.info">

            <div class="infoKey">{{paramsInfo.info.key}}</div>

            <ul>
                <li v-for="(p,index) in productInfo" :key="index">
                    <span >{{p.key}}</span>
                    <span >{{p.value}}</span>
                </li>
            </ul>

        </div>

    </div>
</template>

<script>
    export default {
        name: "DetailParams",
        props: {
            paramsInfo: {
                type: Object,
                default() {
                    return null
                }
            }
        },
        computed: {
            // 产品参数
            productInfo() {
                return this.paramsInfo.info.set
            },
            // 尺寸大小信息
            sizeMap(){
                let sm = new Map()
                if (this.paramsInfo.rule.tables) {
                    this.paramsInfo.rule.tables.forEach(arr => {
                        arr.forEach(e => {
                            // 第一元素作为key
                            let k = e[0]
                            // 删除第一个元素,其他元素作为value
                            let eValue = Array.from(e).slice(1);
                            // console.log(k ,eArray)
                            
                            if(sm.has(k)) {
                                // 合并第二个数组的数据的value
                                let newArr = sm.get(k ).concat(eValue)
                                sm.set(k ,newArr)
                            } else {
                                sm.set(k ,eValue)
                            }
                            
                        } )
                    });
                }

                return sm
            }

        }

        
    }
</script>

<style lang="scss" scoped>
.detail-params {
    $padding-left: .5rem;
    $padding-right: .5rem; 

    

    .size_info{

        padding: 0 $padding-right 1rem $padding-left;
        border-bottom: 0.5rem solid rgb(242, 242, 242);


        ul li {
            list-style: none;
            display: flex;
            min-height: 2.5rem;
            // line-height: 2.5rem;
            align-items: center;
            font-size: .9rem;
            border-bottom: .04rem solid #ddd;

            span:first-child {
                flex: 1.5;
            }

            span:nth-child(n+2) {
                flex: 2;
            }
        }

    }

    .product_info {

        padding: 0 $padding-right 1rem $padding-left;
        border-bottom: 0.5rem solid rgb(242, 242, 242);

        ul li {
            list-style: none;
            display: flex;
            min-height: 2.5rem;
            //line-height: 2.5rem;
            align-items: center;
            font-size: .9rem;
            border-bottom: .04rem solid #ddd;

            span:nth-child(1) {
                flex: 1;
            }

            span:nth-child(2) {
                flex: 4;
                color: var(--color-high-text);

            }
        }
    }

    .infoKey {
        padding-top: 1rem;
        font-size: 1rem;
        font-weight: 700;
        
    }

    .info-remark {
        padding: .6rem 0;
        font-size: .6rem;
    }


}
</style>