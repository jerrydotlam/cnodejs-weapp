import { user } from '../../api/index';

const app = getApp();
Page({
  data: {
    tabs: ['未读消息', '已读消息'],
    activeType: 'unread',
    rmsgs: [],
    umsgs: [],
    currentPage: 1,
    isRefreshing: true,
    isLoadingMore: false
  },
  /**
   * 获取翻页列表
   */
  getList: function (page = 1) {
    if (page === 1) {
      this.setData({
        isRefreshing: true
      });
    } else {
      this.setData({
        isLoadingMore: true
      });
    }
    user
      .listMsg({ page, limit: 20, accesstoken: app.globalData.accessToken })
      .then((res) => {
        wx.stopPullDownRefresh();
        this.setData({
          currentPage: page,
          isRefreshing: false,
          isLoadingMore: false
        });
        const { data } = res.data;
        if (page <= 1) {
          this.setData({
            rmsgs: data.has_read_messages,
            umsgs: data.hasnot_read_messages
          });
        } else {
          this.setData({
            rmsgs: this.data.rmsgs.concat(data.has_read_messages),
            umsgs: this.data.umsgs.concat(data.hasnot_read_messages)
          });
        }
      });
  },
  handleTabChange: function (e) {
    const index = parseInt(e.detail.id, 10);
    console.log(index, index === 0);
    this.setData({
      activeType: index === 0 ? 'unread' : 'read'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.getList(1);
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
    this.getList(1);
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
