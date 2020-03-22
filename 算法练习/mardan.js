// 给定一个时间，判断是否早与当前时间
// export function compare_date(time) {
//     let local_time = new Date()
//     console.log(local_time)
// }
/**
 * format : YYYY-MM-DD , YYYY-MM-DD:HH:MM:SS 
 */
export function filter_date (par, format) {
    let date = new Date(par)
    if (format === 'YYYY-MM-DD') {
        return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay()
    }
    else if (format === 'YYYY-MM-DD:HH:MM:SS') {
        return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay() + ':' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    }
    else if (format === 'HH:MM:SS') {
        return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    }
}
