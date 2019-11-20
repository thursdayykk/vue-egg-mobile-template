# 重构金融h5
> 基于 vue + vant + egg

# vant
- UI
> 官网 https://youzan.github.io/vant/#/zh-CN/quickstart
- 非全局，先引入，后使用
```js
import { Button } from 'vant';
``` 

# px2rem用法

> - 直接写px，编译后会直接转化成rem

> - 如果不想转换（用于border）

```css
    border: 1px solid #ddd; /*no*/
```

> - 在px后面添加/px/,会根据dpr的不同，生成三套代码（适用于字体）

```css
    font-size: 28px; /*px*/
```

> 编译后
 ```css
.example{
    width: 2rem;
}
[data-dpr="1"] .selector {
    font-size: 14px;
}
[data-dpr="2"] .selector {
    font-size: 28px;
}
[data-dpr="3"] .selector {
    font-size: 42px;
}
```