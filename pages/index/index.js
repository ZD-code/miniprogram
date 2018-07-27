const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    inputData: {
      input_value: "", //输入框的初始内容
      value_length: 0, //输入框手机号位数
      isNext: false, //是否有下一步的按钮
      get_focus: true, //输入框的聚焦状态
      focus_class: true, //输入框聚焦样式
      value_num: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], //输入框格子数
      height: "104rpx", //输入框高度
      width: "666rpx", //输入框宽度
      see: true, //是否明文展示
      interval: true, //是否显示间隔格子
    },
    inputVal: ''
  },
  /**
   * 接收子组件传递的值
   */
  getInputValue(e) {
    this.setData({
      inputVal: e.detail
    })
  },
  searchManager() {
    if (!this.data.inputVal || this.data.inputVal.length !== 11 || !(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.data.inputVal))) {
      wx.showToast({
        title: '手机号输入错误',
        icon: 'none',
        mask: true
      });

      return false;
    }

    wx.request({
      url: 'https://www.yuntianhui.com.cn/article/data/upvote',
      method: 'post',
      data: {
        id: this.data.inputVal
      },
      success: (res) => {
        this.setData({
          loading: false
        })
       if(res.data.rescode == 1){
          wx.navigateTo({
            url: '/pages/detail/detail'
          })
        }
      },
      fail: (err) => {
        wx.showToast({
          title: err,
          icon: none,
          mask: true
        })
      }
    })
  },
  onShow:function(){
    // if(!this.data.inputData.input_value){

    // }
    console.log(this.data.inputData.input_value)
  }
})