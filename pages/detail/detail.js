// pages/result/detail.js
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
    telNum:'18917813565',
    position:'区域总监、总裁',
    department: '业务发展部、投资银行部',
    managerName:'果果',
    qrUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532692682768&di=ad9143e40b1d50662145a0f0191e796e&imgtype=0&src=http%3A%2F%2Fpic.yesky.com%2FuploadImages%2F2015%2F172%2F53%2F5A56R5D26B4J.jpg',
    peopleImgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532692682768&di=ad9143e40b1d50662145a0f0191e796e&imgtype=0&src=http%3A%2F%2Fpic.yesky.com%2FuploadImages%2F2015%2F172%2F53%2F5A56R5D26B4J.jpg',
    logo:'../images/logo.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    callPhone(){
      wx.makePhoneCall({
        phoneNumber: this.data.telNum,
      })
    },
    previewQRImg(){
      wx.previewImage({
        current:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532693553306&di=183676ea59f977397b1b0d43f1bdaaa5&imgtype=0&src=http%3A%2F%2Fpic33.photophoto.cn%2F20141108%2F0022005470447167_b.jpg',
        urls: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532693553306&di=183676ea59f977397b1b0d43f1bdaaa5&imgtype=0&src=http%3A%2F%2Fpic33.photophoto.cn%2F20141108%2F0022005470447167_b.jpg'],
      })
    }
  }
})
