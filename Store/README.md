# Store  

* 用于操作localStorage，就像jquery.cookies一样  

* 可以用链式写法  
    
# 用法  

``` javascript
    import Store from './index'

    /** 
     * 这样初始化时，输出localStorage会显示
     * Storage {
     *   length: 1,
     *   store.options.test: 1
     * }
     * */
    const local = new Store('options', { test: 1 });

    const { get, set, remove, removeAll, toObject, fromObject } = new Store();

    const targetStorage = get('targetName');

    const setTargetStorage = set('targetName');

    remove('targetName');

    removeAll();

    const getAllStorageObject = toObject();

    const mergeToStorageFromObject = fromObject({ test: 'test', true });
```

# API  
| 名称 | 说明 | 参数 |
| :------: | ----- | :------: |
| constructor | 构造函数。defaults为一个对象，先判断localStorage中是否存在defaults的key的value是否存在，不存在则set进去。name则是用在toObject里的，具体见对应方法说明。这俩参数传不传都无所谓 | new Store(name, defaults) |
| get | 根据名称获得localStorage对应值，获取前缀为store.,后缀为. | name => { return Object } |
| set | 设置localStorage键值对，前缀为store.，后缀为. | (name, value) => { return StoreInstance } |
| remove | 删除指定名称键值对 | name => { return StoreInstance } |
| removeAll | 删除所有 | () => { return StoreInstance } |
| toObject | 把localStorage字符串中的值截取出来并转成Object。实例对象中的name则是用作自定义前缀和后缀的，可以理解为split(',')中的逗号 | () => { return Object } |
| fromObject | 把Object转成字符串并合并到localStorage中，values是合并对象，merge，如果设为true，则会直接合并，否则会先清空localStorage再合并 | (values, merge) => { return StoreInstance } |