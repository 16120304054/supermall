<template>
  <div class="cart-bottom-bar">
    <check-button class="select-all" :class="{activated: isActivated}" @click.native="clickAllSelected"></check-button> 
    <span class="all-checked">全选</span>
    <span class="money">合计：{{totalPrice}}</span>
    <span class="calc" @click="clickCommit">去计算({{totalLength}})</span>
    
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'
export default {
    name: "CartBottomBar",
    components: {
        CheckButton,
    },
    computed: {
        totalPrice(){
            // console.log(this.$store.state.cartList)
            let sum = this.$store.state.cartList.filter(item => {
                // console.log("item.checked ",item.checked, item.count)
                return item.checked === true;
            }).reduce((preValue, item) => {
                // console.log("lexing: ", typeof item.price)
                return (preValue + item.price * item.count)
            },0)
            // console.log(sum)
            return "￥" + sum.toFixed(2)
        },
         totalLength() {
            // console.log("wojinliale ")
            return this.$store.state.cartList.filter((item)=>{
                    return item.checked === true
                    }).reduce((prevalue, item) =>{
                        return prevalue + item.count
                    },0)
        },
        isActivated() {
            if(this.$store.state.cartList.length == 0) {
                return false
            } else {
                return !this.$store.state.cartList.some(item=>item.checked == false)
            }
        }
    },
    methods: {
        clickAllSelected(){
            let some = this.isActivated
            this.$store.commit('alterChecked', !some)
        },
        clickCommit() {
            if(this.totalLength === 0) {
                this.$toast.show("请先添加物品~", 1500)
            }
        }
    }
   
}
</script>

<style scoped>
    .select-all {
        position: absolute;
        top: 10px;
        left:5px;
        background-color: white;
    }
    .activated {
        background-color: red;

    }
    .cart-bottom-bar {
        position: relative;
        height: 40px;
        width: 100%;
        background-color: #eee;
   
        align-items: center;
        
    }
    .cart-bottom-bar .all-checked {
        margin-left: 30px;
        line-height: 40px;
        font-size: 14px;
        
    }
    .cart-bottom-bar .money {
        margin-left: 10px;
        font-size: 16px;
    }
    .cart-bottom-bar .calc {
        float: right;
        margin-right: 0px;
        width: 100px;
        background-color: burlywood;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
 </style>