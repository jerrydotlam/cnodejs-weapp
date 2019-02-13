import parser from '../../lib/parser';

Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    reply: {
      type: Object,
      value: {}
    }
  },
  lifetimes: {
    attached: function () {
      parser
        .parse(this.data.reply.content)
        .then((result) => {
          this.setData({
            'reply.nodes': result
          });
        });
    }
  }
});
