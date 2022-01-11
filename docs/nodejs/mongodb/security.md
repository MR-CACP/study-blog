# 安全

- **步骤1**: 创建超级管理用户
```
use admin
db.createUser({
  user: 'admin',
  pwd: '123456',
  roles: [{ role: 'root', db: 'admin' }]
})
```
- **步骤2**: 修改 Mongodb 数据库配置文件
```
路径：安装目录\Server\4.0\bin\mongod.cfg

配置：
security:
  authorization: enabled
```
- **步骤3**: 重启 mongodb 服务
- **步骤4**: 连接数据库
```
mongo admin -u 用户名 -p 密码
mongo 192.168.1.200:27017/test -u user -p password
```
- **步骤5**: 给 test 数据库创建一个用户 只能访问 test 不能访问其他数据库
```
use test
db.createUser({
  user: "eggadmin",
  pwd: "123456",
  roles: [{ role: "dbOwner", db: "test" }]
})
```

## 常用命令
```
1、show users; #查看当前库下的用户
2、db.dropUser("eggadmin") #删除用户
3、db.updateUser( "admin", { pwd:"password" }); #修改用户密码
4、db.auth("admin", "password"); #密码认证
```
## 数据库角色
1. 数据库用户角色：read、readWrite;  
2. 数据库管理角色：dbAdmin、dbOwner、userAdmin；  
3. 集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManager；  
4. 备份恢复角色：backup、restore；  
5. 所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase  
6. 超级用户角色：root
