browserify ./lib/parser.js -s parser -o src/lib/parser.js

# lib用于存放对node modules的包装引入，通过打包放入到小程序文件目录下，并且不允许在小程序目录下进行编辑

https://github.com/arloliu/copy-node-modules#readme
http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html
解决如果通过`npm scripts`的钩子将npm包安装好后自动同步到小程序目录里

https://cn.mobx.js.org/refguide/observable.html
https://www.jianshu.com/p/552485bdbd37
https://github.com/Vizn/wechat_ticket/tree/master/libs
状态管理解决方案

https://blog.csdn.net/abs1004/article/details/79188197
https://blog.csdn.net/qq_31383345/article/details/60574200
Promisify解决方案

bignumber
https://github.com/MikeMcl/bignumber.js/blob/master/bignumber.js

