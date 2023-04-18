// This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

// The best function will be given an array of stock prices in the order they happened throughout the day.

// It should return the maximum possible profit on the stock for that day.

// For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:

// best([15, 10, 20, 22, 1, 9])
// 12

const best = stockArr => {
    let buy = stockArr[0];
    let maxProfit = 0;
    for(let i = 1; i < stockArr.length; i++) {
        if(buy > stockArr[i]) {
            buy = stockArr[i];
        } 
        let profit = stockArr[i] - buy;
        if(profit > maxProfit) {
            maxProfit = profit;
        }
    }
    return maxProfit;
}


console.log(best([15, 10, 20, 22, 1, 9]));