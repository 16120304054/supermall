<template>
  <div id="detail">
      <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
      <back-top @click.native="backClick" v-show="isScrollShow"></back-top>
      <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
        <detail-swiper :topImages="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :goodsInfo= "goodsInfo"></detail-goods-info>
        <detail-params-info ref="params" :itemParams = "itemParams"></detail-params-info>
        <detail-comment-info ref="comment" :commentInfo = "commentInfo"></detail-comment-info>
        <goods-list ref="recommend" :goods = "recommendInfo"></goods-list>
      </scroll>
      <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childCompos/DetailNavBar.vue"
import DetailSwiper from "./childCompos/DetailSwiper.vue"
import DetailBaseInfo from "./childCompos/DetailBaseInfo.vue"
import DetailShopInfo from "./childCompos/DetailShopInfo.vue"
import DetailGoodsInfo from "./childCompos/DetailGoodsInfo.vue"
import DetailParamsInfo from "./childCompos/DetailParamsInfo.vue"
import DetailCommentInfo from "./childCompos/DetailCommentInfo.vue"
import GoodsList from 'components/content/goods/GoodsList.vue'
import DetailBottomBar from "./childCompos/DetailBottomBar.vue"

import Scroll from 'components/common/scroll/Scroll.vue'

import {debounce} from "common/utils"
import {backTopMixin} from "common/mixin.js"

import {getDetail,Goods, Shop,getRecommend} from 'network/detail'


export default {
    name: "Detail",
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailParamsInfo,
        DetailCommentInfo,
        GoodsList,
        DetailBottomBar

    },
    mixins:[backTopMixin],
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            goodsInfo: {},
            itemParams: {},
            commentInfo: {},
            recommendInfo: [],
            themeTopYs: [],
            currentIndex: 0
        }
    },
    created(){
        // 1. 保存传入的iid
        this.iid = this.$route.params.iid

        // 2.根据iid请求详情数据
        getDetail(this.iid).then(res => {
           console.log(res) 
        // 1.获取轮播图图片
            const data = res.data.result
            this.topImages = data.itemInfo.topImages
        // 2.获取商品的基本信息
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
            // console.log(this.goods)
        // 3.获取商店的信息
            this.shop = new Shop(data.shopInfo)
            console.log(this.shop)
        // 4. 保存商品的详情数据
            this.goodsInfo = data.detailInfo
            // console.log(this.goodsInfo)
        // 6. 取出参数信息
            this.itemParams = data.itemParams;
            console.log(Object.keys(this.itemParams).length)
        // 7. 取出评论信息
            if(data.rate.cRate !== 0) {
                this.commentInfo = data.rate.list[0]
            }
            
            // this.$nextTick()这个方法的作用是：放数据修改后使用这个方法，会回调获取更新后的dom再渲染出来。
        //      this.$nextTick(()=>{
        //     // 根据最新的数据，对应的DOM已经被渲染出来了，但是图片还没有加载完。
        //     this.themeTopYs = []
        //     this.themeTopYs.push(0)
        //     this.themeTopYs.push(-this.$refs.params.$el.offsetTop)
        //     this.themeTopYs.push(-this.$refs.comment.$el.offsetTop)
        //     this.themeTopYs.push(-this.$refs.recommend.$el.offsetTop)
            
        // })
        // 请求推荐数据
        getRecommend().then(res =>{
            // console.log(res.data.data.list)
            this.recommendInfo = res.data.data.list
        })

       
            
        })
    },
    mounted(){
        const refresh = debounce(this.$refs.scroll.refresh,50)
        this.$bus.$on("detailImgLoad",()=>{
          
          refresh();

          this.themeTopYs = []
            this.themeTopYs.push(0)
            this.themeTopYs.push(this.$refs.params.$el.offsetTop)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.$refs.scroll.refresh()
        //不适合写在created中，还没有加载好组件。所以要加在mounted中
      })
     

    },
    methods: {
        titleClick(index){
            this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
        },
        contentScroll(position){
            // 1.获取y值

            for(let i = 0; i < this.themeTopYs.length; i++) {
                if(i !== this.currentIndex) {
                     const positionY = -position.y
                     
            // 2.positionY值和主题中的值进行对比
                    if((i < this.themeTopYs.length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i == this.themeTopYs.length-1 && positionY >= this.themeTopYs[i])) {
                        this.currentIndex = i
                        this.$refs.nav.currentIndex = this.currentIndex
                    }
                }
            }
            
            // 是否回到顶部
            this.isScrollShow = -position.y > 800
        },
        addToCart(){
            console.log(111111)
            // 1。获取数据
            const product = {}
            product.image = this.topImages[0]
            product.title = this.goods.title;
            product.desc = this.goods.desc;
            product.price = this.goods.realPrice;
            product.iid = this.iid;
            // 2.将商品添加到购物车
            // this.$store.commit('addCart',product)
            this.$store.dispatch('addCart',product).then(res=>{
                this.$toast.show(res, 1500)
            });
            

        }
    }
}
</script>

<style scoped>
#detail {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: white;
}
.content {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
}
</style>