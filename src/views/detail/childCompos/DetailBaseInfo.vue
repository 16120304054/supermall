<template>
  <div v-if="Object.keys(goods).length!==0" class="detail-base-info" >
      <div class="title">{{goods.title}}</div>
      <div class="price">
          <span class="newPrice">{{goods.newPrice}}</span>
          <span class="oldPrice">{{goods.oldPrice}}</span>
          <span class="discount">{{goods.discount}}</span>
      </div>
      <div class="columns">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <hr>
      <div class="services">
          <span v-for="item,idx in (goods.services.length-1>=3?3:goods.services.length-1)" :key="idx">
              <img :src="goods.services[item-1].icon" alt="">
              {{goods.services[item-1].name}}
          </span>
      </div>

  </div>
</template>

<script>
export default {
    name: "DetailBaseInfo",
    props: {
        goods: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
.detail-base-info {
    padding-top: 10px;
    padding-left :5px ;
    padding-right: 5px;
    border-bottom: 8px solid #eee;
}
.title {
   
    font-size: 18px;
    font-weight: 600;
}
.newPrice {
    font-size: 20px;
    color: var(--color-high-text);
    font-weight: 500;
}
.oldPrice {
    margin-left: 10px;
    text-decoration: line-through;
    font-size: 15px;
}
.discount {
    display: inline-block;
    height: 20px;
    position: absolute;
    top: 8px;
    line-height: 20px;
    background-color: var(--color-high-text);
    color: white;
    font-size: 13px;
    border-radius: 8px;
    padding: 1px 5px;
    margin-left: 5px;
    margin-top: -5px;
}
.price {
    position: relative;
    height: 40px;
    line-height: 40px;
}
.columns {
    display: flex;
    font-size: 15px;
    color:darkgrey;
    justify-content: space-between;
    height: 30px;
    align-items: center;
}
hr {
    background-color:rgb(216, 207, 213);
    height: 1px;
    border: none;
}
.services {
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    /* flex-wrap: wrap; */
    

}
.services img {
    width: 18px;
    vertical-align: middle;
    /* padding-top: 10px; */
    

}
</style>