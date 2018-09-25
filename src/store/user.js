import mobx from '../npm/mobx';

const User = function () {
  mobx.extendObservable(this, {
    testname: 'name',
    testlist: []
  });
  this.updateTestname = function (name) {
    this.testname = name;
    // setTimeout(() => {
    //   this.testname = name;
    //   console.log('=============', this.testname);
    // }, 2000);
  };
  this.updateTestlist = function () {
    this.testlist.push({
      a: 1
    });
    console.log('=============', this.testlist);
  };
};

exports.default = new User();
