<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <back-top @click.native="backClick" v-show="isScrollShow"></back-top>
    <tab-control :titles="['衣服','鞋子','包包']" @tabClink="tabClick" ref="tabControl1" class='show' v-show='isfixed'></tab-control>
    <scroll class = "content" ref="scroll" :probe-type="3" @scroll="contentScroll" :is-pull-upload="true" @uploadMore="uploadMore">
      <home-swiper :banners = "banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend-view :recommends = "recommends"></home-recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['衣服','鞋子','包包']" @tabClink="tabClick" ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
      <ul>
        <li></li>
        
      </ul>
    </scroll>
    
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import HomeSwiper from "views/home/childCompo/HomeSwiper"
import HomeRecommendView from "views/home/childCompo/HomeRecommendView"
import FeatureView from "views/home/childCompo/FeatureView"


import {getHomeMultidata, getHomeData} from "network/home"
import {debounce} from "common/utils"
export default {
    name: 'Home',
    components: {
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
      HomeSwiper,
      HomeRecommendView,
      FeatureView
   
    },
    computed: {
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    data(){
      return {
        results: null,
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isScrollShow: false,
        isfixed: false,
        tabOffsetTop: 0,
        saveY:0
      }
    },
    created(){
      this.getHomeMultidata(),
      this.getHomeData('pop'),
      this.getHomeData('new'),
      this.getHomeData('sell')
    },
    mounted(){
      const refresh = debounce(this.$refs.scroll.refresh,50)
      this.$bus.$on("HomeImgLoad",()=>{
          refresh();
        // this.$refs.scroll.refresh()
        //不适合写在created中，还没有加载好组件。所以要加在mounted中
      })
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      // 滚动完以后最好做一次刷新。
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.saveY = this.$refs.scroll.getScrollY();
    },
    methods: {
      // 事件监听相关的方法
      tabClick(index){
        switch(index) {
          case 0: 
            this.currentType = 'pop'
            break;
          case 1: 
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = "sell"
            break;
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      uploadMore(){
        this.getHomeData(this.currentType)
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0);
      },
      contentScroll(position){
        // if(position.y < -this.tabOffsetTop) {
        //   this.isfixed = true;
        // } else {
        //   this.isfixed = false;
        // }

        this.isfixed = (position.y < -this.tabOffsetTop)
        if(position.y < -800) {
          this.isScrollShow = true;
        } else {
          this.isScrollShow = false
        }
      },
      swiperImageLoad(){
        // 图片加载完成后，加载分类栏目的offsetTop
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        
        console.log(this.tabOffsetTop)
      },

      // 网络请求相关的方法
      getHomeMultidata() {
        getHomeMultidata().then(res => {
        this.results = res;  //箭头函数没有this，created有this，该this就是指向该对象的。
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        // console.log(res);
      })
      },
      getHomeData(type) {
        const page = this.goods[type].page + 1;
        getHomeData(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1

          // 完成上来加载更多。
          this.$refs.scroll.finishPullUp()
        })
      }
      
    }
}
</script>

<style scoped>
  #home {
    /* padding-top: 44px; */
  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;

    /* 在使用浏览器原生滚动时，为了让导航不跟他一起滚动 */
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }
  .tab-control {
    background-color: white;
  }
  .show {
    position: relative;
    z-index: 100;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right:0;
  }
</style>
