# DeepClone
    const { extend } = Jquery.$
    
    并没有复制原型链上的对象，其实这也不算什么深拷贝，这只复制了一层，但放在够用了，也不太影响性能

    去掉了浅拷贝的参数，什么浅拷贝你还要用jquery的？

# 用法
``` javascript
    import { extend } from './DeepClone'

    let old_obj = { test: 1 };
    let new_obj = extend({}, old_obj);

    new_obj.test = 2;
    console.log(old_obj, new_obj); // { test: 1 }, { test: 2 }
```