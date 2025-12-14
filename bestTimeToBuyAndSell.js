let prices=[7,1,5,3,6,4];
var maxProfit = function(prices) {

    // bruteforce approach  (but fail for large number of inputs)
    // let maxProfit=0;
    // let bestBuy=prices[0]
    // for(let i=1;i<prices.length;i++){
    //     bestBuy=Math.min(bestBuy,prices[i])
    //     for(let j=i+1;j<prices.length;j++){
    //         maxProfit=Math.max(maxProfit,prices[j]-bestBuy)
    //     }
    // }

    // return maxProfit;


    // optimal approach  
    let bestBuy=prices[0];
    let maxProfit=0;
    for(let i=1;i<prices.length;i++){
        maxProfit=Math.max(maxProfit,prices[i]-bestBuy)
        bestBuy=Math.min(bestBuy,prices[i])
    }
    return maxProfit;
}
console.log(maxProfit(prices));