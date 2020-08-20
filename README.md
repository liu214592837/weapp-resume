# 一个纯前端的简历

## example

![小程序码](http://chuantu.xyz/t6/740/1597828868x-633054266.png)

## 创建自己的简历

1. https://mp.weixin.qq.com 申请自己的简历小程序

2. 找到自己的小程序appId

3. 用微信开发工具打开项目将 appinfo.js 中的 currentAppId 修改为自己的appId
   
4. 将 project.config.json 中的 appid 修改为自己的appId

5. 在开发工具中点击右上角详情，修改APPID改为自己的appId

6. 在 resumes 文件中新建自己的简历数据

7. 将简历数据引入到 resumes/index 文件中 如例子如 刘斌

8. 头像二维码等图片可通过 http://chuantu.biz/ 上传

9. 在微信开发工具中上传代码 并在 第一步 中发布小程序

10. 第一步 中 右上角工具 生成小程序码 路径填写 pages/about/index
