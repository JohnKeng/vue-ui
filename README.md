# 練習自造組件

這是我在學習Vue過程做的組件，希望對你有用。

## Quick start
- Clone the repo: `git clone https://github.com/JohnKeng/vue-ui.git`.
Run `npx parcel --no-cache`.

## 開始使用
1.  使用本框架前，請在 CSS 中開啟 border-box

```
*,*::before,*::after { box-sizing: border-box; }
```
僅支援 IE 8 以上瀏覽器

所有組件默認變量
```
html {
    --font-size: 14px;
    --color: rgb(5, 5, 5);
    --button-height: 32px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 1px;
    --border-color: #999;
    --border-color-hover: #666;
    }
```
僅支援 IE 8 以上瀏覽器

2. 安裝
 ```
  npm i --save jk-vue
```

3. 引入
```
import {Button, ButtonGroup, Icon} from 'jk-vue'
import 'jk-vue/dist/index.css'

export default {
name: 'app',
components: {
    'my-button': Button,
    'my-icon': Icon,
    'my-button-group': ButtonGroup,
}
}
```



## 文檔

## 提問

## 變更記錄

## 聯繫方式

## 貢獻代碼