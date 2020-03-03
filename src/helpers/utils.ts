const toStr=Object.prototype.toString

export function isDate(val:any):val is Date{
    return toStr.call(val)==='[object Date]'
}
export function isObject(val:any):val is Object{
    return val !== null && typeof val==='object'
}
export function isPlainObject(val:any):val is Object{
    return toStr.call(val)==='[object Object]'
}