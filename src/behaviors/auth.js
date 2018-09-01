const app = getApp();

module.exports = Behavior({
  methods: {
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log(getCurrentPages());
      console.log(this.route);
      console.log('%s lifecycle: load', this.is);
      console.log(options);
      console.log('access token = ', app.globalData.accessToken);
      if (!app.globalData.accessToken) {
        // if (getCurrentPages().length <= 1) {
        //   wx.navigateTo({
        //     url: '/pages/login/login'
        //   });
        // } else {
        wx.redirectTo({
          url: '/pages/login/login'
        });
        // }
      }
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      console.log('%s lifecycle: ready', this.is);
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      console.log('%s lifecycle: show', this.is);
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
      console.log('%s lifecycle: hide', this.is);
    },
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
      console.log('%s lifecycle: unload', this.is);
    }
  }
});
