<template>
    <div class="cart-list">
        <scroll class="content" ref="scroll">
            <cart-list-item v-for="item,idx in cartList" :key="idx" :itemInfo="item">
            </cart-list-item>
        </scroll>
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem.vue'
import {mapGetters} from 'vuex'
export default {
    name: 'CartList',
    components: {
        Scroll,
        CartListItem

    },
    activated() {
        this.$refs.scroll.refresh()
        console.log(1111+"jkjkjk")
    },
    data(){
        return {

        }
    },
    computed: {
        ...mapGetters(["cartLength","cartList"])
    }
}
</script>

<style scoped>
.cart-list {
    height: calc(100% - 44px - 49px - 40px);
}
.content {
        height: 100%;
        overflow: hidden;
    }
</style>