<template>
    <nav-bar>
        <div slot="left" class='back' @click="backClick">
           <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class='title'>
            <div v-for="item, idx in titles" :key="idx" class='title-item' @click="titleClick(idx)" :class="{activate:idx===currentIndex}">{{item}}</div>
        </div>
    </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
    name: "DetailNavBar",
    components: {
        NavBar
    },
    data() {
        return {
            titles: ['商品','参数','评论','推荐'],
            currentIndex: 0
        }
    },
    mounted(){
        
    },
    methods: {
        
        titleClick(index){
            this.$emit("titleClick", index);
            this.currentIndex = index
            this.$refs.scroll.scrollTo(0, y, 100)
        },
        backClick(){
            this.$router.back()
            // this.$router.go(-1)   // 两者等价
        }
    }
}
</script>

<style scoped>
.title {
    display: flex;
    font-size: 13px;
}
.title-item {
    flex: 1;
}
.activate {
    color: var(--color-high-text)
}
.back {
    margin-top: 5px;
}
</style>