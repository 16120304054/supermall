import {request, requestData} from "./request";
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}
export function getHomeData(type, page) {
    return requestData({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}