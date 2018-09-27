import promisify from './plugins/promisify';

App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   * @param {Object} options
   */
  onLaunch: function () {
    promisify();

    const user = wx.getStorageSync('user');
    if (user) {
      this.globalData.userInfo = user;
      this.globalData.accessToken = user.accessToken;
    }
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * @param {Object} options
   */
  onShow: function () {
    console.log('app show');
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
  globalData: {
    accessToken: '',
    userInfo: null
  }
});
