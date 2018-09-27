const sliderWidth = 96;

Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    data: {
      type: Object,
      value: {}
    }
  },
  data: {
    tabs: ['未读消息', '已读消息'],
    activeType: 'reply',
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
  methods: {
    onLoad: function () {
      wx.$
        .getSystemInfo()
        .then((res) => {
          const sliderLeft = (res.windowWidth / this.data.tabs.length - sliderWidth) / 2;
          const sliderOffset = res.windowWidth / this.data.tabs.length * this.data.activeIndex;
          this.setData({
            sliderLeft: sliderLeft,
            sliderOffset: sliderOffset
          });
        });
    },
    handleTabChange: function (e) {
      const index = parseInt(e.detail.id, 10);
      console.log(index, index === 0);
      this.setData({
        activeType: index === 0 ? 'reply' : 'topic'
      });
    }
  }
});
