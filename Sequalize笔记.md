
### 基本查增删改

###   数据类型，详细的字段定义 ：https://www.jianshu.com/p/a644e05503b0
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

### 分页
```

// 获取10个实例/行
Project.findAll({ limit: 10 })

// 跳过8个实例/行
Project.findAll({ offset: 8 })

// 跳过5个实例，然后取5个
Project.findAll({ offset: 5, limit: 5 })

```
###　操作符
```
const Op = Sequelize.Op

[Op.and]: {a: 5}           // 且 (a = 5)
[Op.or]: [{a: 5}, {a: 6}]  // (a = 5 或 a = 6)
[Op.gt]: 6,                // id > 6
[Op.gte]: 6,               // id >= 6
[Op.lt]: 10,               // id < 10
[Op.lte]: 10,              // id <= 10
[Op.ne]: 20,               // id != 20
[Op.eq]: 3,                // = 3
[Op.not]: true,            // 不是 TRUE
[Op.between]: [6, 10],     // 在 6 和 10 之间
[Op.notBetween]: [11, 15], // 不在 11 和 15 之间
[Op.in]: [1, 2],           // 在 [1, 2] 之中
[Op.notIn]: [1, 2],        // 不在 [1, 2] 之中
[Op.like]: '%hat',         // 包含 '%hat'
[Op.notLike]: '%hat'       // 不包含 '%hat'
[Op.iLike]: '%hat'         // 包含 '%hat' (不区分大小写)  (仅限 PG)
[Op.notILike]: '%hat'      // 不包含 '%hat'  (仅限 PG)
[Op.regexp]: '^[h|a|t]'    // 匹配正则表达式/~ '^[h|a|t]' (仅限 MySQL/PG)
[Op.notRegexp]: '^[h|a|t]' // 不匹配正则表达式/!~ '^[h|a|t]' (仅限 MySQL/PG)
[Op.iRegexp]: '^[h|a|t]'    // ~* '^[h|a|t]' (仅限 PG)
[Op.notIRegexp]: '^[h|a|t]' // !~* '^[h|a|t]' (仅限 PG)
[Op.like]: { [Op.any]: ['cat', 'hat']} // 包含任何数组['cat', 'hat'] - 同样适用于 iLike 和 notLike
[Op.overlap]: [1, 2]       // && [1, 2] (PG数组重叠运算符)
[Op.contains]: [1, 2]      // @> [1, 2] (PG数组包含运算符)
[Op.contained]: [1, 2]     // <@ [1, 2] (PG数组包含于运算符)
[Op.any]: [2,3]            // 任何数组[2, 3]::INTEGER (仅限PG)

[Op.col]: 'user.organization_id' // = 'user'.'organization_id', 使用数据库语言特定的列标识符, 本例使用 PG
```

### 排序
#### order 需要一个条目的数组来排序查询或者一个 sequelize 方法。一般来说，你将要使用任一属性的 tuple/array，并确定排序的正反方向。
```
Subtask.findAll({
  order: [
    // 将转义用户名，并根据有效的方向参数列表验证DESC
    ['title', 'DESC'],

    // 将按最大值排序(age)
    sequelize.fn('max', sequelize.col('age')),

    // 将按最大顺序(age) DESC
    [sequelize.fn('max', sequelize.col('age')), 'DESC'],

    // 将按 otherfunction 排序(`col1`, 12, 'lalala') DESC
    [sequelize.fn('otherfunction', sequelize.col('col1'), 12, 'lalala'), 'DESC'],

    // 将使用模型名称作为关联的名称排序关联模型的 created_at。
    [Task, 'createdAt', 'DESC'],

    // Will order through an associated model's created_at using the model names as the associations' names.
    [Task, Project, 'createdAt', 'DESC'],

    // 将使用关联的名称由关联模型的created_at排序。
    ['Task', 'createdAt', 'DESC'],

    // Will order by a nested associated model's created_at using the names of the associations.
    ['Task', 'Project', 'createdAt', 'DESC'],

    // Will order by an associated model's created_at using an association object. (优选方法)
    [Subtask.associations.Task, 'createdAt', 'DESC'],

    // Will order by a nested associated model's created_at using association objects. (优选方法)
    [Subtask.associations.Task, Task.associations.Project, 'createdAt', 'DESC'],

    // Will order by an associated model's created_at using a simple association object.
    [{model: Task, as: 'Task'}, 'createdAt', 'DESC'],

    // 嵌套关联模型的 created_at 简单关联对象排序
    [{model: Task, as: 'Task'}, {model: Project, as: 'Project'}, 'createdAt', 'DESC']
  ]
  
  // 将按年龄最大值降序排列
  order: sequelize.literal('max(age) DESC')

  // 按最年龄大值升序排列，当省略排序条件时默认是升序排列
  order: sequelize.fn('max', sequelize.col('age'))

  // 按升序排列是省略排序条件的默认顺序
  order: sequelize.col('age')
})
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

 
 https://segmentfault.com/a/1190000011583806
