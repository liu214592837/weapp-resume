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
 * englishLevel:英语等级 || 证书
 * workList:工作经历
 *      [{
 *          companyName:公司名
 *          department:部门
 *          job:职位
 *          times:在职时间
 *          introduce:[
 *              工作介绍
 *          ]
 *          projectList:[
 *              在本公司所开发的项目（没有可以不填）
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
    name: '王海萍',
    gender: '女',
    age: '23',
    job: 'JAVA开发工程师',
    workingYeras: '1年半工作经验',
    phoneNumber: '13592438831',
    wechatNumber: '13592438831',
    schoolYear: '2016.9-2020.7',
    schoolName: '郑州商学院',
    schoolMajor: '计算机科学与技术',
    englishLevel:'CET-4',
    selfEvaluation: [
        '1. 学习上：善于总结在开发中遇到的问题，记录处理与解决的的思路。善于利用闲暇时间补充在专业方面的知识点，扩充对当下技术的了解。',
        '2. 性格上：安静恬淡，工作时会全心投入；有责任心，对代码和自己有较高的要求。乐观向上，在碰到系统bug时，会优先自己解决，思考并记录。',
        '3. 工作上：按时完成领导分配的任务，绝不因为自己的原因，导致项目逾期。对待代码认真负责，在开发时，多思考，尽量避免一些不必要的bug产生。'
    ],
    workList: [{
        companyName: '南京睿恒智晟软件科技有限公司',
        department: '行业产品应用',
        job: 'JAVA开发工程师',
        times: '2020.4-至今',
        introduce: [
            '1. 负责所分配功能模块的详细设计、功能开发、单元测试、代码优化工作；',
            '2. 遵循开发管理流程，编写和完善开发文档； ',
            '3. 团队协作完成上级交付的任务；',
            '4. 编写系统开发报价书。'
        ],
        projectList:[{

        }]
    },{
        companyName: '河南涛华科技有限公司',
        department: '研发部',
        job: 'JAVA开发工程师',
        times: '2019.1-2020.1',
        introduce: [
            '1. 负责所分配功能模块的详细设计、功能开发、单元测试、代码优化工作；',
            '2. 遵循开发管理流程，编写和完善开发文档； ',
            '3. 团队协作完成上级交付的任务；',
            '4. 参与功能重构，保障系统的稳定运行。'
        ]
    }],
    skillList: [{
        skillName: 'JAVA基础',
        progress: '90%',
        color: 'blue'
    }, {
        skillName: 'Spring',
        progress: '90%',
        color: 'olive'
    }, {
        skillName: 'SpringMVC',
        progress: '87%',
        color: 'orange'
    }, {
        skillName: 'Spring Boot',
        progress: '86%',
        color: 'green'
    }, {
        skillName: 'Spring Cloud',
        progress: '84%',
        color: 'yellow'
    }, {
        skillName: 'Mysql',
        progress: '80%',
        color: 'cyan'
    }, {
        skillName: 'Oracle',
        progress: '79%',
        color: 'pink'
    }, {
        skillName: 'HTML/CSS/Js',
        progress: '79%',
        color: 'mauve'
    }, {
        skillName: 'JQuery',
        progress: '79%',
        color: 'purple'
    }, {
        skillName: 'Nginx',
        progress: '79%',
        color: 'grey'
    }, {
        skillName: 'SVN/Git',
        progress: '79%',
        color: 'red'
    }, {
        skillName: 'Vue',
        progress: '79%',
        color: 'cyan'
    }],

    headerImg: 'http://chuantu.xyz/t6/740/1597843357x1700340467.jpg',

    wxQrcode: 'http://chuantu.xyz/t6/740/1597843823x-542730253.jpg'
}
