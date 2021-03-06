/**
 * 在介绍插值查找之前，首先考虑一个新问题，为什么上述算法一定要是折半，而不是折四分之一或者折更多呢？打个比方，在英文字典里面查“apple”，你下意识翻开字典是翻前面的书页还是后面的书页呢？如果再让你查“zoo”，你又怎么查？很显然，这里你绝对不会是从中间开始查起，而是有一定目的的往前或往后翻。
 *同样的，比如要在取值范围1 ~ 10000 之间 100 个元素从小到大均匀分布的数组中查找5， 我们自然会考虑从数组下标较小的开始查找。
 *经过以上分析，折半查找这种查找方式，不是自适应的（也就是说是傻瓜式的）。二分查找中查找点计算如下：
 *mid=(low+high)/2, 即mid=low+1/2*(high-low);
 *通过类比，我们可以将查找的点改进为如下：
 *mid=low+(key-a[low])/(a[high]-a[low])*(high-low)
 *也就是将上述的比例参数1/2改进为自适应的，根据关键字在整个有序表中所处的位置，让mid值的变化更靠近关键字key，这样也就间接地减少了比较次数。
 *基本思想：基于二分查找算法，将查找点的选择改进为自适应选择，可以提高查找效率。当然，差值查找也属于有序查找。
 *注：对于表长较大，而关键字分布又比较均匀的查找表来说，插值查找算法的平均性能比折半查找要好的多。反之，数组中如果分布非常不均匀，那么插值查找未必是很合适的选择。
 *复杂度分析：查找成功或者失败的时间复杂度均为 [公式] 。
 */
// 针对于数据量大且连续的
// const arr = [0, 2, 3, 13, 24, 25, 26, 37, 48, 59, 60, 61, 72, 73, 94, 111, 9999]

// 从小到大
const arr = [12, 12]

const insertionSearch = function (arr, value) {
    let left = 0
    let right = arr.length - 1 // 闭区间[left,right] 存在[0,0] 这种区间情况
    if (value < arr[0] || value > arr[arr.length - 1]) {
        return -1
    }
    while (left <= right) { // 为什么存在left===right的情况 因为 闭区间[left,right] 存在[0,0] 这种区间情况
        // 使用Math.floor有毒
        let diff = parseInt((value - arr[left]) * (right - left) / (arr[right] - arr[left]))
        // 存在left===right ===> NaN单独处理
        // NaN===NaN 为false Object.is挺好用的 理解不同
        if (Object.is(diff, NaN)) {
            diff = 0
        }
        let mid = left + diff
        // 在左边
        if (value < arr[mid]) {
            right = mid - 1
        }
        else if (value > arr[mid]) {
            // 在右边
            left = mid + 1
        } else {
            // 相等情况，也就是找到了
            return mid
        }
    }
    return -1
}

console.log(insertionSearch(arr, 12))


