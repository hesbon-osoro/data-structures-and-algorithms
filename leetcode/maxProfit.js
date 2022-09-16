const maxProfit = (k, prices) => {
  //     let profits = []
  //     let sum = 0

  //     for(let i=0;i<prices.length; i++){
  //         let p1 = prices[i], p2 = prices[i+1]
  //         if(p1< p2){
  //             profits.push(p2-p1)
  //         }
  //     }
  //     // profits= [...profits].sort((a,b)=>b-a)

  //     for(let i=0; i<k;i++){
  //         if(profits[i]===undefined) profits[i]=0
  //         sum += profits[i]
  //     }
  //     // for(let i=0; i<profits.length;i++){
  //     //     sum += profits[i]
  //     // }
  //     return sum
  const n = prices.length;
  if (n < 2) return 0;
  if (k > n / 2) return maxProfitInfinity(prices);
  const dp = Array.from({ length: k + 1 }, () => [0, -prices[0]]);
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      dp[j][0] = Math.max(dp[j][0], dp[j][1] + prices[i]);
      dp[j][1] = Math.max(dp[j][1], dp[j - 1][0] - prices[i]);
    }
  }
  return dp[k][0];
};
const maxProfitInfinity = prices => {
  let res = 0;
  for (let i = 1; i < prices.length; i++) {
    res += Math.max(0, prices[i] - prices[i - 1]);
  }
  return res;
};
