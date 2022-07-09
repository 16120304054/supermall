import { ADD_COUNTER } from "./mutation-type"
export default {
    addCart(context, payload) {   //context = {state, commit}
        return new Promise((resolve, reject)=>{
            let oldProduct = null;
            // for(let item of state.cartList) {
            //     if(item.iid === payload.iid) {
            //         oldProduct = item;
            //     }
            // } 
    
            // 也可以用find函数来实现上述循环
            console.log(payload)
            oldProduct = context.state.cartList.find(item => {
                return item.iid === payload.iid
            })
            if(oldProduct) {
               context.commit(ADD_COUNTER,oldProduct)
               resolve("修改商品count+1")
            } else {
                oldProduct = payload
                oldProduct.count = 1;
                context.commit('addToCart',oldProduct)
                resolve("添加一件新的商品")
                // state.cartList.push(payload)
            }
        })
       
    }
}