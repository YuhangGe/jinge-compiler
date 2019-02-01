# jinge demos

中文 | [English](./)

## 引言

`jinge` 是一款基于 `Messenger`, `Proxy` 和 `Compiler` 的前端 mvvm 框架。其中：

* `Messenger` 代表消息驱动（本质即 EventEmmiter）。
* `Proxy` 是实现数据绑定的原理（依赖 es6 的 Proxy）。
* `Compiler` 负责编译模板，以及处理组件对象（现阶段会处理构造函数）。

通过以上三个核心概念，`jinge` 框架实现了数据绑定的能力。简单来讲，`jinge` 框架的数据绑定原理是，`当存在赋值行为时，对该赋值行为影响的变量（属性）通过消息广播到 View 层；View 层收到变量（属性）有赋值行为的消息后更新该变量影响到的视图节点`。

该数据绑定的核心，不依赖 angular 那样的 dirty-checking，也不使用 react 那样的 virtual-dom，而是认为，绝大多数情况下，对变量（属性）的赋值都是会导致变量（属性）的值发生变化的，因此可以在赋值行为后立即更新视图。此外，视图的更新，只会影响到该赋值的变量（属性）相关联的节点，因此`赋值即更新视图`并不会过分牺牲性能。同时，对于默认行为会导致性能问题的极端情况，`jinge` 框架也允许手工编写类的 getter/setter 来精确控制只在变量（属性）值发生变化时才更新视图层。

需要注意的是，`jinge` 只支持`现代浏览器（chrome,ff,edge）的最新版本`，因此只适用于可不考虑浏览器兼容性问题的现代项目。