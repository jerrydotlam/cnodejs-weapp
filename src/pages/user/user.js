import { user } from '../../api/index';
import auth from '../../behaviors/auth';

const app = getApp();
Component({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      loginName: '',
      avatarUrl: '',
      score: 0,
      createAt: '',
      recentTopics: []
    }
  },
  behaviors: [auth],
  methods: {
    /**
     * 生命周期回调—监听页面加载
     * @param {Object} options
     */
    onLoad: function () {
      console.log('page load');
    },
    onShow: function () {
      console.log('page show');
      const { loginName } = app.globalData.userInfo || {};
      user
        .info({ loginName })
        .then((resp) => {
          const { data, success } = resp.data;
          if (success) {
            this.setData({
              userInfo: {
                loginName: data.loginname,
                avatarUrl: data.avatar_url,
                score: data.score,
                createAt: data.create_at,
                recentTopics: data.recent_topics,
                recentReplies: data.recent_replies
              }
            });
          } else {
            wx.showToast({
              title: '查询用户失败',
              icon: 'none'
            });
          }
        });
    },
    /**
     * 点击 tab 时触发
     */
    onTabItemTap: function (item) {
      console.log('=======', item);
    }
  }
});
