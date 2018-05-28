// components/lessonDetail/lessonDetail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    window_height: 0,
    isShow: false,
    lesson_detail:[],
    index:0
  },
  ready: function () {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          window_height: res.windowHeight
        })
      }
    });
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hide() {
      this.setData({
        isShow: false
      })
    },
    show() {
      this.setData({
        isShow: true
      })
    },
    close(){
      this.hide();
    },
    refreshData: function (data) {
      this.setData({
        lesson_detail: data.lesson_info,
        index:data.index
      });
    },
    _tack:function(event){
      var info = {
        index: event.currentTarget.dataset.index
      }
      this.triggerEvent("tack",info);   
    },
    _reject:function(event){
      var info = {
        index: event.currentTarget.dataset.index
      }
      this.triggerEvent("reject", info);   
    }
  }
})
