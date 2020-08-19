/**
 * name:姓名
 * gender:性别
 * age:年龄
 * job: 面试的职位 && 保存通讯录时的职位
 * workingYeras:工作经验 || 应届
 * phoneNumber:电话号码
 * wechatNumber: 微信号 || 微信所绑定的手机号
 * schoolYear:大学时间
 * schoolName:大学名字
 * schoolMajor:大学专业
 * selfEvaluation:自我介绍 []
 * workList:工作经历
 *      [{
 *          companyName:公司名
 *          department:部门
 *          job:职位
 *          times:在职时间
 *          introduce:[
 *              工作介绍
 *          ]
 *      }]
 * skillList：职业技能
 *      [{
 *          skillName:技能名称
 *          progress:技能掌握白分比 最高百分之百
 *          color:进度条颜色背景色
 *      }]
 * 
 * 
 * 
 * headerImg:头像地址
 * wxQrcode:微信二维码地址
 */

module.exports = {
    name: '刘斌',
    gender: '男',
    age: '22',
    job: '前端工程师',
    workingYeras: '2年工作经验',
    phoneNumber: '13526606371',
    wechatNumber: '13526606371',
    schoolYear: '2016.9-2019.7',
    schoolName: '郑州升达经贸管理学院',
    schoolMajor: '电子商务',
    selfEvaluation: [
        '1. 性格乐观、稳重，踏实，兴趣广泛，勤奋好学；',
        '2. 责任心强，适应能力强，意志坚毅不拔，执行力强，善于沟通；',
        '3. 勇于迎接新的挑战，具备很强的事业心和团队协作的精神，愿接受一切工作的考验，相信自己的加入会给企业或是公司创造更高的价值。'
    ],
    workList: [{
        companyName: '千米网',
        department: '新零售事业部',
        job: '前端工程师',
        times: '2019.8-至今',
        introduce: [
            '1. 开发1000.com',
            '2. 开发千米云采购小程序'
        ]
    }],
    skillList: [{
        skillName: 'HTML/HTML5',
        progress: '90%',
        color: 'blue'
    }, {
        skillName: 'React',
        progress: '90%',
        color: 'olive'
    }, {
        skillName: 'CSS/CSS3',
        progress: '87%',
        color: 'orange'
    }, {
        skillName: 'JavaScript',
        progress: '86%',
        color: 'green'
    }, {
        skillName: 'JQuery',
        progress: '84%',
        color: 'yellow'
    }, {
        skillName: 'Vue',
        progress: '80%',
        color: 'cyan'
    }, {
        skillName: 'Node',
        progress: '79%',
        color: 'pink'
    }],

    headerImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597838366369&di=d0de0a88ac3e8823755868dc5141da92&imgtype=0&src=http%3A%2F%2Fss.csdn.net%2Fp%3Fhttps%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_png%2FctwVEjeYQ2ic9QVvaUJoxwiaL1eFJ7iaKgcN5baEyQ5N8IpKL5kpCcExGy7Sn9kqYIawYdIAibtPUMuAm7zafXUwTQ%2F0%3Fwx_fmt%3Dpng',

    wxQrcode: 'http://m.qpic.cn/psc?/V13CtUlR1Y82A2/bqQfVz5yrrGYSXMvKr.cqbPf*1GeoYXhHPFSBdl9p2eKQm*bJ9ityyAIhzn5s*scdYya0C4bPMZx0KJqR2TYdonJlCeUMoBw7hguz8AVZyk!/b&bo=OAR2BQAAAAADB20!&rf=viewer_4'
}
