<template>
  <div class="tab-bar-item" @click="btnClick">
      <!-- <div v-if="!isActive"><slot name="item-icon"><img src="../../assets/img/icon/home.svg" alt=""></slot></div>
      <div v-else><slot name="item-icon-active"><img src="../../assets/img/icon_active/home.svg" alt=""></slot></div> -->
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text">首页</slot></div>
  </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        activeColor: {
            type: String,
            default: "red"
        }
    },
    computed: {
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isActive ? {"color": this.activeColor} : {}
        }
    },
    methods: {
        btnClick(){
            this.$router.replace(this.path)
        }
    }
}
</script>

<style>
    .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item img {
      width: 24px;
      height: 24px;
      margin-top: 3px;
      /* 图片下面会有留有三像素，因此使用vertical-align使图片居中 */
      vertical-align: middle;
      margin-bottom: 2px;
  }
  /* 为了更好地封装组件，不使用确定的颜色 */
  /* .activate {
      color: orange;
  } */
</style>