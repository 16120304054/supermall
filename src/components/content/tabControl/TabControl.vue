<template>
    <div class="tab-control">
        <div v-for="(item, idx) in titles"  class="tab-control-item" :class="{activate: idx===currentIndex}" :key="idx" @click="itemClick(idx)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "TabControl",
    props: {
        titles: {
            type: Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentIndex: 0
        }
    },
    methods: {
        itemClick(idx) {
            this.currentIndex = idx;
            this.$emit("tabClink", idx);
        }
    }
}
</script>
    
<style scoped>
.tab-control {
    display: flex;
}
.tab-control-item {
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
}
.tab-control-item span {
    padding: 5px;
}
.activate {
    color: var(--color-high-text);
}
.activate span {
    border-bottom: 3px solid var(--color-tint);
}
</style>