<template>
    <div class="goods-info">
        <div class="info-desc">
            <div class="start"> </div>
            <div class="desc">{{goodsInfo.desc}}</div>
            <div class="end"></div>
        </div>

        <div class="info-key" >{{goodsInfo.detailImage[0].key}}</div>
        <div class="info-list">
            <img v-for="(item, index) in goodsInfo.detailImage[0].list" :src="item" alt="" :key="index">
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailGoodsInfo",
    props: {
        goodsInfo: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
  .goods-info {
      padding: 20px 0;
      border-bottom: 8px solid #eee;
  }
  .info-desc {
      padding: 0px 15px;
      font-size:14px;
  }
  .info-desc .start, .info-desc .end {
      position: relative;
      width: 90px;
      height:1px;
      background-color: #a3a3a5;
  }
    .info-desc .desc{
      padding: 15px 15px;
  }
  .info-desc .start {
      float: left;
  }
   .info-desc .end {
      float: right;
  }
  .info-desc .start::before, .info-desc .end::after {
      content: '';
      position: absolute;
      top: -5px;
      width: 5px;
      height: 5px;
      background-color: #333;
  }
  .info-desc .end::after {
      right:0;
  }
  .info-list img {
    width: 100%;
  }
    .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
</style>