## 源文件目录说明

+ api        - 与服务端接口请求数据
+ behaviors  - 组件扩展，类似`mixin`
+ components - 无状态组件
+ filters    - 过滤器，用来在标签内执行函数，全部必须为`wxs`文件
+ npm        - 外部引入的npm包文件，只读
+ pages      - 页面入口
+ plugins    - 插件，对应用的扩展
+ utils      - 工具类

## 需要优化

+ npm导入，目前的方式并不优雅，应该可以直接分析npm包的main入口的全部依赖，复制到小程序目录下
+ 如何实现`this.data = **`的写法，参考wepy2的实现，应该就是DSL生成App, Page, Component的配置对象即可，面向配置编程=。=
+ 如何实现状态管理，目前能想到的方案是Redux和Mobx

## 参考资料

+ [https://github.com/arloliu/copy-node-modules#readme](https://github.com/arloliu/copy-node-modules#readme)
+ [解决如果通过`npm scripts`的钩子将npm包安装好后自动同步到小程序目录里](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)
+ [https://cn.mobx.js.org/refguide/observable.html](https://cn.mobx.js.org/refguide/observable.html)
+ [https://www.jianshu.com/p/552485bdbd37](https://www.jianshu.com/p/552485bdbd37)
+ [状态管理解决方案](https://github.com/Vizn/wechat_ticket/tree/master/libs)
+ [https://blog.csdn.net/abs1004/article/details/79188197](https://blog.csdn.net/abs1004/article/details/79188197)
+ [Promisify解决方案](https://blog.csdn.net/qq_31383345/article/details/60574200)
+ [bignumber](https://github.com/MikeMcl/bignumber.js/blob/master/bignumber.js)
