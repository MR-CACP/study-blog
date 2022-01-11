# 聚合管道

## 管道操作符与表达式

| 管道操作符    | description          |
|--------------|----------------------|
| $project     | 增加、删除、重命名字段
| $match       | 条件匹配。只满足条件的文档才能进入下一阶段
| $limit       | 限制结果的数量
| $skip        | 跳过文档的数量
| $sort        | 条件排序
| $group       | 条件组合结果 统计
| $lookup      | $lookup 操作符 用以引入其它集合的数据 （表关联查询）

| 常用表达式操作符  | description          |
|-----------------|----------------------|
| $addToSet  | 将文档指定字段的值去重
| $max       | 文档指定字段的最大值
| $min       | 文档指定字段的最小值
| $sum       | 文档指定字段求和
| $avg       | 文档指定字段求平均
| $gt        | 大于给定值
| $lt        | 小于给定值
| $eq        | 等于给定值

## $project
修改文档的结构，可以用来重命名、增加或删除文档中的字段
```
查找 order 只返回文档中 trade_no 和 all_price 字段
db.order.aggregate([
  {
    $project:{ trade_no: 1, all_price: 1 }
  }
])
```

## $match
用于过滤文档。用法类似于 find() 方法中的参数
```
查找 order 只返回文档中 all_price 字段 >= 90 的数据
db.order.aggregate([
  {
    $match:{ "all_price": { $gte: 90 } }
  }
])
```

## $group
将集合中的文档进行分组，可用于统计结果。
```
统计每个订单的订单数量，按照订单号分组
db.order.aggregate([
  {
    $group: { _id: "$order_id", total: { $sum: 1 } }
  }
])
```

## $sort
将集合中的文档进行排序。
```
统计每个订单的订单数量，按照订单号分组
db.order.aggregate([
  {
    $sort: { "all_price": 1 }
  }
])
```

## $lookup
表关联
```
db.order.aggregate([
  {
    $lookup:{
      from: "order_item", // 执行联接的集合
      localField: "order_id", // 指定从输入文档到$lookup阶段的字段
      foreignField: "order_id", // 指定from 集合中文档中的字段
      as: "items" // 添加到输入文档中的新数组字段的名称
    }
  }
])
```