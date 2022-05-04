<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners = "banners"></home-swiper>
    <home-recommend-view :recommends = "recommends"></home-recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import HomeSwiper from "views/home/childCompo/HomeSwiper"
import HomeRecommendView from "views/home/childCompo/HomeRecommendView"
import {getHomeMultidata} from "network/home"


export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView
   
    },
    data(){
      return {
        results: null,
        banners: [],
        recommends: []
      }
    },
    created(){
      getHomeMultidata().then(res => {
        this.results = res;  //箭头函数没有this，created有this，该this就是指向该对象的。
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        console.log(res);
      })
    }
}
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: white
  }
</style>