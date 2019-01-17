import { post } from '../../../api/index';
import parser from '../../../lib/parser';

const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    post: {},
    nodes: ''
  },
  getDetail: function (id) {
    post
      .info({ topicId: id })
      .then((res) => {
        const { data } = res.data;
        this.setData({
          post: data
        });
        parser
          .parse(data.content)
          .then((result) => {
            console.log(result);
            this.setData({
              nodes: result
            });
          });
      });
  },
  /**
   * 评论项点击处理
   * @param {*} e
   */
  handleReplyItemTap: function (e) {
    console.log(e);
    const $target = e.target;
    const replyId = $target.dataset.replyId;
    post
      .upReply({ replyId, accesstoken: app.globalData.accessToken })
      .then((res) => {
        console.log(res);
        const data = res.data;
        if (data.success) {
          post.replies.forEach((item) => {
            if (data.action === 'up') {
              item.ups.push();
            } else {
              // 移除支持者
            }
          });
        } else {
          // TODO 提示错误
        }
      });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.getDetail(options.id);
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
