// {
    //     // mutations唯一的目的就是修改state中的状态
    //     // mutations中的每个方法完成的事件尽量比较单一一点，这样比较容易跟踪。
    //     // 因为addCart做了两件事:+1和加入数组，所以通过actions来做。将其分成两件事。
    //     // addCart(state, payload) {
    //     //     let oldProduct = null;
    //     //     // for(let item of state.cartList) {
    //     //     //     if(item.iid === payload.iid) {
    //     //     //         oldProduct = item;
    //     //     //     }
    //     //     // } 

    //     //     // 也可以用find函数来实现上述循环
    //     //     oldProduct = state.cartList(item => {
    //     //         item.iid === payload.iid
    //     //     })
    //     //     if(oldProduct) {
    //     //         oldProduct.count += 1
    //     //     } else {
    //     //         oldProduct = payload
    //     //         oldProduct.count = 1;
    //     //         state.cartList.push(payload)
    //     //     }
    //     //     state.cartList.push(payload)
    //     // }
        
    // },


    // 抽常量、
import { ADD_COUNTER } from "./mutation-type";
export default {
    [ADD_COUNTER](state, payload) {
        payload.count++;
    },
    addToCart(state, payload) {
        payload.checked = false
        state.cartList.push(payload)
    },
    alterChecked(state, payload) {
        for(let item of state.cartList) {
            item.checked = payload
        }
    }
}