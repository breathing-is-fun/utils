# Param
    const { param } = Jquery.$

致敬jquery中ajax序列化参数的方法，可以用在fetch中url参数的序列化上
    
# 用法
``` javascript
    import serialize from './index'

    let data = {
        test: 'test',
        test2: ['test3', 'test4']
    }
        
    console.log(serialize(data)) // test=test&test2%5B%5D=test3&test2%5B%5D=test4
```