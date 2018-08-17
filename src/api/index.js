import apis from './modules/index';

/**
 * 当前要显示的loading请求数
 */
let loadingCount = 0;
/**
 * 显示全局Loading
 * @param {Object} args
 */
const showLoading = (args) => {
  loadingCount += 1;
  if (loadingCount > 0) {
    wx.showLoading({
      mask: args.mask,
      title: args.title
    });
  }
};
/**
 * 隐藏全局Loading
 */
const hideLoading = () => {
  loadingCount -= 1;
  if (loadingCount <= 0) {
    wx.hideLoading();
  }
};
/**
 * 发起后台请求
 * @param {Object} args 见：https://developers.weixin.qq.com/miniprogram/dev/api/network-request.html
 * @param {*} config 辅助配置
 */
const fetch = (args = {}, config = {}) => {
  if (config.showLoading) {
    // show global loading
    showLoading(config);
  }
  const $args = Object.assign({}, args);
  const promise = new Promise((resolve, reject) => {
    // const succ = args.success;
    // const fail = args.fail;
    $args.success = (res) => {
      if (config.showLoading) {
        hideLoading();
      }
      resolve(res);
    };
    $args.fail = (err) => {
      if (config.showLoading) {
        hideLoading();
      }
      reject(err);
    };
    wx.request($args);
  });
  return promise;
};
/**
 * 上下文路径
 */
const context = 'https://cnodejs.org/api/v1';
/**
 * 替换URL中的占位符
 * @param {string} url 定义的URL
 * @param {object} params 参数表
 */
const replaceArgs = (url, params = {}) => {
  return url.replace(/(:[a-zA-Z]+)/g, ($0) => {
    const key = $0.substr(1);
    return params[key] === undefined ? $0 : params[key];
  });
};
/**
 * 注册API列表
 * @param {object} apiMap API列表
 */
const resigstApi = (apiMap = {}) => {
  const objects = {};
  Object.keys(apiMap).forEach((key) => {
    objects[key] = (params, config) => {
      const value = apiMap[key];
      const args = {
        dataType: 'json',
        method: value.method || 'GET',
        data: params
      };
      if (typeof value === 'string') {
        args.url = `${context}/${replaceArgs(value, params)}`;
      } else if (typeof value === 'object') {
        args.url = `${value.origin ? '' : context}/${replaceArgs(value.path, params)}`;
      } else {
        throw new Error(`Incorrect api config: ${key}`);
      }

      return fetch(args, config);
    };
  });

  return objects;
};

export const post = resigstApi(apis.post);
export const user = resigstApi(apis.user);
