<template>
    <div class="wraper" ref="wraper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name: "Scroll",
    data(){
        return {
            scroll: null
        }
    },
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        isPullUpload: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        // 1.创建scroll
        this.scroll = new BScroll(this.$refs.wraper, {
            click:true,   //为了让div等元素可以具有点击事件
            probeType: this.probeType,
            pullUpLoad: this.isPullUpload
        })

        // 2。监听scroll
        if(this.probeType === 3 || this.probeType ===2) {
            this.scroll.on('scroll', position => {
                this.$emit('scroll', position)
            })
        }
        // 3. 监听scroll滚动到底部
        if(this.isPullUpload) {
            this.scroll.on("pullingUp", ()=>{
                this.$emit('uploadMore');
                // this.scroll.finishPullUp();//写在这里不合适，因为数据还没加载完，就继续上上拉加载更多了，应该等数据，加载完以后，才准许上拉加载更多。
            })
        }   

       
    },
    methods: {
        scrollTo(x, y, time=300) {
            this.scroll && this.scroll.scrollTo(x,y,time);
        },
        refresh(){
            this.scroll && this.scroll.refresh();
        },
        finishPullUp() {
            this.scroll && this.scroll.finishPullUp()
        },
        getScrollY() {
            return this.scroll ? this.scroll.y : 0
        }
    }
}
</script>

<style>

</style>