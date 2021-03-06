class ArrBinaryTree {
    constructor(){
        this.arr=[]
    }

    ArrBinaryTree(arr) {
        this.arr = arr;
    }

    /**
     * 前序遍历
     *
     * @param index 就是知识点中的 n,从哪一个节点开始遍历
     */
    preOrder(index) {
        /*
            1. 顺序二叉树 通常只考虑 **完成二叉树**
            2. 第 n 个元素的 **左子节点** 为 `2*n+1`
            3. 第 n 个元素的 **右子节点** 为 `2*n+2`
            4. 第 n 个元素的 **父节点** 为 `(n-1)/2`
         */
        if (arr == null || arr.length == 0) {
        console.log("数组为空，不能前序遍历二叉树");
            return;
        }
        // 1. 先输出当前节点（初始节点是 root 节点）
    console.log(arr[index]);
        // 2. 如果左子节点不为空，则递归继续前序遍历
        int left = 2 * index + 1;
        if (left < arr.length) {
            preOrder(left);
        }
        // 3. 如果右子节点不为空，则递归继续前序遍历
        int right = 2 * index + 2;
        if (right < arr.length) {
            preOrder(right);
        }
    }
}