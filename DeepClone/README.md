# DeepClone
    const { extend } = Jquery.$

并没有复制原型链上的对象，其实这也不算什么深拷贝，这只复制了一层，但放在够用了，也不太影响性能

所谓深拷贝，一个用法是，独立两个对象，更改后互不影响；
    
另一个用法就是单纯为了复制对象类型了，Object.assign复制后的对象类型是Object，比如复制个Date，里面属性全有但不是Date对象。然后这方法能复制对象类型。

~~去掉了浅拷贝的参数，什么浅拷贝你还要用jquery的？~~  （嗨呀好气呀，自己打自己脸了）
    
# 用法
``` javascript
    import extend from './DeepClone'

    let old_obj = { test: 1 };
    let new_obj = extend({}, old_obj);

    new_obj.test = 2;
    console.log(old_obj, new_obj); // { test: 1 }, { test: 2 }
```