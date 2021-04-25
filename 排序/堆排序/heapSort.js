// 堆排序
// 堆是特殊的完全二叉树  通常分为最小堆和最大堆
// 堆排序是利用堆这种数据结构而设计的一种排序算法
// js引用类型存放在堆？ 为什么 感觉怪怪的 

const heapSort = function (arr) {
    // 将顺序储存二叉构建成最大堆
    // 该方法用于自上而下的建立大顶堆 
    const adjustHeap = function (arr, i, length) {
        let temp = arr[i] // 保存i节点的值
        // k=i*2+1 
        // i节点表示非叶子🍃节点
        // k表示i节点的左子节点,k+1表示右子节点
        for (k = i * 2 + 1; k < length; k = k * 2 + 1) {
            if (k + 1 < length && arr[k] < arr[k + 1]) {
                k++ // 指向右子节点
            }
            if (arr[k] > temp) {
                // 子节点大于父节点
                arr[i] = arr[k]
                // 因为当前的i非叶子节点以及完成交换
                // 所以我们指向下一个非叶子节点（也可能是叶子节点）
                // 只考虑单向的情况吗 因为自上而下的构建早就确定好顺序的了 只有你非叶子节点改变了 就在对应的节点重新构建 哪个节点改变了 就动这个节点
                i = k // 指向k，继续循环比较
            } else {
                // 说明刚好这一层是个局部大顶堆而且因为因为从下到上的 不进行操作
                // 因为从下到上的 所以没有必要继续循环下去
                break
            }
        }
        arr[i] = temp
    }
    let temp = 0
    // 将无序序列构建成一个堆，根据升序降序需求选择大顶堆或者小顶堆
    // Math.floor(arr.length / 2) - 1 这一块之所以这么写精确 是自下而上一个一个找 
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        // 从上到下已经可以确定每一层的顺序
        // 所以此时左右子节点是确定好了的
        // 进行构建大顶堆交换后 只要循环交换改变的子节点就行 (另外的一边已经确定 而且没有改变 就没有必要进行循环下去了)
        adjustHeap(arr, i, arr.length)
    }
    // console.log(arr)
    for (let j = arr.length - 1; j > 0; j--) {
        temp = arr[j]
        arr[j] = arr[0]
        arr[0] = temp
        // 交换以后减少一个节点继续构建大顶堆
        adjustHeap(arr, 0, j)
    }
}


const arr = [1110, 12, 10, 8, 4, 12, 110, 45, 78]

heapSort(arr)


console.log(arr)


