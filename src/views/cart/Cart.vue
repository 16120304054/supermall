<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">
          购物车（{{cartLength}}）
      </div>
    </nav-bar>

    <!-- 商品的列表 -->
  <cart-list>

  </cart-list>
    <!-- 底部汇总 -->
    <cart-bottom-bar >
      
    </cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CartList from "./childComps/CartList.vue"
import CartBottomBar from './childComps/CartBottomBar.vue'
import {mapGetters} from 'vuex'
export default {
    name: 'Cart',
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters(["cartLength"])
    }
}
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
  .cart {
    height: 100vh;
  }
</style>