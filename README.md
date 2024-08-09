# 多页签组件（vue3版）
***vue3版本***


## 预览
	clone项目后npm run preview即可


## 安装
	npm i vue-tabs-plus
	// 需要安装前置依赖组件，已安装请忽略
	npm i vue-router
	// 开启国际化需要安装组件，已安装请忽略
	npm i vue-i18n


## 使用
	import vueTabsPlus from "vue-tabs-plus";
	import "vue-tabs-plus/index.css";
	
	app.use(vueTabsPlus);


## 0. 可改动样式变量
* `--box-height`：44px;-->多页签高度

* `--box-bg`：#fff(黑夜模式:rgb(24, 24, 28));-->多页签背景色

* `--item-active-color`：rgba(24, 144, 255, 1);-->高亮色：chrome模式激活触摸关闭按钮颜色；button模式激活触摸字体、关闭按钮颜色

* `--item-icon-color`：rgb(156, 163, 175);-->非激活状态时关闭按钮颜色

* `--card-height`：30px;-->button模式每一项高度

* `--card-active-color-1`：rgba(24, 144, 255, 0.1);-->button模式激活触摸状态背景色

* `--card-active-color-3`：rgba(24, 144, 255, 0.3);-->button模式激活触摸状态边框颜色

* `--chrome-height`：36px;-->chrome模式每一项高度

* `--chrome-bg-hover`：#dee1e6(黑夜模式:#3f3c37);-->chrome模式触摸时背景色

* `--chrome-bg-active`：#c5d7ff(黑夜模式:#1d3253);-->chrome模式激活时背景色


## 1. 参数
	单项字段说明：会自动读取vue-router中的route对象
	标题：route.meta.title
	自定义标题（优先级高于标题，受i18n影响，常用例如：新增/编辑页，如果路由有权限影响，建议创建两个路由即可，如果不在乎权限可以使用该字段替换原固定标题）：route.query.diyTitle
	补充标题（会拼到标题后面，方便区分multiple时的项，不受i18n影响）：route.query.tabsSupTit
	name值（默认状态下的重复唯一值校验）：route.name
	path值（multiple状态下的重复唯一值校验；跳转相关事件都是以该字段进行跳转）：route.fullPath
	icon：route.name.icon<{type:x,icon:x,attrs:x}>
	//
	// attrs的值会v-bind到对应dom上
	// type的值，有以下四种情况：
	// custom，此时为自定义组件,icon为组件名（！！！未内置，确保当前页面或全局已引入）
	// el，此时为el-icon,icon为图标组件名（！！！未内置，确保当前页面或全局已引入）
	// iconfont，此时为iconfont，icon为图标去掉icon-后部分（！！！未内置，确保当前页面或全局已引入）
	// 其他，此时为本地自定义图标，type为class，icon为内容
	//

* `type`：tab样式类型，校验变量只能为'button'/'chrome'-->String;非必传;默认*'button'*

* `i18n`：标题是否开启国际化-->Boolean;非必传;默认*false*

* `multiple`：同一个路由允许存在多页签（fullPath不同）-->Boolean;非必传;默认*false*

* `leftIcon`：向左移动图标-->Object;非必传;默认*{icon:'＜'}*
>
	attrs的值会v-bind到对应dom上
	type的值，有以下四种情况
	// custom，此时为自定义组件,icon为组件名（！！！未内置，确保当前页面或全局已引入）
	// el，此时为el-icon,icon为图标组件名（！！！未内置，确保当前页面或全局已引入）
	// iconfont，此时为iconfont，icon为图标去掉icon-后部分（！！！未内置，确保当前页面或全局已引入）
	// 其他，此时为本地自定义图标，type为class，icon为内容
>

* `rightIcon`：向右移动图标-->Object;非必传;默认*{icon:'＞'}*
>
	attrs的值会v-bind到对应dom上
	type的值，有以下四种情况
	// custom，此时为自定义组件,icon为组件名（！！！未内置，确保当前页面或全局已引入）
	// el，此时为el-icon,icon为图标组件名（！！！未内置，确保当前页面或全局已引入）
	// iconfont，此时为iconfont，icon为图标去掉icon-后部分（！！！未内置，确保当前页面或全局已引入）
	// 其他，此时为本地自定义图标，type为class，icon为内容
>

* `closeIcon`：关闭图标-->Object;非必传;默认*{icon:'x'}*
>
	attrs的值会v-bind到对应dom上
	type的值，有以下四种情况
	// custom，此时为自定义组件,icon为组件名（！！！未内置，确保当前页面或全局已引入）
	// el，此时为el-icon,icon为图标组件名（！！！未内置，确保当前页面或全局已引入）
	// iconfont，此时为iconfont，icon为图标去掉icon-后部分（！！！未内置，确保当前页面或全局已引入）
	// 其他，此时为本地自定义图标，type为class，icon为内容
>

* `@reloadPage`：点击重新加载页面按钮触发
>
	这里给出两种方式示例：
	1. 重新加载router-view组件
	2. 跳转到一个空白页，然后再跳转replace回当前页面
>


## 2. 方法
* `dealSize`：重新计算当前元素尺寸-->当开启了i18n、页面尺寸未变但容器尺寸改变时，需要手动触发改方法


## 更多vue3组件
[**自定义右键菜单**](https://github.com/QuietHear/vue-diy-rightmenu-plus '右键新窗口浏览') | [**拖拽卡片布局组件**](https://github.com/QuietHear/vue-drag-component-plus '右键新窗口浏览') | [**可拖拽菜单**](https://github.com/QuietHear/vue-drag-menu-plus '右键新窗口浏览') | [**echarts组件**](https://github.com/QuietHear/vue-echarts-block-plus '右键新窗口浏览') | [**基于el-menu的菜单组件**](https://github.com/QuietHear/vue-ele-nav-plus '右键新窗口浏览') | [**面包屑组件**](https://github.com/QuietHear/vue-permission-breads-plus '右键新窗口浏览') | [**滑动拼图**](https://github.com/QuietHear/vue-puzzle-slider-plus '右键新窗口浏览') | [**工作日历**](https://github.com/QuietHear/vue-shop-calendar-plus '右键新窗口浏览') | ***多页签组件*** | [**uEditor**](https://github.com/QuietHear/vue-ueditor-block-plus '右键新窗口浏览') | [**wangEditor**](https://github.com/QuietHear/vue-wangEditor-block-plus '右键新窗口浏览') | [**年密度组件**](https://github.com/QuietHear/vue-year-density-plus '右键新窗口浏览')