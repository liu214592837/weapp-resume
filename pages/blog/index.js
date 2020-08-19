// pages/blog/blog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starCount: 0,
    forksCount: 0,
    visitTotal: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.attached();
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  attached: function() {
    let that = this;
    wx.showLoading({
      title: '数据加载中',
      mask: true,
    })
    let i = 0;
    numDH();
    function numDH() {
      if (i < 20) {
        setTimeout(function () {
          that.setData({
            starCount: i,
            forksCount: i,
            visitTotal: i
          })
          i++
          numDH();
        }, 20)
      } else {
        that.setData({
          starCount: that.coutNum(3000),
          forksCount: that.coutNum(568),
          visitTotal: that.coutNum(24000)
        })
      }
    }
    wx.hideLoading()
  },
  coutNum: function(e) {
    if (e > 1000 && e < 10000) {
      e = (e / 1000).toFixed(1) + 'K'
    }
    if (e > 10000) {
      e = (e / 10000).toFixed(1) + 'W'
    }
    return e
  },
  
  CopyLink: function(e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.link,
      success: res => {
        wx.showToast({
          title: '链接已复制',
          duration: 1000,
        })
      }
    })
  },

  showQrcode: function() {
    wx.previewImage({
      current: 'https://mmbiz.qpic.cn/mmbiz/GxbBAxrsEibqxwQYz5XomXibQf46Ftj3Nia3dqUjk9tGGoDMYqicQp8nC9vCwSHqOfujSrtgDUvibN5iaHGxmib6e4pCg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1', // 当前显示图片的http链接
      urls: ['https://mmbiz.qpic.cn/mmbiz/GxbBAxrsEibqxwQYz5XomXibQf46Ftj3Nia3dqUjk9tGGoDMYqicQp8nC9vCwSHqOfujSrtgDUvibN5iaHGxmib6e4pCg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'] // 需要预览的图片http链接列表
    })
  }

})