Component({
  /**
   * 组件的对外属性
   */
  properties: {
    /**
     * 最大列表长度，超过该长度不再向下滚动获取数据
     */
    maxLength: {
      type: Number,
      value: 30
    },
    /**
     * 数据访问对象，需要有`page`函数
     */
    fetcher: Object,
    /**
     * 外部对象的额外参数对象
     */
    payload: Object
  },
  /**
   * 组件的内部数据，和 properties 一同用于组件的模版渲染
   */
  data: {
    list: [],
    page: {
      size: 10,
      curr: 0
    },
    hasMoreData: true, // 一开始，假设有更多数据
    isRefreshing: false, // 因为一开始没有数据，所以一开始必然是刷新数据
    isLoadingMore: false
  },
  /**
   * 组件的方法，包括事件响应函数和任意的自定义方法
   */
  methods: {
    getPageData: function (page = 1) {
      if (page > 1 && !this.data.hasMoreData) {
        return;
      }
      if (page === 1) {
        this.setData({
          hasMoreData: true,
          isRefreshing: true,
          isLoadingMore: false
        });
      } else {
        this.setData({
          hasMoreData: true,
          isRefreshing: false,
          isLoadingMore: true
        });
      }
      const params = Object.assign({}, this.data.payload,
        { page, limit: this.data.page.size });
      if (this.data.fetcher && typeof this.data.fetcher.page === 'function') {
        this.data.fetcher
          .page(params)
          .then((res) => {
            wx.stopPullDownRefresh();
            const { data } = res.data;
            this.setPageData(page, data);
          })
          .catch((err) => {
            wx.stopPullDownRefresh();
            console.warn(err);
          });
      } else {
        this.triggerEvent('fetchData', { params });
      }
    },
    setPageData: function (page, dataList) {
      // 如果是第一页，数据全部清空
      const list = page <= 1 ? dataList : this.data.list.concat(dataList);
      const hasMoreData = dataList.length >= this.data.page.size
        && list.length < this.data.maxLength;
      this.setData({
        list: list,
        'page.curr': page,
        hasMoreData,
        isRefreshing: false,
        isLoadingMore: false
      });
    },
    getMore: function () {
      this.getPageData(this.data.page.curr + 1);
    },
    handleTap: function (e) {
      this.triggerEvent('tapDetail', e);
    }
  },
  /**
   * 组件生命周期声明对象
   */
  lifetimes: {
    /**
     * 生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用`setData`
     */
    created: function () {
      console.log('component created');
    },
    /**
     * 生命周期函数，在组件实例进入页面节点树时执行
     */
    attached: function () {
      console.log('component attached');
    },
    /**
     * 生命周期函数，在组件布局完成后执行，此时可以获取节点信息（`SelectorQuery`）
     */
    ready: function () {
      console.log('component ready');
    },
    /**
     * 生命周期函数，在组件实例被移动到节点树另一个位置时执行
     */
    moved: function () {
      console.log('component moved');
    },
    /**
     * 生命周期函数，在组件实例被从页面节点树移除时执行
     */
    detached: function () {
      console.log('component detached');
    }
  },
  /**
   * 组件所在页面的生命周期声明对象
   */
  pageLifetimes: {
    show: function () {
      console.log('component page lifetimes show');
    },
    hide: function () {
      console.log('component page lifetimes hide');
    }
  }
});
