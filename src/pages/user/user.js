const auth = require('../../behaviors/auth');

Component({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },
  behaviors: [auth],
  methods: {
  }
});
