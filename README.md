# 小程序“灵动岛💊”

## 简介

**clever-island** 是一款微信小程序导航栏，通过简单的属性配置即可使用，通过**灵动岛**全新的交互方式，使信息更快更高效触达用户。

<br />

## 效果图

![效果图](https://s3.bmp.ovh/imgs/2022/10/11/759475e1bcd33664.png)

<br />

## 亮点

1. ✅保证`安卓`和`IOS`显示效果一致
2. 拓展🉑️同时显示`返回上一页`和`返回首页`
3. 点击标题🉑️返回顶部
4. 长按标题开启灵动岛
5. 预留slot进行灵动岛拓展

<br />

## 使用

### 初始化项目

```bash
npm init
```



### 安装

```bash
npm i @chenbz/clever-island
```



### 构建npm

**工具** => **构建npm**



### 使用

导入

```
/pages/home/index.json
{
    "usingComponents": {
        "NavBar": "@chenbz/clever-island"
    }
}
```

使用

```html
<view>
    <NavBar title="测试标题" id="islandDom">
自定义灵动内容
    </NavBar>
</view>
```

手动触发灵动岛

```js
// pages/home/index.js
Page({
    onLoad(options) {

        const islandDom = this.selectComponent("#islandDom");

        setTimeout(() => {
          // 显示灵动岛
          islandDom.showIslandContent();
        }, 2000)

        setTimeout(() => {
          // 关闭灵动岛
          islandDom.hidesIslandContent();
        }, 6000)
    },
})
```



<br />

## 属性

| 属性          | 描述             | 默认值      |
| ------------- | ---------------- | ----------- |
| title         | 标题             | hello world |
| showGoBack    | 显示返回按钮     | false       |
| showHome      | 显示返回主页按钮 | false       |
| position      | 是否开启绝对定位 | false       |
| bgColor       | 导航栏背景颜色   | white       |
| islandBgColor | 灵动岛背景颜色   | white       |

<br />

## 更新日志

- 2022-10-11 初次提交
