<template>
    <div id="shop-item">
    <div class="item-selector">
      <CheckButton @click.native="checkedChange" :isactivate="itemInfo.checked"></CheckButton>
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">商品描述: {{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{itemInfo.price}}</div>
        <div class="item-count right">x{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'
export default {
    name: "CartListItem",
    props: {
        itemInfo: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    components: {
        CheckButton
    }, 
    methods: {
        checkedChange() {
            console.log(this.itemInfo.checked)
            this.itemInfo.checked = !this.itemInfo.checked
            console.log(this.itemInfo.checked)
        }
    }
}
</script>

<style scoped>
.item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

    #shop-item {
        display: flex;
        width: 100%;
        padding: 5px;
        border-bottom: 1px solid #ccc;
    }
    .item-img img{
        width: 90px;
        height: 110px;
        border-radius: 10%;
        margin:5px;
    }
  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

    .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    overflow: hidden;
  }



  .item-info .item-desc {
    margin-top: 15px;
    font-size: 14px;
    color: #666;
  }
  .item-info .info-bottom {
    margin-top: 30px;
  }
    .info-bottom .item-price {
    color: orangered;
  }


</style>