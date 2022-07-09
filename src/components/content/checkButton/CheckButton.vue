<template>
    <div class="check-button" :class="{activated: isactivate}">
        <img src="~assets/img/cart/tick.svg" alt="" >
    </div>
</template>

<script>
export default {
    name: "CheckButton",
    props: {
        isactivate: {
            type: Boolean,
            default(){
                return false;
            }
        }
    }
}
</script>

<style scoped>
    .check-button {
        height: 22px;
        width: 22px;
        border-radius: 50%;
        border: 2px solid #aaa;
    }
    .activated {
        background-color: red;
    }
</style>