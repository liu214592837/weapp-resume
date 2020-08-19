// pages/skill/skill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skillList:[{
      skillName:'HTML/HTML5',
      progress:'90%',
      color:'blue'
    },{
      skillName:'React',
      progress:'90%',
      color:'olive'
    },{
      skillName:'CSS/CSS3',
      progress:'87%',
      color:'orange'
    },{
      skillName:'JavaScript',
      progress:'86%',
      color:'green'
    },{
      skillName:'JQuery',
      progress:'84%',
      color:'yellow'
    },{
      skillName:'Vue',
      progress:'80%',
      color:'cyan'
    },{
      skillName:'Node',
      progress:'79%',
      color:'pink'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    setTimeout(function() {
      that.setData({
        loading: true
      })
    }, 500)
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