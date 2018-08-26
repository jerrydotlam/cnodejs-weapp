import { user } from '../../api/index';

const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },
  handleScan: function (e) {
    console.log(e);
    wx.scanCode({
      success: (resp) => {
        console.log(resp);
        if (resp && resp.scanType) {
          user
            .login({ accesstoken: resp.result })
            .then((res) => {
              console.log(res);
              app.globalData.accessToken = resp.result;
              wx.switchTab({
                url: '/pages/user/user'
              });
            });
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  }
});
