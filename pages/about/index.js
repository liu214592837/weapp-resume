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
    const { wxQrcode } = this.data.resume
    wx.previewImage({
      current: wxQrcode, // 当前显示图片的http链接
      urls: [wxQrcode] // 需要预览的图片http链接列表
    })
  },

  // 拨打电话
  phoneCall: function() {
    const { phone } = this.data.resume;
    wx.makePhoneCall({
      phoneNumber: phone,
      complete: (res) => {},
      fail: (res) => {},
      success: (res) => {},
    })
  },

  // 保存通讯录
  saveContact: function() {
    const {
      name,
      job,
      wechatNumber,
      companyName,
      phone
    } = this.data.resume

    wx.addPhoneContact({
      firstName: name,
      remark: job,
      mobilePhoneNumber: phone,
      weChatNumber: wechatNumber,
      organization: companyName,
      title: job
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