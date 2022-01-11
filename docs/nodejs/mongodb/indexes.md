# 索引

```
创建索引
db.collection.createIndex({ "score": 1 })

获取索引
db.collection.getIndexes()

删除索引
db.collection.dropIndex({ "score": 1 })
```

## 复合索引
```
db.collection.createIndex({ "score": 1, "age": 18 })
```
该索引被创建后，基于 username 和 age 的查询将会用到该索引，或者是基于 username
的查询也会用到该索引，**但是只是基于 age 的查询将不会用到该复合索引。因此可以说，
如果想用到复合索引，必须在查询条件中包含复合索引中的前 N 个索引列**

## 指定索引名
```
db.collection.createIndex({ "username": 1 }, { "name": "userindex" })
```
## 唯一索引
```
db.collection.createIndex({ "score": 1 }, { "unique": true })
```
## 一些参数  

| parameter    | type    | description      |
|--------------|---------|----------------------|
| background   | Boolean | 建索引过程中会阻塞其它数据库操作，background可指定以后台方式创建索引，即增加`background`可选参数，`background`默认值为false。
| unique       | Boolean | 建立的索引是否唯一。指定为true创建唯一索引。默认值为false。
| name         | String  | 索引的名称，如果未指定，MongoDB通过连接索引的字段名和排序顺序生成一个索引名称。
| dropDups     | Boolean | 默认值为false。
