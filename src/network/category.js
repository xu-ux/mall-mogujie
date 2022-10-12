import {http,http_mock} from "./request"


export function getCategory(){
    return http({
        method: "GET",
        url: "/category",
    })
}

export function getCategoryItem(maitKey){
    return http({
        method: 'GET',
        url: '/subcategory',
        params: {
            maitKey
        }
    })
}
