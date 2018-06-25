# Store  

* 用于操作localStorage，就像jquery.cookies一样  
    
# 用法  

``` javascript
    import Store from './Store'

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
| constructor | 构造函数 | new Store(name, defaults) |
| get | 根据名称获得localStorage对应值，获取前缀为store.,后缀为. | name => { return Object } |
| set | 设置localStorage键值对，前缀为store.，后缀为. | (name, value) => { return StoreInstance } |
| remove | 删除指定名称键值对 | name => { return StoreInstance } |
| removeAll | 删除所有 | () => { return StoreInstance } |
| toObject |  |  |
| fromObject |  |  |