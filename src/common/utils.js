
// 防抖函数
// export function debounce(func ,delay) {
//     let timer = null
//     return function(...args){
//         if( timer ) {
//             clearTimeout(timer)
//         }
//         timer = setTimeout(() => { func.apply( this ,args)},delay)
//     }

// }


export function  debounce(func, delay) {
    let timer = null 
    return function (...args) {
      if(timer) clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }

export function filterFloat(value) {
  return Number.parseFloat(value).toFixed(2)
}  