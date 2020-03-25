var maxProfit = function(prices) {
  var max = 0, day = 0
  for (let i = 0; i < prices.length; i++) {
      for (let j = i+1; j <prices.length ; j++) {
          let sub = prices[i] - prices[j]
          if (sub + max < 0) {
              max = sub * -1
              day = j
              console.log('max:', max)
          }
      }
  }
  if (max === 0) {
      return 0
  } else {
      return day+1
  }
};
console.log(maxProfit([1,2]))