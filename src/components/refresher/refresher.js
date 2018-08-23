Component({
  /**
   * 组件的对外属性
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
  },
  /**
   * 组件的内部数据，和 properties 一同用于组件的模版渲染
   */
  data: {
    pager: {
      size: 10,
      curr: 0
    },
    isRefreshing: true, // 因为一开始没有数据，所以一开始必然是刷新数据
    isLoadingMore: false
  },
  /**
   * 组件的方法，包括事件响应函数和任意的自定义方法
   */
  methods: {
    getPageData: function (page = 1) {
      if (page === 1) {
        this.setData({
          isRefreshing: true,
          isLoadingMore: false
        });
      } else {
        this.setData({
          isRefreshing: false,
          isLoadingMore: true
        });
      }
      this.triggerEvent('fetchData', page);
    },
    handleTap: function (e) {
      const target = e.currentTarget;
      wx.navigateTo({
        url: `/pages/post/detail/detail?id=${target.dataset.id}`
      });
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
