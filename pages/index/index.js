//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    workList: [{
      companyName:'千米网',
      department:'新零售事业部',
      jobs:'前端工程师',
      times:'2019.8-至今',
      introduce:[
        '1.结合区块链金融的业务场景，完善核心业务平台的相关产品创新和维护；',
        '2.深入理解业务，技术驱动产品发展，推动业务，产品，开发进行项目攻关，能够对项目做技术规划；'
      ]
    }]
  },
  onLoad: function () {
    wx.request({
      url: '',
      // url: 'https://api.github.com/users/jackchen0120/repos',
      // url: 'https://api.douban.com/v2/movie/subject/30261964?apikey=0df993c66c0c636e29ecbb5344252a4a',
      header: {
        "content-type": "json"
      },
      success: function(res) {
        console.log(res.data)
      }
    })
  },
})
