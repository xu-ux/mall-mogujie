<template>
    <div class="cart-list">
        
            <div>
                <cart-item v-for="item in cartList" :product="item" :key="item.iid"></cart-item>
            </div>
       
    </div>
</template>

<script>
    import CartItem from './CartItem.vue'
    import { mapGetters } from 'vuex'
    export default {
        name: 'CartList',
        components: {
            CartItem,
        },
        computed: {
            ...mapGetters(
                {
                    cartList:'cartsValues',
                }
            ),
        },
        methods: {
            

        }
    }
</script>

<style lang="scss" scoped>
</style>