import { post } from '../../api/index';

Page({
  data: {
    posts: [],
    currentPage: 1,
    isRefreshing: true,
    isLoadingMore: false
  },
  /**
   * 获取翻页列表
   */
  getList: function (page = 1, tab = '') {
    if (page === 1) {
      this.setData({
        isRefreshing: true
      });
    } else {
      this.setData({
        isLoadingMore: true
      });
    }
    post
      .page({ page, limit: 20, tab })
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
            posts: data
          });
        } else {
          this.setData({
            posts: this.data.posts.concat(data)
          });
        }
      });
  },
  /**
   * 列表项点击处理
   */
  handleDetail: function (e) {
    console.log(e);
    const target = e.currentTarget;
    wx.navigateTo({
      url: `/pages/post/detail/detail?id=${target.dataset.id}`
    });
  },
  /**
   * 生命周期回调—监听页面加载
   * @param {Object} options
   */
  onLoad: function () {
    console.log('page load');
    this.getList(1);
  },
  /**
   * 生命周期回调—监听页面显示
   */
  onShow: function () {
    console.log('page show');
  },
  /**
   * 生命周期回调—监听页面初次渲染完成
   */
  onReady: function () {
    console.log('page ready');
  },
  /**
   * 生命周期回调—监听页面隐藏
   */
  onHide: function () {
    console.log('page hide');
  },
  /**
   * 生命周期回调—监听页面卸载
   */
  onUnload: function () {
    console.log('page unload');
  },
  /**
   * 监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('page pull down refresh');
    this.getList(1);
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('page reach bottom');
    this.getList(this.data.currentPage + 1);
  },
  /**
   * 用户点击右上角转发
   */
  onShareAppMessage: function () {
    console.log('page share app message');
  },
  /**
   * 页面滚动触发事件的处理函数
   */
  onPageScroll: function () {
    console.log('page scroll');
  },
  /**
   * 当前是 tab 页时，点击 tab 时触发
   * @param {Object} item ```{index:,pagePath:,text:}```
   */
  onTabItemTap: function () {
    console.log('tab item tap');
  }
});
