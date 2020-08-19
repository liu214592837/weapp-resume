// pages/articles/articles.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      mid: '2247487358',
      sn: '2ca972478e008dc504b1a78dc9b941e2',
      chksm: 'e884ca88dff3439ec126265c84d10f4be348800c48334ba4b8659ea69a863e5ac1bb523fa33f',
      imgUrl: 'https://mmbiz.qlogo.cn/mmbiz_jpg/GxbBAxrsEibqfWMIIO2pnglvLRlDbdvHNJrwe82OUVvPEiaaI1ic73ZUicf0eyw0ibWXfQ4fg8DPVKL7ibvFXboCmwkw/0?wx_fmt=jpeg'
    }, {
      id: 1,
      type: 'image',
      mid: '2247487386',
      sn: 'b773733cb6a270d03366997df01a9a13',
      chksm: 'e884ca6cdff3437a4b345c33f366298d12cdbccb4e5b7395b865f7dca451f0335f883b8093b7',
      imgUrl: 'https://mmbiz.qlogo.cn/mmbiz_jpg/GxbBAxrsEibpB3jibicqPL4ldy8xUQeQKEr7rOiaNTjZ5xgSJxa4xTK1xUEtg0j8d695rhvAQDk1aVVO8OomGqZia8g/0?wx_fmt=jpeg',
    }, {
      id: 2,
      type: 'image',
      mid: '2247487262',
      sn: '56f37d7ad80a2d01e216f6852fc72166',
      chksm: 'e884cae8dff343fe350d99fde9805736d0fcfd898a9e91399ae0d7336bd263a46fcc90f52bc4',
      imgUrl: 'https://mmbiz.qlogo.cn/mmbiz_jpg/GxbBAxrsEibrEr1icyeslvEMrDjVLUAWEzUrmbdUWUOogdnrjwvEYhR9UMiauCz8bCkLJDeFnc7OkpcF1qxiaSwryg/0?wx_fmt=jpeg'
    }, {
      id: 3,
      type: 'image',
      mid: '2247487208',
      sn: '8a8d916d19b0cb48128ffbcf06d0495f',
      chksm: 'e884cb1edff342081611838159d6dc3f3481c189be27ec1117499aff93fc9a992da70a27d693',
      imgUrl: 'https://mmbiz.qlogo.cn/mmbiz_jpg/GxbBAxrsEibpgl27SgtVON18TWns19NmrRRfDEPialxNwd8gsHfichPWRaxMmk7JibapRS6HoBUibRVSLlicDAQZeLibQ/0?wx_fmt=jpeg'
    }],
    
    articleList: [{
      id: 0,
      tag: 'Vue',
      title: '（附源码）vue-cli3+axios构建多页面应用H5移动端电商网站',
      author: 'Jack Chen',
      view: 168,
      star: 480,
      comment: 25,
      createTime: '2020-05-28 20:00:00',
      avatar: 'https://mmbiz.qpic.cn/mmbiz_jpg/GxbBAxrsEiboiaOY2EnpjVFTGp7ia5JOux8ljdAuopLgb4SXnguzLmbtiaXGhXI39S6TibD1p2TGnibG3QkRK0v2KWFw/0?wx_fmt=jpeg',
      mid: '2247487262',
      sn: '56f37d7ad80a2d01e216f6852fc72166',
      chksm: 'e884cae8dff343fe350d99fde9805736d0fcfd898a9e91399ae0d7336bd263a46fcc90f52bc4',
      imgUrl: 'https://mmbiz.qlogo.cn/mmbiz_jpg/GxbBAxrsEibrEr1icyeslvEMrDjVLUAWEzUrmbdUWUOogdnrjwvEYhR9UMiauCz8bCkLJDeFnc7OkpcF1qxiaSwryg/0?wx_fmt=jpeg'
    }, {
      id: 1,
      tag: 'Javascript',
      title: '（附源码）Vue+Echarts构建大数据可视化酷屏展示公司品牌实战项目分享',
      author: 'Jack Chen',
      view: 568,
      star: 99,
      comment: 35,
      createTime: '2020-05-26 20:00:00',
      avatar: 'https://mmbiz.qpic.cn/mmbiz_jpg/GxbBAxrsEiboiaOY2EnpjVFTGp7ia5JOux8ljdAuopLgb4SXnguzLmbtiaXGhXI39S6TibD1p2TGnibG3QkRK0v2KWFw/0?wx_fmt=jpeg',
      mid: '2247487386',
      sn: 'b773733cb6a270d03366997df01a9a13',
      chksm: 'e884ca6cdff3437a4b345c33f366298d12cdbccb4e5b7395b865f7dca451f0335f883b8093b7',
      imgUrl: 'https://mmbiz.qlogo.cn/mmbiz_jpg/GxbBAxrsEibpB3jibicqPL4ldy8xUQeQKEr7rOiaNTjZ5xgSJxa4xTK1xUEtg0j8d695rhvAQDk1aVVO8OomGqZia8g/0?wx_fmt=jpeg',
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000
    })
    // 初始化towerSwiper 传已有的数组名即可
    this.towerSwiper('swiperList');
  },

  bindViewTap: function(e) {
    console.log('e',e.currentTarget)
    wx.navigateTo({
      url: `/pages/article/article?mid=${e.currentTarget.dataset.mid}&sn=${e.currentTarget.dataset.sn}&chksm=${e.currentTarget.dataset.chksm}`,
    })
  },

  // cardSwiper
  cardSwiper: function(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper: function(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove: function(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd: function(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
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