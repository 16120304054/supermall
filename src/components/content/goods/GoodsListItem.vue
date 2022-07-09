<template>
  <div class="goods-item" @click="itemClick">
      <img :src="showImage" alt="" @load="imgLoad">
      <div class="goods-info">
          <p>{{goodsItem.title}}</p>
          <span class="price">{{goodsItem.price}}</span>
          <span class="collect">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: "GoodsListItem",
    props: {
        goodsItem: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        imgLoad(){
            if(this.$route.path.indexOf('/home') !== -1) {
                this.$bus.$emit("HomeImgLoad")
            } else if(this.$route.path.indexOf('/detail') !== -1) {
                this.$bus.$emit('detailImgLoad')
            }
            
        },
        itemClick(){
            console.log(this.goodsItem.iid)
            this.$router.push("/detail/"+this.goodsItem.iid)
            // this.$router.push("/detail")

        }
    },
    computed: {
        showImage() {
            return this.goodsItem.image || this.goodsItem.show.img
        }
    }

}
</script>

<style scoped>
.goods-item {
    width: 48%;
}
.goods-item img {
    width: 100%;
    border-radius: 5px;
}
.goods-info {
  
    height: 45px;
    font-size: 14px;
    text-align: center;
    padding-top: 5px;
}
.goods-info p {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.goods-info .price {
    color: var(--color-high-text);
    margin-right: 28px;
}
.goods-info .collect {
    position: relative;
}
.goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>