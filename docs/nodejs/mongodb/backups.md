# 备份与还原

```
mongodump -h dbhost -d dbname -o dbdirectory
参数说明
  -h: 服务器地址
  -d: 需要备份的数据库名称
  -o: 备份存放地址
  数据库有密码时
  -u: 用户名
  -p: 密码
```

```
mongorestore -h dbhost -d dbname dbdirectory
参数说明
  -h: 服务器地址
  -d: 需要恢复的数据库名称
  --drop: 恢复的时候，先删除当前数据，然后恢复备份的数据.
```