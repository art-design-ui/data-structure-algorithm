/**
 * 先看下题目：给你 k 种面值的硬币，面值分别为 c1, c2 ... ck，每种硬币的数量无限，再给一个总金额 amount，
 * 问你最少需要几枚硬币凑出这个金额，如果不可能凑出，算法返回 -1 
 * 比如说 k = 3，面值分别为 1，2，5，总金额 amount = 11。那么最少需要 3 枚硬币凑出，即 11 = 5 + 5 + 1。
 */



/**
 * def coinChange(coins: List[int], amount: int):

    def dp(n):
        # base case
        if n == 0: return 0
        if n < 0: return -1
        # 求最小值，所以初始化为正无穷
        res = float('INF')
        for coin in coins:
            subproblem = dp(n - coin)
            # 子问题无解，跳过
            if subproblem == -1: continue
            res = min(res, 1 + subproblem)

        return res if res != float('INF') else -1

    return dp(amount)
 */



/**
* 
* @param {*} coins 
* @param {*} amount 
*/
// coins Array 多种硬币
// amount 金额
var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0; // 0元就是需要0枚硬币
    // 但是dp[1]=1不一定成立 因为面值不一定是1 可能是100也不一定
    // 这样理解 找到120 的 需要dp[118]+1（面值为2） <===> 118+2 dep[118]+dep[2]
    // 所以第一层是求所有的子问题
    // 第二层  内层 for 在求所有子问题 + 1 的最小值
    for (let i = 1; i < dp.length; i++) {
        for (let coin of coins) {
            // i - coin >= 0表示子问题有解
            // 假设你求dep[1] 表示1元有dep[1]种解法 这时候面值最小的为2 所以无解
            // 转化为出来就是i - coin >= 0 面值为i的钱（实际就是防止数组越界）
            if (i - coin >= 0) {
                // 做选择，选择需要硬币最少的那个结果
                // dp[i] = x 表示，当目标金额为 i 时，至少需要 x 枚硬币。
                // 拿到最优子结构
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                // dp[i] = dp[i - coin] + 1
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([100, 1, 2, 3, 4, 2000], 200))


// 学会把一个大问题 分解成小问题 自底而上 


// 解法：明确「状态」 -> 定义 dp 数组/函数的含义 -> 明确「选择」-> 明确 base case。

// 状态转移方程===>

// 如何推导状态转移方程（首先明白什么是转移 把问题转移给子项） 也就是拆解问题===>推导出公式 想想斐波那契数列
/**
 * - dp[i]: 表示总金额为 i 的时候最优解法的硬币数

- 我们想一下：求总金额 120 有几种方法？下面这个思路关键了 !!!
  一共有 3 种方式，因为我们有 3 种不同面值的硬币。
  1.拿一枚面值为 1 的硬币 + 总金额为 119 的最优解法的硬币数量
    这里我们只需要假设总金额为 119 的最优解法的硬币数有人已经帮我们算好了，
    不需要纠结于此。(虽然一会也是我们自己算，哈哈)
    即：dp[119] + 1
  2.拿一枚面值为 2 的硬币 + 总金额为 118 的最优解法的硬币数
    这里我们只需要假设总金额为 118 的最优解法的硬币数有人已经帮我们算好了
    即：dp[118] + 1
  3.拿一枚面值为 5 的硬币 + 总金额为 115 的最优解法的硬币数
    这里我们只需要假设总金额为 115 的最优解法的硬币数有人已经帮我们算好了
    即：dp[115] + 1

  - 所以，总金额为 120 的最优解法就是上面这三种解法中最优的一种，也就是硬币数最少
    的一种，我们下面试着用代码来表示一下：

  - dp[120] = Math.min(dp[119] + 1, dp[118] + 1, dp[115] + 1);

  - 推导出「状态转移方程」：
    dp[i] = Math.min(dp[i - coin] + 1, dp[i - coin] + 1, ...)
    其中 coin 有多少种可能，我们就需要比较多少次，那么我们到底需要比较多少次呢？
    当然是 coins 数组中有几种不同面值的硬币，就是多少次了~ 遍历 coins 数组，
    分别去对比即可
 */