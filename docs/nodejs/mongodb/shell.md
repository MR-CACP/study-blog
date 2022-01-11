# shell快速参考

## 命令助手
1. 连接数据库
```
mongo
```
2. 查看所有数据库列表
```
show dbs
```
3. 使用数据库、创建数据库
```
use shopping
```
如果真的想把这个数据库创建成功，那么必须插入一个数据。
数据库中不能直接插入数据，只能往集合(collections)中插入数据。下面命令表示给 shopping 数据库的 collection 插入数据。
```
db.collection.insert({ "name": "xiaoming" })
```
4. 显示数据集合(MySQL中叫表)
```
show collections
```
4. 删除集合
```
db.collection.drop()
```


## explain

explain 是非常有用的工具，会帮助你获得查询方面诸多有用的信息。只要对游标调用
该方法，就可以得到查询细节。explain 会返回一个文档，而不是游标本身。\
explain 会返回查询使用的索引情况，耗时和扫描文档数的统计信息。

### 查询具体的执行时间
关注输出的如下数值：explain.executionStats.executionTimeMillis
```
db.tablename.find().explain( "executionStats" )
```