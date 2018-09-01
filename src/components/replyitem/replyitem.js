Component({
  properties: {
    reply: {
      type: Object,
      value: {}
    }
  },
  methods: {
    handleTap: function (e) {
      const target = e.currentTarget;
      console.log(target);
      // wx.navigateTo({
      //   url: `/pages/post/detail/detail?id=${target.dataset.id}`
      // });
    }
  }
});
