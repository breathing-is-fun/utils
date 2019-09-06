# AnimationWrapper  

- router 切换时的过渡动画
- 动画效果可以自定义，毕竟出自 `animate.css`
- 实现动画的是 `react-transition-group`
- `react-router` 提供了加载和写在生命周期，`children` 是一种偷懒的写法，但如果难度更高的需求一般也够了
- 这 demo 里的效果只能从左往右，其他动画就需要生命周期里判断了