// app.js
App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   * @param {Object} options
   */
  onLaunch: function () {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // });
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo;

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res);
    //           }
    //         }
    //       });
    //     }
    //   }
    // });
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * @param {Object} options
   */
  onShow: function () {
    console.log('app show');
    // this.api();
  },
  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('app hide');
  },
  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function () {
    console.log('app error');
  },
  /**
   * 当小程序出现要打开的页面不存在的情况，会带上页面信息回调该函数
   * ```
   * path - [String] 不存在页面的路径
   * query - [Object] 打开不存在页面的 query
   * isEntryPage - [Boolean] 是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面）
   * ```
   * @param {Object} options
   */
  onPageNotFound: function () {
    console.log('app page not found');
  },
  /**
   * 可以添加任意的函数或数据到 Object 参数中，用`this`可以访问
   */
  // api: function (url, data) {
  //   const promise = new Promise((resolve, reject) => {
  //     wx.request({
  //       url: url,
  //       data: data,
  //       header: {},
  //       method: 'POST',
  //       dataType: 'json',
  //       success: (res) => {
  //         resolve(res);
  //       },
  //       fail: (err) => {
  //         reject(err);
  //       }
  //     });
  //   });
  //   return promise;
  // },
  globalData: {
    userInfo: null
  }
});
