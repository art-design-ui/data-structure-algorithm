# 散列表

理想散列表（哈希表）是一个包含关键字的具有固定大小的数组，它能够以常数时间执行插入，删除和查找操作。


- 每个关键字被`映射`到0到数组大小N-1范围，并且放到合适的位置，这个`映射规则`就叫散列函数

- 理想情况下，两个不同的关键字映射到不同的单元，然而由于数组单元有限，关键字范围可能远超数组单元，因此就会出现两个关键字散列到同一个值得时候，这就是散列冲突




假设在一个数组内  [1,34,100,45,89,90,...]

我想找到一个1001这个数字，做法就是可能循环比较 是否=== 或者二分法查找


散列技术即是一种存储方法，也是一种查找方法

散列技术最适合的求解问题是查找与给定相等的记录，对于查找来说，简化了比较过程，效率会大大提高，但是散列技术不具备很多常规数据结构的能力