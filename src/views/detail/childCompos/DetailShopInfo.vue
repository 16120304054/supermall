<template>
  <div class="shop-info">
      <div class="shop-top">
          <img :src="shop.logo" alt="">
         <span class="title"> {{shop.name}}</span>
      </div>
      <div class="shop-center">
          <div class="shop-center-left">
              <div class="goods-sell" >
                  <div class="goods-sell-number">
                      {{shop.sells | getCorrectNumber}}
                  </div>
                <div class="goods-sell-name">
                    总销量
                </div>
              </div>
              <div class="goods-sell extra-line">
                  <div class="goods-sell-number">
                      {{shop.goodsCount | getCorrectNumber}}
                  </div>
                <div class="goods-sell-name">
                    全部宝贝
                </div>
              </div>
          </div>
          <div class="shop-center-right">
               <table>
                      <tr v-for="item, index in shop.score" :key="index">
                          <td>{{item.name}}</td>
                          <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
                          <td><span class="better" :class="{'better-more':item.isBetter}">{{item.isBetter ? "高":"低"}}</span></td>
                      </tr>
                </table>
          </div>
      </div>
      <div class="shop-bottom">
          <button> 进店逛逛</button>
      </div>
  </div>
</template>

<script>
export default {
    name: "DetailShopInfo",
    props: {
        shop: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    filters: {
        getCorrectNumber(num) {
            if(num >= 10000) {
                return (num/10000).toFixed(1)+"万"
            } else {
                return num
            }
        }
    }

}
</script>

<style scoped>
.shop-info {
    border-bottom: 8px solid #eee;
    padding: 10px 20px;
}
.shop-top {
    padding: 10px 10px;
}
.shop-top img{
    vertical-align: middle;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #eee;
}
.shop-top .title {
    margin-left: 10px;
}
.shop-bottom {
    width: 100%;
    text-align: center;
}
.shop-bottom button{
    border: none;
    background-color: #eee;
    width: 200px;
    height: 30px;
    border-radius: 5px;
}
.shop-center {
    padding: 1px 10px 13px;
}
.shop-center {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.shop-center-left {
    flex:1;
    display: flex;
}
.shop-center-right {
    flex:1;
    padding: 10px 10px;
    font-size: 14px;
}
.shop-center-right td{
    padding-left: 12px;
}
.goods-sell {
    flex:1;
    text-align: center;
    padding: 10px 10px;
}
.extra-line {
    border-right: 1px solid rgba(0,0,0,.1);
}
.goods-sell-name {
    font-size: 14px;
}
.goods-sell-number {
    font-weight: 600;
    padding-bottom: 10px ;
}
.score {
    color: green;
}
.score-better {
    color: red;
}

.better {
    color: white;
    background-color: green;
}
.better-more {
     color: white;
    background-color: red;
}
</style>