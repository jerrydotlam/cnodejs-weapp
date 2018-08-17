import { user } from '../../api/index';

Page({
  data: {
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
      .listMsg({ page, limit: 20, accesstoken: '7282a4e7-08ea-4473-9aec-b3675d298fec' })
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
