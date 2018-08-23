Component({
  properties: {
    post: {
      type: Object,
      value: {}
    }
  },
  methods: {
    handleTap: function (e) {
      const target = e.currentTarget;
      wx.navigateTo({
        url: `/pages/post/detail/detail?id=${target.dataset.id}`
      });
    }
  }
});
