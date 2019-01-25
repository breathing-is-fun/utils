# WebpackRelease

- `output.libraryTarget` 如果是 `commonjs2`，那么打包出来的模块可以用 `fetch` 加载，可以 `new` 出 `模块.default`，是一个跨类库，比如 `react` 和 `vue`，引用现有模块的 `hack`

- 加载的粗略实现在 `/ModulesLoader`，可以往加载模块中传参，也就是说可以像下面这样

```jsx
import React from "react";
import ReactDOM from "react-dom";

// 假设是 react 模块
import TargetModule from ".";

export default class Wrapper {
  // root 是 dom 挂载节点
  // tool 是来自父模块的自定义参数
  constructor(root, tool) {
    ReactDOM.render(<TargetModule tool={tool} />, root);
  }
}
```

- 因为对浏览器来说，只要是 js 就能执行，所以这个方法可以跨技术栈
