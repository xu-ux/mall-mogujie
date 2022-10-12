import {http,http_mock} from "./request"


export function getHomeMultidata(){
    return http({
        method: "GET",
        url: "/home/multidata",
    })
}

export function getHomeData(type,page){
    return http({
        method: "GET",
        url: "/home/data",
        params: {
            type: type,
            page: page
        }
    })
}
