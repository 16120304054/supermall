import { requestData } from "./request";

export function getDetail(iid) {
    return requestData({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getRecommend() {
    return requestData({
        url: "/recommend"
    })
}

export class Goods{
    constructor(itemInfo, colums, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = colums
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}

export class Shop {
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }
}