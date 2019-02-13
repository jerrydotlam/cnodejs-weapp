Component({
  data: {
    tags: [{
      label: '全部',
      value: 'all'
    }, {
      label: '精华',
      value: 'good'
    }, {
      label: '分享',
      value: 'share'
    }, {
      label: '问答',
      value: 'ask'
    }, {
      label: '招聘',
      value: 'job'
    }],
    activeTag: 'all'
  },
  lifetimes: {
    attached: function () {
      console.log('component %s attached', 'posttag');
    }
  },
  methods: {
    handleTagClick: function (e) {
      const $target = e.target;
      this.setData({
        activeTag: $target.dataset.value
      });
      this.triggerEvent('change', { tag: $target.dataset.value });
    }
  }
});
