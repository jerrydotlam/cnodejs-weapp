import { post } from '../../api/index';
import mobx from '../../npm/mobx';
import user from '../../store/user';

Page({
  store: {
    user: user.default
  },
  data: {
    posts: [],
    fetcher: {
      page: (params) => {
        return post.page(params);
      }
    },
    currentPage: 1,
    isRefreshing: true,
    isLoadingMore: false
  },
  // /**
  //  * 获取翻页列表
  //  */
  // getList: function (event) {
  //   const { page } = event.detail;
  //   post
  //     .page({ page, limit: 10, tab: '' })
  //     .then((res) => {
  //       wx.stopPullDownRefresh();
  //       const { data } = res.data;
  //       this.$list.setPageData(page, data);
  //     });
  // },
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
    this.store = mobx.observable(this.store);
    console.log(this.store);
    this.$autorun = mobx.autorun(() => {
      console.log('autorun', this.store);
      this.update();
    });
    console.log('page load');
    this.$list = this.selectComponent('#post-list-comp');
    this.$list.getPageData();
  },
  update: function () {
    // console.log('_update');
    var props = this.store || {};
    // console.log(toJS(props))
    // console.log('--------------------------', props.user.testname);
    this.setData({ props: mobx.toJS(props) });
    // this.props = this.props ? toJS(this.props): {}
  },
  /**
   * 生命周期回调—监听页面显示
   */
  onShow: function () {
    console.log('page show');
    this.store.user.testname = 'fuck';
    // this.store.user.updateTestname('....');
    this.store.user.updateTestlist();
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
    if (this.$autorun) {
      this.$autorun();
    }
  },
  /**
   * 监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('page pull down refresh');
    this.$list.getPageData();
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('page reach bottom');
    this.$list.getMore();
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
