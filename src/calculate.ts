function minus(a:number,b:number):number{
    return a-b;
}
function power(a:number,b:number):number{
    return Math.pow(a,b)
}
function multiple(a:number,b:number):number{
    return a*b
}

export const cal = {minus, power, multiple}