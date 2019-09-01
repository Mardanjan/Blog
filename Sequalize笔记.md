
### 基本查增删改

```
// Find all users   查询所有
User.findAll({
    where:{   // 你想要指定的条件 （可有可无）
        username:"mardan",
        userpass:"123456",
    },
    attributes: ['username', 'id','weight'],  //你想要获取的column （可有可无）
}).then(users => {   //users是返回的结果， 一般情况下是数组
  console.log("All users:", JSON.stringify(users, null, 4));
});

 User.findOne({
    where:{     // 你想要指定的条件 （可有可无）
        username: studentname,
    },
            attributes: ['username', 'id','weight'],  //你想要获取的column （可有可无）
}).then(user => {   //返回的对象
    console.log("user:", user;
})

// Create a new user
User.create({ firstName: "Jane", lastName: "Doe" }).then(jane => {
  console.log("Jane's auto-generated ID:", jane.id);
});

// Delete everyone named "Jane"
User.destroy({
  where: {
    firstName: "Jane"
  }
}).then(() => {
  console.log("Done");
});

// Change everyone without a last name to "Doe"
User.update({ lastName: "Doe" }, {
  where: {
    lastName: null
  }
}).then(() => {
  console.log("Done");

});
```

### 进阶transaction : 增删改操操作要么一起成功要么一起失败
+ 应用场景：当对两个或多个表同时进行插入，删除或者更新操作时可能会遇到其中一个或者多个表插删改操作失败的情况，为了避免这种情况就使用sequelize.transaction来启动托管事务，所有的promise都返回resolve的时候这个事务会被提交，如果有一个或者几个promise被拒绝，事务将回滚
```
 return MySQLManager.transaction(t => {
                    return Information
                        .update(
                            updataValues,
                            {
                                where: {
                                    userId: userId,
                                },
                                transaction: t,
                            }
                        )
                        .then(() => {
                            return User.update(
                                updataValues,
                                {
                                    where: {
                                        id: userId,
                                    },
                                    transaction: t
                                }
                            )
                        })
                })
                    .then(() => {
                       
                    })

 ```

 