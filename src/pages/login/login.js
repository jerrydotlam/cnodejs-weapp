import { user } from '../../api/index';

const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLoading: false
  },
  handleScan: function () {
    wx.$.scanCode()
      .then((resp) => {
        console.log(resp);
        if (resp && resp.scanType === 'QR_CODE') {
          this.setData({
            isLoading: true
          });
          user
            .login({ accesstoken: resp.result })
            .then((res) => {
              this.setData({
                isLoading: false
              });
              const data = res.data;
              if (data && data.success) {
                app.globalData.accessToken = resp.result;
                app.globalData.userInfo = {
                  id: data.id,
                  loginName: data.loginname,
                  avatarUrl: data.avatar_url,
                  accessToken: resp.result
                };
                wx.setStorage({
                  key: 'user',
                  data: app.globalData.userInfo
                });
                wx.switchTab({
                  url: '/pages/user/user'
                });
              } else {
                wx.showToast({
                  title: '二维码验证失败',
                  icon: 'none'
                });
              }
            })
            .catch(() => {
              this.setData({
                isLoading: false
              });
              wx.showToast({
                title: '服务出问题了～',
                icon: 'none'
              });
            });
        } else {
          wx.showToast({
            title: '请重新扫描二维码',
            icon: 'none'
          });
        }
      })
      .catch(() => {
        wx.showToast({
          title: '请重新扫描二维码',
          icon: 'none'
        });
      });
    // wx.scanCode({
    //   success: (resp) => {
    //     console.log(resp);
    //     if (resp && resp.scanType) {
    //       user
    //         .login({ accesstoken: resp.result })
    //         .then((res) => {
    //           console.log(res);
    //           app.globalData.accessToken = resp.result;
    //           wx.switchTab({
    //             url: '/pages/user/user'
    //           });
    //         });
    //     }
    //   }
    // });
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
