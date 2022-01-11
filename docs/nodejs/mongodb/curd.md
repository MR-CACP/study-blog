# CRUD操作

## 插入数据
```
db.collection.insert({ "name": "xiaoming" })

db.collection.insertOne() 3.2版中的新功能
db.collection.insertMany(
  [ <document 1> , <document 2>, ... ],
  {
    writeConcern: <document>,
    ordered: <boolean>
  }
) 3.2版中的新功能
```

## 查找数据
```
db.collection.find()

查询 age = 18 的记录
db.collection.find({ "age": 18 })

查询 age > 18 的记录
b.collection.find({ "age": { $gt: 18 } })

查询 age < 18 的记录
b.collection.find({ "age": { $lt: 18 } })

查询 age >= 18 的记录
b.collection.find({ "age": { $gte: 18 } })

查询 age <= 18 的记录
b.collection.find({ "age": { $lte: 18 } })

查询 age >= 18 并且 age <= 24
db.collection.find({ age: { $gte: 18, $lte: 24 } })

查询 name 中包含 mongo 的数据 模糊查询用于搜索 用法类似正则
db.collection.find({ "name": /mongo/ })

查询指定列 name、age 数据
db.collection.find({}, { "name": 1, age: 1 })
相当于：select name, age from collection
当然 name 也可以用 true 或 false,当用 ture 的情况下和 name:1 效果一样，如果用 false 就
是排除 name，显示 name 以外的列信息
```

1. 排序
```
升序：
db.collection.find().sort({ "age": 1 })

降序：
db.collection.find().sort({ "age": -1 })
```

2.查询前 5 条数据
```
db.collection.find().limit(5)
```

3.查询10条以后的数据
```
db.collection.skip(10)
```

4. 统计数量
```
db.collection.find().count()
```

## 修改数据
```
查找名字叫做小明的，把年龄更改为 16 岁
db.collection.update({ "name": "小明" },{ $set:{ "age":16 } })

查找性别为男的，把年龄更改为 33 岁, 修改所有匹配数据
db.collection.update({ "sex": "男" }, { $set: {"age":33} }, { "multi": true })

注意: 如果不适用$set关键字,数据将被完整替换
db.collection.update({ "name": "小明" }, { "name": "大明", "age":16 })

db.users.update({ "name": 'Lisi' }, { $inc: { "age": 50 } }, false, true)
相当于：update users set age = age + 50 where name = 'Lisi'
db.users.update({ "name": 'Lisi' }, { $inc: { "age": 50 }, $set: { "name": 'hoho' } }, false, true)
相当于：update users set age = age + 50, name = 'hoho' where name = 'Lisi'

db.collection.updateOne() 3.2版中的新功能
db.collection.updateMany() 3.2版中的新功能
db.collection.replaceOne() 3.2版中的新功能
```

## 删除数据
```
db.collection.remove({ "name": "Lisi" })
仅删除一项
db.collection.remove({ "name": "Lisi" }, { "justOne": true })

db.collection.deleteMany()
db.collection.deleteOne()
```
