import mobx from '../../npm/mobx';
import user from '../../store/user';

Page({
  store: {
    user: user.default
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
    this.store.user.testname = 'fuck....';
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
  }
});
