// AddDigits - 258 (recursion )

let num=38;

function addDigits(number){

    const recursion=(num)=>{
        if(num<10) return num 
        let sum=0;

        while(num>0){
            let lastDigit=num%10
            sum+=lastDigit
            num=Math.floor(num/10)
        }

        if(sum>=10){
            return recursion(sum)
        }else{
            return sum
        }
    }

    return recursion(number)
}

let result=(1+(num-1)%9)
console.log(result);
