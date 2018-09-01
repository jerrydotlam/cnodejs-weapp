const auth = require('../../behaviors/auth');

Component({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      score: '10',
      loginname: 'jerrydotlam',
      email: 'jerrydotlam@gmail.com',
      website: 'www.jerrylin.cc',
      location: '中国-广东-深圳',
      weibo: '',
      github: '',
      signature: '这家伙很懒，什么个性签名都没有留下。'
    }
  },
  behaviors: [auth],
  methods: {
    /**
     * 点击 tab 时触发
     */
    onTabItemTap: function (item) {
      console.log('=======', item);
    }
  }
});
