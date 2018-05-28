// pages/takeLessons/lessonList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tack_list: [
      { "name": "张思佳01", "sex": 0, "area": "上海", "address": "静安", "age": "15", "grade": "初二", "ce": "上册", "subject": "数学", "publish": "人教版", "data": 1523672882846, "weekday": "周日", "time": "14:00-16:00", "state": 1 },
      { "name": "张思佳02", "sex": 0, "area": "上海", "address": "静安", "age": "15", "grade": "初二", "ce": "上册", "subject": "数学", "publish": "人教版", "data": 1523672882846, "weekday": "周日", "time": "14:00-16:00", "state": 1 },
      { "name": "张思佳03", "sex": 0, "area": "上海", "address": "静安", "age": "15", "grade": "初二", "ce": "上册", "subject": "数学", "publish": "人教版", "data": 1523672882846, "weekday": "周日", "time": "14:00-16:00", "state": 1 },
      { "name": "张思佳04", "sex": 0, "area": "上海", "address": "静安", "age": "15", "grade": "初二", "ce": "上册", "subject": "数学", "publish": "人教版", "data": 1523672882846, "weekday": "周日", "time": "14:00-16:00", "state": 1 },
      { "name": "张思佳05", "sex": 0, "area": "上海", "address": "静安", "age": "15", "grade": "初二", "ce": "上册", "subject": "数学", "publish": "人教版", "data": 1523672882846, "weekday": "周日", "time": "14:00-16:00", "state": 1 },
      { "name": "张思佳06", "sex": 0, "area": "上海", "address": "静安", "age": "15", "grade": "初二", "ce": "上册", "subject": "数学", "publish": "人教版", "data": 1523672882846, "weekday": "周日", "time": "14:00-16:00", "state": 1 },
      { "name": "张思佳07", "sex": 0, "area": "上海", "address": "静安", "age": "15", "grade": "初二", "ce": "上册", "subject": "数学", "publish": "人教版", "data": 1523672882846, "weekday": "周日", "time": "14:00-16:00", "state": 1 },
      { "name": "张思佳08", "sex": 0, "area": "上海", "address": "静安", "age": "15", "grade": "初二", "ce": "上册", "subject": "数学", "publish": "人教版", "data": 1523672882846, "weekday": "周日", "time": "14:00-16:00", "state": 1 },
      { "name": "张思佳09", "sex": 0, "area": "上海", "address": "静安", "age": "15", "grade": "初二", "ce": "上册", "subject": "数学", "publish": "人教版", "data": 1523672882846, "weekday": "周日", "time": "14:00-16:00", "state": 1 },
      { "name": "张思佳10", "sex": 0, "area": "上海", "address": "静安", "age": "15", "grade": "初二", "ce": "上册", "subject": "数学", "publish": "人教版", "data": 1523672882846, "weekday": "周日", "time": "14:00-16:00", "state": 1 },
      { "name": "张思佳11", "sex": 0, "area": "上海", "address": "静安", "age": "15", "grade": "初二", "ce": "上册", "subject": "数学", "publish": "人教版", "data": 1523672882846, "weekday": "周日", "time": "14:00-16:00", "state": 1 },
      { "name": "张思佳12", "sex": 0, "area": "上海", "address": "静安", "age": "15", "grade": "初二", "ce": "上册", "subject": "数学", "publish": "人教版", "data": 1523672882846, "weekday": "周日", "time": "14:00-16:00", "state": 1 },
      { "name": "张思佳13", "sex": 0, "area": "上海", "address": "静安", "age": "15", "grade": "初二", "ce": "上册", "subject": "数学", "publish": "人教版", "data": 1523672882846, "weekday": "周日", "time": "14:00-16:00", "state": 1 },
      { "name": "张思佳14", "sex": 0, "area": "上海", "address": "静安", "age": "15", "grade": "初二", "ce": "上册", "subject": "数学", "publish": "人教版", "data": 1523672882846, "weekday": "周日", "time": "14:00-16:00", "state": 1 }
    ],
    my_list: [
      { "name": "张思佳01", "sex": 0, "area": "上海", "address": "静安", "age": "15", "grade": "初二", "ce": "上册", "subject": "数学", "publish": "人教版", "data": 1523672882846, "weekday": "周日", "time": "14:00-16:00", "state": 2 }
    ],
    lesson_list: [],
    tab_type: "tack",
    top_text: "可能适合您的试听课",
    height: "",
    searchList: [],
  },

  // 上拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading();
    wx.startPullDownRefresh();
    setTimeout(function () {

      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight
        })
      }
    });
    this.refreshData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获得lessonInfo组件
    this.lessonInfo = this.selectComponent("#lessonInfo");
    this.lessonDetail = this.selectComponent("#lessonDetail");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 点击抢课
  _stackLesson(event) {
    var index = event.detail.index;
    this.data.lesson_list[index].state = 2;
    this.data.my_list.push(this.data.lesson_list[index]);
    this.data.lesson_list.splice(index, 1);
    this.setData({
      lesson_list: this.data.lesson_list,
      my_list: this.data.my_list
    });
    this.lessonDetail.hide();
  },
  // 残忍拒绝
  _reject(event){
    var index = event.detail.index;
    this.data.lesson_list.splice(index, 1);
    this.setData({
      lesson_list: this.data.lesson_list,
      my_list: this.data.my_list
    });
    this.lessonDetail.hide();
  },
  // 查看课程详情
  _openDetail(event) {
    this.lessonDetail.show();
    this.lessonDetail.refreshData(event.detail);
  },
  // 切换tab
  switch(event) {
    var type = event.currentTarget.dataset.tabType;
    if (type != this.data.tab_type) {
      if (type == "tack") {
        this.setData({
          tab_type: "tack",
          top_text: "可能适合您的试听课",
          lesson_list: this.data.tack_list
        });
      } else {
        this.setData({
          tab_type: "my",
          top_text: "您已抢到的试听课",
          lesson_list: this.data.my_list
        });
      };
    };
  },

  refreshData: function () {
    if (this.data.tab_type == "tack") {
      this.setData({
        lesson_list: this.data.tack_list
      });
    } else {
      this.setData({
        lesson_list: this.data.my_list
      });
    }
  }
})