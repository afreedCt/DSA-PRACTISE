// reverse a number

const num=-123

function reverse(num){
    let sign=num<0?-1:1;
    let result=Math.abs(num).toString().split('').reverse().join('')
    return result*sign
}

console.log(reverse(num));
