const promisify = (method) => {
  return (args = {}) => {
    const $args = Object.assign({}, args);
    const $func = wx[method];
    const promise = new Promise((resolve, reject) => {
      $args.success = (res) => {
        resolve(res);
      };
      $args.fail = (err) => {
        reject(err);
      };
      $args.complete = () => {
        // what to do?
      };
      $func.call(wx, $args);
    });
    return promise;
  };
};
/**
 * 挂接到`wx`下，不覆盖原来的方法，不侵入原生接口
 * ```
 * wx.$.request(..).then(..)
 * ```
 */
const $ = {};
/**
 * 要`promisify`的方法列表，需要时再追加
 */
const promisifyMethods = [
  'request',
  'getSystemInfo'
];
/**
 * 保留给调试用
 */
$._methods = promisifyMethods; // eslint-disable-line no-underscore-dangle
/**
 * 插件入口
 */
const apply = () => {
  promisifyMethods.forEach((method) => {
    $[method] = promisify(method);
  });

  Object.defineProperty(wx, '$', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: $
  });
};

export default apply;
