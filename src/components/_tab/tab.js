Component({
  properties: {
    sliderWidth: {
      type: Number,
      value: 0
    },
    tabs: {
      type: Array,
      value: []
    }
  },
  data: {
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
  lifetimes: {
    attached: function () {
      wx.$
        .getSystemInfo()
        .then((res) => {
          if (!this.data.tabs || !this.data.tabs.length) {
            return;
          }
          console.log(res.windowWidth, this.data.tabs.length, this.data.sliderWidth);
          const sliderLeft = (res.windowWidth / this.data.tabs.length - this.data.sliderWidth) / 2;
          const sliderOffset = res.windowWidth / this.data.tabs.length * this.data.activeIndex;
          console.log(sliderLeft, sliderOffset);
          this.setData({
            sliderLeft: sliderLeft,
            sliderOffset: sliderOffset
          });
        });
    }
  },
  methods: {
    handleTabClick: function (e) {
      this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
      });
      this.triggerEvent('change', { id: e.currentTarget.id });
    }
  }
});
