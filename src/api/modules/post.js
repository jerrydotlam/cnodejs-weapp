/**
 * see https://cnodejs.org/api
 */
export default {
  /**
   * 主题首页
   */
  page: {
    path: 'topics',
    method: 'GET'
  },
  /**
   * 主题详情
   */
  info: {
    path: 'topic/:topicId',
    method: 'GET'
  },
  /**
   * 新建主题
   */
  create: {
    path: 'topic',
    method: 'POST'
  },
  /**
   * 编辑主题
   */
  update: {
    path: 'topics/update',
    method: 'POST'
  },
  /**
   * 收藏主题
   */
  createCollect: {
    path: 'topic_collect/collect',
    method: 'POST'
  },
  /**
   * 取消收藏主题
   */
  removeCollect: {
    path: 'topic_collect/de_collect',
    method: 'POST'
  },
  /**
   * 用户所收藏的主题
   */
  listCollect: {
    path: 'topic_collect/:username',
    method: 'GET'
  },
  /**
   * 新建评论
   */
  createReply: {
    path: 'topic/:topicId/replies',
    method: 'POST'
  },
  /**
   * 为评论点赞
   */
  upReply: {
    path: 'reply/:replyId/ups',
    method: 'POST'
  }
};
