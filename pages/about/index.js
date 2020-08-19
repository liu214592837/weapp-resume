// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 添加个人微信
  showQrcode: function() {
    wx.previewImage({
      current: 'http://m.qpic.cn/psc?/V13CtUlR1Y82A2/bqQfVz5yrrGYSXMvKr.cqbPf*1GeoYXhHPFSBdl9p2eKQm*bJ9ityyAIhzn5s*scdYya0C4bPMZx0KJqR2TYdonJlCeUMoBw7hguz8AVZyk!/b&bo=OAR2BQAAAAADB20!&rf=viewer_4', // 当前显示图片的http链接
      urls: ['http://m.qpic.cn/psc?/V13CtUlR1Y82A2/bqQfVz5yrrGYSXMvKr.cqbPf*1GeoYXhHPFSBdl9p2eKQm*bJ9ityyAIhzn5s*scdYya0C4bPMZx0KJqR2TYdonJlCeUMoBw7hguz8AVZyk!/b&bo=OAR2BQAAAAADB20!&rf=viewer_4'] // 需要预览的图片http链接列表
    })
  },

  // 拨打电话
  phoneCall: function() {
    wx.makePhoneCall({
      phoneNumber: '13526606371',
      complete: (res) => {},
      fail: (res) => {},
      success: (res) => {},
    })
  },

  // 保存通讯录
  saveContact: function() {
    wx.addPhoneContact({
      firstName: '刘斌',
      remark: '前端工程师',
      mobilePhoneNumber: '1352660371',
      weChatNumber: '13526606371',
      organization: '千米网',
      title: '前端工程师'
    })
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

  }
})