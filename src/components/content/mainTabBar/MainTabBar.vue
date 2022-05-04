<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="pink">
        <img src="~assets/img/icon/home.svg" alt="" slot="item-icon">
        <img src="~assets/img/icon_active/home.svg" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="pink">
        <img src="~assets/img/icon/category.svg" alt="" slot="item-icon">
        <img src="~assets/img/icon_active/category.svg" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="pink">
        <img src="~assets/img/icon/shopping.svg" alt="" slot="item-icon">
        <img src="~assets/img/icon_active/shopping.svg" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="pink">
        <img src="~assets/img/icon/profile.svg" alt="" slot="item-icon">
        <img src="~assets/img/icon_active/profile.svg" alt="" slot="item-icon-active">
        <div slot="item-text">档案</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>